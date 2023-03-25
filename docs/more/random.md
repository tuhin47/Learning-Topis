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

{% embed url="https://stackoverflow.com/a/50179738/7499069" %}
stackoverflow
{% endembed %}

### [DateTimeFormatter](https://www.geeksforgeeks.org/java-time-format-datetimeformatterbuilder-class-in-java/)

```java
import java.io.*;
import java.lang.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.temporal.ChronoField;
 
// Main class
public class GFG {
 
    // Main driver methods
    public static void main(String[] args)
    {
 
        // Creating an object of DateTimeFormatter class
        DateTimeFormatter parser
            = new DateTimeFormatterBuilder()
                  .appendPattern("[yyyy][yyyyMM][yyyyMMdd]")
                  .optionalStart()
                  .parseDefaulting(
                      ChronoField.MONTH_OF_YEAR, 1)
                  .parseDefaulting(ChronoField.DAY_OF_MONTH,
                                   1)
                  .optionalEnd()
                  .toFormatter();
 
        // Print and display statements
 
        // Execute if only year is given in parameter
        System.out.println(
            parser.parse("2021", LocalDate::from));
 
        // Execute if year and month is given
        System.out.println(
            parser.parse("202106", LocalDate::from));
 
        // Execute if year, month and date is given
        System.out.println(
            parser.parse("20210631", LocalDate::from));
    }
}
```
