# NoSQL database

A NoSQL database includes simplicity of design, simpler horizontal scaling to clusters of machines and finer control over availability.NoSQL databases are used in real-time web applications and big data and their use are increasing over time.

## Limitations of Relational databases

1. In relational database we need to define **structure** and **schema** of data first and then only we can process the data.
2. Relational database systems provides **consistency** and **integrity** of data by enforcing ACID properties \(Atomicity, Consistency, Isolation and Durability \).There are some scenarios where this is useful like banking system. However in most of the other cases these properties are significant performance overhead and can make your database response very slow.

## Advantages of NoSQL:

* **High scalability**: NoSQL database use sharding for horizontal scaling.
* **High availability**: Auto replication feature in NoSQL databases makes it highly available because in case of any failure data replicates itself to the previous consistent state.

## Disadvantages of NoSQL:

1. **Narrow focus**: NoSQL databases have very narrow focus as it is mainly designed for storage but it provides very little functionality. Relational databases are a better choice in the field of Transaction Management than NoSQL.
   * You can’t have constraints in NoSQL
   * Joins are not supported in NoSQL
2. **Analytics and BI**: SQL has a wide array of tools for Business intelligence. However, there are not many tools for NoSQL analytics at the moment.

## RDBMS Vs NoSQL

**RDBMS**: It is a structured data that provides more functionality but gives less performance. **NoSQL**: Structured or semi structured data, less functionality and high performance.

![Description](../../.gitbook/assets/RDBMS_NoSQL_Comparison.jpg)

## When should NoSQL be used:

1. When huge amount of data need to be stored and retrieved .
2. The relationship between the data you store is not that important
3. The data changing over time and is not structured.
4. Support of Constraints and Joins is not required at database level
5. The data is growing continuously and you need to scale the database regular to handle the data.

## Companies that use NoSQL are:

* Amazon.
* Adobe.

