# System Design Basics

**Systems design** a procedure by which we define the architecture of a system to satisfy given requirements. It is a technique by which the required amounts of scalability, reliability, performance and consistency are satisfied in real world systems.

## How to start with distributed systems?

1. Optimize process and increase throughput with the same resources ***Vertical Scaling***<br>*Example*: One Pizza chef get more money
1. Preparing beforehand at the non-peck hour ***preprocessing*** <br> *Example*: Preprocess of making pizza off-time
1. Keep **Backups** (Master, Slaves). *Example*: If a chef gets sick, then hire a backup chef
1. Hire **more** resources *Example*: Hire more chef
1. *Micro Service Architecture* (Divide Resouce in a particular job) *Example*: Distribute works among chefs
1. *Distributed* System (Different Servers) *Example*: Pizza store in a different place
1. Business decision using a *load balancer*
1. *Decoupling* system. *Example*: Delivery Agent, Pizza shop
1. Logging and metrics
1. Extensible
