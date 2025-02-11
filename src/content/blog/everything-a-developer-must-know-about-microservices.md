---
title: "Everything A Developer Must Know About Microservices"
description: "Microservices have become the application platform of choice for cloud applications development. Nginx conducted a survey and they found that about 70% of the organizations are either using or investigating microservices, with nearly 1/3 currently using them in production. Gartner, a global research and advisory firm, defines a microservice as, “a service-oriented application component that [&hellip;]"
pubDate: 2020-11-10
heroImage: "/blog-images/wp-mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"
categories: ["Microservices"]
tags: ["developer","developerblog","devopsengineer","Docker","Nginx","programmer","servicediscovery","softwaredevelopment","thedeveloperstory"]
---

Microservices have become the application platform of choice for cloud applications development. [Nginx conducted a survey](https://www.nginx.com/resources/library/app-dev-survey/) and they found that about _70% of the organizations are either using or investigating microservices, with nearly 1/3 currently using them in production_. Gartner, a global research and advisory firm, defines a microservice as,

> **“a service-oriented application component that is tightly scoped, strongly encapsulated, loosely coupled, independently deployable and independently scalable”**

This article is about refreshing your microservices knowledge. Everything you must/should know if you have/haven’t worked with microservices has been documented. _Let’s get started. Shall we?_

## So, what the heck is a Microservice?

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/bruce-mars-xj8qrWvuOEs-unsplash-1024x683.jpg)

Photo by [bruce mars](https://unsplash.com/@brucemars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/question?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Microservices architectures, or simply Microservices is an SDLC approach based on which larger applications are built as a collection of small functional modules. These functional modules are independently deployable, scalable, target specific business goals, and communicate with each other over standard protocols like HTTP request/response with resource APIs and lightweight asynchronous messaging. 

The major advantage of having a microservices architecture is that the modules can be implemented using **_different programming languages, have their own databases, and deployed on different software environments like on-premises or cloud._**

## Advantages of Microservices

There are many advantages of microservices that really gives developers an edge over monolithic applications. 

*   Multiple services can be deployed independently in different environments like on-premises or cloud service providers 
*   Multiple services can be developed independently based on the functionality
*   If anyone of the services fails, the other services will continue to work as it isolates the fault of the failing service
*   Scaling of individual components is easier in microservices as the scaling of other components are not required unlike in monolithic architecture
*   Multiple technologies can be used for developing different components in the same application. 

### Monolithic vs Service-Oriented vs Microservice

*   **Monolithic Architecture** is similar to a big container wherein all the software components of an application are assembled together and tightly packaged.
*   **Service-Oriented Architecture** is a collection of services which communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating some activity.
*   **Microservice Architecture** is an architectural style that structures an application as a collection of small autonomous services, modelled around a business domain.

## When should Microservices be used?

When you are working with a monolith application, and it grows to an extent where there are issues in scaling or perhaps, when you are not able to reutilize the components across different projects or platforms and while implementing new features becomes painful and more error-prone, then you must use microservices.

When starting on newer applications, you would definitely want it to be easily scalable, maintainable, deployable and testable. Using microservices, these can be implemented more efficiently and used across various platforms.

## Service Discovery

Docker images are dynamically deployed on any machine or IP and port combination in a cloud environment, it becomes difficult for dependent services to update at the runtime. 

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/service-discovery.png)

Service Client is unaware of the IP and port combination assigned dynamically

Service instances have dynamically assigned network locations. Moreover, **_the set of service instances changes dynamically because of autoscaling, failures, and upgrades._** Consequently, your client code needs to use a more elaborate service discovery mechanism. Hence, service discovery is created to resolve this.

Hence, service discovery is one of the services running under microservices architecture, which registers entries of all of the services running under the service mesh. **_It is how applications and microservices locate each other on a network._**

### The Client‑Side Discovery Pattern

When using [client‑side discovery](https://microservices.io/patterns/client-side-discovery.html), the client is responsible for determining the network locations of available service instances and load balancing requests across them. The client queries a service registry, which is a database of available service instances. The client then uses a load‑balancing algorithm to select one of the available service instances and makes a request.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/client-side-discovery.png)

Client-side discovery pattern

### The Server‑Side Discovery Pattern

The other approach to service discovery is the [server-side discovery](https://microservices.io/patterns/server-side-discovery.html) pattern where the client makes a request to a service via a load balancer. The load balancer queries the service registry and routes each request to an available service instance. As with client‑side discovery, service instances are registered and deregistered with the service registry.

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/server-side-discovery.png)

Server-side discovery pattern

## Scaling of Microservices

*   One can scale the system by increasing the number of instances of service by bringing up more containers.
*   One can also apply to cache at microservice layer which can be easy to manage as an invalidation of the cache can be done very easily as the microservice will be the single source of truth.
*   Caching can also be introduced at the API Gateway layer where one can define caching rules like when to invalidate the cache.
*   One can also shut down or scale down some containers when the requirement is less. 

## Communication in Microservices

The most commonly used protocol that is integrated with microservices is REST over HTTP. Other communication protocols can also be used for integration like **AMQP, Kafka, GraphQL**, etc.

The communication protocol can broadly be divided into two categories: **_synchronous communication_** and **_asynchronous communication_**_._

### Synchronous Communication

RestTemplate, WebClient, FeignClient can be used for synchronous communication between two microservices. Ideally, we should minimize the number of synchronous calls between microservices because networks are brittle and they introduce latency. **Ribbon** — a client-side load balancer can be used for better utilization of resources on the top of RestTemplate. **Hystrix circuit breaker** can be used to handle partial failures gracefully without a cascading effect on the entire ecosystem. Distributed commits should be avoided at any cost, instead, we shall opt for eventual consistency using asynchronous communication.

### Asynchronous Communication

In this type of communication, the client does not wait for a response, instead, it just sends the message to the message broker. **AMQP** (_like_ **_RabbitMQ_**) or **Apache Kafka** can be used for asynchronous communication across microservices to achieve eventual consistency.

## Which Communication Protocol should be used?

Here comes the question of which communication protocols should be used.

1.  You must use asynchronous communication while handling HTTP POST/PUT (anything that modifies the data) requests, using some reliable queue mechanism (RabbitMQ, AMQP, etc.)
2.  You can use synchronous communication for Aggregation pattern at API Gateway Level which should not include any business logic other than aggregation. Data values must not be transformed at Aggregator, otherwise, it defeats the purpose of **Bounded Context**. In Asynchronous communication, events should be published into a Queue. Events contain data which is actually the domain but it does not focus on what can be done (action) with this data.
3.  If microservice to microservice communication still requires synchronous communication for GET operation, then you must partition your microservices for bounded context, and create some tasks in backlog/technical debt.

## Bounded Context

As [Martin Fowler stated](https://martinfowler.com/bliki/BoundedContext.html),

> **_“_Bounded Context is a central pattern in Domain-Driven Design. It is the focus of DDD’s strategic design section which is all about dealing with large models and teams. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships._”_**

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/bounded-context.png)

Illustration of Bounded Context

_Bounded context defines tangible boundaries of applicability of some sub-domain._ It is an area where a certain sub-domain makes sense, while others don’t. It can be a conversation, a presentation, a code project with physical boundaries defined by the artefact.

## Domain-Driven Design

The main focus of Domain-Driven Design or DDD is on the core domain logic. Complex designs are detected based on the domain’s model. This involves regular collaboration with domain experts to resolve issues related to the domain and improve the model of the application.

## Spring Cloud

Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems (_like configuration management, service discovery, circuit breakers, intelligent routing, micro-proxy, control bus, one-time tokens, global locks, leadership election, distributed sessions, cluster state_).

* * *

_Thank you for reading! You might also find the below articles worth your time._

*   [Features That Every Developer Must Know About Spring Boot](https://thedeveloperstory.com/2020/11/15/features-that-every-developer-must-know-about-spring-boot/)
*   [Comprehensive Notes For Java 8 Features Every Developer Must Have](https://thedeveloperstory.com/2020/10/23/comprehensive-notes-for-java-8-features-every-developer-must-have/)

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_