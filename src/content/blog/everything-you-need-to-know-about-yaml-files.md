---
title: "Everything You Need To Know About YAML Files"
description: "When I started to learn to code in college, XML was extremely popular for creating web services and SOAP services. However, it was not easy to learn or get used to XML. This led to the popularity of JSON, which was not only easy to pick up and learn but also started integrating well with [&hellip;]"
pubDate: 2021-10-03
heroImage: "/blog-images/wp-ryan-tang-evLIkrue9G0-unsplas.jpg"
categories: ["DevOps"]
tags: ["cloudcomputing","developer","Devops","devopsengineer","thedeveloperstory","YAML"]
---

When I started to learn to code in college, XML was extremely popular for creating web services and SOAP services. However, it was not easy to learn or get used to XML. This led to the popularity of JSON, which was not only easy to pick up and learn but also started integrating well with the RESTful services. Thus, JSON came, conquered XML and started ruling web development.

However, interpreting JSON can be challenging as sometimes it is not that human-readable friendly. Thus, we needed something that could be as similar as JSON but human-readable. Thus YAML was created.

### What the heck is YAML?

YAML is a data serialization language that, like JSON, allows you to store information in a human-readable format. It is an abbreviation for “_YAML Ain’t Markup Language_” (a recursive acronym) that stresses that YAML is for data rather than documents. It may also be combined with other programming languages and also considered a superset of JSON.

> YAML is a human friendly data serialization language for all programming languages.
> 
> [Official documentation](https://yaml.org/ "https://yaml.org/")

YAML can self-referentially, support complicated data types, incorporate block literals, and support comments, among other things. Recently, YAML is widely used in infrastructure-as-code (IoC) systems such as Helm Charts or Kubernetes to build configuration files or to manage containers in the DevOps pipeline.

### YAML Syntax

The structure of a YAML file is a map or a list. YAML uses Python-style indentation to show nesting. Whitespaces are only allowed, hence no tab spaces. There are no standard formatting symbols like braces, square brackets, closing tags, or quotation marks.

![](https://thedeveloperstory.com/wp-content/uploads/2021/12/yaml-syntax-1024x512.png)

Pictoral difference between YAML, XML and JSON syntax

The .yml or .yaml extension is used for YAML files.

### Syntax Illustration

As already mentioned, YAML ([_latest release_)](https://yaml.org/) is a superset of JSON. Hence, YAML is a key-value combination separated by colon and whitespace.

```
---
# This is a comment for illustrating a YAML file
name: Vivek Naskar
designation: "Software Developer"
age: 29
company: Google
frameworks:
  - Spring Boot
  - Django
  - nodeJs
languages:
  java: expert
  python: beginner
  javascript: proficient
cerifications: |
  4 Google certifications
  2 Best employee awards
  Bachelors in Computer Science & Engineering

# The symbol ">" is used for paragraphs
mission: >
  My mission is
  to learn newer
  technologies
```

A YAML file usually contains scalars or variables represented by colon and space. Comments can be given by using # at the beginning of a sentence.

* * *

A key is always a string, however, the value is a scaler, just like in programming languages such as Python, JavaScript, and Perl. Hence they can be of any data type as an integer, string, float, etc. as shown below.

```
name: Vivek Naskar
designation: "Software Developer"
age: 29
```

* * *

Strings can be specified using the | character, which keeps newlines intact.

```
cerifications: |
  4 Google certifications
  2 Best employee awards
  Bachelors in Computer Science & Engineering
```

Strings can also be specified using the > character to print as a paragraph.

```
mission: >
  My mission is
  to learn newer
  technologies
```

* * *

Sequences are data structures that, like a list or an array, store numerous values under the same key.

```
frameworks:
  - Spring Boot
  - Django
  - nodeJs
```

In the above snippet, you can also see spaces are used to structure the document in block format. It is simpler to read yet less compact than the flow style.

### Uses of YAML

When it comes to developing configuration files for Infrastructure as Code, YAML is a popular choice. These files provide the parameters and configurations for the intended cloud environment.

Docker uses YAML files known as Dockerfiles, which are essentially blueprints for everything required to execute applications, such as codes, runtime, tools, settings, and libraries.

Even [Ansible](https://www.ansible.com/ "https://www.ansible.com/"), an automation tool, also uses YAML to construct automation processes. Ansible users write [playbooks](https://www.redhat.com/en/topics/automation/what-is-an-ansible-playbook "https://www.redhat.com/en/topics/automation/what-is-an-ansible-playbook") in YAML code to automate the tedious operations of provisioning and deploying a cloud environment.

YAML files are also used to create Kubernetes resources such as pods, services, and deployments. Heck, you can also create [Machine Learning pipelines using YAML](https://docs.microsoft.com/en-us/azure/machine-learning/reference-pipeline-yaml "https://docs.microsoft.com/en-us/azure/machine-learning/reference-pipeline-yaml").

### In Conclusion

YAML is a powerful language and it is so critical to learning. It has a vast range of applications, and we barely scratched the surface. Of course, you can read the complete documentation along with syntax from their [official documentation page.](https://yaml.org/spec/1.2.2/)

* * *

_If you liked reading this, then you might also find the below story worth your time._

> [Helm 101: Brief Introduction To Kubernetes Package Manager](https://thedeveloperstory.com/2021/07/12/helm-101-brief-introduction-to-kubernetes-package-manager/)

> [Kubernetes Architecture Explained in Brief](https://thedeveloperstory.com/2020/09/27/kubernetes-architecture-explained-in-brief/)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_