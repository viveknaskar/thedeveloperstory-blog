---
title: "Kubernetes: The Game-Changing Container Orchestration Platform"
description: "Kubernetes (k8s – pronounced “Ku-ber-ne-tes”) is a container platform that orchestrates computing, networking, and storage infrastructure workloads. Because it doesn’t limit the types of apps you can deploy, Kubernetes extends how we scale the containerized applications so that we can enjoy all the benefits of truly&nbsp;immutable infrastructure. The general rule of thumb for k8s: if [&hellip;]"
pubDate: 2020-09-12
heroImage: "/blog-images/wp-vidar-nordli-mathisen-2iznzejgjci-unsplash-scaled.jpg"
categories: ["Kubernetes"]
tags: ["developerblog","Devops","Docker","thedeveloperstory"]
---

Kubernetes (_k8s – pronounced “Ku-ber-ne-tes”_) is a container platform that orchestrates computing, networking, and storage infrastructure workloads. Because it doesn’t limit the types of apps you can deploy, Kubernetes extends how we scale the containerized applications so that we can enjoy all the benefits of truly _immutable infrastructure_.

**The general rule of thumb for k8s: if your app fits in a container, Kubernetes will deploy it.**

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/frank-mckenna-tjX_sniNzgQ-unsplash-1024x668.jpg)

Photo by [frank mckenna](https://unsplash.com/@frankiefoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@frankiefoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Kubernetes is undoubtedly one of the hottest technologies that every developer must learn. According to the [2020 survey by StackOverflow](https://insights.stackoverflow.com/survey/2020#overview), it comes in as [the number three most loved platform](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms). Forrester Research in their [2018 cloud predictions](https://go.forrester.com/blogs/predictions-2018-enterprise-cloud-computing-accelerates-transformation-everywhere/), proclaimed that,

> Kubernetes has won the war for container orchestration dominance.
> 
> Dave Bartoletti, Principal Analyst of Forrester Research

## What is Immutable Infrastructure?

It is common a practice where servers, once deployed, are never modified. But if something needs to be changed, you never do so directly on the server. Instead, you’ll build a new server from a base image that has all your needed changes added. This way you can simply replace the old server with the new one without any additional modification.

## What is Containerization Technology?

Also simply known as just a container, is a method to package an application so it can be run, with its dependencies, isolated from other processes. The major public cloud computing providers, including Amazon Web Services, Microsoft Azure and Google Cloud Platform have embraced container technology, with container software having names including the popular choices of _Docker, Apache Mesos, HashiCorp Nomad_ and _Kubernetes._

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/container-1638068_1920-1024x683.jpg)

Image by [Alexander Kliem](https://pixabay.com/users/kliempictures-3066210/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1638068) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1638068)

## What is Container Orchestration?

It is the process of automating the management of container-based microservice applications across multiple clusters. Since modern software development is no longer monolithic as it creates component-based applications that reside inside multiple containers. These scalable and adjustable containers come together and coordinate to perform a specific function or a microservice. They can span across many clusters depending on the complexity of the application and other needs such as load balancing. _Kubernetes is one such container-orchestration system for automating deployment, scaling and management of containerized applications._

## Why Kubernetes is required?

When a company deploys an application to the PROD environment after containerizing it using Docker, they want to do it on a massive scale. Let’s say, they started with 4 containers and as the application gets matured, and the traffic increases, but the application becomes slower as it is not being able to keep up. So, they increase the containers to 20 for load balancing the traffic making the application highly available but in the next week, the traffic decreases and now it only requires 10 containers which means they need to scale down the application to reduce the costs.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/kitera-dent-gbNuQfm9hTE-unsplash-819x1024.jpg)

Photo by [Kitera Dent](https://unsplash.com/@kitera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/java?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Now, doing this every time is physically impossible. We needed a system that would automate the scaling of the application. That’s when Orchestration tools like Docker Swarm and Kubernetes came into the picture. Kubernetes became more popular as it was developed by Google and was donated to a vendor-neutral home in 2015 as it hit version 1.0: the Cloud Native Computing Foundation which became the reason for its strong community.

## Features of Kubernetes

*   **Service discovery and load balancing:** Kubernetes can expose a container using the DNS name or using their own IP address. If traffic to a container is high, Kubernetes is able to load balance and distribute the network traffic so that the deployment is stable.
*   **Storage orchestration** Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more.
*   **Automated rollouts and rollbacks** You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate. For example, you can automate Kubernetes to create new containers for your deployment, remove existing containers and adopt all their resources to the new container.
*   **Automatic bin packing** You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources.
*   **Self-healing** Kubernetes restarts containers that fail, replaces containers, kills containers that don’t respond to your user-defined health check, and doesn’t advertise them to clients until they are ready to serve.
*   **Secret and configuration management** Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration.

## Objects & Abstractions of k8s

There are some basic objects and abstractions that **YOU MUST KNOW** before using Kubernetes as these form the building blocks of the application lifecycle.

*   **Pod:** A group of one or more containers. Containers can be exposed to the world through an external IP address and are usually part of a _pod_.
*   **Node:** A virtual machine on which containers or pods are run. Think nodes as a set of CPU and RAM resources that can be utilized.
*   **Cluster:** It efficiently distributes the work to the individual nodes when an application is deployed. It intelligently manages the task distribution when the nodes are added or removed.
*   **Service:** An abstraction that defines a logical set of pods as well as the policy for accessing them. Think service as a director between the pods and the outside world. Since, pods are isolated instances, they normally would not have access to one another. _Services_ fix this problem by defining a policy to access, an entry condition of sorts, for a select set of pods decided by a selector. 
*   **Persistent Volume:** An abstraction that lets us persist data in k8s environment. This is necessary because containers are ephemeral i.e., meaning data is deleted when the container is deleted. _Persistent Volume_ provides a file system that can be mounted to the cluster, without being associated with any of the nodes.
*   **Namespace:** A segment of the cluster dedicated to a certain purpose, for example, a certain project or team of developers. It is a widely used method which is used for scoping access or dividing a cluster.
*   **ReplicaSet:**  It ensures the desired amount of pod is what’s running.
*   **Deployment:** It is a description of the desired state of the system. Through a _deployment_, you inform your Kubernetes cluster how many pod_s_ of a particular application you want running.
*   **Job:** Creates one or more pods, runs a certain task(s) to completion, then deletes the pod(s).

## Conclusion

Kubernetes has grown to unprecedented heights even after launching in 2015. It offers varied benefits, many companies of all sizes look to develop products and services to meet an ever-increasing demand. It can work on both public and private clouds and has made it one of the favorite tools for businesses that work with hybrid clouds.

Kubernetes is one of the most loved platforms to learn for developers. It would not have the success that it does without the [conscious effort by the community](https://github.com/kubernetes/community/blob/master/sig-list.md) which is extremely welcoming to the newcomers. Kubernetes is undoubtedly a game-changer! 😏

* * *

Thank you for reading!

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_