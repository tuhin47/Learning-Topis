# Articles

## Spring Annotations

{% embed url="https://medium.com/@sureshkumar_95502/spring-spring-boot-annotations-cheat-sheet-de546e0b03d4" %}
Annotations
{% endembed %}

> {% code overflow="wrap" %}
> ```java
> @After, @Around, @Aspect, @Autowired, @Bean, @Before, @Cacheable, @CacheEvict, @CachePut, @Column, @Component ,@ComponentScan, @Configuration, @ConfigurationProperties, @ControllerAdvice, @CrossOrigin, @DeleteMapping ,@EnableAutoConfiguration, @EnableCaching, @EnableScheduling, @Entity, @ExceptionHandler, @GetMapping, @Lazy ,@ManytoMany, @ManytoOne, @Max, @Min, @Negative, @NotNull, @OnetoMany, @OnetoOne, @PathVariable, @PermitAll, @Pointcut ,@Positive, @PostConstruct, @PostMapping, @PreAuthorize, @PreDestroy, @Primary, @Profile, @PropertySource, @PutMapping ,@Qualifier, @Query, @Repository, @RequestBody, @RequestHeader, @RequestMapping, @RequestParam, @RestController ,@Scheduled, @Secured, @Service, @SpringBootApplication, @Table, @Transactional, @Valid, @Value
> ```
> {% endcode %}

## Transactional

{% embed url="https://youlearncode.com/transactional-in-spring-boot/#6_Transactional_Isolation_Attribute" %}
Details with Example
{% endembed %}

* [1. What is @Transactional Annotation?](https://youlearncode.com/transactional-in-spring-boot/#1\_What\_is\_Transactional\_Annotation)
* [3. @Transactional Attributes Overview](https://youlearncode.com/transactional-in-spring-boot/#3\_Transactional\_Attributes\_Overview)
* [5. @Transactional Propagation Attribute](https://youlearncode.com/transactional-in-spring-boot/#5\_Transactional\_Propagation\_Attribute)
  * [5.1 @Transactional(propagation = Propagation.REQUIRED)](https://youlearncode.com/transactional-in-spring-boot/#51\_Transactionalpropagation\_PropagationREQUIRED)
  * [5.2 @Transactional(propagation = Propagation.SUPPORTS)](https://youlearncode.com/transactional-in-spring-boot/#52\_Transactionalpropagation\_PropagationSUPPORTS)
  * [5.3 @Transactional(propagation = Propagation.MANDATORY)](https://youlearncode.com/transactional-in-spring-boot/#53\_Transactionalpropagation\_PropagationMANDATORY)
  * [5.4 @Transactional(propagation = Propagation.REQUIRES\_NEW)](https://youlearncode.com/transactional-in-spring-boot/#54\_Transactionalpropagation\_PropagationREQUIRES\_NEW)
  * [5.6 @Transactional(propagation = Propagation.NEVER)](https://youlearncode.com/transactional-in-spring-boot/#56\_Transactionalpropagation\_PropagationNEVER)
  * [5.6 @Transactional(propagation = Propagation.NESTED)](https://youlearncode.com/transactional-in-spring-boot/#56\_Transactionalpropagation\_PropagationNESTED)
* [6. @Transactional Isolation Attribute](https://youlearncode.com/transactional-in-spring-boot/#6\_Transactional\_Isolation\_Attribute)
  * [6.1 READ\_UNCOMMITTED & READ\_COMMITTED Isolation Levels](https://youlearncode.com/transactional-in-spring-boot/#61\_READ\_UNCOMMITTED\_READ\_COMMITTED\_Isolation\_Levels)
    * [6.1.1 @Transactional(isolation = READ\_UNCOMMITTED)](https://youlearncode.com/transactional-in-spring-boot/#611\_Transactionalisolation\_READ\_UNCOMMITTED)
    * [6.1.2 @Transactional(isolation = READ\_COMMITTED)](https://youlearncode.com/transactional-in-spring-boot/#612\_Transactionalisolation\_READ\_COMMITTED)
  * [6.2 @Transactional REPEATABLE\_READ & SERIALIZABLE Levels](https://youlearncode.com/transactional-in-spring-boot/#62\_Transactional\_REPEATABLE\_READ\_SERIALIZABLE\_Levels)
* [7. @Transactional RollbackFor & NoRollbackFor Attributes](https://youlearncode.com/transactional-in-spring-boot/#7\_Transactional\_RollbackFor\_NoRollbackFor\_Attributes)
  * [7.1 Default RollbackFor Option](https://youlearncode.com/transactional-in-spring-boot/#71\_Default\_RollbackFor\_Option)
  * [7.2 RollbackFor Attribute](https://youlearncode.com/transactional-in-spring-boot/#72\_RollbackFor\_Attribute)
  * [7.3 NoRollbackFor Attribute](https://youlearncode.com/transactional-in-spring-boot/#73\_NoRollbackFor\_Attribute)
* [8. Conclusion](https://youlearncode.com/transactional-in-spring-boot/#8\_Conclusion)
* [9. Sources](https://youlearncode.com/transactional-in-spring-boot/#9\_Sources)

## SPRING BEAN SCOPES

{% embed url="https://youlearncode.com/spring-bean-scopes/" %}
Bean Scopes
{% endembed %}

* [1. What are Spring Bean Scopes?](https://youlearncode.com/spring-bean-scopes/#1\_What\_are\_Spring\_Bean\_Scopes)
* [2. Setting Up the Project](https://youlearncode.com/spring-bean-scopes/#2\_Setting\_Up\_the\_Project)
* [3. The @Scope Annotation](https://youlearncode.com/spring-bean-scopes/#3\_The\_Scope\_Annotation)
* [4. Singleton Scope](https://youlearncode.com/spring-bean-scopes/#4\_Singleton\_Scope)
* [5. Prototype Scope](https://youlearncode.com/spring-bean-scopes/#5\_Prototype\_Scope)
* [6. Web Scopes](https://youlearncode.com/spring-bean-scopes/#6\_Web\_Scopes)
  * [6.1 Request Scope](https://youlearncode.com/spring-bean-scopes/#61\_Request\_Scope)
  * [6.2 Session Scope](https://youlearncode.com/spring-bean-scopes/#62\_Session\_Scope)
  * [6.3 Application Scope](https://youlearncode.com/spring-bean-scopes/#63\_Application\_Scope)
* [7. WebSocket Scope](https://youlearncode.com/spring-bean-scopes/#7\_WebSocket\_Scope)
* [8. Conclusion](https://youlearncode.com/spring-bean-scopes/#8\_Conclusion)

## Spring Boot Cache

{% embed url="https://youlearncode.com/spring-boot-cache/" %}
Spring boot Cache
{% endembed %}

* [1. Why Use Cache in Spring Boot?](https://youlearncode.com/spring-boot-cache/#1\_Why\_Use\_Cache\_in\_Spring\_Boot)
* [2. Setting Up the Project](https://youlearncode.com/spring-boot-cache/#2\_Setting\_Up\_the\_Project)
* [3. Enabling Caching Using @EnableCaching](https://youlearncode.com/spring-boot-cache/#3\_Enabling\_Caching\_Using\_EnableCaching)
* [4. Project Base](https://youlearncode.com/spring-boot-cache/#4\_Project\_Base)
* [5. Using @Cacheable to Cache a Method’s Result in Spring Boot](https://youlearncode.com/spring-boot-cache/#5\_Using\_Cacheable\_to\_Cache\_a\_Methods\_Result\_in\_Spring\_Boot)
  * [5.1 Using @Cacheable with default attributes](https://youlearncode.com/spring-boot-cache/#51\_Using\_Cacheable\_with\_default\_attributes)
  * [5.2 Using The Key Attribute](https://youlearncode.com/spring-boot-cache/#52\_Using\_The\_Key\_Attribute)
    * [5.2.1 #root.method, #root.target and #root.caches](https://youlearncode.com/spring-boot-cache/#521\_rootmethod\_roottarget\_and\_rootcaches)
    * [5.2.2 #root.methodName and #root.targetClass](https://youlearncode.com/spring-boot-cache/#522\_rootmethodName\_and\_roottargetClass)
    * [5.2.3 Setting custom key based on arguments](https://youlearncode.com/spring-boot-cache/#523\_Setting\_custom\_key\_based\_on\_arguments)
  * [5.3 Creating a Custom KeyGenerator for Cache Key](https://youlearncode.com/spring-boot-cache/#53\_Creating\_a\_Custom\_KeyGenerator\_for\_Cache\_Key)
  * [5.4 Configuring All Existing Caches](https://youlearncode.com/spring-boot-cache/#54\_Configuring\_All\_Existing\_Caches)
  * [5.4 Setting a Different Config for Each Cache by Using CacheManager Attribute](https://youlearncode.com/spring-boot-cache/#54\_Setting\_a\_Different\_Config\_for\_Each\_Cache\_by\_Using\_CacheManager\_Attribute)
  * [5.5 Using the CacheResolver Attribute](https://youlearncode.com/spring-boot-cache/#55\_Using\_the\_CacheResolver\_Attribute)
  * [5.6 Using the Condition Attribute](https://youlearncode.com/spring-boot-cache/#56\_Using\_the\_Condition\_Attribute)
  * [5.7 Using the Unless Attribute](https://youlearncode.com/spring-boot-cache/#57\_Using\_the\_Unless\_Attribute)
* [6. Using @CacheEvict to Invalidate Cache in Spring Boot](https://youlearncode.com/spring-boot-cache/#6\_Using\_CacheEvict\_to\_Invalidate\_Cache\_in\_Spring\_Boot)
  * [6.1 Evicting all entries of brandFilterCache](https://youlearncode.com/spring-boot-cache/#61\_Evicting\_all\_entries\_of\_brandFilterCache)
  * [6.2 Evicting Specific Entries of brandFilterCache](https://youlearncode.com/spring-boot-cache/#62\_Evicting\_Specific\_Entries\_of\_brandFilterCache)
* [7. Using @CachePut to Update a Cache in Spring Boot](https://youlearncode.com/spring-boot-cache/#7\_Using\_CachePut\_to\_Update\_a\_Cache\_in\_Spring\_Boot)
  * [7.1 Without @CachePut](https://youlearncode.com/spring-boot-cache/#71\_Without\_CachePut)
  * [7.2 With @CachePut](https://youlearncode.com/spring-boot-cache/#72\_With\_CachePut)
* [8. Cache Without Annotations in Spring Boot](https://youlearncode.com/spring-boot-cache/#8\_Cache\_Without\_Annotations\_in\_Spring\_Boot)
  * [8.1 Cacheable Method without @Cacheable](https://youlearncode.com/spring-boot-cache/#81\_Cacheable\_Method\_without\_Cacheable)
  * [8.2 Evicting Specific or All Cache Entries Without @CacheEvict](https://youlearncode.com/spring-boot-cache/#82\_Evicting\_Specific\_or\_All\_Cache\_Entries\_Without\_CacheEvict)
  * [8.3 Updating Cache Entries Without @CachePut](https://youlearncode.com/spring-boot-cache/#83\_Updating\_Cache\_Entries\_Without\_CachePut)
* [9. Conclusion](https://youlearncode.com/spring-boot-cache/#9\_Conclusion)
* [10. Sources](https://youlearncode.com/spring-boot-cache/#10\_Sources)

{% embed url="https://medium.com/hprog99/mastering-transactional-annotations-in-spring-boot-eef339543afe" %}
Quick Look
{% endembed %}

## JPA Pagination and Sorting

{% embed url="https://github.com/bezkoder/spring-boot-jpa-paging-sorting" %}
Examples
{% endembed %}

## MongoDB dynamic Queries

{% embed url="https://github.com/anicetkeric/spring-data-mongodb-dynamic-queries" %}

## Application Properties

{% embed url="https://www.javatpoint.com/spring-boot-properties" %}
Example of Eesstional Properties
{% endembed %}

## Axon Server

{% embed url="https://developer.axoniq.io/w/running-axon-server-in-docker-continuing-from-local-developer-install-to-containerized" %}
