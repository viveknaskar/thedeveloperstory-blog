---
title: "How To Build An SMS Alert System Using Spring Boot In Java"
description: "We have all been flooded with notifications through multiple apps, whether it’s WhatsApp, Instagram, Reddit, or Snapchat. When there are events that are important, we get notified via the in-app pop-ups, mails, and SMS. Have you ever tried building an alert system whenever you wanted? Well, in this piece, I would try to do the [&hellip;]"
pubDate: 2022-10-17
heroImage: "/blog-images/wp-pexels-ketut-subiyanto-4559593-scaled.jpg"
categories: ["Java"]
tags: ["Alert System","developer","Java","SMS","Spring Boot","thedeveloperstory","Twilio"]
---

We have all been flooded with notifications through multiple apps, whether it’s WhatsApp, Instagram, Reddit, or Snapchat. When there are events that are important, we get notified via the in-app pop-ups, mails, and SMS.

Have you ever tried building an alert system whenever you wanted? Well, in this piece, I would try to do the same — build an SMS alert system whenever an API is called.

All we need is _Twilio_, a customer engagement platform that thousands of platforms used to create a customized experience for their customers.

* * *

### What You Need Before You Start

Before starting this, you should have a basic understanding of Java, Maven, and Spring Boot. 

For the purpose of this project, I will be using:

*   [Java 11](https://www.oracle.com/java/technologies/downloads/)
*   Spring Boot 2.7.x
*   [Apache Maven](https://maven.apache.org/) 3.6.3
*   [Twilio account](https://www.twilio.com/try-twilio?promo=YbalWV)
*   [IntelliJ Idea](https://www.jetbrains.com/idea/download/#section=windows) Community Edition (IDE)

* * *

### Create a Free Account in Twilio

You need to create a free account with Twilio, where you will need to set up your phone number in the subsequent steps. Also, for creating the free account, no credit card is required.

Use this link to create a Twilio account: [_https://www.twilio.com/try-twilio_](https://www.twilio.com/try-twilio)

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665419003484-1024x753.png)

Once you have filled in the details and confirmed your verification mail, you need to add and confirm your phone number, where the SMS alert system will be activated.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665469674676-1024x392.png)

Once the phone number is confirmed, you should see a welcome page where you need to complete the form with the below required details before clicking the **_Get Started with Twilio_** button.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665470302641-1024x781.png)

The Twilio Console will look like:

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665470840181-1024x456.png)

The fields in **_Account SID_** and **_Auth Token_** should not be shared, or else anyone can have access to your Twilio account. We will be using both these fields in the upcoming steps.

In the same console, there is a button, ‘**_Get a trial phone number’_** that will enable you to get a valid Twilio phone number. This is required to send SMS with Twilio.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665472095795-1024x460.png)

Once the valid phone number is generated, it will be there in the Twilio console along with the _Account SID_ and _Auth Token_.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665474008187-1024x632.png)

### Setting up the Spring Boot Application

As usual, you can download the blank demo application from [_Spring Initializer_](https://start.spring.io/).

Add the Twilio SDK dependency to the _pom.xml_ file of your spring boot project.

```
**<dependency>
   <groupId>com.twilio.sdk</groupId>
   <artifactId>twilio</artifactId>
   <version>9.0.1</version>
</dependency>**
```

Hence, the complete dependencies list in the _pom.xml_ would look like below:

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/carbon-1-1024x914.png)

Get the code [here](https://gist.github.com/viveknaskar/638bb74e16d958a423d170d0e1c9cf21#file-pom-xml "here")

### Building the Alert System

For this simple application illustration, I am using a single controller that would take in the alert message that you want to send as the payload. Hence, the message is customizable.

Now, for using Twilio SDK, you have to initialize the credentials of it by using the _init()_ method in the `[**_@PostConstruct_**](https://docs.oracle.com/javaee/7/api/javax/annotation/PostConstruct.html)` annotation.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/carbon-1-1-1024x997.png)

Get the code [here](https://gist.github.com/viveknaskar/f9bc70f6d357a2271755faed63bffeff#file-twilioconfig-java "here")

The _Account SID,_ `**${twilio.account.sid}**` and _Auth Token_,`**${twilio.auth.token}**` in the _TwilioConfig_ class will be passed via the `[**_@Value_**](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Value.html)` annotation from the _application.properties_ file.

```
**#Twilio platform credentials
twilio.account.sid=<your-twilio-account-sid>
twilio.auth.token=<your-twilio-auth-token>**
```

The core functionality of sending SMS messages works when the static method `**_Message.creator(param1, param2, param3)_**` with all the parameters passed. Here, `**_param1_**` is the phone number of the receiver (_your phone number_), `**_param2_**` is the phone number of the sender (_Twilio phone number_), and `**_param3_**` is the message to be sent.

The above functionality has been implemented in the `**_sendSMS()_**` method of the _AlertServiceImpl_ class, which implements the _AlertService_ interface class.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/carbon-2-1024x987.png)

Get the code here

As mentioned earlier, the controller class is pretty straight-forward. It calls the method `**_sendSMS()_**` of the _AlertService_ interface class.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/carbon-3-1024x777.png)

Get the code here

### Testing the Application

Once the application is started, you can test it via postman with your customized message.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665509015191-1024x463.png)

If it is successful, you will receive the message in your phone number.

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665570606788-1024x765.png)

There you go! You sent your first SMS using Spring boot.

* * *

Note: You can get the complete code along with the postman collection from [_https://github.com/viveknaskar/sms-alert-system_](https://github.com/viveknaskar/sms-alert-system).

I absolutely loved working on this article, and I hope you guys do enjoy working on your own messaging system. This is barely scratching the surface. We can do so much more.

Feel free to play around with the code and try sending SMS messages to multiple people or getting the phone number of the receiver from the payload itself.

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_