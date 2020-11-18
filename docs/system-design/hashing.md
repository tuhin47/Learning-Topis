# Hashing and Consisting Hashing

## Hashing

Hashing is the process of mapping one piece of data — typically an arbitrary size object to another piece of data of fixed size, typically an integer, known as hash code or simply hash. A function is usually used for mapping objects to hash code known as a hash function.

## Different data structure

Suppose we want to store employee records in such a way that, we can perform these operations efficiently.

1. Insert or store an employee details
2. Search or fetch an employee details by email
3. Delete employee details by email

   Let’s explore different data structure for the above use-case

### Array:

If we will use an array data structure to store that information, the worst-case time complexity for each operation would be `O(n)`. Search can be optimized to `O(logn)` by storing sorted data and using binary search.

### Linked list:

If we will use linked list to store employee records then worst-case time for insert will be `O(1)` and search and delete will be `O(n)`

### Binary Search Tree:

If we will use balanced binary search tree to store these employee records then worst-case time for each operation will be `O(log n)`

### Hash function and Array:

Here is where hash function and hash table comes to rescue which provides constant time for all three operations.

### Hash Table and Hash Function

In hash table, we use fixed size array of N to map hash code of all keys. Perform modulo operation on hash of the key to get the array index.

`index = hash(key) modulo N where N is the size of array.`

## Hashing in Distributed Systems

1. [Medium](https://medium.com/system-design-blog/consistent-hashing-b9134c8a9062)
2. [geeksforgeeks](https://www.geeksforgeeks.org/hashing-in-distributed-systems/)

