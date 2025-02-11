---
title: "How One Developer Accidentally Stopped the World’s Most Dangerous Hack"
description: "In 2021, the vulnerability in the Java logging library Apache Log4j 2 called&nbsp;“Log4Shell”&nbsp;was touted as the most critical vulnerability of the last decade. It made developers all around the world work on millions of apps to fix that critical vulnerability with a non-vulnerable version. Imagine there’s a vulnerability of that scale, but it’s 1000x that [&hellip;]"
pubDate: 2024-04-11
heroImage: "/blog-images/wp-max-bender-XIVDN9cxOVc-unsplash-jpg.webp"
categories: ["Stories"]
tags: ["Andres Freund","github","hacking","Linux","microsoft","thedeveloperstory","XZ Backdoor","XZ Outbreak","XZ Utils"]
---

In 2021, the vulnerability in the Java logging library Apache Log4j 2 called [“](https://blog.devgenius.io/the-vulnerability-that-has-rocked-the-worlds-tech-and-cybersecurity-firms-a257472cf3e)_[Log4Shell”](https://thedeveloperstory.com/2021/12/18/the-vulnerability-that-has-rocked-the-worlds-tech-and-cybersecurity-firms/ "Log4Shell” ")_ [was touted as the most critical vulnerability of the last decade](https://thedeveloperstory.com/2021/12/18/the-vulnerability-that-has-rocked-the-worlds-tech-and-cybersecurity-firms/ "Log4Shell” "). It made developers all around the world work on millions of apps to fix that critical vulnerability with a non-vulnerable version.

Imagine there’s a vulnerability of that scale, but it’s 1000x that would affect almost all the systems around the world. Y_es, you heard that right._

The bad actor or actors (not sure if it’s one person but a full-fledged team) inserted “malicious code” in the open-source library called XZ Utils, which is a command-line tool for data compression that is widely used in major Linux distributions.

_Well, this malicious code is actually a backdoor for remote code execution. This would have enabled hackers to take over all Linux systems around the world!_

### **How was this vulnerability discovered?**

This compromise was found out by Microsoft engineer and PostgreSQL developer, _[Andres Freund](https://www.linkedin.com/in/andres-freund/)_, [on March 29, 2024](https://www.openwall.com/lists/oss-security/2024/03/29/4), and he found out that the [SSH](https://www.cloudflare.com/learning/access-management/what-is-ssh/) remote security code in the [Debian Linux](https://www.debian.org/) beta was running slowly.

“_I was doing some micro-benchmarking at the time, needed to quiesce the system to reduce noise_,” Freund said in a [post](https://mastodon.social/@AndresFreundTec/112180406142695845) shared on Mastodon. “_Saw sshd processes were using a surprising amount of CPU, despite immediately failing because of wrong usernames etc._”

![](https://thedeveloperstory.com/wp-content/uploads/2024/04/screely-1712516415190-1024x715.png)

[Andres Freund posted on Mastodan](https://mastodon.social/@AndresFreundTec/112180406142695845)

On further investigation, Freund found that a maintainer of XZ Utils, Jia Tan, had put a backdoor in the code.

The affected versions of XZ Utils are now tracked as [CVE-2024–3094](https://nvd.nist.gov/vuln/detail/CVE-2024-3094) and have a CVSS score of 10.0, indicating maximum severity. It impacts XZ Utils versions 5.6.0 and 5.6.1.

As of now, the affected XZ Utils versions have exclusively appeared in unstable and beta editions of Fedora, Debian, Kali, openSUSE, and Arch Linux distros.

Luckily, this malicious code did not appear in any production Linux distros.

### **How did this even happen?**

The short answer is social engineering. The story is long, but let’s keep it brief.

The original maintainer of XZ Utils, Lasse Collin, was incredibly busy and was working on other projects. Since XZ Utils is an open-source project, anyone can come and contribute to the project. But the project was not maintained as it should have been.

Here comes Jia Tan (unsure if this is the original name), who offered to help as a co-maintainer. He/she was also recommended by several accomplices, who kept saying that Tan had contributed well to their projects and whatnot.

Eventually, Tan was added as the co-manager of the project. This was in 2021. Since then, Tan has pushed numerous code changes into the project.

When this XZ backdoor vulnerability, or “_XZ Outbreak,_” was made public, GitHub suspended the GitHub project and the GitHub accounts of both Collin and Tan.

Collin, the original maintainer, was on holiday at the time when this incident was discovered and reported. As soon as he learned about it, [he published it on his blog](https://tukaani.org/xz-backdoor/), and it is getting updated as Collin learns more.

[Thomas Roccia](https://twitter.com/fr0gger_), a Senior Threat Researcher at Microsoft, [posted a comprehensive infographic](https://twitter.com/fr0gger_/status/1774342248437813525) detailing the events of XZ Outbreak.

![](https://thedeveloperstory.com/wp-content/uploads/2024/04/GJ-6mD9aIAARaiY-732x1024.webp)

[XZ Outbreak Infographic posted by Thomas Roccia on X](https://twitter.com/fr0gger_/status/1774342248437813525)

### **How this can be prevented?**

A severe security disaster could have been caused had Freund not discovered this significant supply chain attack by accident.

The development has prompted the U.S. Cybersecurity and Infrastructure Security Agency to issue an [alert](https://www.cisa.gov/news-events/alerts/2024/03/29/reported-supply-chain-compromise-affecting-xz-utils-data-compression-library-cve-2024-3094) urging users to downgrade XZ Utils to an uncompromised version, such as XZ Utils 5.4.6 Stable.

_The question is, how can we prevent it from happening in the future?_

Well, this incident was prevented because the XZ Utils library was open-source. If any code is open-source, it can be monitored and tested by other developers as well. Hence, we will be on the same playing field as the bad actors.

The only thing I feel bad about is Lasse Collin, the original maintainer of the project, who has been selflessly and tirelessly working on the project. Collin was socially engineered to give the maintainer access to this unknown person, Jia Tan.

Maintaining an open-source project is a thankless job, no compensation is there. Nobody wants to do it. If they do, they do it as a hobby. Hobbies won’t pay the bill so they take up another stable job, thereby, there should be a sustainable compensation model for this.

The developer community should come together and do something about the open-source project owners and maintainers.

* * *

_If this article provided you with value, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _— only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_