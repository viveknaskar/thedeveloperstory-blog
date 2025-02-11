---
title: "Everything You Need To Know About The CompletableFuture API"
description: "There have been several instances where I have been asked to develop applications that are significantly high-performing. In fact, one of the most common questions is how to increase the performance of an application. One of the best ways to increase the performance of an application is to write asynchronous programming that can result in [&hellip;]"
pubDate: 2022-09-28
heroImage: "/blog-images/wp-yingchou-han-IJrIeCs3D4g-unsplash.jpg"
categories: ["Java"]
tags: ["CompletableFuture","developer","developerblog","Java","java8","thedeveloperstory"]
---

There have been several instances where I have been asked to develop applications that are significantly high-performing. In fact, one of the most common questions is how to increase the performance of an application.

One of the best ways to increase the performance of an application is to write asynchronous programming that can result in multiple computations being done in parallel.

While Java already introduced the `**Future**` interface to enable asynchronous programming since the release of Java 5 way back in 2004, there were some disadvantages to using Future that made it less ideal to use in real-life scenarios.

### Limitations of Future interface

1.  _Futures_ cannot be completed manually.
2.  There is no way to execute multiple _futures (_or results_)_ in parallel and then combine the results together.
3.  There are no exception handling constructs for _Future_.
4.  _Future_ doesn’t have the mechanism to create multiple stages of processing that can be chained together. It needs to be done manually.
5.  _Future_ doesn’t have the mechanism to notify you of the completion of an API.

Fortunately, with the release of Java 8, `**CompletableFuture**` combats all of the above problems and provides a much better asynchronous programming approach in Java.

### So, what’s so Special about CompletableFuture?

Asynchronous programming is all about writing non-blocking code by running all the tasks on separate threads instead of the main application thread and keeping the main thread informed about the progress, completion status, or if the task fails.

Asynchronous programming is enabled by the `**CompletableFuture**` API in Java. It implements the [_Future_](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html) and [_CompletionStage_](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html) interfaces.

### Advantages of the CompletableFuture API

1.  If a remote API service is down while using it, you can manually complete the future to retrieve the data.
2.  The _CompletableFuture_ API allows chaining multiple APIs, thereby allowing you to create an asynchronous workflow.
3.  It provides an exception handling mechanism.
4.  It provides the mechanism to combine multiple futures into a single _CompletableFuture_.
5.  It allows a callback function to the API which gets called when the response is available.

### Creating a CompletableFuture

The simplest example of CompletableFuture is illustrated below:

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/SimpleCompletableFutureExample-1024x647.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/c1c8eae45fa3999b0947bfc884edcf10/raw/7279c93028af88d6baa4d8cc263a564b5461541b/SimpleCompletableFutureExample.java)

Using the non-argument constructor, the simplest possible CompletableFuture can be created.

```
**CompletableFuture<String> completableFuture = new 
CompletableFuture<String>();**
```

To get the result of the CompletableFuture, `**CompletableFuture.get()**` is called. This get() method blocks until the Future is completed.

Hence, to address that, `**CompletableFuture.complete()**` can be used to manually complete the Future.

```
**CompletableFuture.complete("some dummy data from Future")**
```

All the clients waiting for this Future will receive the specified result and the subsequent calls to the above method will be ignored.

**_CompletableFuture has over 50 different methods for composing, combining, and executing asynchronous computation steps and handling errors._**

Here we will go through some of the most common methods that I have extensively used in my projects.

### CompletableFuture for running Asynchronous Tasks

There are mainly two static methods for running asynchronous tasks.

#### runAsync()

**_If you want to run some background task asynchronously and do not want to return anything from that task, then use the_** `**CompletableFuture.runAsync()**`.

Since this static method takes a [_Runnable_](https://docs.oracle.com/javase/7/docs/api/java/lang/Runnable.html) object and doesn’t return a value, it returns _CompletableFuture<Void>_. The overloaded version also accepts Executor as the second argument.

1.  _CompletableFuture.runAsync(Runnable)_
2.  _CompletableFuture.runAsync(Runnable, Executor)_

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/RunAsyncExample-1024x638.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/17e7a5aaa5ffc43f77543439d19c370f/raw/af9285793db8ac1ffe4e89bcab5e9a94c376ca9c/RunAsyncExample.java "here")

When fetching the name of the thread, you will notice that CompletableFuture executed this task in a thread obtained from the global [_ForkJoinPool.commonPool()_](http://forkjoinpool.commonpool%28%29/).

#### supplyAsync()

**_If you want to_** **_run some background task asynchronously and want to return anything from that task, then use_ CompletableFuture.supplyAsync().**

It takes a [_Supplier<T>_](https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html) and returns a _CompletableFuture<T>_ where _T_ is the type of the value obtained by calling the given supplier. It also has the version taking _Executor_ as the second parameter.

1.  _CompletableFuture.supplyAsync(Supplier<T>)_
2.  _CompletableFuture.supplyAsync(Supplier<T>, Executor)_

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/SupplyAsyncExample-1024x729.png)

Get the code here

Here, you will notice that the name of the thread is _pool-1-thread-1_ and not [_ForkJoinPool.commonPool_](http://forkjoinpool.commonpool%28%29/)_._ This is because we created a thread pool using Executor so that the task can be executed from our own thread pool.

**_All the methods in the CompletableFuture API have two versions — one with Executor as the second argument and the other without._**

### Transforming and Processing on the Results

So the `**CompletableFuture.get()**` method is blocking, and it waits until the Future is completed before returning the result after its completion.

What next? You would want the result to be transformed or processed further, right?

Well, you can add your further logic in a callback function. In fact, to build asynchronous applications, you are required to add a callback that will be automatically invoked when the asynchronous computation completes.

The advantage of adding a callback function to the CompletableFuture is that we don’t have to wait for the result — just add the logic in the callback function, and it will be automatically executed.

There are mainly three methods to attach a callback.

#### thenApply()

**_If you want to process and transform the result of a CompletableFuture, then use_** `**thenApply()**`**_._**

It takes a [_Function<T,R>_](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html) as an argument. _Function<T,R>_ is a simple functional interface representing a function that accepts an argument of type _T_ and produces a result of type _R_.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenApplyExample-1024x617.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/9b7857e76fa842d42e3ba33a734a3d10/raw/fd7c9cacd13eb8259789f89328d845f3cbe5e6f8/ThenApplyExample.java "here")

`**thenApply()**` can also be used to perform a series of transformations one after the other by chaining them together.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenApplyChainingExample-1024x627.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/0af00dbb48669b28fc2b2ac5615da9fa/raw/a8fd60e72db974ba05906fdc4fb9e5bf213c2dbe/ThenApplyChainingExample.java "here")

#### thenAccept()

**_If you don’t want to return anything from the callback function and just want to execute some code after the completion of the Future, then use_** `**thenAccept()**`.

`**_CompletableFuture.thenAccept()_**` accepts a [_Consumer<T>_](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html) and returns a _CompletableFuture<Void>_. It has access to the result of the future, to which it is attached.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenAcceptExample-1024x635.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/fed44018468d84e4b687afac634244f7/raw/f7235fd084b887193eafbeee4477f8fca1fa5b6a/ThenAcceptExample.java "here")

#### thenRun()

_Similar to_ `**thenAccept()**`**_, if you don’t want to return anything from the callback function and just want to execute some code after the completion of the Future, then use_** `**thenRun()**`.

However, `**thenAccept()**` has access to the result of the CompletableFuture to which it is attached, `**thenRun()**`, on the other hand, doesn’t even have access to the result of the Future. It takes a _Runnable_ as an argument and returns a _CompletableFuture<Void>_.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenRunExample-1024x633.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/7f6d8213010f05f2d34300c1db00f807/raw/f90b7c1a447c8f7d22ec2aa31edae30bb5810616/ThenRunExample.java "here")

**_Since_** `**thenAccept()**` **_and_** `**thenRun()**` **_are consumers, they are often used as the last callbacks in the callback chain._**

All the callback methods provided by CompletableFuture have two async variants that can help to make the computations execute in parallel.

```
**thenApply(Function<? super T,? extends U> fn)****thenApplyAsync(Function<? super T,? extends U> fn)****thenApplyAsync(Function<? super T,? extends U> fn, Executor executor)**
```

### Combining the results of CompletableFutures

One of the best things that happened with the release of Java 8 is the introduction of functional programming. It follows the _monad_ design pattern.

> “Monad is a software design pattern with a structure that combines program fragments (functions) and wraps their return values in a type with additional computation.”
> 
> Wikipedia

The CompletableFuture API enables you to combine CompletableFuture instances in a chain of computation steps. The result of this chaining is a CompletableFuture that can be chained and combined further.

#### thenCompose()

**_If you want to fetch data from a remote API service and, from using that data, you want to fetch some other data from another API, you should use_** `**thenCompose()**`**_._**

The _thenCompose()_ method receives a function that returns another object of the same type.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenComposeExample-1024x532.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/056d7a5fea854819f00dd08b39022431/raw/908d3b58db6da6637423790b5a5dd31453150172/ThenComposeExample.java "here")

#### thenCombine()

**_If you want to combine two Futures which run independently and then act on the results when both are completed, where the result of one Future is dependent on the other, then you should use_** `**thenCombine()**`**.**

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ThenCombineExample-1024x572.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/2dfd26f9e4deb3aaa59eacc635ec5ebb/raw/d3b1e71d49dd413650f50dd5e98fa7c902db05e7/ThenCombineExample.java "here")

### Exception Handling

In a perfect world, everything would run as per plan and there would not be any issues, errors, or _exceptions_. Well, that would be hypothetical.

Exceptions can and will happen in software development. Hence, it is important to handle them or else it would break our system. Fortunately, there are exception handling mechanisms in the CompletableFuture API.

#### exceptionally()

**_If you want to log and return a default value for the exception that occurred in the Future, then use_** `**exceptionally()**`.

![](https://thedeveloperstory.com/wp-content/uploads/2022/09/ExceptionallyExample-1-1024x797.png)

Get the code [here](https://gist.githubusercontent.com/viveknaskar/fc0b11e8c6c792ae47f70ab054454975/raw/76da59328a53eabc582f5f4157a92e31cf694380/ExceptionallyExample.java "here")

There are other methods such as `**handle()**` and `**completeExceptionally()**` that are intended for exception handling for different scenarios.

### Conclusion

As mentioned earlier, there are 50 methods in the CompletableFuture API that cater to different use cases, and exploring each method would make this article _humongous_.

I have been working on asynchronous systems for the last few years now. If you are learning for the first time, you will definitely find it daunting. However, you will start to love this programming approach because it gets more exciting with time.

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_