---
title: "Google Deployment Manager: Simplify your Cloud Management"
description: "Deployment Manager is an infrastructure deployment service that automates the creation and management of Google Cloud Platform resources like computing, databases, storage and networking. You can write flexible templates and configuration files and use them to create deployments that have a variety of Cloud Platform services, such as Google Cloud Storage, Google Compute Engine, and [&hellip;]"
pubDate: 2020-07-17
heroImage: "/blog-images/wp-pexels-photo-256381.jpeg"
categories: ["Google Cloud Platform"]
tags: ["cloudcomputing","developer","Devops","gcp","google-deployment-manager","IaaC","infrastructure-as-a-code","thedeveloperstory"]
---

Deployment Manager is an infrastructure deployment service that automates the creation and management of Google Cloud Platform resources like _computing, databases, storage_ and _networking_. You can write flexible templates and configuration files and use them to create deployments that have a variety of Cloud Platform services, such as _Google Cloud Storage_, _Google Compute Engine_, and _Google Cloud SQL_ configured to work together. Management of these cloud environments is done by using an _infrastructure-as-a-code_ approach.

### Creating a Configuration File

Create a new Project. I created _Deployment Manager Demo_ as my project.

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/project-1024x466.jpg)

2. Click on the _Activate Cloud Shell_ icon

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/activate-cloud-shell-1024x334.jpg)

3. After logging in, it takes few minutes to provision and connect to the environment. Once connected, you are already authenticated with the project id – _deployment-manager-demo-325107 (this being my project id here)_

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/shell-1024x257.jpg)

4. Here, we are using gcloud to run all our commands to demonstrate a simple deployment manager demo.

Using the gcloud command **gcloud auth list**_,_ I’ve listed the active account name associated.

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/auth-list-1024x402.jpg)

Likewise, you can also list down the active project id associated with it using the command: **gcloud config list project**

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/config-list-project-1024x199.jpg)

References for gcloud: [https://cloud.google.com/sdk/docs/cheatsheet](https://cloud.google.com/sdk/docs/cheatsheet)

5. We can create a YAML file that will have all the configurations describing a single document. Hence, created a YAML file with the below command:

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/vm.yaml_-1024x160.jpg)

6. Added the below configuration in the newly created YAML file and then saved it. You can refer to the resources to be added from the link:

[https://cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)

You can also refer to the below link of how to create a configuration file in the deployment manager:

[https://cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/vm-yaml-contents-1024x272.jpg)

```
resources:
- type: compute.v1.instance
  name: my-first-ever-deployment
  properties:
    zone: us-central1-f
    machineType: https://www.googleapis.com/compute/v1/projects/deployment-manager-demo-325107/zones/us-central1-f/machineTypes/f1-micro
    disks:
    - deviceName: boot
      type: PERSISTENT
      boot: true
      autoDelete: true
      initializeParams:
        sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-9
    networkInterfaces:
    - network: https://www.googleapis.com/compute/v1/projects/deployment-manager-demo-325107/global/networks/default
      accessConfigs:
      - name: External NAT
        type: ONE_TO_ONE_NAT
```

The resources used are specified as below:

*   **Zone :** us-central1-f
*   **Machine type :** f1-micro
*   **Root persistent disk **:**** disk-my-first-deployment
*   **Image **:**** debian-9
*   A randomly assigned external IP address

After pasting the above configuration, save the YAML file as _vm.yaml_ (or any name you want).

### Deploying the Configuration file

For deploying the configuration file, you must execute the below command:

```
gcloud deployment-manager deployments create my-first-deployment --config vm.yaml
```

where,  
_**my-first-deployment**_: name of the instance  
_**deploy-man.yaml:**_ name of the configuration specifying the details of the resources

When you run the above command, you will be prompted to enable certain APIs for compute engine (if you have not done already).

When your deployment will be successful and you will get the below message:

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/deployment-successful-1-1024x102.jpg)

You can verify the newly created instance in Compute Engine –> VM Instances

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/compute-engine-created-1024x290.jpg)

References for creating a deployment:

[https://cloud.google.com/deployment-manager/docs/deployments](https://cloud.google.com/deployment-manager/docs/deployments)

**Viewing the details of the deployment**

You can view the information of the deployment by running the below command:

```
**gcloud deployment-manager deployments describe my-first-deployment**
```

You should see a description of your deployment, including its _start and end time, the deployment status,_ and _any warnings_ or _errors_ if applicable.

You will get the below output:

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/deployment-manager-successful-output-1024x267.jpg)

Similarly, for deleting a resource, you can use the below command:

```
gcloud deployment-manager deployments delete my-first-deployment
```

The output will be:

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/image-1024x275.png)

### Deployment’s manifest

A manifest is a read-only object that contains the original configuration you provided, including any imported templates, and also contains the fully-expanded resource list, created by the Deployment Manager. Each time you update a deployment, Deployment Manager generates a new manifest file to reflect the new state of the deployment. When troubleshooting an issue with deployment, it is useful to view the manifest.

You can get the manifest of the deployment when you view the deployment details (see above pic). You get **manifest-1630830972038** which is actually **manifest-<timestamp>**

For viewing the manifest, you must run the below command:

```
gcloud deployment-manager manifests describe <manifest-[TIMESTAMP]> --deployment my-first-deployment
```

hence, the command will be:

```
gcloud deployment-manager manifests describe manifest-1630830972038 --deployment my-first-deployment
```

![](https://thedeveloperstory.com/wp-content/uploads/2021/09/deployment-manager-manifests-1024x405.jpg)

Reference for viewing manifests:

[https://cloud.google.com/deployment-manager/docs/deployments/viewing-manifest](https://cloud.google.com/deployment-manager/docs/deployments/viewing-manifest)

### **Creating your own DM template**

While developing an application, you will most likely require complex architectures. To make your deployment easier to replicate and troubleshoot, we recommend that you break your configuration into _templates_.

A template is a separate file that defines a set of resources. You can reuse templates across different deployments, which creates consistency across complex deployments.

You can use Python or Jinja2 to create templates for Deployment Manager.

Reference for creating your own template engine:

[https://cloud.google.com/deployment-manager/docs/step-by-step-guide/create-a-template](https://cloud.google.com/deployment-manager/docs/step-by-step-guide/create-a-template)

### **Conclusion**

*   Google Cloud Deployment Manager allows you to specify all the resources needed for your application in a declarative format using yaml.
*   Repeatable deployment process by creating configuration files that define the resources, the process of creating those resources can be repeated over and over with consistent results.
*   Declarative approach allows the user to specify what the configuration should be and let the system figure out the steps to take.
*   It is template-driven, which means the template allows the use of building blocks to create abstractions or sets of resources that are typically deployed together. Hence, the templates can be used over and over again as these are easily parameterized.

### **References**

Deployment Manager Fundamentals:  
[https://cloud.google.com/deployment-manager/docs/fundamentals](https://cloud.google.com/deployment-manager/docs/fundamentals)

Reference for Automation Scripts, CICD, Building templates:  
[https://cloud.google.com/deployment-manager/docs/best-practices](https://cloud.google.com/deployment-manager/docs/best-practices)

Reference for AWS CloudFormation Vs Google Deployment Manager:  
[https://cloud.google.com/docs/compare/aws/deployment-tools](https://cloud.google.com/docs/compare/aws/deployment-tools)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_