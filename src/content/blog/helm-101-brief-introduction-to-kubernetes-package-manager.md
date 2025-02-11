---
title: "Helm 101: Brief Introduction To Kubernetes Package Manager"
description: "Over the years, Kubernetes has become one of the most loved platforms that developers want to learn. It has been widely adopted by all organisations today. When you run any application on Kubernetes, you must deploy a number of components, including deployment, configmap, secrets, and so on. Each of them requires the creation of a [&hellip;]"
pubDate: 2021-07-12
heroImage: "/blog-images/wp-shutterstock_520306507-scaled-e1626119842129.jpg"
categories: ["Kubernetes"]
tags: ["developerblog","Devops","Helm","Helm Charts","Kubernetes","thedeveloperstory"]
---

Over the years, Kubernetes has become one of the most loved platforms that developers want to learn. It has been widely adopted by all organisations today. When you run any application on Kubernetes, you must deploy a number of components, including deployment, configmap, secrets, and so on. Each of them requires the creation of a group of manifest files in YAML format. Maintaining numerous manifest files for each of these resources becomes challenging in the setting of complex application deployment. 

Creating the manifest files and providing configuration parameters externally might be critical in allowing you to modify deployments. Then there’s a dependency management and versioning to consider.

__Enter Helm!__ 🚢

In 2015, Helm was introduced at the Kubernetes conference, known as [_KubeCon_](https://www.cncf.io/kubecon-cloudnativecon-events/). Helm plays an important role in automating the installation, configuration, and upgradation of complex microservices applications deployed in Kubernetes.

## What is Helm?

Helm is a package manager for Kubernetes. Consider it the Kubernetes equivalent of yum or apt. Helm deploys charts, which may be seen as a packaged application. It is a collection of all your pre-configured, versioned application resources that can be deployed as a single entity. You may then deploy another version of the chart with a different set of configuration options.

> “Helm is the best way to find, share, and use software built for [Kubernetes](https://kubernetes.io/).”
> 
> _Official documentation for Helm_

Helm is an open-source project that was designed to give developers a better and automated approach to managing all of the Kubernetes YAML files that are built for Kubernetes projects. It can install enterprise-grade applications with just a command and the simplicity with which it works makes it popular among the developer community.

## Helm Charts

A Helm Chart is essentially a set of files (mainly YAML) that define a collection of Kubernetes resources. A single chart can deploy a basic memorystore pod or something more complicated, like a web application with a front-end, backend, and database. Helm use a chart as a format. 

Helm Charts can be easily saved in Chart Repositories since they are file-based and follow a convention-based directory structure. The charts are installed and uninstalled in the Kubernetes cluster.

> [Kubernetes: Deployments in 5 minutes](https://thedeveloperstory.com/2020/09/14/kubernetes-deployments-in-5-minutes/)

When a specific instance of a chart is deployed to the Kubernetes cluster, then it is called a Release. A group of published charts can be stored in Repositories in [_Artifact Hub_](https://artifacthub.io/) that can be used by many developers at a time. As a result, Helm Charts are easy to develop, update, share, and publish.

### Chart File Structure

As the chart is organized as a collection of files inside of a directory, where the directory name is the name of the chart. For example, a chart describing ‘_TheDeveloperStory_’ would be stored in a `thedeveloperstory/` directory.

Helm will expect the following structure within this directory:

```
thedeveloperstory/  
  Chart.yaml          # A YAML file containing information about the chart  
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart  
  README.md           # OPTIONAL: A human-readable README file  
  values.yaml         # The default configuration values for this chart  
  values.schema.json  # OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file  
  charts/             # A directory containing any charts upon which this chart depends.  
  crds/               # Custom Resource Definitions  
  templates/          # A directory of templates that, when combined with values,  
                      # will generate valid Kubernetes manifest files.  
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes
```

Helm retains ownership of the directories `charts/`, `crds/`, and `templates/`, as well as the file names indicated. Other files will be left as they are. Refer to the [_Official Charts Guide_](https://helm.sh/docs/chart_template_guide/getting_started/) to understand the structure of the Chart in more detail.

## Helm Components

As an executable, Helm consists of two different parts:

1.  **The Helm Client** is a command-line client for end-users who are in charge of local chart deployment, maintaining repositories, managing releases, and interacting with chart libraries, such as sending charts to be installed and requesting upgrades or uninstalling current releases.
2.  **The Helm Library** provides the logic for executing all Helm actions that communicate with the Kubernetes API server, such as combining a chart and configuration to create a release, installing charts into Kubernetes clusters, and updating and uninstalling charts via communicating with Kubernetes.

## How Can Helm Help Developers?

Since Helm simplifies the way we deploy our applications in Kubernetes, there are several benefits that the developers get on adapting Helm.

*   **Reduces the duplication of Kubernetes deployments significantly** since helm charts are being used multiple times, there won’t be any duplications. This would also ensure that the configuration is consistent in all the environments with minimal changes.
*   **Reduces the complexity significantly** since helm charts make use of `values.yaml` files to store the common configuration properties. Developers can modify these parameters when installing their charts to meet their own requirements. If the default installation is needed, there is no need for an override.
*   **Increases the productivity of developers** as the amount of time spent on configuring Kubernetes config files and running them using the kubectl commands has been drastically reduced. This would ensure the developers worry only about the coding of their applications and not about the deployments.

## Final Thoughts

Helm reduces complexity and redundancy to such an extent that it increases developer productivity, decreases deployment time, and allows them to reuse the charts in all the environments with minimal alterations.

I hope you get the gist of Helm and its importance. It is easy to learn and implement. It is well-documented in their official documentation which you can access from [**here**](https://helm.sh/docs/).

* * *

Thank you for reading!

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_