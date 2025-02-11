---
title: "What are Tokens &amp; Context-Length in Large Language Models (LLMs)?"
description: "With the fast advancement of artificial intelligence (AI), Large Language Models (LLMs) have become increasingly sophisticated. As new models are released, two key concepts consistently emerge in discussions: context-length and tokens. Tokens Let&#8217;s consider the latest open-source LLM model by Meta AI, Llama 3.1 405B, having 128K tokens as the context-length. We will talk about [&hellip;]"
pubDate: 2024-08-04
heroImage: "/blog-images/wp-drew-dizzy-graham-s4dfrh7hdDU-unsplash.jpg"
categories: ["Artificial Intelligence"]
tags: ["AI","Artificial Intelligence","GenAI","Generative AI","thedeveloperstory"]
---

With the fast advancement of artificial intelligence (AI), Large Language Models (LLMs) have become increasingly sophisticated. As new models are released, two key concepts consistently emerge in discussions: _context-length_ and _tokens_.

### Tokens

Let’s consider the latest open-source LLM model by Meta AI, **Llama 3.1 405B, having 128K tokens as the context-length**. We will talk about tokens. **Tokens are the basic units that an AI model processes.** A token can be a word, part of a word, or even a single character or punctuation mark. _It is important to remember that every LLM model uses/consumes token differently. Let me explain!_

For example, the word “common” is 1 token in most LLMs. Means, if you write common in the prompt, it will use 1 token for ChatGPT, Claude, or Llama 3. However, “uncommon” can be 1 token in Claude or divided into “un” and “common” consuming 2 tokens in ChatGPT 3.5.

Tokens determine the input/output limits, affect processing speed and cost, and, most importantly, influence the model’s understanding. So, an English word is about 1.3 tokens (average). GPT-3.5 has 4K tokens, and it would be about 3000 words.

Hence, 128K tokens of Llama 3.1 are about 80K to 100K English words, and that is massive.

### Context-length

**Context length refers to the amount of text an AI model can consider at one time when processing or generating language.** It is essentially the memory of an LLM model during a conversation or while analysing text or code.

So, we can say that Llama 3.1 has a context-length of 128K tokens. This can result in longer conversations with the AI model. You might have experienced, that ChatGPT 3.5 might not remember after having a conversation, and you had to explain it or ask it again. It is simply because it might have exceeded its 4K tokens or 3000 words.

That’s why, context-length is called the memory, and the more the tokens, the better it remembers.

That’s it for this post. If you didn’t know about this, I hope you learned something.

* * *

_If this article provided you with value, please support me by buying me a coffee — only if you can afford it._ You can also connect with me on X. Thank you!