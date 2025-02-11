---
title: "Identity And Access Management (IAM) In Google Cloud Platform"
description: "Identity and Access Management or IAM is a centralized system for managing access to resources in GCP. It lets you control who can access what resources and what actions they can perform. This helps you improve security and compliance by ensuring that only authorized users have access to the data and resources they need. How [&hellip;]"
pubDate: 2023-12-26
heroImage: "/blog-images/wp-Cloud-IAM-1.png"
categories: ["Google Cloud Platform"]
tags: ["gcp","Google Cloud Platform","IAM","technology","thedeveloperstory"]
---

Identity and Access Management or IAM is a centralized system for managing access to resources in GCP. It lets you control who can access what resources and what actions they can perform. This helps you improve security and compliance by ensuring that only authorized users have access to the data and resources they need.

### **How does IAM work?**

IAM works by defining three key components: **Identities**, **Roles**, **and Resources**.

**Who are you?  
(Identity)**

**What can you do?  
(Role)**

**On which resources?  
(Resource)**

Google Account/Cloud Identity  
Service Account  
Google group  
All authenticated users  
All users

roles/owner  
roles/viewer  
roles/compute.admin

Computer Engine  
Cloud Function  
Cloud Storage  
Kubernetes Engine

### Identity

##### Google account/Cloud Identity

A Google Account represents a developer, an administrator, or any other person (humans) who interacts with Google Cloud. Any email address that is associated with the Google account can be an identity, including [gmail.com](http://gmail.com) or other domains. _Example: jamesbond007@bondenterprises.com_

##### Service Account

A service account is an account for an Application/Services or compute workload instead of an individual end user. When the code is run that is hosted on Google Cloud, the code runs as the account you specify.

##### Google Group

A Google group is a named collection of Google Accounts and service accounts. Every Google group has a unique email address that’s associated to the group. _Example: bond-industries-admin@bondenterprises.com_

##### All authenticated users

The value `allAuthenticatedUsers` is a special identifier that represents all service accounts and all users on the internet who have authenticated with a Google Account.

##### All users

The value `allUsers` is a special identifier that represents anyone who is on the internet, including authenticated and unauthenticated users.

### Roles

A role is a collection of permissions. You cannot grant a permission to the user directly. Instead, you grant them a role. When you grant a role to a user or group, you grant them all the permissions that the role contains.

There are three types of roles:

**Basic Roles**: Roles that are historically available to the GCP console. These roles are Browser, Owner, Editor, and Viewer. _**Primitive roles may be used in small teams where each member has broad responsibilities for administering GCP, but otherwise using primitive roles is not recommended.**_

**Predefined Roles**: Roles that give finer-grained access control than the basic roles. For example, the predefined role for Pub/Sub Publisher (`roles/pubsub.publisher`) provides access to only publish messages to a Pub/Sub topic. _**It is a best practice to use predefined roles.**_

**Custom Roles**: Roles that you create to tailor permissions to the needs of your organization when predefined roles don’t meet your needs. _**Custom roles should only be used predefined roles do not meet your requirements.**_

### Resources

Resources are Infrastructure (Computer Engine, Buckets, databases, etc.) in Google Cloud projects classified under folders. While assigning IAM policies as best practices we make sure that we are not assigning any permission to an individual, it must be allocated to a Group.

### Advantages of using IAM

*   **Improved security:** IAM helps you prevent unauthorized access to your resources, which can help you protect your data and applications.
*   **Simplified access control:** IAM provides a central place to manage access for all of your GCP resources, which can save you time and effort.
*   **Compliance:** IAM can help you meet compliance requirements by ensuring that you have the right controls in place to protect your data.

### Key Points to Remember

*   [IAM uses Role-based access control or RBAC](https://cloud.google.com/data-fusion/docs/concepts/rbac "IAM uses Role-based access control or RBAC") to grant permissions to users based on their roles. This helps you ensure that users only have the permissions they need to do their jobs.
*   It follows the principle of least privilege, which means that users should only have the minimum permissions necessary to do their jobs. This helps to reduce the risk of accidental or malicious access.
*   It lets you define different levels of access for different resources. For example, you might grant a user full access to a project but only read access to a specific Cloud Storage bucket within that project.
*   It provides auditing and logging capabilities that allow you to track who has accessed your resources and what actions they have taken. This can help you troubleshoot problems and investigate security incidents.
*   It is a best practice to use predefined roles. Predefined roles are designed to provide permissions need to perform common tasks, such as administering databases.
*   Custom roles should only be used predefined roles do not meet your requirements.
*   Primitive roles may be used in small teams where each member has broad responsibilities for administering GCP, but otherwise using primitive roles is not recommended.

### Some Important Resources

*   [https://cloud.google.com/iam/docs](https://cloud.google.com/iam/docs)
*   [https://cloud.google.com/blog/products/identity-security/iam-best-practice-guides-available-now](https://cloud.google.com/blog/products/identity-security/iam-best-practice-guides-available-now)
*   [https://thedeveloperstory.com/2021/01/10/a-developers-guide-for-passing-google-cloud-associate-cloud-engineer-exam/](https://thedeveloperstory.com/2021/01/10/a-developers-guide-for-passing-google-cloud-associate-cloud-engineer-exam/)

* * *

_If this article provided you with value, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _— only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_