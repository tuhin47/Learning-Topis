# Visitor Pattern

[Visitor Pattern](https://github.com/tuhin47/AlgoExpert/blob/b9d5010da1512ff5e9ad489b911340a71f1b99c3/Java/src/patterns/examples/VisitorPatternExample.java)\
\
![](broken-reference)\
&#x20;In this example, the `Shape` interface represents different shapes, and `Circle` and `Rectangle` are concrete implementations of shapes. The `Visitor` interface declares the visit methods for each concrete shape. The `AreaVisitor` is a concrete visitor that calculates the area for circles and rectangles.

When `circle.accept(areaCalculator)` is called, it invokes the `visit` method specific to circles in the, and similarly for rectangles. This pattern allows adding new operations (visitors) without modifying the existing shape classes.
