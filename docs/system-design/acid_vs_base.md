# ACID vs BASE and CAP Theorem

## ACID properties in DBMS

* _**Atomicity**_: This property ensures that either all the operations of a transaction reflect in database or none. A=400 and B=700 / some transfer / cumulative always 1100 even if failed
* _**Consistency**_: To preserve the consistency of database, the execution of transaction should take place in isolation \(that means no other transaction should run concurrently when there is a transaction already running\). A=400 / 100 trasaction to B & C / two transaction seperately for reading the value A 1st transaction A=400 then 2nd transacation A=300

* _**Isolation**_: For every pair of transactions, one transaction should start execution only when the other finished execution.

* _**Durability**_ : Once a transaction completes successfully, the changes it has made into the database should be permanent even if there is a system failure.

![ACID Properties](./ACID-Properties.jpg)

## BASE:

An alternative to ACID is BASE

* **Basically Available**: The system is guaranteed to be available for querying by all users. \(No isolation here.\)
* **Soft State**: The values stored in the system may change because of the eventual consistency model, as described in the next bullet.
* **Eventually Consistent**: As data is added to the system, the system’s state is gradually replicated across all nodes.

## CAP Theorem

* **Consistency**: Similar to the C in ACID, all nodes in the system would have the same view of the data at any time.
* **Availability**: The system always responds to requests.
* **Partition tolerance**: The system remains online if network problems occur between system nodes.

Eric Brewer’s _**CAP theorem**_ says that if you want consistency, availability, and partition tolerance, you have to settle for two out of three. \(For a distributed system, partition tolerance means the system will continue to work unless there is a total network failure. A few nodes can fail and the system keeps going.\)

[source](https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/)

