---
description: Question and Answer JAVA
---

# QA

### Why Java is not 100% Object-oriented?

Because of Primitive data types namely:

```text
  boolean, byte, char, int, float, double, long, short.
```

To make them 00 we have wrapper classes that actually _wrap_ the primitive data type into an object of that class.

### Why pointers are not used in Java?

1. They are unsafe. 
2. Increases the complexity of the program and since Java is known for its simplicity of code, adding the concept of pointers will be contradicting. 
3. Since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user, pointers are discouraged in Java

### What is JIT compiler in Java?

![Description](https://i.stack.imgur.com/MsTWN.png)

### Why String is immutable in java?

1. String pool requires string to be immutable otherwise shared reference can be

   changed from anywhere.

2. security because string is shared on different area like file system, networking

   connection, database connection , having immutable string allows you to be secure and safe because no one can change reference of string once it gets created.

