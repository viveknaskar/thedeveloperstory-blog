---
title: "Triggering Cloud Functions With Cloud Storage in Java"
description: "Google Cloud Functions is a serverless execution environment for building and connecting cloud services. With Cloud Functions, you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your function is triggered when an event being watched is fired. Your code executes in a fully managed environment. There is [&hellip;]"
pubDate: 2020-07-22
heroImage: "/blog-images/wp-pexels-photo-4009622.jpeg"
categories: ["Google Cloud Platform"]
tags: ["cloud-function","cloud-storage","cloudcomputing","Devops","gcp","Google Cloud Platform","thedeveloperstory"]
---

Google Cloud Functions is a serverless execution environment for building and connecting cloud services. With Cloud Functions, you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your function is triggered when an event being watched is fired. Your code executes in a fully managed environment. There is no need to provision any infrastructure or worry about managing any servers.

*   Serverless execution environment for building and connecting cloud services
*   Write simple, single-purpose functions that are attached to events emitted from your cloud services
*   These functions execute code in response to events based on triggers

## Key Terms used in Cloud Functions

### Event

Events are the things that happen in the cloud environment. These can be:

*   changes to data in a database
*   files added to a storage system
*   a new virtual machine instance being created

### Trigger

Declaration of interest in an event. We bind a function to a trigger and when the trigger is set, the function is executed.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/triggers.jpg)

Triggers available in Cloud Function

Triggers are associated with available resources such as Cloud storage, Cloud pub-sub, HTTP, Firebase Analytics, Firebase Authentication and Firebase real-time database.

### Runtimes

Cloud Functions supports multiple language runtimes:

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/gcf-runtimes.png)

Multiple language runtimes for Cloud Functions

## Triggering Cloud Storage with Cloud Functions

The idea is when an object is put in Google Cloud Storage, the cloud function must be triggered and it will be logged likewise.

**Step 1.**) Create a Cloud Storage Bucket

Go to **Navigation — Cloud Storage** **—** **Give a unique bucket name**

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/gcs-1024x364.png)

When the GCS bucket is created, it looks like this.  

**Step 2.)** Create a Cloud Function

Go to **Navigation —> Cloud Functions —> Create Function**

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/google-cloud-functions.png)

**Step 3.)** Selecting the Trigger and Event Type

After clicking _Create Function_, you must give a proper name of the Cloud Function and select the Trigger as _Cloud Storage_ and Event type as _Finalise/Create_ (this determines when an object is put into the bucket, it will trigger cloud function).

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/gcf-trigger.png)

Select Cloud Storage as the Trigger

**Step 4.)** Select the Google Cloud Storage bucket you want to trigger.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/select-gcs-bucket-1024x469.png)

Selecting _cloud-function-gcsbucket_ in the Browse-able Bucket field  

**Step 5.)** Selecting the Runtime for running the Cloud Function

The Java programming language recently turned 25 years old, and it’s still one of the top-used languages powering today’s enterprise application customers. Google brought Java 11 to Google Cloud Functions in Q1 2020. That means you can now write Cloud Functions using your favourite JVM languages ([Java](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/functions/helloworld/helloworld), [Kotlin](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/functions/helloworld/kotlin-helloworld), [Groovy](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/functions/helloworld/groovy-helloworld), [Scala](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/functions/helloworld/scala-helloworld), etc) with our [Functions Framework for Java](https://github.com/GoogleCloudPlatform/functions-framework-java), and also with [Spring Cloud Functions](https://cloud.spring.io/spring-cloud-static/spring-cloud-function/3.0.6.RELEASE/reference/html/gcp.html) and [Micronaut](https://micronaut-projects.github.io/micronaut-gcp/2.0.x/guide/#simpleFunctions)!

With Cloud Functions for Java 11, now in beta, you can use Java to build business-critical applications and integration layers, and deploy the function in a fully managed environment, complete with access to resources in a private VPC network. Java functions will scale automatically based on your load. You can write [HTTP functions](https://cloud.google.com/functions/docs/writing/http) to respond to HTTP events, and [background functions](https://cloud.google.com/functions/docs/writing/background) to process events sourced from the various cloud and GCP services, such as Pub/Sub, Cloud Storage, Firestore, and more.

So, you have to select Java 11 in the Runtime drop-down.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/source-code.png)

#### pom.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>cloudfunctions</groupId>
  <artifactId>gcs-function</artifactId>
  <version>1.0-SNAPSHOT</version>

  <properties>
    <maven.compiler.target>11</maven.compiler.target>
    <maven.compiler.source>11</maven.compiler.source>
  </properties>
  <dependencies>
    <dependency>
      <groupId>com.google.cloud.functions</groupId>
      <artifactId>functions-framework-api</artifactId>
      <version>1.0.1</version>
      <type>jar</type>
    </dependency>
  </dependencies>

  <!-- Required for Java 11 functions in the inline editor -->
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <excludes>
            <exclude>.google/</exclude>
          </excludes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>

```

#### src/main/java/com/example/example.java

```
package com.example;

import com.example.Example.GCSEvent;
import com.google.cloud.functions.BackgroundFunction;
import com.google.cloud.functions.Context;
import java.util.logging.Logger;

public class Example implements BackgroundFunction<GCSEvent> {
  private static final Logger logger = Logger.getLogger(Example.class.getName());

  @Override
  public void accept(GCSEvent event, Context context) {
    logger.info("Processing file: " + event.name);
    throw new UnsupportedOperationException("Not supported yet.");
  }

  public static class GCSEvent {
    String bucket;
    String name;
    String metageneration;
  }
}

```

**Step 6.)** Click the _Create_ button for creating Cloud Function

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/create-function.png)

**Step 7.)** Check and confirm that the Cloud Function is successfully created.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/function-created-1024x210.png)

**Step. 8)** Check the _View logs_ under **Actions —> 3-horizontal-dots**

When the function is created, you can view the logs to see that the function has been created.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/logs-after-function-creation-1024x426.png)

Logs updated after _triggerGCSEvent_ function is created  

**Step 9.)** Upload a file in the GCS bucket to trigger Cloud Functions

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/uploaded-file-in-gcs-bucket-1024x482.png)

Uploaded an image, _Sitting.jpeg_ in the GCS bucket

**Step 10.)** Check the logs after uploading the file in the GCS bucket

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/function-triggered-1024x338.png)

Cloud Function got triggered when the file is uploaded in the GCS object  

## Conclusion

Cloud Functions are a great fit for serverless application backends for integrating with third-party services and APIs, or for mobile or IoT backends. You can also use functions for real-time data processing systems, like processing files as they are uploaded to Cloud Storage, or handling real-time streams of events from Pub/Sub. Last but not least, functions can serve intelligent applications like virtual assistants and chatbots, or video, image and sentiment analysis.

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_