---
title: "Messaging Using Google Pub/Sub and Spring Boot"
description: "You might have come across many instances when you open your email inbox, you find a promotional mail from Amazon stating for its upcoming sale but then you might find the same mail for your mail as well (if he allows you to peek into his inbox, of course). These mails are sent across all [&hellip;]"
pubDate: 2021-02-07
heroImage: "/blog-images/wp-tommaso-pecchioli-9xr1edng38-unsplash-scaled.jpg"
categories: ["Google Cloud Platform","Spring"]
tags: ["blogger","blogging","developerblog","Google Cloud","Pub/Sub","Spring Boot","thedeveloperstory","writer"]
---

You might have come across many instances when you open your email inbox, you find a promotional mail from Amazon stating for its upcoming sale but then you might find the same mail for your mail as well (if he allows you to peek into his inbox, of course). These mails are sent across all the consumers like you and me who have subscribed to the promotional notifications from Amazon. These mails are a broad example of the publisher-subscriber design pattern which the bigger organizations like Google, Amazon, Spotify, etc. use regularly to promote events to all their consumers (or rather subscribers).

## Publish/Subscribe Pattern

The Publish/Subscribe pattern, also known as pub/sub, is an architectural design pattern that provides a framework for exchanging messages between publishers and subscribers. This pattern involves the publisher and the subscriber relying on a message broker that relays messages from the publisher to the subscribers. The host (publisher) publishes messages (events) to a channel that subscribers can then sign up to.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/pubsub-working.gif)

Pub/Sub Communication Infrastructure

## Cloud Pub/Sub

Google Cloud Pub/Sub is an asynchronous messaging service built on a core Google infrastructure component that many Google products have relied upon for over a decade. Google products including Ads, Search and Gmail use this infrastructure to send over 500 million messages per second, totalling over 1TB/s of data.

_That’s freaking awesome! Isn’t it?_

It is said to be Google’s own implementation of Apache Kafka and the fact that it is fully managed by Google makes it highly reliable and scalable. 

An excellent YouTube video on the overview of Pub/Sub’s application on real life

## Some Hands-on To Get Started

Recently, I created a Spring boot application for my organization that is subscribed to a topic event and would perform a task on receiving the message from the publisher. The topic, of course, is created in Google Pub/Sub service. 

In this article, I will create a Pub/Sub topic in Google Cloud Platform and publish a message and this message will be subscribed by a Spring boot application and will log the message in the console. Obviously, the article will be a bare minimum demonstration to give you a gist of the Pub/Sub service.

#### Prequesities

*   You need to have a GCP account. If you don’t have one, you can easily create using your Credit/Debit card, they won’t charge you anything. The free trial gives you $300 for 90 days. You must refer [_here_](https://console.cloud.google.com/freetrial/signup/tos) for more details.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/free-trial.png)

*   You must be familiar with [Cloud SDK](https://cloud.google.com/sdk/) for authenticating your local machine for connecting to Pub/Sub service. Read [_here_](https://cloud.google.com/sdk/docs/authorizing) for authenticating your machine with Google Cloud. 
*   Basic understanding of Spring boot framework (considering the fact that you know some Java). Of course, the programming language is no bar with learning Pub/Sub service, just that, for the scope of this article and demo, I am using Spring boot.

### Creating Cloud Pub/Sub Topic & Subscription

Assuming that you already have created a Project in your GCP account, every service in Google Cloud requires a Project which can be considered as a workspace for creating VPCs, VPNs, VM machines, Databases, and other Cloud services.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/project-1024x401.png)

My project name for creating Pub/Sub topic

* * *

Then you need to _Enable Pub/Sub API_ for using the service. You can do this by hovering down over all the services on the menu and select Pub/Sub, which would take you to the enabling Pub/Sub API page.

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/8a602-1pzbgteomrb31eql3xjmdjg.png)

Select Pub/Sub to enable API and use the service.

Once Pub/Sub service is enabled, you would be able to create a topic for publishing a message. So, let’s create a topic. I gave a name `pubsubdemoTopic` and clicked _Create Topic_.

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/fa9b6-1coakpjfoeb0_mufswadljw.png)

From the Pub/Sub homepage, you then need to click _Create Subscription_ button and create Subscription `pubsubdemoSubscription**.**` You need to select the Cloud Pub/Sub topic `pubsubdemoTopic**,**` delivery type as _Pull_ and click _Create._

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/7aa05-170rhhq5mmezdczelxktwga.png)

### Creating a Spring Boot Application

I have created a spring boot application that uses the subscription for reading the published messages. For that, you need to use two dependencies, basically.

```
<dependency>
   <groupId>org.springframework.cloud</groupId>
   <artifactId>spring-cloud-gcp-starter-pubsub</artifactId>
</dependency>

<dependency>
   <groupId>org.springframework.integration</groupId>
   <artifactId>spring-integration-core</artifactId>
</dependency>
```

The complete pom.xml for the Event Subscriber consists of two important dependencies, `spring-cloud-gcp-starter-pubsub`and `spring-integration-core`. The application is a web application and would use the embedded tomcat server. 

**pom.xml**

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.4.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.viveknaskar.eventsubscriber</groupId>
	<artifactId>event-subscriber</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>Event Subscriber</name>
	<description>Spring Boot Application with Google Cloud Platform's PubSub service</description>
	<properties>
		<java.version>11</java.version>
		<spring-cloud-gcp.version>1.2.5.RELEASE</spring-cloud-gcp.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-gcp-starter-pubsub</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.integration</groupId>
			<artifactId>spring-integration-core</artifactId>
		</dependency>
	</dependencies>
	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.springframework.cloud</groupId>
				<artifactId>spring-cloud-gcp-dependencies</artifactId>
				<version>${spring-cloud-gcp.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>
```

For pulling messages from the subscription created, I created a service called `EventSubscriberService.` 

**EventSubscriberService.java**

```
package com.viveknaskar.eventsubscriber;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.gcp.pubsub.core.PubSubTemplate;
import org.springframework.cloud.gcp.pubsub.integration.AckMode;
import org.springframework.cloud.gcp.pubsub.integration.inbound.PubSubInboundChannelAdapter;
import org.springframework.cloud.gcp.pubsub.support.BasicAcknowledgeablePubsubMessage;
import org.springframework.cloud.gcp.pubsub.support.GcpPubSubHeaders;
import org.springframework.context.annotation.Bean;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;
import org.springframework.stereotype.Service;
@Service
public class EventSubscriberService {
    /**
     *  Created an inbound channel adapter to listen to the subscription `pubsubdemoSubscription`
     *  and send messages to the input message channel.
     */
    @Bean
    public PubSubInboundChannelAdapter messageChannelAdapter(
            @Qualifier("pubsubInputChannel") MessageChannel inputChannel,
            PubSubTemplate pubSubTemplate) {
        PubSubInboundChannelAdapter adapter =
                new PubSubInboundChannelAdapter(pubSubTemplate, "pubsubdemoSubscription");
        adapter.setOutputChannel(inputChannel);
        adapter.setAckMode(AckMode.MANUAL);
        return adapter;
    }
    /**
     * Created a message channel for messages arriving from the 
     * subscription `pubsubdemoSubscription`.
     */
    @Bean
    public MessageChannel pubsubInputChannel() {
        return new DirectChannel();
    }
    /**
     * Defined what happens to the messages arriving in the message channel.
     */
    @Bean
    @ServiceActivator(inputChannel = "pubsubInputChannel")
    public MessageHandler messageReceiver() {
        return message -> {
           System.out.println("Message arrived! Payload: " + new String((byte[]) message.getPayload()));
            BasicAcknowledgeablePubsubMessage originalMessage =
                    message.getHeaders().get(GcpPubSubHeaders.ORIGINAL_MESSAGE,
                            BasicAcknowledgeablePubsubMessage.class);
            originalMessage.ack();
        };
    }
}
```

The `inboundChannelAdapter` asynchronously pulls messages from the subscription`pubsubdemoSubscription` using a `PubSubTemplate` and sends the messages to `inputMessageChannel.` The `inboundChannelAdapter` sets the acknowledgement mode to `MANUAL` so the application can acknowledge messages after it processes them. The default acknowledgement mode of `PubSubInboundChannelAdapter` type is`AUTO`. The `ServiceActivator` bean `messageReceiver` logs each message arriving in `inputMessageChannel` to the standard output and then acknowledges the message.

### Publishing Message & Printing from Subscription

For publishing a message, you must go to the Pub/Sub homepage and then select Topics, you must click _Publish Message._

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/004ca-1svvllrag1gkxdnmx1ehfsg.png)

A page would appear for you to publish a message in the _Message Body_ and then _Publish._

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/24bdb-1zqgiqa8fa7atj8ismg8heq.png)

Now, since the application is already subscribed to the topic, the message would be successfully logged onto the console. 

![](http://thedeveloperstory.com/wp-content/uploads/2021/02/a2ae9-1csgxurvsfsd2vtm05lt27a.png)

Message logged in the console

If you followed along, then congratulations, you just created a subscription application that logs the messages from Cloud Pub/Sub topics. 

You can get the full code from [_this GitHub repository_](https://github.com/viveknaskar/event-subscriber/tree/master).

## That’s a Wrap!

This was just a small overview of the publisher-subscriber pattern, and this is just one small application. There are so numerous things a Pub/Sub service can do and to be honest, it is barely covered in this article. I would strongly suggest [_reading the documentation for more insights_](https://cloud.google.com/pubsub/docs).

Pub/Sub service has been implemented by all the other major cloud service providers, including Amazon Web Services (AWS) and Microsoft Azure. For Google Cloud, Pub/Sub is one of the most used services in the platform and has been prominent in building various ‘Enterprises’ Event Delivery Systems’.

One such example is _Spotify’s Event Delivery System,_ which you read from their documentation.

[**Spotify’s Event Delivery — The Road to the Cloud (Part II)**  
_Whenever a user performs an action in the Spotify client-such as listening to a song or searching for an artist-a small…_engineering.atspotify.com](https://engineering.atspotify.com/2016/03/03/spotifys-event-delivery-the-road-to-the-cloud-part-ii/)

* * *

**If you enjoyed reading this, you might also find the below articles worth your time.**

[**A Developer’s Guide For Passing Google Cloud Associate Cloud Engineer Exam**  
_One of the goals of mine was to get certified in Cloud. When they said, “Everything is moving to cloud” a few years…_thedeveloperstory.com](https://thedeveloperstory.com/2021/01/10/a-developers-guide-for-passing-google-cloud-associate-cloud-engineer-exam/)

[**Features That Every Developer Must Know About Spring Boot**  
_If you are not living under the rock, then you must have heard about Spring Boot, the framework which provides a…_thedeveloperstory.com](https://thedeveloperstory.com/2020/11/15/features-that-every-developer-must-know-about-spring-boot/)

[**Everything A Developer Must Know About Microservices**  
_Microservices have become the application platform of choice for cloud applications development. Nginx conducted a…_thedeveloperstory.com](https://thedeveloperstory.com/2020/11/10/everything-a-developer-must-know-about-microservices/)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_