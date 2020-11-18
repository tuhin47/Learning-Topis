# Builder Design Pattern

[This video](https://www.youtube.com/watch?v=KbIdk5BRn0w&list=PLsyeobzWxl7r2ZX1fl-7CKnayxHJA_1ol&index=4) contains theory session of Builder Design Pattern. Builder design pattern belongs to Creational design pattern which is a type of Design Patterns in java. Builder design pattern is a creational design pattern like Factory Pattern and Abstract Factory Pattern. Builder pattern builds a complex object using simple objects and uses step by step approach. A Builder class builds the final object step by step. This builder is independent of other objects. **Trainer: Navin Reddy**

There are classes without setters, called **Immutable Classes**. They are used in distributed and multi-threaded programs where multiple threads can alter the states of an object. Developers use 'synchronize' to prevent this.

But a more convenient approach is to use Immutable classes so that threads can't alter the states via setters. \(If states need to be altered a new object is created! This consumes memory which is a cons of Immutable Classes but its worth, compared to the state-altered-havocs\)

Thus for Immutable Classes, Builder Pattern has to be used instead of setters.

