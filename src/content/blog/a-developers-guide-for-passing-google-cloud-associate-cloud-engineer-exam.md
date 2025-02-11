---
title: "A Developer&#8217;s Guide For Passing Google Cloud Associate Cloud Engineer Exam"
description: "One of the goals of mine was to get certified in Cloud. When they said, “Everything is moving to cloud” a few years back, I didn’t really understand, but then Microservices architecture gained popularity with Docker and Kubernetes. It changed everything for me as a Software Developer. My organization started the “Lift-and-Shift” migration for the [&hellip;]"
pubDate: 2021-01-09
heroImage: "/blog-images/wp-rajeshwar-bachu-k4txlik7pny-unsplash-scaled.jpg"
categories: ["Blog","Google Cloud Platform"]
tags: ["blogger","blogging","developer","developerblog","google","GoogleCertified","thedeveloperstory","writer","writing"]
---

One of the goals of mine was to get certified in Cloud. When they said, “_Everything is moving to cloud_” a few years back, I didn’t really understand, but then _Microservices_ architecture gained popularity with _Docker_ and _Kubernetes_. It changed everything for me as a Software Developer. My organization started the “Lift-and-Shift” migration for the applications deployed in an on-premises environment. I developed a passion for Cloud and Cloud-Native technologies. Therefore, **_I started preparing for_** [**_Google Cloud Associate Cloud Engineer Exam_**](https://cloud.google.com/certification/cloud-engineer) **_and got certified._**

## Why Google Cloud?

**Google Cloud (or GCP)** along with **Amazon Web Services** and **Microsoft Azure** form the “**Big 3 Public Cloud Providers**”. Even though Google Cloud is the youngest member of this exclusive club, it is also the fastest-growing Cloud provider in recent years. They have huge partnerships with [consumer credit reporting agency **– Equifax**, music-streaming giant – **Spotify**](https://cloud.google.com/blog/products/identity-security/google-cloud-helps-equifax-achieve-digital-transformation), [Finnish multinational consumer electronics company – **Nokia**](https://medium.com/dev-genius/nokia-moves-data-centers-to-google-cloud-70dd0458ee84) and recently with [**Major League Baseball (MLB)**](https://cloud.google.com/blog/products/data-analytics/mlb-moves-to-bigquery-data-warehouse). 

Personally, I feel Google Cloud is extremely developer-friendly. It is also tackling internet of things (IoT) and hybrid environments (some resources in on-premises and some in the cloud) both of which are acknowledgements that not everything is but it will be on the cloud.

## Who is an Associate Cloud Engineer?

According to Google,

> “An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud.”

Google also states that,

*   87% of Google Cloud certified users feel more confident in cloud skills.
*   30% of Google Cloud certified users took on more responsibility or leadership roles at work.

The above percentages indicate those who strongly or somewhat agree with the statement. Findings from a survey conducted with Google Cloud certified individuals in May 2019 by an independent third-party research organization.

## Preparation for the Exam

Before attempting the exam, I had already created a trial account that would give $300 for trying out all the services. Currently, the trial account is for 3 months, but when I signed up it was for 12 months. You can go to the below link and create a trial account.

**[GCP Free Tier – Free Extended Trials and Always Free | Google Cloud](https://cloud.google.com/free)**

Obviously, the best practice one can have is by having hands-on on the services provided by Google Cloud. Even though I was working in GCP for 3 months for my organization and I can tell you this – preparing for the exam requires you to have knowledge of all the services and also, _it is a tough exam to crack._

## About the Exam

This is a **_multiple-choice question_** exam with **_50 questions_** in total to be answered in **_2 hours_**_._ There would be questions where which you can within 30 seconds, and then some would take at least 2 minutes as the questions would be lengthy. I was able to answer all of them within 50 minutes. **_So if you are familiar with your services, you can easily complete the exam with an ample amount of time left and also review your options._** Yes, you can review your answers before submitting. You can mark a question for review if you don’t feel that confident about the question and then later re-visit if you have time.

 **_There is no negative marking_**, so even if you don’t know an answer, just take the best guess. There is **_no official passing score_** for the exam. Google seems to have its own algorithm in place to determine whether you passed the exam or not.

> The Google Cloud exams are designed to determine only whether or not an individual meets a minimum passing standard. They are not designed to be diagnostic or spread people out on a scale of ability. They don’t even give you an exam score, much less tell you how close you were to passing. It’s just Pass or Fail.

Simply put, there is no single resource that can be referenced for the preparation. In fact, the more you know the services, the better you retain. One thing to note – Google will never ask you a straightforward question like “_Which is the cheapest storage?_”, rather it would be, “_Suppose you are the Cloud Engineer…_”, or “_… is the recommended practice by Google_”. The questions are mostly short scenario-based.

Google recommends you to have **_hands-on experience_** for at least **_6+ months_**. But that’s just a recommendation. I have seen people passing the exam within a month. However, you need to practice different kinds of scenarios while studying and always try to relate any system to GCP. 

## Resources I used for The Exam

For my preparation, I practiced a lot by exploring everything whatever is listed in the official exam guide. 

[**Associate Cloud Engineer Certification | Exam Guide | Google Cloud**  
_Certification exam guide An Associate Cloud Engineer deploys applications, monitors operations of multiple project_s](https://cloud.google.com/certification/guides/cloud-engineer)

Additionally, I also took the [**Udemy course by Dan Sullivan**](https://www.udemy.com/course/google-certified-associate-cloud-engineer-2019-prep-course/) who is the author of the [**_Official Google Cloud Certified Associate Cloud Engineer Study Guide_**](https://www.amazon.com/Google-Professional-Cloud-Architect-Study/dp/1119602440)_._ This course is extremely great and all the important points that you need to know for the exam are highlighted. Some of my colleagues had opted for the book and commended the author to me without reservation. 

For passing the exam, you should definitely **_have extensive knowledge of VPCs, subnets, VPNs, Cloud Interconnect_** _and_ **_Cloud Routers._** For that, you must read [Stephanie Wong](https://medium.com/u/3890ff72e132)’s articles on Networking. The below article proved to be gold for me.

[**Migrating to GCP? First things first: VPCs | Stephanie Wong**  
_Google Cloud’s Global Network and How to Get Started_](https://swongful.medium.com/migrating-to-gcp-first-things-first-vpcs-c0cf00d9adff)

It is equally important for you to know everything about **_Kubernetes_** and _Google’s implementation of Kubernetes Engine_ called **_GKE_**. You can easily find a lot of great videos on YouTube. What I referred is the below comics on Kubernetes from Google.

#### Kubernetes Comics

[**Deploy code faster: with CI/CD and Kubernetes | Kubernetes Comics**  
_Deploy code faster, protect against outages, and save money using continuous integration and deployment (CI/CD)._cloud.google.com](https://cloud.google.com/kubernetes-engine/kubernetes-comic)

#### GKE YouTube Videos

“What is GKE?” by Google on YouTube

Another great resource for understanding GKE is from [Priyanka Vergadia](https://medium.com/u/9b9e67983b04?source=post_page-----8a95adb44721--------------------------------)’s _#GCPSketchnote_ series covering GKE (and other services) and her YouTube videos.

What is Kubernetes Engine? by Priyanka Vergadia on YouTube

#### GCP Flowcharts

One of the best articles I read (right before exam) is ‘_A GCP Flowcharts a day’_ by [Grace](https://medium.com/u/a5f7a3cf7766) and it is incredibly easier to remember everything if you just gaze at her Flowcharts articles every day. 

[**A GCP flowchart a day**  
_This is just part 1 of the 3 GCP flowcharts_](https://medium.com/google-cloud/a-gcp-flowchart-a-day-2d57cc109401)

Google also emphasizes on **_knowing the best practices for Enterprise organisations for passing the Exam_** and you must read the Google documentation thoroughly.

[**Best practices for enterprise organizations | Documentation**  
_This guide introduces best practices to help enterprise customers like you on your journey to Google Cloud. The guide…_cloud.google.com](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations)

### High-Level Overview in a Nutshell

Everyone has their own approach to learning a course and I am no exception. I often make notes which seem useful but then this article would be 30 minutes. I will try to give a high-level overview of whatever I seem important. But there would so many things which I may not cover, so please make your own notes (if you make any) and compare with mine.

#### Resource Hierarchy in GCP

Organization > Folders > Projects > Resources

![](http://thedeveloperstory.com/wp-content/uploads/2021/01/d18b7-1h4dykzhdrni6unigxj-3la.png)

Resources Hierarchy image by [Google Cloud](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)

#### IAM & Security in GCP

*   You must know about service accounts, their key management and usage using **_gcloud CLI_**_._ 
*   Read and understand about roles and permissions. See [_ref_](https://cloud.google.com/iam/docs/understanding-roles).
*   You must follow Google’s **_Principle of least privilege while assigning roles_**. See [_ref_](https://cloud.google.com/blog/products/gcp/iam-best-practice-guides-available-now).

#### Compute Options in GCP

There are 4 compute options in GCP. 

1.  **Compute Engine**: _infrastructure-as-a-service_, _build_ **_high-performance_**_,_ **_fault-tolerant_**_,_ **_massively scalable_** _compute apps, there are different options to customize your own virtual machines where you can choose RAM, disk, vCPUs etc._
2.  **App Engine**: _platform-as-a-service,_ **_two types: standard & flexible_**_,_ **_fully-managed_**_,_ **_automatic scaling_**_, supports Node.js, Java, Ruby, C#, Go, Python, etc_., **_cannot be modified after deployment_**, _supports traffic-splitting with a new version_
3.  **Google Kubernetes Engine (GKE)**: _Google’s implementation of Kubernetes Engine, fully-managed, supports Stackdriver monitoring, orchestrates Kubernetes containers,_ **_automatic-scaling_**_,_ **_automatic upgrades_**_,_ **_node auto repairs_**_, etc._
4.  **Cloud Function**: _single-purpose functions_ **_triggered_** _based_ **_on events_**_,_ **_completely serverless_**_._

#### Storage Options in GCP

1.  **Cloud Storage**: **_Object-based_** _storage in_ **_buckets_**_,_ **_unstructured_** _storage, files, videos (ex. CCTV footages),_ **_autoscaling managed by GCP, 4 storage classes,_** _supports_ [**_object lifecycles_**](https://cloud.google.com/storage/docs/managing-lifecycles)**_._** _See_ [_ref_](https://cloud.google.com/storage/docs)_._
2.  **Cloud SQL**: **_fully-managed relational database_**_, used for_ **_regional use cases,_** _**lesser expensive relational DB**_.
3.  **Cloud Spanner**: **_highly-scalable,_** _enterprise-grade,_ **_globally-distributed_**_, and_ **_strongly consistent relational_** _database_**_, more expensive than Cloud SQL_**
4.  **BigQuery: _analytical database, petabyte-scale, used for data warehousing, supports SQL queries,_** _not transactional, some joins support. See_ [_ref_](https://cloud.google.com/bigquery#section-5)_._
5.  **Datastore/Firestore**: **_NoSQL databases_**_, stores semi-structured,_ **_flexible schema_**_, no joins support, firestore is the next-gen database of datastore_
6.  **Bigtable**: _wide column database,_ **_low-latency writes_**_,_ **_petabytes-scale_**, _ideal for_ **_ingesting_** _and_ **_analyzing_** _large volumes of_ **_time series data from sensors_** _and_ **_IoT devices_** _in real-time. See_ [_ref_](https://cloud.google.com/bigtable#section-5)_._
7.  **Filestore:** _managed network file system_**_, persist files and share via instances_**

Get familiarity about the Use Cases of **_Bigtable_**, **_BigQuery_**, **_Cloud Spanner_**, **_Cloud SQL_**, and **_Cloud Storage_**.

#### Storage Classes in Cloud Storage

Google recommends you to use storage classes of Cloud Storage based on the frequency of the objects.

**Standard** storage class – access frequently  
**Nearline** storage class – access objects once a month  
**Coldline** storage class – access objects once a quarter  
**Archive** storage – logs archival

Get familiarity about the **_Object Lifecycle Management_** in **_Cloud Storage._**

#### Managed Instance Groups (MIGs) 

A managed instance group (MIG) contains an identical virtual machine (VM) instances that are based on an instance template. **_MIGs support auto-healing, load balancing, autoscaling, and auto-updating_**. Autoscaling works by adding more instances to your instance group when there is more load (upscaling), and deleting instances when the need for instances is lowered (downscaling). See [_ref_](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)_._

#### Unmanaged Instance Groups

 An unmanaged instance group is simply a collection of virtual machines (VMs) that reside in a single zone, VPC network, and subnet. An unmanaged instance group is **_useful for grouping together VMs that require individual configuration settings or tuning_**. See [_ref_](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-unmanaged-instances).

#### Networking Options in GCP

Networking is one of the most important topics that come in the exam. I would highly recommend to read more about it and understand it. 

*   **Virtual Private Cloud (VPC):** _Private Cloud that you manage in Google Cloud where you can run your resources. They have VPC networks associated with them and the networks are highly scalable, global and flexible._
*   **Virtual Private Network (VPN)**: _Network abstraction that allows you to secure the network and transmit data across the internet using secure IP or IPsec._
*   **Cloud Router**: _It enables your GCP resources to communicate with your non-GCP resources like resources deployed in on-premises by exchanging routes using Border Gateway Protocol (BGP)._
*   **VPC Peering:** _Private communication links between VPCs in different organizations (remember Resource Hierarchy)._
*   **Shared VPC**: _Sharing VPC across resources within the same organization._
*   **Cloud Interconnect**: _Service that links resources in VPCs to an on-premises data centre. Can be a Direct Connection (Dedicated) or via 3rd Party (Partner)_
*   **Firewalls**: _Rules that control the flow of traffic in networks across networks_
*   **Cloud CDN**: _Allows you to cache objects closest to the user thereby reducing latency._
*   **Cloud Load Balancing**: _Scaling up and down of backend instances on the upcoming traffic._

I can’t stress enough how important these topics are for the exam. You must know how to [choose your load balancer](https://cloud.google.com/load-balancing/images/choose-lb.svg). Everything about VPNs and VPCs should be known. _You just know that subnets are created when VPC network is created._ **_Subnets are regional resources_** but they can communicate with any other subnet inside a VPC. _Each_ **_subnet_** _defines a range of IP addresses._

When you create a subnet on your own, you need to provide the IP address range.

#### DNS Resolution

When a VM instance is created, the DNS entries are automatically created resolving to a formatted hostname. A **_fully qualified domain name_** (**_FQDN_**) is the complete domain name for a specific computer, or host, on the internet. The FQDN consists of two parts: the hostname and the domain name.

```
**FQDN = <pre>[hostname].c.[project-id].internal</pre>**
```

Example,

If you had a VM instance “kangaroo” with a project-id “my-project”, then the DNS FQDN would be,

```
**kangaroo.c.my-project.internal**
```

#### Address Allocation For Private Internets

This is taken from a document specifies an Internet Best Current Practices for the Internet Community and requests discussion and suggestions for improvements.

The Internet Assigned Numbers Authority (IANA) has reserved the following three blocks of the IP address space for private internets:

```
    ** 10.0.0.0        -   10.255.255.255  (10/8 prefix)  
     172.16.0.0      -   172.31.255.255  (172.16/12 prefix)  
     192.168.0.0     -   192.168.255.255 (192.168/16 prefix)**
```

We will refer to the first block as “_24-bit block_”, the second as “_20-bit block_”, and to the third as “_16-bit_” block. Note that (in pre-CIDR notation) the first block is nothing but a single class A network number, while the second block is a set of 16 contiguous class B network numbers, and the third block is a set of 256 contiguous class C network numbers.

[**RFC 1918 – Address Allocation for Private Internets**  
_Network Working Group Y. Rekhter Request for Comments: 1918 Cisco Systems Obsoletes: 1627, 1597 B._tools.ietf.org](https://tools.ietf.org/html/rfc1918)

#### Some Other Important Things

*   You must **_know about choosing the Load Balancer_** based on the scenario. See [_ref_](https://cloud.google.com/load-balancing/docs/choosing-load-balancer).
*   Google emphasizes you to know the **_gcloud_**, **_bq_**, **_gsutil_** and **_kubectl_** command-line utilities. Google has created [**_cheat-sheets_**](https://cloud.google.com/sdk/docs/images/gcloud-cheat-sheet.pdf) which I would highly recommend to read this every day and practice in **_Cloud Shell_**_._
*   Know everything about **_Google Kubernetes Engine (GKE)_** from understanding **_Kubernetes architecture_** to **_deploying applications in GKE clusters_**. See [_ref_](https://cloud.google.com/kubernetes-engine#section-5).
*   Know about the **_Deployment Manager._** See [_ref_](https://cloud.google.com/deployment-manager/docs)**_._**
*   Know about **_Stackdriver Monitoring, Trace, Debug, and Logging._** 
*   Know about _**creating snapshots to periodically**_ **_backup data from your zonal persistent disks or regional persistent disks_**. To reduce the risk of unexpected data loss, consider the best practice of setting up a snapshot schedule to ensure your data is backed up on a regular schedule. See [_ref_](https://cloud.google.com/compute/docs/disks/create-snapshots). 
*   Know about ML tools like **_Cloud Dataflow_**, **_Cloud Dataproc_**, **_Cloud Fusion_**, etc. 

### Read. Practice. Repeat.

It is extremely important for you to have hands-on experience as already emphasized a few times in the article. It is also important to have practice exams before appearing for the cloud exam. I took the official practice tests by google available for free.

[**Associate Cloud Engineer Sample Exam Questions | Certifications**  
_The Cloud Engineer sample questions will familiarize you with the format of exam questions and example content that may…_cloud.google.com](https://cloud.google.com/certification/sample-questions/cloud-engineer)

The more you practice, the more you become aware of scenario-based questions. I think one should never appear for the Cloud exam without taking the practice tests.

### Final Thoughts

Cloud computing is the most in-demand skill a developer must-have. I wanted to get certified and glad I did. I wanted to share my journey in the article. Trust me on this, you will learn a lot when you are reading, researching and practising for a certification.

I have barely scratched the surface in this article. I would suggest you have your own preparation, make your own notes, choose your own course, everything is available out there, the important thing is that with the journey and your research on services, you will learn a lot.

* * *

**If you enjoyed reading this, you might also find the below articles worth your time.**

[**Everything A Developer Must Know About Microservices**  
_Microservices have become the application platform of choice for cloud application_](https://thedeveloperstory.com/2020/11/10/everything-a-developer-must-know-about-microservices/)_[s development.](https://thedeveloperstory.com/2020/11/10/everything-a-developer-must-know-about-microservices/)_

[**Features That Every Developer Must Know About Spring Boot**  
_If you are not living under the rock, then you must have heard about Spring Boot, the framework which provides a simpler and faster way to set up, configure, and run both simple and web-based applications._](https://thedeveloperstory.com/2020/11/15/features-that-every-developer-must-know-about-spring-boot/)

[**Best Coding Practices Every Developer Must Follow**  
_Recently, I have been stumbled upon a question by a Junior Developer on what coding best practices he must follow._](https://thedeveloperstory.com/2020/12/06/best-coding-practices-every-developer-must-follow/)

* * *

_If this article has helped you in any way, please_ [_support my work_](https://buymeacoffee.com/viveknaskar) _only if you can afford it. You can also_ [_connect with me on X_](https://x.com/vivek_naskar)_. Thank you!_