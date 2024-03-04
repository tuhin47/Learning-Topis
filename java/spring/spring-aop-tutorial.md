# Spring AOP Tutorial

* Core for auditing, transactions, and security. Examples: Logging, security.
* AOP: Implements cross-cutting concerns.
* Avoiding duplication and tight coupling.
* AOP: Modularizes concerns for reusability.

### 1. What is Spring AOP? <a href="#h-1-what-is-spring-aop" id="h-1-what-is-spring-aop"></a>

Aspect-Oriented Programming is a paradigm that complements Object-Oriented Programming (OOP).&#x20;

### 2. Spring AOP Architecture

The core architecture of Spring AOP is based on _proxies_. When the application is initialized, an advised instance of a class is created as the result of a _ProxyFactory_ creating a proxy instance of that class with all the aspects woven into the proxy.&#x20;

In runtime, Spring analyzes the crosscutting concerns defined for the beans in _ApplicationContext_ and generates proxy beans (which wrap the underlying target bean) dynamically. Instead of accessing the target bean directly, callers are injected with the proxied bean.

<figure><img src="https://howtodoinjava.com/wp-content/uploads/2023/10/Spring-AOP-Proxy.png" alt="" height="206" width="742"><figcaption></figcaption></figure>

Internally, Spring has two proxy implementations:

* **JDK dynamic proxies**: when the target object to be advised implements an interface.
* **CGLIB proxies**: when the advised target object doesn’t implement an interface. For example, it’s a concrete class.

Note that the JDK dynamic proxy supports only the proxying of interfaces.

Remember that **Spring AOP has some limitations**. Such as:

* **Final classes or methods cannot** be proxied since they cannot be extended.
* &#x20;This only applies to **public, nonstati**c methods on Spring Beans.
* If there is **an internal method call from one method to another** within the same class, the advice will **never** be executed for the internal method call.

### 3. What is Advice, Joinpoint and Pointcut? <a href="#h-2-what-is-advice-joinpoint-or-pointcut" id="h-2-what-is-advice-joinpoint-or-pointcut"></a>

* **Joinpoint**: **a joinpoint always represents a method execution.**
* **Advice**: is the code that is **executed at a particular joinpoint**. There are many types of advice, such as _before_, which executes before the joinpoint, and _after_, which executes after it.
* **Aspect**: is the **combination of advices** and pointcuts **encapsulated in a class.**
* **Pointcut**: **a predicate or expression** that matches join points.
* **Weaving**: is the process of inserting aspects into the application code at the appropriate point. AspectJ supports a weaving mechanism called _load-time weaving (LTW)_, in which it intercepts the underlying JVM class loader and provides weaving to the bytecode when it is being loaded by the class loader.
* **Target**: is the object whose execution flow is modified by an AOP process. Often you see the target object referred to as the _advised object_.
* Spring uses the AspectJ pointcut expression language by default.

<figure><img src="https://howtodoinjava.com/wp-content/uploads/2015/01/spring-aop-diagram.jpg" alt="Spring AOP" height="372" width="410"><figcaption><p>Spring AOP</p></figcaption></figure>

### 4. Types of Advice in Spring AOP <a href="#h-3-types-of-aop-advice" id="h-3-types-of-aop-advice"></a>

There are five types of advice in Spring AOP.

* **Before advice**: Advice that executes before a join point, but which cannot prevent execution flow from proceeding to the join point (unless it throws an exception).
* **After returning advice**: Advice to be executed after a join point completes normally: for example, if a method returns without throwing an exception.
* **After throwing advice**: Advice to be executed if a method exists by throwing an exception.
* **After advice**: Advice to be executed regardless of how a join point exits (normal or exceptional return).
* **Around advice:** Advice that surrounds a join point such as a method invocation. This is the most powerful kind of advice. Around advice can perform custom behavior before and after the method invocation. It is also responsible for choosing whether to proceed to the join point or to shortcut the advised method execution by returning its own return value or throwing an exception.

Choosing an advice type is based on the requirements of the application, but we should choose the most specific advice type for our needs. Don’t use _around_ advice when _before_ advice will do.

In most cases, around advice can accomplish everything that the other three advice types can, but it may be overkill for what you are trying to achieve. By keeping the advice type as focused as possible, we reduce the scope for errors.

### 5. Getting Started with Spring AOP <a href="#h-4-spring-aop-example" id="h-4-spring-aop-example"></a>

Let us peek into how to use AOP in a Spring application.

#### 5.1. Maven <a href="#h-4-1-maven-dependencies" id="h-4-1-maven-dependencies"></a>

In a Spring Boot application, adding dependencies is rather easier.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

#### 5.2. Enabling Spring AOP

We can enable Spring AOP using the _**@EnableAspectJAutoProxy**_ annotation on a configuration.

```java
@Configuration
@EnableAspectJAutoProxy
@ComponentScan
public class AopConfig {
 
}
```

#### 5.3. Define an Advice using Aspect and Pointcut Expression <a href="#h-4-2-aspect-and-pointcut-expression" id="h-4-2-aspect-and-pointcut-expression"></a>

```java
@Aspect
public class EmployeeCRUDAspect {
      
    @Before("execution(* EmployeeManager.getEmployeeById(..))")     //point-cut expression
    public void logBeforeV1(JoinPoint joinPoint) {

        System.out.println("EmployeeCRUDAspect.logBeforeV1() : " + joinPoint.getSignature().getName());
    }
}
```

#### 5.4. Advised Methods (Jointpoints) <a href="#h-4-3-methods-joint-points" id="h-4-3-methods-joint-points"></a>

Write methods on which you want to execute advice and those match with point-cut expressions.

```java
@Component
public class EmployeeManager {

    public EmployeeDTO getEmployeeById(Integer employeeId) {
        System.out.println("Method getEmployeeById() called");
        return new EmployeeDTO();
    }
}
```

In the above example, `logBeforeV1()` will be executed **before** `getEmployeeById()` method because it matches the join-point expression.

#### 5.5. Run the Application <a href="#h-4-4-run-the-application" id="h-4-4-run-the-application"></a>

Run the application and watch the console.

```java
public class TestAOP
{
    @SuppressWarnings("resource")
    public static void main(String[] args) {
  
        ApplicationContext context = new ClassPathXmlApplicationContext
                  ("com/howtodoinjava/demo/aop/applicationContext.xml");
 
        EmployeeManager manager = context.getBean(EmployeeManager.class);
  
        manager.getEmployeeById(1);
    }
}
```

Program output:

```
EmployeeCRUDAspect.logBeforeV1() : getEmployeeById
Method getEmployeeById() called
```

_Spring aop tutorial for beginners_ with example.

### 6. Spring AOP Annotation Examples <a href="#h-6-spring-aop-aspectj-annotations-examples" id="h-6-spring-aop-aspectj-annotations-examples"></a>

* [Spring AOP AspectJ Annotation Configuration Example](https://howtodoinjava.com/spring-aop/spring-aop-aspectj-example-tutorial-using-annotation-config/): Learn to configure AOP aspects using AspectJ annotations configuration
* [Spring AOP AspectJ @Before](https://howtodoinjava.com/spring-aop/aspectj-before-annotation-example/): Learn to configure aop before the advice aspect using `@Before` annotation.
* [Spring AOP AspectJ @After](https://howtodoinjava.com/spring-aop/aspectj-after-annotation-example/): Learn to configure aop after the advice aspect using `@After` annotation.
* [Spring AOP AspectJ @Around](https://howtodoinjava.com/spring-aop/aspectj-around-annotation-example/): Learn to configure aop around the advice aspect using `@Around` annotation.
* [Spring AOP AspectJ @AfterReturning](https://howtodoinjava.com/spring-aop/aspectj-after-returning-annotation-example/): Learn to configure aop after returning advice aspect using `@AfterReturning` annotation.
* [Spring AOP AspectJ @AfterThrowing](https://howtodoinjava.com/spring-aop/aspectj-afterthrowing-annotation-example/): Learn to configure aop after throwing advice aspect using `@AfterThrowing` annotation.

### 7. Spring AOP Advanced Tutorials <a href="#h-7-more-spring-aop-tutorial" id="h-7-more-spring-aop-tutorial"></a>

* [Spring AOP Aspects Ordering](https://howtodoinjava.com/spring-aop/spring-aop-specifying-aspects-ordering/): Learn to order the aspect execution in case of multiple aspects that need to be executed in a certain order.
* [Spring AOP AspectJ Pointcut Expressions](https://howtodoinjava.com/spring-aop/aspectj-pointcut-expressions/): Learn to write pointcut expressions to match a variety of joinpoints.

### 8. Spring AOP Interview Questions <a href="#h-8-interview-questions" id="h-8-interview-questions"></a>

* [Top Spring AOP Interview Questions with Answers](https://howtodoinjava.com/interview-questions/top-spring-aop-interview-questions-with-answers/): Some most asked spring AOP interview questions in Java interviews.

Happy Learning !!

> [Source Code on Github](https://github.com/lokeshgupta1981/spring-core/tree/master/src/main/java/com/howtodoinjava/core/aop)
