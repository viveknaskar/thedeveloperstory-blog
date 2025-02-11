---
title: "How To Unsubscribe From All YouTube Channels At Once"
description: "If you are like me, then you might be using a single Google account to sign in to your YouTube channel on all devices. The reason is simple. You don’t want to miss out on any videos from your favourite YouTuber. But the problem arises when you have too many notifications popping up on your [&hellip;]"
pubDate: 2022-02-18
heroImage: "/blog-images/wp-omar-al-ghosson-dkfO56ohdG8-unsplash-scaled.jpg"
categories: ["YouTube"]
tags: ["blogger","blogging","developer","developerblog","thedeveloperstory","YouTube"]
---

If you are like me, then you might be using a single Google account to sign in to your YouTube channel on all devices. The reason is simple. You don’t want to miss out on any videos from your favourite YouTuber.

But the problem arises when you have too many notifications popping up on your phone while you are working from multiple YouTube channels you have subscribed to. Another major issue that I have faced is that sometimes I am automatically subscribed to unwanted YouTube channels, which is quite annoying.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/unwanted-channels.png)

Unwanted channels subscription

Unfortunately, there is no option to unsubscribe from all the YouTube channels at once. They used to have them, but they have been removed because Google doesn’t want you to get rid of subscriptions. Simple maths: more subscriptions means more opportunities to show advertisements.

Obviously, if you don’t like a YouTube channel, you can simply unsubscribe. The concern comes when you want to unsubscribe from 1000 channels all at once. It would be absurd to do so.

However, there is an easy way where you can unsubscribe from all the channels at once using a script written in JavaScript.

*   First, you must log in to your YouTube account (_obviously_).

*   Click on the **“_Subscriptions”_** tab to see all the subscriptions list.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/click-on-subscription.png)

Click on the Subscriptions tab on the left pane

*   Click on the “**_MANAGE”_** button in the top-right corner to manage your subscription lists.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/click-on-the-manage-button-1024x243.png)

Click on the _MANAGE_ button in the top-right corner

*   You will reach the channel page where you will run the script. You can directly reach this page by clicking on this [link](https://www.youtube.com/feed/channels) from your browser.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/subscriptions-list-1024x479.png)

Subscriptions list where the script will be executed

*   You need to inspect the webpage by right-clicking on the empty area of the page and selecting the **_“Inspect”_** option.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/inspect-the-page-1024x387.png)

Click on the Inspect option after right-clicking on the page

*   Go to the Console tab and scroll down to the bottom until you get the **_“>”_** symbol. It is here that you will execute the script.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/console-tab-1024x467.png)

You will see the console on the browser

*   Copy the below automation script that will automate mass unsubscription of the YouTube channels. You can copy the script from this [link](https://gist.githubusercontent.com/viveknaskar/b5f71e19dbdf430454f811e609ee8eeb/raw/5da2a37068cf4e95e654421a066131f32b4623ab/unsubscribe-youtube-channels.js "link") as well.

```
var i = 0;
var count = document.querySelectorAll(
  "ytd-channel-renderer:not(.ytd-item-section-renderer)"
);
myTimer();
function myTimer() {
  if (count == 0) return;
  el = document.querySelector(".ytd-subscribe-button-renderer");
  el.click();
  setTimeout(function () {
    var unSubBtn = document.getElementById("confirm-button").click();
    i++;
    count--;
    console.log("channel " + i + " unsubscribed");
    setTimeout(function () {
      el = document.querySelector("ytd-channel-renderer");
      el.parentNode.removeChild(el);
      myTimer();
    }, 250);
  }, 250);
}
```

*   Paste the automation script on the console and press enter.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/paste-automation-script-1024x463.png)

Paste the script and press enter

*   The script will execute and one by one all the channels will be unsubscribed. I have enhanced the code, and you will see better logs on the right.

![](https://thedeveloperstory.com/wp-content/uploads/2022/02/unsubscription-starts-1024x457.png)

The channels will be unsubscribed one after the other

If the script fails, just refresh the page and repeat the process. The unsubscription process will be completed eventually. I was subscribed to more than 1000 channels and hence, it took me a while. 

I hope you might find the article useful and that you are able to unsubscribe from all the unwanted channels successfully.

* * *

_If you enjoyed reading this, you might also find the below articles worth your time._

> [8 YouTube Channels That You Should Follow As A Python Developer](https://thedeveloperstory.com/2022/01/10/8-youtube-channels-that-you-should-follow-as-a-python-developer/)

> [The Vulnerability That Has Rocked The World’s Tech And Cybersecurity Firms](https://thedeveloperstory.com/2021/12/18/the-vulnerability-that-has-rocked-the-worlds-tech-and-cybersecurity-firms/)

* * *

_If this article provided you with value, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _— only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_