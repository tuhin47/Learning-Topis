# System Design Basics

**Systems design** a procedure by which we define the architecture of a system to satisfy given requirements. It is a technique by which the required amounts of scalability, reliability, performance and consistency are satisfied in real world systems.

**Horizontal scaling** is adding more machines to deal with increasing requirements. These machines handle requests in parallel to improve user experience.

**Vertical scaling** is replacing the current machines with more advanced machines to improve throughput and hence response time. The techniques are used in conjunction in real world systems.

## Horizontal vs. Vertical Scaling

|Horizontal|Vertical|
|:---:|:---:|
|Many Servers|Huge Server|
|Load Balancing Required|N\A|
|Resilient|Single Port failure|
|Network Calls(RPC)-> <br>transactions among servers|Inter-Process Communication|Data Inconsistency|Consistent|
|Scales well|Hardware limit|
