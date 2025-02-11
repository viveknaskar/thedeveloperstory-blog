---
title: "A Brief Introduction To Docker"
description: "Have you ever wondered why we moved on to container-based applications in an era where we have virtual machine applications? How does docker make the task of development easier? Let’s see what is Docker and know its concepts. Docker is a light-weighted alternative to a virtual machine (VM) which is designed to make it easier [&hellip;]"
pubDate: 2020-04-18
heroImage: "/blog-images/wp-artak-petrosyan-GFETqC_u5EE-unsplash.jpg"
categories: ["Docker"]
tags: ["developer","Devops","thedeveloperstory"]
---

Have you ever wondered why we moved on to container-based applications in an era where we have virtual machine applications? How does docker make the task of development easier? Let’s see what is Docker and know its concepts.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/docker-logo.png)

The whale in Docker’s logo is called _Moby Dock_

Docker is a light-weighted alternative to a virtual machine (VM) which is designed to make it easier to create, deploy and run applications by using containers.  Wikipedia defines Docker as

> _an open-source project that automates the deployment of software applications inside_ **containers** _by providing an additional layer of abstraction and automation of_ **OS-level virtualization** _on Linux._

On any Host OS, we have a docker engine which runs the multiple containers present on it. These docker containers have an application running on it which in turn is equipped with all the binaries and libraries needed to run the application.

## But Why Docker?

Before Docker, industries were facing challenges where an application developed in one machine worked in developing environment but not in testing or production environment. This is due to the difference in the computing environment between development and production. This is when dockerization makes our task easier.

Docker provides a consistent environment throughout the whole Software Development Life Cycle (SDLC) thereby providing better productivity throughout the life cycle.

## Containerization vs Virtualization

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/virtualization-containerization.png)

Pictorial comparison of virtualization (left) and dockerization (right).

In virtualization, every application runs on a VM and this VM imports a guest operating system on top of the host OS. This way we can run a different application on the same machine. Now, you might be wondering what the problem with virtualization is? One major drawback is that running many VMs on the same host system will degrade the performance of the system. Guest OS running on this host OS has its own set of kernel libraries and dependencies which take up a large number of resources like hard disk processor and RAM and takes up much time to boot up when comes to real-time applications.

Thus, containerization was introduced. Here there is no guest OS required, instead, the application will utilize the host OS. Hence, each container will share the host OS and each will have its own application and libraries in it. RAM and disk space will be utilized by the containers according to its requirements, thereby boosting the performance of the system considerably.

## Key terms in Docker and detailed approach to Docker Networking

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/docker-flowchart-1024x350.png)

Docker overview

### **Dockerfile**

Dockerfile is a text file (without any .txt extension) that is used to build a docker image that contains all the project code. This is the file that includes commands and arguments to customize a docker image. Docker can build images automatically by reading the instructions from a Dockerfile.

### **Commands used in Dockerfile**

*   **FROM** _– defines a base image to be used to start the build process_.
*   **MAINTAINER** _— name and email of the maintainer of this image._
*   **COPY —** _copies a file or a directory into the image._
*   **ADD —** _the same as COPY, which contains two arguments source and destination paths._
*   **RUN —** _takes a command as an argument and runs it to form the image, such as apt-get install._
*   **CMD** _— default command to run when the container is initiated. Can be overridden with command line parameters._
*   **ENV** _— sets an environment variable in the container._
*   **EXPOSE —** _exposes ports from the container. Must be explicitly exposed by the run command to the Host with -p or -P._
*   **VOLUME** _— specifies a directory that is used to store file contents related to container._
*   **ENTRYPOINT —** __this is used to override the cmd command. When the container is run, this command is the first one to be executed for the image which is built.__
*   **USER —** _sets the user for RUN, CMD and ENTRYPOINT._
*   **WORKDIR —** _sets the working directory for RUN, CMD, ENTRYPOINT, ADD and COPY._

### **Docker Image**

Reads only templates used to create containers. It contains all the dependencies and requirements for a particular application.

*   `_Commands for interacting with images_`
*   `docker images  _# shows all images._`
*   `docker import  _# creates an image from a tarball._`
*   `docker build   _# creates an image from Dockerfile._`
*   `docker commit  _# creates an image from a container._`
*   `docker rmi     _# removes an image._`
*   `docker history _# list changes of an image._`

### **Docker Container**

Run time instance of a Docker image. It contains everything needed to run the applications. One or more images can be used to build a container.

### **Docker Hub**

[Docker Hub](https://hub.docker.com/) is a service provided by Docker for finding and sharing container images with your team. It is also known as a container registry. 

It provides the following major features:

*   **Repositories**: Push and pull container images.
*   **Teams & Organizations**: Manage access to private repositories of container images.
*   **Official Images**: Pull and use high-quality container images provided by Docker.
*   **Publisher Images**: Pull and use high-quality container images provided by external vendors. Certified images also include support and guarantee compatibility with Docker Enterprise.
*   **Builds**: Automatically build container images from GitHub and Bitbucket and push them to Docker Hub.
*   **Webhooks**: Trigger actions after a successful push to a repository to integrate Docker Hub with other services.

## General Commands for Docker

Commands for interacting with containers :

• **docker –version**: currently installed version of docker  
• **docker –help**: list of commands available in docker  
• **docker pull**: to pull an image to the docker hub repository  
**• docker run -it -d**: used to create a container from an image  
• **docker ps**: used to list the running containers  
• **docker ps -a**: used to show all the running and exited containers  
• **docker exec -it bash**: used to access the running container  
• **docker stop**: stops a running container  
• **docker kill**: kills the container by stopping its execution immediately  
• **docker login**: used to login to the docker hub repository  
• **docker push**: to push an image to the docker hub repository  
• **docker rm**: used to delete a stopped container  
• **docker images**: list all images in the local repository  
• **docker build:** build an image from a specified docker file  
• **docker export:** used to export a container’s file system as a tar archive  
• **docker import:** used to import the contents from a tarball to create a filesystem image  
• **docker container:** perform various operations on containers  
• **docker container logs**: logs with the specified container  
• **docker container** **kill**: kill the container  
• **docker container rm**: delete the stopped container  
• **docker container** **start**: start a container

In a nutshell, here’s what Docker can do: It can get more applications running on the same hardware as other technologies; it makes it easy for developers to quickly create ready-to-run containerized applications, and it makes managing and deploying applications much easier.

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_