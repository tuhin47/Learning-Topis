# Observer  Pattern

The Observer Pattern in Java is a behavioural design pattern that establishes a one-to-many dependency between objects. When the state of one object changes, all its dependents are notified and updated automatically. Let's explore a simple example of a news agency and subscribers:

[Observer](https://github.com/tuhin47/AlgoExpert/blob/b9d5010da1512ff5e9ad489b911340a71f1b99c3/Java/src/patterns/examples/ObserverPatternExample.java)\


<figure><img src="broken-reference" alt=""><figcaption><p>Observer</p></figcaption></figure>

In this example, `NewsAgency` is the subject (publisher) that maintains a list of observers (subscribers) interested in receiving updates. Observers implement the `Observer` interface and subscribe to the `NewsAgency`. When the news agency updates its news, it notifies all registered observers, triggering their `update` method, where they receive and process the new information.

When you run this code, you'll see that all the subscribers are notified of the latest news from the news agency. This pattern allows for loose coupling between subjects and observers, enabling multiple observers to listen for changes in the subject's state without depending directly on each other.
