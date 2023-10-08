# Better Learning Concepts

* Replace **loops** with **higher-order functions**
* Replace **conditionals** with **data structures** and **polymorphism**
* Replace **literal variable names** with **purposeful variable names**
* Forget **global scope** exists

### Unlearn Loops

```text
// Before:

let index = 0;
const prices = [];

while (index < groceries.length) {
  prices.push(groceries[index].price);
  index = index + 1;
}


// After:

groceries.map((item) => {
  return item.price;
});
```

```text
// Before:

let index = 0;
let total = 0;

while (index < groceries.length) {
  total = total + groceries[index].price;
  index = index + 1;
}

// After:

groceries.reduce((sum, item) => {
  return sum += item.price;
}, 0);
```

### Unlearn Conditionals

#### Data Structures

Consider the following function for calculating discount:

```text
const discount = (amount, code) => {
  switch (code) {
    case 'DIJFNC':
      return amount * 0.80;
    case 'XPFJVM':
      return amount * 0.75;
    case 'FJDPCX':
      return amount * 0.50;
  }
};
```

Let’s replace the conditional with an object.

```text
const DISCOUNT_MULTIPLIER = {
  'DIJFNC': 0.80,
  'XPFJVM': 0.75,
  'FJDPCX': 0.50,
};
const discount = (amount, code) => {
  return amount * DISCOUNT_MULTIPLIER[code];
};
```



