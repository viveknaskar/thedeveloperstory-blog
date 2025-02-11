---
title: "Kubernetes Is Deprecating Docker Support &#038; Here’s Why You Should Not Panic"
description: "On 2nd December 2020, Kubernetes published an article stating that Kubernetes is&nbsp;deprecating Docker&nbsp;as a container runtime…&nbsp;And this was not a big deal I thought as I usually read articles from the Kubernetes Blog, thought this is just a release update blog. But then I saw&nbsp;Ian Coldwater, the Kubernetes SIG Security co-chair&nbsp;tweeted something which panicked the [&hellip;]"
pubDate: 2020-12-09
heroImage: "/blog-images/wp-thais-morais-9c6j-akotjq-unsplash-scaled.jpg"
categories: ["Docker","Kubernetes"]
tags: ["blogging","developerblog","Devops","technology","technology-news","thedeveloperstory"]
---

On 2nd December 2020, Kubernetes published an article stating that Kubernetes is [deprecating Docker](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md#deprecation) as a container runtime… And this was not a big deal I thought as I usually read articles from the [Kubernetes](https://kubernetes.io/blog/) [Blog](https://kubernetes.io/blog/), thought this is just a release update blog. But then I saw **Ian Coldwater, the Kubernetes SIG Security co-chair** tweeted something which panicked the DevOps realm, quite literally. I, then realized, that the blog post was written as a clarification of this tweet.

_Ian Coldwater tweeted,_

> Docker support is being deprecated in Kubernetes. You need to pay attention to this and plan for it. THIS WILL BREAK YOUR CLUSTERS.

This caused a stir among the DevOps community to a humongous effect to an extent that she had to delete the previous tweet and tweet this.

> I'm sorry I caused panic this morning. I wanted to call attention to the deprecation of Docker support in advance so people could make a plan for it, because for some it will be a major breaking change that will take time to fix.  
>   
> It, uh, worked? But it also stressed people out.
> 
> — Ian Coldwater 📦💥 (@IanColdwater) [December 3, 2020](https://twitter.com/IanColdwater/status/1334316269739397124?ref_src=twsrc%5Etfw)

Ian Coldwater tweeted an apology but her intentions were just to inform the community  

## So, what is it exactly? Is Docker dead or not?

_No. Docker is not dead._ You can still keep on working with Docker. It is not that big deal, it became. Though for a second, it confused me as well.

Actually, the Kubernetes maintainers explained that they are deprecating Docker as a container runtime after v1.20. _What does this mean?_ Well, Docker has become synonymous with container runtime. If anyone talks about container images, container registry, or even container runtime, they simply think about Docker. Kubernetes wants to change that norm.

Docker was actually introduced before Kubernetes to popularize the Linux container pattern as a whole. **This means Docker is not the only container runtime around, there are others like** [**rkt**](https://coreos.com/rkt/)**,** [**containerd**](https://containerd.io/)**, and** [**lxd**](https://linuxcontainers.org/lxd/)**.** If you don’t know, a container runtime is a software that executes containers and manages container images on a node. Docker is very popular and the most common container runtime used in production Kubernetes environments.

To summarize this, I came across an incredible tweet by **Kelsey Hightower**, Staff Developer Advocate, Google Cloud Platform at Google.

> Docker != Containers  
>   
> There are container images. Docker can build them. There are container registries. Docker can push and pull from them. There are container runtimes. Docker is one of them. There are container processes. Docker can create them but Linux is still the boss.
> 
> — Kelsey Hightower (@kelseyhightower) [December 3, 2020](https://twitter.com/kelseyhightower/status/1334531052488904707?ref_src=twsrc%5Etfw)

“Docker != Containers” tweet by Kelsey Hightower  

## But… Was this important? What was the need?

Kubernetes v1.5 had introduced an internal plugin API named [Container Runtime Interface (CRI)](https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes) to provide easy access to different container runtimes. _CRI enables Kubernetes to use any of the container runtimes without recompilation._ This means Kubernetes could use any container runtime that implements CRI to manage pods, containers and container images.

_Docker currently does not support Kubernetes’s CRI_ so Kubernetes maintainers had written an additional layer to support this which is known as **Dockershim.** But maintaining dockershim has become a heavy burden on the Kubernetes maintainers.

_Kubernetes stated,_

> … your Kubernetes cluster has to use another tool called Dockershim to get at what it really needs, which is containerd. That’s not great, because it gives us another thing that has to be maintained and can possibly break.

**They published this in another blog post about the** [**deprecation of Dockershim**](https://kubernetes.io/blog/2020/12/02/dockershim-faq/)**.** Hence, the Kubernetes maintainers are encouraging developers to migrate to container runtimes that are CRI-compliant.

The good news is that if you’re using a managed Kubernetes service like GKE, EKS, or AKS ([_which defaults to containerd_](https://containerd.io/)) you will need to make sure your worker nodes are using a supported container runtime _before Docker support is removed in a future version of Kubernetes, which is currently planned for v1.22 due in late 2021._

* * *

https://twitter.com/tcabeen/status/1334162497645862914

* * *

I hope you enjoyed reading this.

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_