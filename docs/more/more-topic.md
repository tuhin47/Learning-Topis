
# More Topics

- [Features in Java](#features-in-java)
- [Comparable Vs Comparator](#comparable-vs-comparator-in-java)
- [Generics](#generics-in-java)
- [Instance variable Vs class variable](#difference-between-instance-variable-and-class-variable)

## Features in Java

1. OOPs concepts
    - Object-oriented
    - Inheritance
    - Encapsulation
    - Polymorphism
    - Abstraction
1. Platform independent: A single program works on different platforms without any modification.
1. High Performance: JIT (Just In Time compiler) enables high performance in Java. JIT converts the bytecode into machine language and then JVM starts the execution.
1. Multi-threaded: A flow of execution is known as a Thread. JVM creates a thread which is called the main thread. The user can create multiple threads by extending the thread class or by implementing the Runnable interface.

## Comparable Vs Comparator in Java

[Link](https://www.geeksforgeeks.org/comparable-vs-comparator-in-java/)
 **or**
[video](https://www.youtube.com/watch?v=oAp4GYprVHM)

## Generics in Java

Link [geeksforgeeks](https://www.geeksforgeeks.org/generics-in-java/)

Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods.
Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs.
The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.

Code that uses generics has many benefits over non-generic code:

- Stronger type checks at compile time.
A Java compiler applies strong type checking to generic code and issues errors if the code violates type safety.
Fixing compile-time errors is easier than fixing runtime errors, which can be difficult to find.
- Elimination of casts.
- Enabling programmers to implement generic algorithms.
By using generics, programmers can implement generic algorithms that work on collections of different types, can be customized, and are type safe and easier to read.

In this [video](https://www.youtube.com/watch?v=XMvznsY02Mk) we will see :

- What is Generics
- What is Type-safe Language
- How to achieve type safety
- An example or program of Generics implementation in Java

## Difference between instance variable and a class variable.

An instance variable is a variable which has one copy per object/instance. That means every object will have one copy of it.
A class variable is a variable which has one copy per class. The class variables will not have a copy in the object.
Example :

```java
class Employee {
    int empNo;
    String empName, department;
    double salary;
    static int officePhone;
}
```

An object referred by empObj1 is created by using the following:
```Employee empObj1 = new Employee();```

The objects referred by instance variables empObj1 and empObj2 have separate copies empNo, empName, department, and salary. However, the officePhone belongs to the class(Class Variable) and can be accessed as Employee.officePhone.

Static variable: Static variables are also known as Class variables.
