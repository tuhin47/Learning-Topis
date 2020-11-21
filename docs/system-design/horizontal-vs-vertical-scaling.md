# Scaling

**Horizontal scaling** is adding more machines to deal with increasing requirements. These machines handle requests in parallel to improve user experience.

**Vertical scaling** is replacing the current machines with more advanced machines to improve throughput and hence response time. The techniques are used in conjunction in real world systems.

## Horizontal vs. Vertical Scaling

| Horizontal | Vertical |  |  |
| :---: | :---: | :--- | :--- |
| Many Servers | Huge Server |  |  |
| Load Balancing Required | N\A |  |  |
| Resilient | Single Port failure |  |  |
| Network Calls\(RPC\)-&gt;  transactions among servers | Inter-Process Communication | Data Inconsistency | Consistent |
| Scales well | Hardware limit |  |  |

