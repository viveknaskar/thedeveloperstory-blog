---
title: "Google&#8217;s Gemini Is Already Giving Tough Competition To OpenAI&#8217;s ChatGPT"
description: "Whenever there’s a discussion of AI, OpenAI and its products, ChatGPT, and DALL·E 3 — take all the limelight. Occasionally, Sam Altman would post randomly to pique curiosity among technologists and hobbyists around the world. Occasionally, GPT-5, the successor of GPT-4 that powers the latest ChatGPT, trends. Even Apple has been in the news lately [&hellip;]"
pubDate: 2024-02-19
heroImage: "/blog-images/wp-caleb-williams-vsQyYgz0t70-unsplash-1-jpg.webp"
categories: ["Artificial Intelligence","Stories"]
tags: ["Artificial Intelligence","Gemini","google","OpenAI","technology","thedeveloperstory"]
---

Whenever there’s a discussion of AI, OpenAI and its products, ChatGPT, and DALL·E 3 — take all the limelight.

Occasionally, Sam Altman would post randomly to pique curiosity among technologists and hobbyists around the world. Occasionally, GPT-5, the successor of GPT-4 that powers the latest ChatGPT, trends.

Even Apple has been in the news lately for the release of Apple Vision Pro, the virtual headset that has literally taken the world by storm and has been trending on all social media for several days.

## Bard is now Gemini

Google sent out a mail recently to everyone announcing that it just changed Bard to Gemini, [the LLM model that they announced in December 2023](https://thedeveloperstory.com/2023/12/16/google-finally-releases-gemini-with-bard-it-is-better-than-chatgpt/).

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/bard-gemini.png)

Mail sent by Google to the Bard users

Google said Gemini is the best way to get direct access to its proprietary models. [_It is available for free to the public_](https://gemini.google.com/app).

The tech giant also [launched an advanced version of Gemini](https://gemini.google.com/advanced) that is based on their most advanced model, Ultra 1.0. The advanced plan, which is rolled out in addition to the Google One plan, priced at $19.99 per month, offers a complimentary two-month trial.

Along with access to Gemini Advanced, this will also come with 2 TB of storage and access to Gemini across Gmail, Docs, Slides, Sheets, and other platforms previously recognized as Duet AI.

I have been testing Gemini for some days now, and I can say that it is definitely equal, or, dare I say, even better than ChatGPT 4.

Here’s a head-to-head comparison of Gemini versus ChatGPT 4. _The only rule is that I will be using the same prompts to make a fair comparison._

* * *

## Asking Some Information

Prompt: _“tell me more about aperture of a camera?”_

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/chatgpt4-aperture.gif)

ChatGPT describing Aperture of a camera

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/gemini-aperture.gif)

Gemini describing Aperture of a camera

Well, both chatbots have generated quite accurate descriptions.

ChatGPT tends to craft a story around this information, using titles and descriptions to build a richer context. It felt like reading a well-organized essay, so to speak.

Gemini focuses on delivering the information in a straightforward manner, prioritizing clarity and accuracy. If you want information on any of the topics, Gemini is best for that.

## Asking Today’s Date

Prompt: _“What is today’s date?”_

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/chatgpt4-date-1024x353.png)

ChatGPT 4 on asking today’s date

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/gemini-date-1024x307.png)

Gemini on asking today’s date

Unfair testing, as both the chatbots can easily tell this, but no.

Gemini, for some reason, is apologizing for a mistake it didn’t commit while telling the correct date. ChatGPT 4 has no issues. _As the image displayed, I tested this on February 10th._

## Asking to Generate an Image Based on a Prompt

Prompt: _“Create an image using the prompt:_ _Three men in spacesuits tending to the flowers in a geodesic dome of atmosphere on the moon.”_

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/DALL·E-2024-02-10-23.40.26-Three-men-in-spacesuits-tending-to-the-flowers-in-a-geodesic-dome-on-the-moon.-The-dome-is-made-of-transparent-material-allowing-the-stark-grey-luna.webp)

ChatGPT 4 on asking to generate an image based on a prompt

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/Bard_Generated_Image-5-1024x1024.webp)

Gemini on asking to generate an image based on a prompt

For image generation, ChatGPT 4 uses the [_DALL·E 3 model,_](https://openai.com/dall-e-3) and Gemini uses the [_Imagen model_](https://imagen.research.google/)_._ Both images are incredibly detailed.

DALL·E 3 is often praised for its photorealistic and detailed outputs, excelling at capturing light and shadow convincingly. It is known for its ability to follow prompts faithfully and to follow specific details.

Imagen, on the other hand, is known for its imaginative outputs and is capable of generating more artistic and stylized images. However, it tends to deviate from the prompt based on my experiences after trying several prompts.

Personally, I would choose DALL·E 3’s image in this case, as it looks more clean as it adheres to the prompt.

## Asking to Find & Fix an Issue from a Code Snippet

Prompt: _“What is the error in the below code, and what is the solution?_ ”

The _“error-ed”_ Java code:

```
public class ReverseString {
    public static void main(String[] args) {
        String str = "AI IS EVERYWHERE";
        char[] charArray = str.toCharArray()  // Removed semi-colon here
        for (int i = charArray.length-1; i>=0; i--)
            System.out.print(charArray[i]);
    }
}
```

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/chatgpt4-java-bugs.gif)

ChatGPT 4 on asking to fix a bug from a code

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/gemini-java-bug.gif)

Gemini on asking to fix a bug from a code

Both the chatbots easily found and fixed the error from this Java code snippet, and they even explained what the error was and how it was fixed. This was expected, as any chatbot can find out the bug and give a solution.

I even tried with Python and JS code snippets; it worked every time. Nothing to say much, to be honest.

With that said, I have tried both the chatbots with nuanced programming errors such as Jenkins errors or Kubernetes issues, and I have tried giving all the possible contexts; it’s a hit or miss for me.

At the point of this writing, both of the chatbots printed something in gibberish on multiple occasions.

## Asking About a Recent Event

Prompt: _“who won the best song of the year in the Grammy 2024?”_

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/chatgpt4-grammy-1024x338.png)

ChatGPT 4 on asking about a recent event

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/gemini-grammy-1024x337.png)

Gemini on asking about a recent event

ChatGPT 4 and Gemini both have access to the Internet.

However, ChatGPT 4 fails here, probably because [it uses Bing as the search engine](https://searchengineland.com/bing-to-be-default-search-engine-on-open-ais-chatgpt-427465). Some LLM models can access multiple search engines, depending on their architecture and settings. But apparently, ChatGPT 4 only uses Bing. _I don’t really know, though._

Gemini, on the other hand, outputs the correct result.

## Asking to Create a Detailed Study Plan

Prompt: _“I want to pass the Google Cloud’s Professional Cloud Architect certification exam, prepare me a month long detailed roadmap covering all the topics that I want to know and prepare. Also share me the tips for the preparation for the exam.”_

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/chatgpt-gcp-pca.gif)

ChatGPT 4 on asking to create a detailed study plan

![](https://thedeveloperstory.com/wp-content/uploads/2024/02/gemini-gcp-pca.gif)

Gemini on asking to create a detailed study plan

Both ChatGPT 4 and Gemini shared all the topics in such a comprehensive manner that they are in the syllabus of the exam.

Gemini made a plan week by week, whereas ChatGPT 4 made plans for each day. Gemini also shared resources for the exam, whereas ChatGPT 4 didn’t. Both of the chatbots shared tips for the exam.

Personally, I would choose ChatGPT 4 for the day-to-day plan and Gemini for the resources it shares.

* * *

## **My Thoughts**

Google has arrived with all its guns blazing with Gemini. As you have noticed, I did a comparison between Gemini, which is the free version, and ChatGPT 4, which is $20 per month.

I feel OpenAI’s ChatGPT has at least 18 months of head start, but Google is catching up. With the launch of Gemini, it solidified its position to let others know that it will not back down in this AI race.

I have not even compared it with the Gemini Ultra model, but we got a glimpse back in November 2023 that [it defeated ChatGPT 4 in its capabilities](https://thedeveloperstory.com/2023/12/16/google-finally-releases-gemini-with-bard-it-is-better-than-chatgpt/).

Well, not sure, who will win the AI race, but one thing is guarantee, the end users like you and me are the beneficiaries.

_After all, the more competition, the better it is for consumers._

* * *

_If this article provided you with value, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _— only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_