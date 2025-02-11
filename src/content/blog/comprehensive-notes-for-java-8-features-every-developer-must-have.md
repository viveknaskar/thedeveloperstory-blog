---
title: "Comprehensive Notes For Java 8 Features Every Developer Must Have"
description: "Recently, Java SE 15 was released in September 2020 with a bundle of features. It is likely to get a new version again in March 2021 as per the official blog by Oracle. But still, March 18, 2014, is embarked as one of the most significant days in the history of Java as version 8 [&hellip;]"
pubDate: 2020-10-22
heroImage: "/blog-images/wp-mike-kenneally-tnaloizhqvm-unsplash-scaled.jpg"
categories: ["Java"]
tags: ["backenddeveloper","developerblog","java8","javadeveloper","softwaredevelopment","thedeveloperstory"]
---

Recently, Java SE 15 was released in September 2020 with a bundle of features. It is likely to get a new version again in March 2021 as [per the official blog by Oracle](https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence). But still, March 18, 2014, is embarked as one of the most significant days in the history of Java as version 8 was released. The features of version 8 changed the way developers code in Java. Even today, a Java developer is asked about the features of Java 8.

**_Disclaimer:_** _Oracle no longer provides free support for Java 8._ [_AdoptOpenJDK_](https://adoptopenjdk.net/) _will provide free public updates for their version of Java 8 until at least September 2023, Oracle has already dropped free support for their JDK. Hence, a new Java developer must start with OpenJDK 11._

### Lambda Expressions

This was the most anticipated feature of Java 8. But why? Simply because it made Java closer to functional programming. Functional interfaces had been introduced in Java 8. The interfaces having just one abstract method is a functional interface. `**@FunctionalInterface**` annotation has been added so that we can mark an interface as a functional interface.

#### LambdaExample.java

```
package com.viveknaskar;   
  
public class LambdaExample {  
     public static void main(String[] args) {  
         WishingInterface wishing = () -> {  
             return "Hello World!";           
         };           
         System.out.println(wishing.wish());       
     }       
  
interface WishingInterface {  
         public String wish();   
} 
```

In the above example, you can see that _LambdaExample_ class uses an interface _WishingInterface_ having one abstract method. If the interface is annotated with `@FunctionalInterface` annotation, and we try to have more than one abstract method, it throws a compiler error.

Lambda expressions enable Java’s object-oriented programming world with functional programming. It provides an implementation of an interface that has a functional interface. When lambda functions are used, we don’t need to define the method by providing the implementation. In fact, lambda expressions are treated as a function.

The basic syntax of Lambda expression is **(argument) → (body)** 

### Functional Interfaces

As mentioned earlier, prior to Java 8, there was no way we could use functional programming in the strictly object-oriented world. We had to create anonymous inner class objects or implement interfaces like **Runnable**, **ActionListener**, **Comparable** which are some examples of functional interfaces.

From Java 8 onwards, we can simply use the instance of the functional interfaces using lambda expressions.

#### Functional Interface Example prior to Java 8 release

```
package com.viveknaskar;  
  
public class FunctionalInterfaceExampleBeforeJava8 {  
  
    public static void main(String[] args) {  
  
        new Thread(new Runnable() {  
            @Override  
            public void run() {  
                System._out_.println("Functional Interface Prior to Java 8");  
            }  
        }).start();  
    }  
}
```

#### Functional Interface Example after Java 8 release

```
package com.viveknaskar;  
  
public class FunctionalInterfaceExampleAfterJava8 {  
  
    public static void main(String[] args) {  
  
        // lambda expressions to create object  
        new Thread(() -> {  
            System._out_.println("Functional Interface After to Java 8");  
        }).start();  
  
    }  
}
```

The annotation `**@FunctionalInterface**` states the JVM that the interface can have only one abstract method. _A functional interface can have any number of default methods._

### default methods in Interfaces

Traditionally, interfaces used to have only abstract methods to achieve abstraction in Java. Abstract methods need to be defined in the implemented classes. We all know that every method present inside an interface is always public and abstract, whether it is declared or not. Every variable present inside the interface is public, static, and final, whether it is declared or not.

After the release of Java 8, concrete methods have been added to the interfaces to add extra features to the current interfaces without disrupting the current implementations. These methods are called “_default methods.”_

For example, _stream()_ is a default method added to the Collection interface. Had _stream()_ been added as an abstract method, all the classes implementing the Collection interface would have had to define _stream(),_ which would have irked developers. Since stream() is a default method, all the classes implementing the Collection interface inherit the default implementation.

#### Default Method Example in Interface

```
package com.viveknaskar;  
  
// Class implementing the interface  
public class DefaultMethodExample implements DefaultMethodInterface {  
  
    @Override  
    public void abstractMethod() {  
        System._out_.println("Hello from abstract method");  
    }  
  
    public static void main(String[] args) {  
  
        DefaultMethodExample dm = new DefaultMethodExample();  
        dm.abstractMethod();  
        dm.defaultMethod();  
    }  
  
}  
interface DefaultMethodInterface {  
    // Abstract method  
    void abstractMethod();  
  
    // Default method having method body  
    default void defaultMethod() {  
        System._out_.println("Hello, I am coming from default method in Interface");  
    }  
}
```

#### Default Methods Can Cause The Diamond Problem

Yep. It can happen. Abstract classes and interfaces have become quite similar now. Both can contain abstract methods and methods with implementations, although the syntax is different. There still are some differences (for instance, abstract classes can have instance fields, whereas interfaces cannot), but these differences support a central point: since the release of Java 8, we have multiple inheritances (via interfaces) that can contain code.

Inheriting from different interfaces multiple default methods with the same signature and different implementations is a problem. This will cause the famous [**Diamond Problem**](https://en.wikipedia.org/wiki/Multiple_inheritance)**.** _The solution is simply to override the default method with its own implementation._

### static methods in Interface

Interfaces from Java 8 onwards can have static methods with implementation. But unlike default methods, these methods can’t be overridden by the classes implementing the interface containing static methods.

#### Static Method Example in Interface

```
package com.viveknaskar;  
  
public class StaticMethodExample implements StaticMethodInterface {  
    // implementing abstract method  
    public void existingMethod(String str) {  
        System._out_.println("String is: "+str);  
    }  
    public static void main(String[] args) {  
        StaticMethodExample obj = new StaticMethodExample();  
  
        // Calling the default method of interface  
        obj.defaultMethod();  
        // Calling the static method of interface  
        StaticMethodInterface._staticMethod_();  
        // Calling the abstract method of interface  
        obj.existingMethod("Java 8 has added static methods and default methods");  
  
     }  
}  
interface StaticMethodInterface {  
    // This is a default method so we need not  
    default void defaultMethod() {  
        System._out_.println("Hello from default method.");  
    }  
  
    /* This is a static method. Static method in interface is  
    * similar to default method except that we cannot override  
    * them in the implementation classes.  
    */  
    static void staticMethod() {  
        System._out_.println("Hello from static method");  
    }  
    void existingMethod(String str);  
}
```

### Java Stream API

Stream API is used to process collections of objects. It uses streams that can perform aggregate operations on data returned from collections and I/O operations. Stream operations are either intermediate (it returns the stream itself for further operations) or terminal (it returns the result of a specific type). Streams incorporate something called _Parallel execution of Operations,_ which drastically improves the performance of the code.

To explain the Parallel execution of Operations, let me illustrate it with an example. 

#### Counting collections using traditional for each loop

```
package com.viveknaskar;  
  
import java.util.ArrayList;  
import java.util.List;  
  
public class CountingCollections {  
  
    public static void main(String[] args) {  
  
        List<String> list = new ArrayList<>();  
        list.add("Bruce");  
        list.add("Tony");  
        list.add("Clark");  
        list.add("Natasha");  
        list.add("Sachin");  
        int count = 0;  
        //Iterating over the whole list to find the name having more than 5 characters  
        for (String num : list) {  
            if (num.length() > 5) {  
            count++;  
            }  
        }  
        System._out_.println("Total number of people whose names are more than 5 characters: " + count);  
    }  
}
```

#### Counting collections using streams

```
package com.viveknaskar;  
  
import java.util.ArrayList;  
import java.util.List;  
  
public class CountingCollectionsUsingStreams {  
    public static void main(String[] args) {  
        List<String> list = new ArrayList<>();  
        list.add("Bruce");  
        list.add("Tony");  
        list.add("Clark");  
        list.add("Natasha");  
        list.add("Sachin");  
  
        /**  
         * Using stream with lambda expression  
         * Here stream(), filter() and count() operations are happening parallely  
         * Using stream operations greatly enhances the performance of the code  
         */  
         long count = list.stream().filter(num -> num.length() > 5).count();  
         System._out_.println("Total number of people whose names are more than 5 characters: " + count);  
    }  
}
```

As shown in the two examples, counting collection using traditional methods iterates through the list, checks the condition and then outputs the result. When counting the collection using streams, the stream() method returns a stream of all the names, the filter() method returns another stream of names with length more than 5, the count() method reduces this stream to the result. All these operations run in parallel. This comes in handy when there are thousands of records in the collection, streams will output the result in lesser time, thereby increasing the performance.

### Optional Class

Prior to Java 8 release, developers had to write null checks in order to avoid [_NullPointerException_](https://docs.oracle.com/javase/7/docs/api/java/lang/NullPointerException.html) which can crash the application. Java 8 has introduced a new class Optional which can help in writing a clean code without using too many null checks. By using Optional, we can specify alternate values to return or alternate code to run. 

#### Illustration of NullPointerException without Optional class

```
package com.viveknaskar;  
  
public class ExampleWithoutOptional {  
  
    public static void main(String[] args) {  
  
        String[] cities = new String[10];  
        _/**  
        * The array is empty is empty.  
        * No null check has been done, it will throw NullPointerException  
        */  
 _        String city = cities[5].toLowerCase();  
        System._out_.println(city);  
  
    }  
}
```

#### Illustrated example of avoiding NullPointerException using Optional Class

```
package com.viveknaskar;  
  
import java.util.Optional;  
  
public class ExampleWithOptional {  
    public static void main(String[] args) {  
        String[] cities = new String[10];  
        _/**  
        * Using Optional class, we are doing a null check at cities[5]  
        */_        Optional<String> nullCheck = Optional._ofNullable_(cities[5]);  
        if (nullCheck.isPresent()) {  
             String city = cities[5].toLowerCase();  
             System._out_.print(city);  
        } else {  
        System._out_.println("The array is null");  
        }  
  
     }  
}
```

### Final Thoughts

![](https://thedeveloperstory.com/wp-content/uploads/2021/07/michiel-leunens-0wIHsm2_1fc-unsplash-819x1024.jpg)

Photo by [Michiel Leunens](https://unsplash.com/@leunesmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@leunesmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

These are some of the most important features that we are using since the release of Java 8. These features have highly improved the performance, eased off the development tasks and made Java more efficient. With more releases coming in several months, it is important to know the new features to maximize Java to its potential.

Java is and will always be one of the most important programming languages, despite facing stiff competition from Python.

* * *

Thank you for reading!

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_