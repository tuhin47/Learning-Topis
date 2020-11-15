# System Design Basics

**Systems design** a procedure by which we define the architecture of a system to satisfy given requirements. It is a technique by which the required amounts of scalability, reliability, performance and consistency are satisfied in real world systems.

## How to start with distributed systems?

1. Optimize process and increase throughput with the same resources _**Vertical Scaling**_ _Example_: One Pizza chef get more money
2. Preparing beforehand at the non-peck hour _**preprocessing**_   _Example_: Preprocess of making pizza off-time
3. Keep **Backups** \(Master, Slaves\). _Example_: If a chef gets sick, then hire a backup chef
4. Hire **more** resources _Example_: Hire more chef
5. _Micro Service Architecture_ \(Divide Resouce in a particular job\) _Example_: Distribute works among chefs
6. _Distributed_ System \(Different Servers\) _Example_: Pizza store in a different place
7. Business decision using a _load balancer_
8. _Decoupling_ system. _Example_: Delivery Agent, Pizza shop
9. Logging and metrics
10. Extensible

