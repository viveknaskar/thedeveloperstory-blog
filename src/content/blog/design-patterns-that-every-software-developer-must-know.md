---
title: "Design Patterns That Every Software Developer Must Know"
description: "If you have been working in a software company or learning software development, you might have heard about design patterns. Well, design patterns are nothing but trial and error methods that software developers have tried over the years to solve a common set of problems. An ideal definition would be, “Design Patterns are sets of [&hellip;]"
pubDate: 2021-03-11
heroImage: "/blog-images/wp-lance-anderson-qdaaasrzhdk-unsplash-scaled.jpg"
categories: ["Java"]
tags: ["blogger","designpatterns","developer","developerblog","Object Oriented Programming","programmer","softwaredevelopment","thedeveloperstory"]
---

If you have been working in a software company or learning software development, you might have heard about design patterns. Well, design patterns are nothing but trial and error methods that software developers have tried over the years to solve a common set of problems.

An ideal definition would be_,_

_“Design Patterns are sets of standardized practices that represent the solutions given by the developer community to general object-oriented problems faced in everyday tasks during software development.”_

## Gang of Four (GoF)

It was in the year 1994 when computers were becoming a thing and newer programming languages were created, a group of four authors published an iconic computer book titled, [_Design Patterns — Elements of Reusable Object-Oriented Software_.](https://amzn.to/3k8XgPQ) The book became a bestseller and left quite a mark on object-oriented programming enthusiasts. These four authors, Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, have earned them a moniker, **Gang of Four (GoF).**

The book was originally written in C++ context but it is still relevant for all object-oriented programming languages. In fact, it is still one of the best sellers on Amazon.

## Gang of Four Design Patterns

The book proposed about 23 design patterns which can broadly be classified into three categories: _Creational_, _Structural_ and _Behavioural_ patterns.

**Creational pattern**: These design patterns give the developers an approach for creating objects while hiding the creation logic, and without instantiating objects directly using the ‘_new’_ operator. This gives the program more flexibility in deciding which objects need to be created for a given use case. _Singleton_, _Factory_, _Builder_, etc. are some examples of a creational design pattern.

**Structural pattern:** These design patterns deal with class and object composition. The concept of inheritance is used to compose interfaces and determine ways to compose objects to get new functionalities. _Adapter_, _Composite, Decorator,_ _etc._ are some examples of a structural design pattern.

****Behavioural** Patterns:** These design patterns deal with algorithms and the assignment of responsibilities between objects. It describes not just patterns of objects or classes but also the patterns of communication between them. _Interpreter, Observer, State, etc._ are some examples of a behavioural design pattern.

In this article, we would be discussing some important design patterns that, in my opinion, are really important for every developer who is working in the software industry.

## Singleton Pattern

The singleton design pattern belongs to the family of Creational design patterns where a single class is responsible to create an object while making sure that only a single object gets created. This class provides a method to access its only object, which can be accessed directly without the need to instantiate the object of the class. To make the class singleton, the constructor is made as ‘_private_’ which assures that only the members can access the constructor. Some applications of the singleton pattern include cache-memory, database connection, drivers, logging, etc.

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

## Factory Method Pattern

The factory method pattern is the most used design pattern, as this is one of the best ways to create an object. This design pattern comes under the creational design patterns where an object is created without exposing the creation logic to the client, and it refers to a newly created object using a common interface by calling a factory method.

In the factory method pattern, you provide an interface, which can either be an interface or an abstract class to create objects. The method in the interface yields the object creation to one or more concrete subclasses at run time. The subclasses implement the factory method to select the class whose objects need to be created.

```
import java.util.Scanner;

public class FactoryMethodExample {

    public static void main(String[] args) {

        System.out.println("Enter the type of car:
Audi 
Tesla");

        Scanner in = new Scanner(System.in);
        String carType = in.nextLine();

        /**
         * The factory method is called to get the object of the concrete classes by passing
         * the information of the car from the user.
         */
        CarFactory carFactory = new CarFactory();
        carFactory.manufactureCar(carType.toLowerCase());

    }

}

/**
 * Abstract Class with abstract and concrete method
 */
abstract class Car {
    public abstract void addEngineType();
    public void deliverCar() {
        System.out.println("Your car will be delivered at your doorstep.");
    }
}

/**
 * Concrete class 'AudiCar' extending the abstract Class
 */
class AudiCar extends Car {
    @Override
    public void addEngineType() {
        System.out.println("You have ordered a car with gasoline Engine.");
    }
}

/**
 * Concrete class 'TeslaCar' extending the abstract Class
 */
class TeslaCar extends Car {
    @Override
    public void addEngineType() {
        System.out.println("You have ordered a car with electric Engine. ");
    }
}

/**
 * In Factory method, the object of the Car is created.
 */
class CarFactory {
    public Car manufactureCar(String type){
        Car car;
        switch (type.toLowerCase())
        {
            case "audi":
                car = new AudiCar();
                break;
            case "tesla":
                car = new TeslaCar();
                break;
            default: throw new IllegalArgumentException("No such car available.");
        }
        car.addEngineType();
        car.deliverCar();
        return car;
    }
}
```

## Decorator Pattern

The decorator design pattern is used to enhance the functionality of a particular object at run-time or dynamically without affecting the other objects in the same class. It is widely used and comes under the family of structural design patterns. This pattern is useful when we want to add some functionalities to an object or alter the state of a particular object at run time.

It follows the pay-as-you-go approach, for example, when you order a pizza, you need to select the crust like _Margherita_ or _Farmhouse_ and then, you can select an additional topping (‘_decorate with’_) like _Fresh Tomatoes_ or _Cheese Burst_.

```
/**
 * An illustration of decorator design pattern
 */
public class DecoratorExample {

    public static void main(String args[]) {

        /**
         * Creating new Margherita pizza
         */
        Pizza margheritaPizza = new Margherita();
        System.out.println(margheritaPizza.getDescription() 
                + " Cost :$" + margheritaPizza.getCost());

        /**
         * Creating new FarmHouse pizza
         */
        Pizza farmhousePizza = new FarmHouse();

        /**
         * Decorating with FreshTomato topping
         */
        farmhousePizza = new FreshTomato(farmhousePizza);
        System.out.println(farmhousePizza.getDescription() 
                + " Cost :$" + farmhousePizza.getCost());

        Pizza cheeseburstPizza = new CheeseBurst(margheritaPizza);
        System.out.println(cheeseburstPizza.getDescription() 
                + " Cost :$" + cheeseburstPizza.getCost());

    }
}

/**
 * Abstract pizza class
 */
abstract class Pizza {
    String description = "";

    public String getDescription() {
        return description;
    }
    public abstract double getCost();
}

/**
 * Concrete classes for abstract Pizza class where the pizza types are different
 */
class FarmHouse extends Pizza {
    public FarmHouse() { description = "FarmHouse"; }
    public double getCost() { return 200.00; }
}

class Margherita extends Pizza {
    public Margherita() { description = "Margherita"; }
    public double getCost() { return 100.00; }
}

/**
 * Toppings is the decorator abstract class here that extends abstract Pizza class where
 * the toppings like CheeseBurst, and FreshTomato are different
 */
abstract class Toppings extends Pizza {
    public abstract String getDescription();
}

/**
 * Decorator concrete classes extending abstract Toppings class
 */
class CheeseBurst extends Toppings {
    Pizza pizza;
    public CheeseBurst(Pizza pizza) { this.pizza = pizza; }
    public String getDescription() {
        return pizza.getDescription() + " with Cheese Burst topping ";
    }
    public double getCost() { return 50.00 + pizza.getCost(); }
}

class FreshTomato extends Toppings {
    Pizza pizza;
    public FreshTomato(Pizza pizza) { this.pizza = pizza; }
    public String getDescription() {
        return pizza.getDescription() + " with Fresh Tomato topping ";
    }
    public double getCost() { return 35.00 + pizza.getCost(); }
}
```

## Adapter Patten

The adapter design pattern enables two incompatible classes to work together by wrapping an interface around one of the existing classes. The adapter design pattern is a part of structural design patterns. This pattern is also known as _Wrapper_.

In simple words, the adapter pattern converts the interface of a class into another interface that a client wants, and it usually involves a single class responsible to join functionalities of incompatible interfaces.

```
/**
 * An illustration of adapter design pattern
 */
public class AdapterExample {

    public static void main(String[] args) {

        /**
         * Using AudioPlayer for playing different audio formats
         */
        AudioPlayer audioPlayer = new AudioPlayer();

        audioPlayer.play("mp3", "Waiting For Love.mp3");
        audioPlayer.play("vlc", "Wake Me Up.vlc");
        audioPlayer.play("mp4", "Summer of 69.mp4");
        audioPlayer.play("wma", "Lady.wma");
    }
}

interface MediaPlayer {
    void play(String audioType, String fileName);
}

interface AdvancedMediaPlayer {
    void playVlc(String fileName);
    void playMp4(String fileName);
}

class VlcPlayer implements AdvancedMediaPlayer{

    @Override
    public void playVlc(String fileName) {
        System.out.println("Playing vlc file. Name: "+ fileName);
    }

    @Override
    public void playMp4(String fileName) {
        //do nothing
    }
}

class Mp4Player implements AdvancedMediaPlayer{

    @Override
    public void playVlc(String fileName) {
        //do nothing
    }

    @Override
    public void playMp4(String fileName) {
        System.out.println("Playing mp4 file. Name: "+ fileName);
    }
}

/**
 * The Adapter will be named MediaAdapter and it must implement
 * the MediaPlayer interface. The FormatAdapter class must have a
 * reference to AdvancedMediaPlayer, the incompatible interface.
 */
class MediaAdapter implements MediaPlayer {

    AdvancedMediaPlayer advancedMusicPlayer;

    public MediaAdapter(String audioType){

        if(audioType.equalsIgnoreCase("vlc")) {
            advancedMusicPlayer = new VlcPlayer();

        } else if(audioType.equalsIgnoreCase("mp4")) {
            advancedMusicPlayer = new Mp4Player();
        }
    }

    @Override
    public void play(String audioType, String fileName) {

        if(audioType.equalsIgnoreCase("vlc")) {
            advancedMusicPlayer.playVlc(fileName);
        }
        else if(audioType.equalsIgnoreCase("mp4")) {
            advancedMusicPlayer.playMp4(fileName);
        }
    }
}

class AudioPlayer implements MediaPlayer {
    MediaAdapter mediaAdapter;

    @Override
    public void play(String audioType, String fileName) {

        /**
         * inbuilt support to play mp3 music files
         */
        if(audioType.equalsIgnoreCase("mp3")){
            System.out.println("Playing mp3 file. Name: " + fileName);
        }

        /**
         * mediaAdapter is providing support to play other file formats
         */
        else if(audioType.equalsIgnoreCase("vlc")
                || audioType.equalsIgnoreCase("mp4")){
            mediaAdapter = new MediaAdapter(audioType);
            mediaAdapter.play(audioType, fileName);
        }

        else{
            System.out.println("Invalid media. " + audioType + " format not supported");
        }
    }
}
```

## State Pattern

The state design pattern allows an object to modify its behaviour when its internal state changes without changing its class. In simple terms, the behaviour of the object depends on the state, and it must be able to change the behaviour of the object if the state changes. This comes under behavioural design patterns.

```
/**
 * An illustration of state design pattern
 */
public class StateExample {

    public static void main(String[] args) {

        Parcel parcel = new Parcel();
        parcel.printStatus();

        parcel.nextState();
        parcel.printStatus();

        parcel.nextState();
        parcel.printStatus();

        parcel.nextState();
        parcel.printStatus();
    }
}

class Parcel {

    private ParcelState state = new OrderedState();

    public ParcelState getState() {
        return state;
    }

    public void setState(ParcelState state) {
        this.state = state;
    }

    public void previousState() {
        state.prev(this);
    }

    public void nextState() {
        state.next(this);
    }

    public void printStatus() {
        state.printStatus();
    }
}

interface ParcelState {
    void next(Parcel parcel);
    void prev(Parcel parcel);
    void printStatus();
}

class OrderedState implements ParcelState {

    @Override
    public void next(Parcel parcel) {
        parcel.setState(new DeliveredState());
    }

    @Override
    public void prev(Parcel parcel) {
        System.out.println("The parcel is in its initial state.");
    }

    @Override
    public void printStatus() {
        System.out.println("Parcel ordered, not delivered to the delivery center yet.");
    }

    @Override
    public String toString() {
        return "Ordered";
    }
}

class DeliveredState implements ParcelState {

    @Override
    public void next(Parcel parcel) {
        parcel.setState(new ReceivedState());
    }

    @Override
    public void prev(Parcel parcel) {
        parcel.setState(new OrderedState());
    }

    @Override
    public void printStatus() {
        System.out.println("The parcel delivered to the delivery center, not received yet.");
    }

    @Override
    public String toString() {
        return "Delivered";
    }

}

class ReceivedState implements ParcelState {

    @Override
    public void next(Parcel parcel) {
        System.out.println("The parcel is received by a customer.");
    }

    @Override
    public void prev(Parcel parcel) {
        parcel.setState(new DeliveredState());
    }

    @Override
    public void printStatus() {
        System.out.println("The parcel was received by customer.");
    }

    @Override
    public String toString() {
        return "Received";
    }
}
```

* * *

Design Patterns are incredibly useful if used in the right situations. It increases efficiency by using polished solutions from experienced programmers over the years, instead of going for trial and error mechanisms.

Like everything in programming, you can easily remember all the design patterns when you practice it by coding, which will help you to understand the nitty-gritty of the problem and why these solutions came in the first place.

* * *

_Disclosure: Some links in the article are affiliate links. This means that, at zero cost to you, I will earn an affiliate commission if you click through the link and finalize a purchase._

* * *

**If you enjoyed reading this, you might also find the below articles worth your time.**

> [Features That Every Developer Must Know About Spring Boot](https://thedeveloperstory.com/2020/11/15/features-that-every-developer-must-know-about-spring-boot/)

> [Everything A Developer Must Know About Microservices](https://thedeveloperstory.com/2020/11/10/everything-a-developer-must-know-about-microservices/)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_