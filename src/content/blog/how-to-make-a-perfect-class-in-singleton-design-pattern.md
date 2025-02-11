---
title: "How To Make A Perfect Class In Singleton Design Pattern"
description: "If you are working in an object-oriented system, then you must be working with one of the&nbsp;Design Patterns&nbsp;as proposed by the Gang of Four (GoF) in their book, ‘Design Patterns — Elements of Reusable Object-Oriented Software’&nbsp;in 1994. Singleton design pattern is one such design pattern which we have used in our applications extensively. The Singleton [&hellip;]"
pubDate: 2021-05-16
heroImage: "/blog-images/wp-kiwihug-afjxvn5_jys-unsplash-scaled.jpg"
categories: ["General","Java"]
tags: ["blogger","computerprogrammer","designpatterns","developer","developerblog","Object Oriented Programming","programmer","softwaredevelopment","thedeveloperstory"]
---

If you are working in an object-oriented system, then you must be working with one of the _Design Patterns_ as proposed by the Gang of Four (GoF) in their book, ‘_[Design Patterns — Elements of Reusable Object-Oriented Software](https://amzn.to/37TEUN0)’_ in 1994. Singleton design pattern is one such design pattern which we have used in our applications extensively. The Singleton design pattern belongs to the family of Creational design patterns.

## Why use Singleton Pattern in the first place?

The main idea behind the Singleton class is to create only one object and not allowing object creation further, thereby controlling the object creation process. This is handy when you want to control resources like database connections, cache-memory, logging, etc.

For example, a Singleton can be used instead of a single instance of a class because a logging class usually needs to be used over and over again by every class in a project. If every class uses this logging class, dependency injection becomes cumbersome.

## Singleton Pattern & the ways to break them

The whole point of using Singleton Pattern is to create one object and prevent further object creation. Ideally, the simplest way to create a Singleton class is to make the constructor private and create a public static method to provide the single entry point to create a new instance.

```
/**
 * Singleton is a design pattern by which you create a singleton class that has only one instance
 * at any time
 *
 */
public class SingletonExample {

    private static SingletonExample single_instance = null;

    public String msg;

    /**
     * Making the constructor as private
     */
    private SingletonExample() {
        msg= "Hello World!";
    }

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonExample' class
     */
    public static SingletonExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonExample();
        return single_instance;
    }

    public static void main(String[] args) {

        /**
         * Instantiating SingletonExample class with variable 'singletonObject'
         */
        SingletonExample singletonObject = SingletonExample.getInstance();

        System.out.println(singletonObject.msg);

    }

}

```

However, there are some loopholes by which you can create more than one instance. If that happens, then the whole purpose of using the Singleton pattern is defeated.

There are three ways by which the Singleton pattern can be broken.

## Using Reflection API

Reflection API is used to examine or modify the behaviour of methods, classes, interfaces at runtime. Using this, you can invoke methods at runtime irrespective of the access specifier used with them. Hence, using Reflection API, you can create additional objects.

```
import java.lang.reflect.Constructor;

/**
 * Using ReflectionAPI, we can create more than one instance in a Singleton class
 */
public class SingletonReflectionExample {
    private static SingletonReflectionExample single_instance = null;

    /**
     * Making the constructor as private
     */
    private SingletonReflectionExample() {}

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonReflectionExample' class
     */
    public static SingletonReflectionExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonReflectionExample();
        return single_instance;
    }

    public static void main(String[] args) {

        SingletonReflectionExample objectOne = SingletonReflectionExample.getInstance();

        /**
         * Creating a secondary instance using Reflection API
         */
        SingletonReflectionExample objectTwo = null;
        try {
            Constructor constructor = SingletonReflectionExample.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            objectTwo = (SingletonReflectionExample) constructor.newInstance();
        } catch (Exception ex) {
            System.out.println(ex);
        }

        /**
         * Checking the hashCode for both the objects which would be different,
         * meaning the objects are different
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());

    }
}

```

### Solution for Reflection API

There are several solutions of preventing the breaking of the Singleton pattern. One of those solutions is by throwing a run-time exception in the constructor if the instance already exists. This would prevent you to create another instance.

Another best solution is to simply use enums, as java ensures that enum value is instantiated only once.

```
import java.lang.reflect.Constructor;

/**
 * Illustration of preventing breakage of Singleton pattern using Reflection API
 */
public class SingletonReflectionPreventExample {
    private static SingletonReflectionPreventExample single_instance = null;

    /**
     * Making the constructor as private
     */
    private SingletonReflectionPreventExample() {
        /**
         * Throwing a run-time exception would prevent Reflection API to create object
         */
        if( single_instance != null ) {
            throw new InstantiationError( "Object creation is not allowed!" );
        }
    }

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonReflectionPreventExample' class
     */
    public static SingletonReflectionPreventExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonReflectionPreventExample();
        return single_instance;
    }

    public static void main(String[] args) {

        SingletonReflectionPreventExample objectOne = 
            SingletonReflectionPreventExample.getInstance();

        /**
         * Creating a secondary instance using Reflection API
         */
        SingletonReflectionPreventExample objectTwo = null;
        try {
            Constructor constructor = SingletonReflectionPreventExample.class
                .getDeclaredConstructor();
            constructor.setAccessible(true);
            objectTwo = (SingletonReflectionPreventExample) constructor.newInstance();
        } catch (Exception ex) {
            System.out.println(ex);
        }

        /**
         * Checking the hashCode for both the objects
         * The hashcode of objectTwo would fail due to InvocationTargetException
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());

    }
}

```

## Using Cloneable Interface

If the Singleton class implements the Cloneable interface, the _clone()_ would also be overridden. Using this _clone(),_ you can create the copy (or clone) of the object in the Singleton Class, which would break the Singleton pattern.

```
/**
 * Using Cloneable Interface, we can create more than one instance in a Singleton class by
 * simply using the clone() on the first object
 */
public class SingletonCloningExample implements Cloneable {

    private static SingletonCloningExample single_instance = null;

    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }

    /**
     * Making the constructor as private
     */
    private SingletonCloningExample() {}

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonCloningExample' class
     */
    public static SingletonCloningExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonCloningExample();
        return single_instance;
    }

    public static void main(String[] args) throws CloneNotSupportedException {

        /**
         * Instantiating SingletonCloningExample class with variable 'objectOne'
         */
        SingletonCloningExample objectOne = SingletonCloningExample.getInstance();

        /**
         * Cloning the 'objectOne' using clone()
         */
        SingletonCloningExample objectTwo = (SingletonCloningExample) objectOne.clone();

        /**
         * Checking the hashCode for both the objects which would be different,
         * meaning the objects are different
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());
    }

}
{"mode":"full","isActive":false}
```

### Solution for Cloneable Interface

To prevent the breaking of the Singleton pattern using the Cloneable interface, you need to override the clone method and return the same instance, which would ensure that the cloned object is the same as the original object.

```
/**
 * By explicitly throwing CloneNotSupported exception from the clone()
 * would prevent object creation the second time, thereby preventing
 * the breaking of Singleton Pattern
 */
public class SingletonCloningPreventExample extends SuperCloneableClass {

    private static SingletonCloningPreventExample single_instance = null;

    /**
     * Override the clone() to throw the same instance
     */
    @Override
    protected Object clone()
    {
        return single_instance;
    }

    /**
     * Making the constructor as private
     */
    private SingletonCloningPreventExample() {}

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonCloningExample' class
     */
    public static SingletonCloningPreventExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonCloningPreventExample();
        return single_instance;
    }

    public static void main(String[] args) throws CloneNotSupportedException {

        /**
         * Instantiating SingletonCloningExample class with variable 'objectOne'
         */
        SingletonCloningPreventExample objectOne = SingletonCloningPreventExample.getInstance();

        /**
         * Cloning the 'objectOne' using clone()
         */
        SingletonCloningPreventExample objectTwo = (SingletonCloningPreventExample) objectOne.clone();

        /**
         * Checking the hashCode for both the objects which would be same,
         * meaning the objects are same
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());
    }

}

class SuperCloneableClass implements Cloneable {

    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }

}

```

## Using Deserialization

Using Serialization, the object of a byte stream can be saved to a file. So, when the same class is deserialized, a new instance of the class is created and its instance variables are then set to the values which were serialized. So, if the class is a Singleton, then using deserialization, a new object can be created.

```
import java.io.*;

/**
 * Using Serialization & Deserialization, we can create new instance
 * thereby breaking SingletonPattern
 */
public class SingletonDeserializationExample implements Serializable {

    private static SingletonDeserializationExample single_instance = null;

    /**
     * Making the constructor as private
     */
    private SingletonDeserializationExample() {

    }

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonDeserializationExample' class
     */
    public static SingletonDeserializationExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonDeserializationExample();
        return single_instance;
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {

        /**
         * Serializing the object into byte stream and saving into a file
         */
        SingletonDeserializationExample objectOne = SingletonDeserializationExample.getInstance();
        ObjectOutput out = new ObjectOutputStream(new FileOutputStream("file.text"));
        out.writeObject(objectOne);
        out.close();

        /**
         * Deserializing the byte-stream from the file into a new object
         */
        ObjectInput in = new ObjectInputStream(new FileInputStream("file.text"));
        SingletonDeserializationExample objectTwo = (SingletonDeserializationExample) in.readObject();
        in.close();

        /**
         * Checking the hashCode for both the objects which would be different,
         * meaning the objects are different
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());

    }

}

```

### Solution for Deserialization

You can prevent the breaking of the Singleton pattern by overriding the _readResolve()_ and returning the same instance.

```
import java.io.*;

/**
 * Preventing the breaking of SingletonPattern due to Deserialization
 * by implementing readResolve() to return the current instance
 */
public class SingletonDeserializationPreventExample implements Serializable {

    private static SingletonDeserializationPreventExample single_instance = null;

    /**
     * Making the constructor as private
     */
    private SingletonDeserializationPreventExample() {

    }

    /**
     * Static method to create instance of Singleton class
     * @return single object of 'SingletonDeserializationExample' class
     */
    public static SingletonDeserializationPreventExample getInstance() {
        /**
         * Ensuring only one instance is created
         */
        if (single_instance == null)
            single_instance = new SingletonDeserializationPreventExample();
        return single_instance;
    }

    /**
     * Overriding the readResolve method to return the current instance
     * thereby preventing the new object creation
     */
    protected Object readResolve() {
        return SingletonDeserializationPreventExample.getInstance();
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {

        /**
         * Serializing the object into byte stream and saving into a file
         */
        SingletonDeserializationPreventExample objectOne = SingletonDeserializationPreventExample.getInstance();
        ObjectOutput out = new ObjectOutputStream(new FileOutputStream("file.text"));
        out.writeObject(objectOne);
        out.close();

        /**
         * Deserializing the byte-stream from the file into a new object
         */
        ObjectInput in = new ObjectInputStream(new FileInputStream("file.text"));
        SingletonDeserializationPreventExample objectTwo = (SingletonDeserializationPreventExample) in.readObject();
        in.close();

        /**
         * Checking the hashCode for both the objects which would be same,
         * meaning the objects are same
         */
        System.out.println("Hashcode of Object 1 - " + objectOne.hashCode());
        System.out.println("Hashcode of Object 2 - " + objectTwo.hashCode());

    }

}

```

These are the three ways by which a Singleton pattern can be broken, with the solutions of how to prevent it. Singleton pattern has the easiest implementation of all the Design Patterns, but it has its own pros and cons. Still, Singleton is one of the most discussed/asked design patterns in the interviews.

* * *

_Disclosure: Some of the links in the article are affiliate links. This means that, at zero cost to you, I will earn an affiliate commission if you click through the link and finalize a purchase._

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_