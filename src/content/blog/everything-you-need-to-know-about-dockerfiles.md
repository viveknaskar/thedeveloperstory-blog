---
title: "Everything You Need To Know About Dockerfiles"
description: "In the past, I have written extensively about the importance of Docker, especially now when we are deploying most of the applications in either the cloud or a hybrid environment. However, still, a lot of organisations around the world have not yet adopted Docker. As a result, many companies are heavily relying on the Docker [&hellip;]"
pubDate: 2021-12-27
heroImage: "/blog-images/wp-philippe-oursel-XzmMVK2zaD8-unsplash.jpg"
categories: ["Docker"]
tags: ["blogging","developer","developerblog","Devops","Docker","Dockerfile","thedeveloperstory"]
---

In the past, I have written extensively about the importance of Docker, especially now when we are deploying most of the applications in either the cloud or a hybrid environment. However, still, a lot of organisations around the world have not yet adopted Docker. As a result, many companies are heavily relying on the Docker tool to achieve high network availability, service continuity, and service provision with high scalability.

A Docker image contains a bunch of instructions that, when executed, create a Docker container. I usually refer to a Docker image as an application snapshot or everything that is needed for building the application. Docker images can only be created using Dockerfiles.

* * *

### Dockerfiles

A Dockerfile is a file that simply contains a series of instructions accompanying with arguments required to create a Docker image.

All Dockerfiles must start with `**FORM**` instruction.  
`**RUN**` instruction will install the dependencies or update packages.  
`**COPY**` instruction will copy the source code from the local onto the Docker image.  
`**ENTRYPOINT**` instruction allows specifying the command that will be run when the image is run as a container.

These are the four major instructions that are mostly used for building a Docker image. [There are other commands and instructions as well, which can be found here.](https://thedeveloperstory.com/2020/04/18/a-brief-introduction-to-docker/ "https://thedeveloperstory.com/2020/04/18/a-brief-introduction-to-docker/")

A simple Dockerfile typically contains INSTRUCTIONS with ARGUMENTS.

```
FROM python:3.6

RUN pip install flask

COPY . /opt/

EXPOSE 8080

WORKDIR /opt

ENTRYPOINT ["python", "app.py"]
```

### Layered Architecture

When Docker creates an image, it does it in a layered architecture. Each line of the instruction produces a new layer in the Docker image that contains just the changes from the previous layer. Since each layer only saves the changes from the previous layer, it is reflected in the size as well.

Suppose if any layer in the Dockerfile fails, and when you fix that instruction and try rebuilding the image, Docker will reuse the previous layers from cache and continue building the remaining layers. For example, in the above Dockerfile example, there are six instructions. Each of these instructions creates a layer. If the image building fails in the `COPY` instruction, rebuilding the image will not take time, since the previous layers will be taken from the cache. Hence, rebuilding the image is faster.

### Common Docker Related Commands

**To build the Docker image:**  
`docker build` _`-t`_ viveknaskar/my-app .  
  
The Dockerfile should be in the present working directory.  
`-t` is used for tagging the docker image  
`viveknaskar/my-app` is the name of the image

**To see the history of the building of each layer of the docker image:**  
`docker history viveknaskar/my-app`

**To see the operating system used by the base image:**  
`docker run python:3.6 cat /etc/*release*`  
  
Here, python:3.6 is the base image

**To create the container from the created image:**  
`docker run -p 8888:8080 viveknaskar/my-app`

* * *

Docker is such an important platform to learn. In fact, [according to the 2020 Stack Overflow survey, Docker is the 2nd Most loved Platform by the developers](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted). I hope you got a brief idea of Dockerfiles and how to build them and their importance in building a Docker image.

[_The best place to learn about the best practises for Dockerfiles is their official documentation._](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/ "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/")

* * *

If you liked reading this article, you may also enjoy reading these:

> [A Brief Introduction To Docker](https://thedeveloperstory.com/2020/04/18/a-brief-introduction-to-docker/)

> [Differences Between Docker And Kubernetes Explained Under 5 Minutes](https://thedeveloperstory.com/2020/12/25/differences-between-docker-and-kubernetes-explained-under-5-minutes/)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_