---
title: "Global IT Chaos: The Tiny Bug That Triggered History&#8217;s Largest Computer System Outage"
description: "Imagine this, you start your day to work on your tasks, or you reach the airport early to catch the afternoon flight, or you go to the bank to withdraw money, but all the systems are down. Yes, this happened on July 19, 2024. And it is due to a global IT failure, caused by [&hellip;]"
pubDate: 2024-07-21
heroImage: "/blog-images/wp-image-11.jpg"
categories: ["General"]
tags: ["CrowdStrike","microsoft","thedeveloperstory"]
---

Imagine this, you start your day to work on your tasks, or you reach the airport early to catch the afternoon flight, or you go to the bank to withdraw money, but all the systems are down.

Yes, this happened on July 19, 2024. And it is due to a global IT failure, caused by a faulty software update, triggering “the largest IT outage in history.”

### What really happened?

Hundreds of thousands of computer systems using Microsoft as the operating system were impacted globally, causing the infamous “[Blue Screen of Death (BSOD)](https://en.wikipedia.org/wiki/Blue_screen_of_death)” error.

For those who don’t know, the Blue Screen of Death (BSOD) is an error screen displayed on a Windows computer system after a fatal system error. It indicates a system crash where the operating system has reached a condition where it can no longer operate safely.

So here, this issue was caused by [CrowdStrike](https://www.crowdstrike.com/en-us/), a cybersecurity provider, following the release of a faulty update that resulted in the impact of millions of personal computers and servers, making them offline.

![](https://thedeveloperstory.com/wp-content/uploads/2024/09/pikaso_texttoimage_Create-a-memestyle-image-that-depicts-a-large-comp-585x1024.jpeg)

CrowdStrike impacted thousands of computer systems around the world

Ironically, the cybersecurity firm, which is supposed to protect computer systems against cyberattacks and ransomware attacks, has “accidentally” performed the largest ransomware attack in history.

As of this writing, several systems are still offline, with banks, airlines, supermarkets, and TV broadcasters all having a hard time without their machines. After all, everything is computerized and digitalized.

The Microsoft systems that are not protected by CrowdStrike but have their alternatives face no such problems. There were no disruptions for Linux or Mac users using CrowdStrike.

### **Why did this happen in the first place?**

One of the first and most common questions on various social media is: _Isn’t Microsoft equally responsible for giving a third-party vendor like CrowdStrike access to their systems?_

The short answer is no, unfortunately.

#### **Advantages of using a Security Software**

Security software like CrowdStrike works by employing advanced techniques to detect, prevent, and respond to threats.

It monitors endpoint activities and behaviours, uses machine learning and behavioural analysis to detect anomalies, leverages a vast database of threat intelligence, and correlates data from various sources to identify known and emerging threats.

There are several other benefits to using security software like CrowdStrike.

#### **Microsoft has to Give Kernel Access**

In order to secure the system from all threats, Microsoft has to give the kernel (root operating system) access to security software like CrowdStrike.

It needs deep integration with the operating system to monitor and control low-level operations. It also allows intercepting system calls, monitoring kernel-level events, and protecting against rootkits and other sophisticated threats.

Most of the advanced threats operate at the kernel level to evade detection. Hence, without kernel access, security software cannot fully protect against these threats, leaving systems vulnerable.

### **How it impacted the world?**

It is hard to explain and make everyone fully grasp the gravity of the situation. Hundreds of millions of computers are bricked worldwide, mostly corporate ones.

The global technical failure impacted systems in the US, Britain, Germany, Japan, Israel, and India, among other countries.

> BREAKING: CHAOS at the Milwaukee Airport:  
>   
> After reports of mass IT outages flights are delayed and lines are out the door at the Airport for every airline.  
>   
> Aircraft’s are being grounded throughout the country.  
>   
> Reporter [@TaylerUSA](https://twitter.com/TaylerUSA?ref_src=twsrc%5Etfw) [pic.twitter.com/i4ohJTjpjW](https://t.co/i4ohJTjpjW)
> 
> — TENET Media (@watchTENETnow) [July 19, 2024](https://twitter.com/watchTENETnow/status/1814239212821983705?ref_src=twsrc%5Etfw)

System failures have caused delays or cancellations of flights. There have been people queuing up in airports and waiting for their flights, but to no avail.

In fact, there are photos circulating from the offices where people have been enjoying their time off because of this faulty update by one of the big players in the cybersecurity world.

The CEO of the cybersecurity firm has expressed a profoundly disappointing response in an X post.

> CrowdStrike is actively working with customers impacted by a defect found in a single content update for Windows hosts. Mac and Linux hosts are not impacted. This is not a security incident or cyberattack. The issue has been identified, isolated and a fix has been deployed. We…
> 
> — George Kurtz (@George_Kurtz) [July 19, 2024](https://twitter.com/George_Kurtz/status/1814235001745027317?ref_src=twsrc%5Etfw)

The above post didn’t go well with the people, as they synonymously pointed out that the company caused millions in damages, but the CEO didn’t even apologize.

![](https://thedeveloperstory.com/wp-content/uploads/2024/09/e684a396-e098-4adb-84dc-461d818a2d24_993x858.jpg)

CrowdStrike Holdings Inc lost one-fifth of the total share value pre-market

This was expected as the stock market reacted to everything that happened to the companies listed on the stock exchange.

### **What’s the Fix?**

Well, the fix is not simple. IT admins around the world are working hard to resolve this.

Every affected computer needs to be rebooted in Safe Mode and a system file manually removed. Most of the corporate computers given to employees don’t let users do this themselves. This is prohibited for security reasons.

However, desperate times call for desperate measures.

Some companies are allowing their employees to work on the initial [workaround shared by CrowdStrike](https://www.crowdstrike.com/blog/statement-on-falcon-content-update-for-windows-hosts/):

1.  — Boot Windows into Safe Mode or the Windows Recovery Environment
2.  — Navigate to the C:WindowsSystem32driversCrowdStrike directory
3.  — Locate the file matching “C-00000291*.sys”, and delete it
4.  — Boot the host

Unfortunately, this workaround requires, in most cases, physical access to the impacted machine, which the IT admins cannot have for employees working remotely or from other geographical locations.

This would not be possible if there was disk encryption like BitLocker or even a lack of admin rights for the employees to be able to delete the faulty driver.

The only other possible fix at this point is to restart the system again and again, and it worked for some people.

> Today was not a security or cyber incident. Our customers remain fully protected.  
>   
> We understand the gravity of the situation and are deeply sorry for the inconvenience and disruption. We are working with all impacted customers to ensure that systems are back up and they can…
> 
> — George Kurtz (@George_Kurtz) [July 19, 2024](https://twitter.com/George_Kurtz/status/1814316045185822981?ref_src=twsrc%5Etfw)

The CEO of the firm apologized in a later post, explaining that he is aware of the gravity of the situation and also clarifying that this was not a security or cyber incident.

Anyway, this issue will take time to resolve, unlike other software updates that we see.

There would be questions that needed answers on how security software from a cybersecurity firm like this got promoted to production despite knowing that it could impact billions of people and millions of systems around the world.

* * *

## Podcast on “The CrowdStrike Issue”

Podcast on “The CrowdStrike Issue Explained” published based on this article.

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa8d479a1-f646-440c-acc2-8043be511e06_681x586.png)

* * *

_If this article provided you with value, please support me by buying me a coffee — only if you can afford it._ You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!