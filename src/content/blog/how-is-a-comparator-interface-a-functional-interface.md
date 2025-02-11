---
title: "How Is A Comparator Interface A Functional Interface?"
description: "The Comparator interface is useful for defining sorting in a user-defined class. It is a functional interface, even though the Comparator interface contains two abstract classes. How? Let&#8217;s check the Comparator class from the java.util package. Now, you&#8217;ll notice that there are two abstract methods. Ideally, an interface can only be called a functional interface [&hellip;]"
pubDate: 2022-08-22
heroImage: "/blog-images/wp-boitumelo-phetla-0lnx5Sc0_40-unsplash.jpg"
categories: ["Java","Q&amp;A"]
tags: ["Comparator","Functional Interface","Interface","Java","thedeveloperstory"]
---

The Comparator interface is useful for defining sorting in a user-defined class. _It is a functional interface, even though the Comparator interface contains two abstract classes._

How?

Let’s check the `Comparator` class from the _`java.util`_ package.

```
package java.util;

@FunctionalInterface
public interface Comparator<T> {

  // abstract method #1
  int compare(T o1, T o2);

  // abstract method #2
  boolean equals(Object obj);

  // other static and default methods
  ...


}
```

Now, you’ll notice that there are two abstract methods. Ideally, an interface can only be called a functional interface if it has only one abstract method.

However, in this case, the abstract method, `boolean` _`equals(Object obj),`_ is one of the public methods of the `Object` class from the `java.lang` package. This abstract method is not counted since any implementation of the interface will have an implementation from the `Object` class.

That means, `Comparator` only has one abstract method `int compare(T o1, T o2)`, and hence, it meets the definition of functional interface.

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_