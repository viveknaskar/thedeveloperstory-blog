---
title: "Kubernetes Architecture Explained in Brief"
description: "Kubernetes has become the most sought after orchestration platform because of its overwhelming features, including scaling, auto-deployment, and resource management across multiple clusters of hosts. The enterprises are adopting Microservice-architecture for their application development, hence modern applications are increasingly built using containers. Containerization packages the application with all the necessary dependencies such as libraries, configurations [&hellip;]"
pubDate: 2020-09-26
heroImage: "/blog-images/wp-matt-artz-4kay-etsnkc-unsplash-scaled.jpg"
categories: ["Kubernetes"]
tags: ["developerblog","Devops","Docker","thedeveloperstory"]
---

Kubernetes has become the most sought after orchestration platform because of its overwhelming features, including scaling, auto-deployment, and resource management across multiple clusters of hosts. The enterprises are adopting Microservice-architecture for their application development, hence modern applications are increasingly built using containers. Containerization packages the application with all the necessary dependencies such as libraries, configurations etc., together into a container that can easy to deploy and managed.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/steering-wheel-4467902_1920-1024x683.jpg)

Image by [Kerstin Riemer](https://pixabay.com/users/kriemer-932379/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4467902) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4467902)

When a containerized application is deployed, there is always a need for the application to scale and manage and communicate to the other applications across multiple containers. This is where Kubernetes comes into play. Kubernetes has all the required capabilities to manage the communication between the containers, along with scaling, scheduling and rollback capabilities. Due to these factors, Kubernetes have become one of the [most important platforms for developers](https://thedeveloperstory.com/2020/09/12/kubernetes-the-game-changing-container-orchestration-platform/) around the world.

## The Architecture and Components

A Kubernetes cluster consists of a set of worker machines, called [nodes](https://kubernetes.io/docs/concepts/architecture/nodes/), that run containerized applications. Every cluster has at least one worker node. Hence, if a node fails, your application will still be accessible from the other nodes as in a cluster, multiple nodes are grouped. Every node contains a _container runtime_, _Kubelet_ (for starting, stopping, and managing individual containers by requests from the Kubernetes control plane), and _kube-proxy_ (for networking and load balancing).

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/k8s-cluster-architecture.png)

Kubernetes cluster with all the components

### The Components of Kubernetes Architecture

There are mainly two components of the architecture:

*   Master nodes (Also known as Control Plane)
*   Worker nodes (Also known as slave nodes or minions)

### Master Node

It is known as the brain of the Kubernetes system, as all the decisions are taken here. Kubernetes master receives inputs from a CLI or user interface via an API. Using the master node, you define pods, deployments, configurations, replication sets that you want Kubernetes to manage and maintain.

The components of the Master Node are:

*   **kube-apiserver:** API Server is the entity that receives all the REST requests for modifications (to pods, services, replication sets, etc.), serving as a frontend to the cluster. It is designed to scale horizontally — that is, it scales by deploying more instances. The users, management devices, and command-line interfaces all talk to the API server to interact with the Kubernetes cluster.

*   **etcd:** It is the consistent and highly-available key-value store used as Kubernetes’ backing store for all cluster data. It is only accessible from the API server. It can be part of the Kubernetes master node, or it can be configured externally.

*   **kube-scheduler:** It is the component that watches for the newly created pods with no assigned node, and selects a node for them to run on. It stores the resource usage information for each worker node.

*   **kube-controller-manager:** It is the component of the master node that runs the controller processes. Each controller is a separate process and performs a particular function.

These controllers include:

1.  **Node controller:** Responsible for noticing and responding when nodes go down.
2.  **Replication controller:** Responsible for maintaining the correct number of pods for every replication controller object in the system.
3.  **Endpoints controller:** Populates the Endpoints object (that is, joins Services & Pods).
4.  **Service Account & Token controllers:** Create default accounts and API access tokens for new namespaces.

### Worker Node

It is known as the worker nodes (or sometimes slave nodes) as they execute tasks instructed by the master node(s). It manages the runtime environment of pods and containers. It is here where pods are scheduled.

The components of the Worker Node are:

*   **kubelet:** It is the agent which communicates with the master node and executes the worker nodes. It gets the pod specifications through the API server (_kube-apiserver_) and executes the containers associated with the pod and ensures that the containers described in those pod are running and healthy.

*   **kube-proxy:** It serves as a network proxy and a load balancer for a service on a single worker node and manages the network routing for TCP and UDP packets. It uses the operating system packet filtering layer, if there is one and it’s available. Otherwise, _kube-proxy_ forwards the traffic itself.

*   **Container runtime:** It is required to maintain the lifecycle of a container. Kubernetes supports several container runtimes: [Docker](https://docs.docker.com/engine/), [containerd](https://containerd.io/docs/), [CRI-O](https://cri-o.io/#what-is-cri-o), and any implementation of the [Kubernetes CRI (Container Runtime Interface)](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/container-runtime-interface.md).

## Conclusion

Now you know about the simple yet effective components of Kubernetes that does all the hard work for you. You need to know the architecture of Kubernetes as it gives you a more in-depth knowledge of how your deployed applications work.

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_