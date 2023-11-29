# Strategy  Pattern

The Strategy Pattern in Java is a behavioural design pattern that enables an algorithm's behavior to be selected at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable. Let's create an example using a payment system that can use different payment methods:

[Strategy](https://github.com/tuhin47/AlgoExpert/blob/b9d5010da1512ff5e9ad489b911340a71f1b99c3/Java/src/patterns/examples/StrategyPatternExample.java)



<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

In this example, `PaymentStrategy` is the strategy interface that defines the method `pay` for various payment strategies. Concrete strategies, `CreditCardPayment` and `PayPalPayment`, implement this interface with their specific payment logic. The `ShoppingCart` class acts as the context that uses a particular payment strategy during checkout.

At runtime, you can easily switch between payment methods by setting different strategies for the shopping cart. This flexibility allows the system to use different payment strategies interchangeably without altering the shopping cart's code, adhering to the open/closed principle of design patterns.
