---
title: "Features That Every Developer Must Know About Spring Boot"
description: "If you are not living under the rock, then you must have heard about Spring Boot, the framework which provides a simpler and faster way to set up, configure, and run both simple and web-based applications. Spring Boot is a&nbsp;framework created to simplify the bootstrapping and development of a new Spring application&nbsp;by the Pivotal team. [&hellip;]"
pubDate: 2020-11-15
heroImage: "/blog-images/wp-walling-xlqil-rz4v8-unsplash-scaled.jpg"
categories: ["Java","Spring"]
tags: ["blogger","blogging","developer","developerblog","javaframework","programmer","softwaredevelopment","springboot","springbootframework","springframework","thedeveloperstory","webdeveloper"]
---

If you are not living under the rock, then you must have heard about Spring Boot, the framework which provides a simpler and faster way to set up, configure, and run both simple and web-based applications. Spring Boot is a [framework created to simplify the bootstrapping and development of a new Spring application](https://spring.io/projects/spring-boot) by the Pivotal team.

## History

Well, Pivotal was heavily criticized for their heavy reliance of XML based configurations. In 2013, [the CTO of Pivotal made the company mission to make an XML-free development platform](https://www.youtube.com/watch?v=jplkJIHPGos) that would not only simplify the development of the applications but also would simplify the dependency management, which was a nightmare back then.

In the third quarter of 2013, Spring Boot gained huge popularity by demonstrating its simplicity with a runnable web application that fit in under 140-characters, delivered in a tweet. This tweet came after its first beta release and was enough to make the developers talk about it.

> [@Controller](https://twitter.com/Controller?ref_src=twsrc%5Etfw)  
> class ThisWillActuallyRun {  
> [@RequestMapping](https://twitter.com/RequestMapping?ref_src=twsrc%5Etfw)("/")  
> [@ResponseBody](https://twitter.com/responsebody?ref_src=twsrc%5Etfw)  
> String home() {  
> "Hello World!"  
> }  
> }
> 
> — Rob Winch #BLM (@rob_winch) [August 6, 2013](https://twitter.com/rob_winch/status/364871658483351552?ref_src=twsrc%5Etfw)

The Viral tweet of Spring Boot’s “Hello World” in 2013  

Spring Boot, in a single line, means:  
**( Spring Framework — XML Configuration) + Integrated Server**

## Some Components of Spring Boot

**Spring Boot Core** is a base for other Spring models and provides functionalities that work on their own with validation. **Spring Boot CLI** is a command-line interface based on ruby and rails for its function. However, to start and stop the application, spring boot is required.

**Spring Boot Actuator** enables enterprise features that can be used in your application, which can auto-detect frameworks and features of your application and use it accordingly as and when required. Integrating actuators with spring boot application can be done by including the **_spring-boot-starter-actuator_** starter in the _pom.xml_ file:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

**Spring Boot Starters** help to initiate the project and are included as a dependency in your built file. It automatically adds starter projects and dependencies for the kind of application you are developing. There are more than 50 starters at our disposal. The most commonly used are:

*   **_spring-boot-starter_**_:_ core starter, including auto-configuration support, logging, and YAML
*   **_spring-boot-starter-data-jpa:_** starter for using Spring Data JPA with Hibernate
*   **_spring-boot-starter-security:_** starter for using Spring Security
*   **_spring-boot-starter-test:_** starter for testing Spring Boot applications
*   **_spring-boot-starter-web:_** starter for building web, including RESTful, applications using Spring MVC

## Features of Spring Boot

There are tonnes of features that are proven to make the lives of the developers easier. However, the below features are at the top of the list.

#### Dependency Management

Prior to the release of the spring-boot framework, dependency management was quite an uphill task especially for newbie developers or even seasoned developers as it was required to know the compatible dependencies required in order to make your application up and running.

Spring Boot manages dependencies and configuration automatically. Each release of Spring Boot provides a list of dependencies that it supports. The list of dependencies is available as a part of the **Bills of Materials** or **BOM,** which is essentially spring-boot-dependencies that can be used with **Maven**. This means that you don’t necessarily need to mention the version of the dependency as Spring manages it. _This avoids mismatch of different versions of Spring Boot libraries and quite useful if you are working in a multi-module project._

#### Auto-configuration

If you ask me, this is the _most important feature_ _of Spring Boot, is auto-configuration_. It auto-configures your application according to your dependencies. It is not only intelligent and effective, but also contextually smart and keep a record of your requirements.

Let us take the example of a database feature. In case you have added a requirement to a pom.xml, which somehow relates to a database, Spring boot implies by itself that you would like to use a database and thus it allows your application to make use of the precise database anytime.

The annotation `@EnableAutoConfiguration` enables auto-configuration for spring boot, using which the _framework looks for_ **_auto-configuration beans_** _on its classpath and automatically applies them_. It is always used with `@Configuration` as shown below:

```
@Configuration
@EnableAutoConfiguration
class BootAutoConfigExample{
…
}
```

Most auto-configuration respects your own configuration and backs off silently if you have provided your own configuration via your own beans.

#### Designs Standalone Applications

_Spring boot allows you to design_ **_stand-alone, production-grade quality applications_** _that you can run on any website without wasting time._ You might think that running a java application is extremely simple and easy. All you need to do is give a run command and everything starts happening exactly the way it should be. But that’s just your assumption (_it was mine, anyway_ 😑).

To run a java application, the following steps are required:

1.  Package your application
2.  Choose the type of web server where you want to run your application and download it
3.  Configure that web server
4.  Organize the deployment process

BUT, if you’re using Spring Boot framework to run your application, you just need to follow the below two steps:

1.  Package your application
2.  Run your application using commands such as _java -jar my-application.jar_

That’s all you need to do. _Spring Boot takes care of the rest of your requirements by simply_ **_configuring and deploying an embedded web server_** _like_ [_Apache Tomcat_](https://tomcat.apache.org/index.html) _to your application._

#### Opinionated Configuration

As mentioned in the [spring.io documentation](https://spring.io/projects/spring-boot),

> _“We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.”_

I cannot explain this feature any easier than this 🤓. Spring Boot takes an opinionated view before it starts building or deploying a new Spring application. When you use Java, you have adequate options to choose, starting from the web, logging, collection framework, or the build tool you use.

_Instead of having so many choices in Java, developers like to use only the popular libraries._ All that the Spring Boot does is that it loads and configures them in the most standard way. Hence, the developers don’t need to spend a lot of time to configure up the same thing over and over again. In this way, they have more time for writing code and meeting business requirements.

* * *

Spring Boot, _is Spring on steroids,_ if you will. It’s a great way to get started very quickly with almost the entire Spring stack. It helps you to set up a fully working application very quickly by providing you with intelligent default configurations that you are most likely to be satisfied, to begin with.

If you are like me, you would want more. Hence, concluding this with reference articles, you might want to look at.

*   [Spring Framework Documentation](https://spring.io/projects/spring-framework)

*   [Spring Boot Auto-configuration Feature](https://docs.spring.io/spring-boot/docs/2.1.11.RELEASE/reference/html/boot-features-developing-auto-configuration.html)

*   [Spring Boot Starter Dependencies](https://github.com/spring-projects/spring-boot/tree/master/spring-boot-project/spring-boot-starters)

**You might also find the below articles worth your time.**

*   [Everything A Developer Must Know About Microservices](https://thedeveloperstory.com/2020/11/10/everything-a-developer-must-know-about-microservices/)

*   [Comprehensive Notes For Java 8 Features Every Developer Must Have](https://thedeveloperstory.com/2020/10/23/comprehensive-notes-for-java-8-features-every-developer-must-have/)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_