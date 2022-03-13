---
description: Here I collect Open Source Snippet
---

# Open Collection

## [Check chains of "get" calls for null](https://stackoverflow.com/questions/3458451/check-chains-of-get-calls-for-null)

```java
public static <T> T opt(Supplier<T> statement) {       
        try {
            return statement.get();
        } catch (NullPointerException exc) {
            return null;
        }   
    }

// calljav
Doorknob knob = opt(() -> house.getFloor(0).getWall(WEST).getDoor().getDoorknob());

```

**or Using Optional**

```java
Optional.ofNullable(house)
        .map(house -> house.getFloor(0))
        .map(floorZero -> floorZero.getWall(WEST))
        .map(wallWest -> wallWest.getDoor())
        .map(door -> wallWest.getDoor())

```

## [Spring @Transactional with a transaction across multiple data sources](https://stackoverflow.com/questions/48954763/spring-transactional-with-a-transaction-across-multiple-data-sources)

[https://stackoverflow.com/a/50179738/7499069](https://stackoverflow.com/a/50179738/7499069)
