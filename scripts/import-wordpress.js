import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import TurndownService from 'turndown';

// Initialize HTML to Markdown converter
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// WordPress API configuration
const WP_API_URL = 'https://thedeveloperstory.com/wp-json/wp/v2';
const POSTS_PER_PAGE = 100;

// Custom rules for code blocks and syntax highlighting
turndownService.addRule('pre', {
  filter: 'pre',
  replacement: function(content, node) {
    const language = node.querySelector('code')?.className?.replace('language-', '') || '';
    return `\n\`\`\`${language}\n${content}\n\`\`\`\n\n`;
  }
});

async function fetchPosts(page = 1) {
  try {
    const response = await fetch(
      `${WP_API_URL}/posts?page=${page}&per_page=${POSTS_PER_PAGE}&_embed`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; BlogImporter/1.0;)'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch page ${page}:`, error);
    return [];
  }
}

async function downloadImage(url, fileName) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BlogImporter/1.0;)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${url}`);
    }
    
    const buffer = await response.buffer();
    const filePath = path.join(process.cwd(), 'public', 'blog-images', fileName);
    
    // Ensure the directory exists
    fs.mkdirSync(path.join(process.cwd(), 'public', 'blog-images'), { recursive: true });
    fs.writeFileSync(filePath, buffer);
    return true;
  } catch (error) {
    console.error(`Failed to download image ${url}:`, error);
    return false;
  }
}

function sanitizeContent(content) {
  return content
    .replace(/\\n/g, '\n')
    .replace(/\\/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

async function importPosts() {
  try {
    let page = 1;
    let totalPosts = 0;
    let posts;
    
    do {
      console.log(`Fetching page ${page}...`);
      posts = await fetchPosts(page);
      
      if (!Array.isArray(posts) || posts.length === 0) {
        break;
      }
      
      for (const post of posts) {
        try {
          // Convert HTML content to Markdown
          const content = turndownService.turndown(post.content.rendered);
          const sanitizedContent = sanitizeContent(content);
          
          // Get featured image if available
          let heroImage = '/blog-placeholder-1.jpg';
          if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
            const imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
            const fileName = `wp-${path.basename(imageUrl)}`;
            const downloaded = await downloadImage(imageUrl, fileName);
            if (downloaded) {
              heroImage = `/blog-images/${fileName}`;
            }
          }

          // Get categories and tags
          const categories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [];
          const tags = post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [];

          // Create frontmatter
          const frontmatter = `---
title: ${JSON.stringify(post.title.rendered)}
description: ${JSON.stringify(post.excerpt.rendered.replace(/<[^>]*>/g, '').trim())}
pubDate: ${new Date(post.date).toISOString().split('T')[0]}
heroImage: "${heroImage}"
categories: ${JSON.stringify(categories)}
tags: ${JSON.stringify(tags)}
---

`;

          // Create the markdown file
          const fileName = `${post.slug}.md`;
          const filePath = path.join(process.cwd(), 'src', 'content', 'blog', fileName);
          
          fs.writeFileSync(filePath, frontmatter + sanitizedContent);
          console.log(`✓ Imported: ${fileName}`);
          totalPosts++;
        } catch (error) {
          console.error(`Failed to import post ${post.slug}:`, error);
        }
      }
      
      page++;
    } while (posts.length === POSTS_PER_PAGE);

    console.log(`\nImport completed successfully! Total posts imported: ${totalPosts}`);
  } catch (error) {
    console.error('Import failed:', error);
  }
}

// Create blog directory if it doesn't exist
fs.mkdirSync(path.join(process.cwd(), 'src', 'content', 'blog'), { recursive: true });

console.log('Starting import from thedeveloperstory.com...');
importPosts();