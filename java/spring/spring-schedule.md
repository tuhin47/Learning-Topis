# Spring Schedule

## Spring Boot @Scheduled Task Execution Example

To **schedule jobs in a Spring Boot application** to run periodically, Spring Boot provides [_@EnableScheduling_](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/EnableScheduling.html) and [_@Scheduled_](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/Scheduled.html) annotations. Let us learn to use Spring boot _@Scheduled_ annotation.

> See Also: [@Scheduled Jobs with Spring Batch](https://howtodoinjava.com/spring-batch/job-scheduler-example/)

### 1. Maven

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
</dependency>
```

### 2. Enable _@Scheduled_ Annotation with _@EnableScheduling_

```java
@EnableScheduling
@Configuration
public class SchedulerConfig {

}
```

In the following example, more control with destroy.

```java
@Configuration
@EnableScheduling
public class AppConfig implements SchedulingConfigurer {

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        taskRegistrar.setScheduler(taskExecutor());
    }

    @Bean(destroyMethod="shutdown")
    public Executor taskExecutor() {
        return Executors.newScheduledThreadPool(100);
    }
}
```

### 3. Task Scheduler Configuration

**By default,Spring uses a single-threaded task scheduler to run the tasks. So if we have multiple\_@Scheduled\_methods, each task needs to wait for the thread to complete executing a previous task.**

#### 3.1. Configuring Thread Pool Size

```java
@Bean
public ThreadPoolTaskScheduler threadPoolTaskScheduler() {

    ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
    threadPoolTaskScheduler.setPoolSize(5);
    threadPoolTaskScheduler.setThreadNamePrefix("ThreadPoolTaskScheduler");
    return threadPoolTaskScheduler;
}
```

In Spring Boot, property: `spring.task.scheduling.pool.size=5`

#### 3.2. Configuring Multiple Task Schedulers

attribute ‘_scheduler_‘ that can be used to specify which task scheduler to use to run the scheduled task when multiple schedulers are available.

```java
@Scheduled(fixedRate = 5000, scheduler = "myScheduler")
public void doSomething() {

    // do some work
}
```

We can define the schedulers in any _@Configuration_ class as regular beans.

```java
@Configuration
@EnableScheduling
public class ExplicitSchedulerConfig {

    String threadName;

    @Bean @Qualifier("myScheduler")
    public TaskScheduler taskScheduler1() {
    
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setThreadNamePrefix("explicitScheduler1");
        return scheduler;
    }

    @Bean
    public TaskScheduler taskScheduler2() {

        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setThreadNamePrefix("explicitScheduler2");
        return scheduler;
    }
}
```

This can be extremely beneficial when we want to run some scheduled tasks in [virtual threads](https://howtodoinjava.com/java/multi-threading/virtual-threads/) using _VirtualThreadTaskExecutor_ and other tasks on platform threads.

### 4. Using _@Scheduled_ Annotation

After the task scheduling has been enabled, we can add the `@Scheduled` annotation to a method, along with trigger metadata. Internally, _ScheduledAnnotationBeanPostProcessor_ that will be created by the imported _SchedulingConfiguration_ scans all declared beans for the presence of the _@Scheduled_ annotations.

* The _@Scheduled_ methods must have ‘_void_‘ returns and must not accept any arguments.
* The other beans required by the scheduled method must be provided using dependency injection.
* The _@Scheduled_ is a [repeatable annotation](https://howtodoinjava.com/java/complete-java-annotations-tutorial/). If several _@Scheduled_ declarations are found on the same method, each of them will be processed independently, with a separate trigger firing for each of them. In this case, be careful to avoid possible overlapping executions.
* Do not use _@Configurable_ annotation on bean classes containing @Scheduled methods. It will cause double initialization and each _@Scheduled_ method will be invoked twice.

### 5. Schedule a One-time Task

```java
@Scheduled(initialDelay = 10000)
public void doSomething() {
    // something that should run only once
}
```

### 6. Schedule a Task at Fixed Rate (Concurrent Executions Allowed)

Fixed-rate execution does not wait for the previous execution . Note that, by default, Spring does not allow to run the same method in multiple threads. To enable this behavior completely, we must configure the _@Async_ support also.

```java
@Configuration
@EnableScheduling
@EnableAsync
public class SchedulerConfig {

  ///...
}
```

Then use the [_@Async_](https://howtodoinjava.com/spring-boot/spring-async-completablefuture/) method on the scheduled method.

```java
@Scheduled(fixedRate = 10000)
@Async
public void taskWithConcurrentExecutions() {

  //...
}
```

### 7. Schedule a Task at Fixed Delay (Concurrent Executions NOT Allowed)

**It makes sure that the previous method execution is finished before it starts executing the method again after the configured fixed delay**.

```java
@Scheduled(fixedDelay = 10000)
public void run() {

  //...
}
```

### 8. Using CRON Expressions

```java
@Scheduled(cron = "0 10 10 10 * ?")
public void run() {
    
   //...
}
```

To improve readability, Spring supports the following macros.

* `@yearly`(or`@annually`): once a year
* `@monthly`: once a month
* `@weekly`: once a week
* `@daily`(or`@midnight`): once a day
* `@hourly`: once an hour

```java
@Scheduled(cron = "@hourly")
public void run() {
    
   //...
}
```

### 9. _@Scheduled_ Annotation on Reactive Methods

As of [Spring Framework 6.1](https://github.com/spring-projects/spring-framework/wiki/What's-New-in-Spring-Framework-6.x#core-container), _@Scheduled_ methods are also supported on reactive methods with a `Publisher` return type (or any concrete implementation of `Publisher` such as _Mono_ and _Flux_).

These methods must be declared without any arguments.

```java
@Scheduled(fixedDelay = 5000)
public Mono<Void> reactiveSomething() {

    // return an instance of Publisher
}
```

* If a reactive method emits values (onNext signal), they are ignored.
* If an error occurs during execution, it’s logged but doesn’t stop the scheduled tasks.

```java
@Scheduled(fixedDelay = 5000)
public Flux<String> reactiveSomething() {
    return Flux.just("Hello", "World");
}
```

### 10. Conclusion

When we destroy the annotated bean or close the application context, scheduled tasks are canceled. This includes canceling the next scheduled subscription and any ongoing subscriptions.

## Source

* [https://howtodoinjava.com/spring-boot/enable-scheduling-scheduled-job-example/](https://howtodoinjava.com/spring-boot/enable-scheduling-scheduled-job-example/)
