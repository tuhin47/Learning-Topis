# Hibernate Entity's Persistence States

When the POJOs are properly annotated with required annotations then hibernate will be able to identify and work with them e.g. store them in the database, update them, etc. These POJOs are said to be **managed by hibernate’s persistent context** or _hibernate entities_.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

### 1. Entity Lifecycle States

1. Transient
2. Persistent or Managed
3. Detached
4. Removed

#### 1.1. _Transient_

Transient entities exist in heap memory as normal Java objects. Hibernate **does not manage** transient entities. The persistent context **does not track** the changes done to them.

#### 1.2. _Persistent_ or _Managed_

Persistent entities exist in the database, and Hibernate’s **persistent context tracks all the changes done on the persistent entities** by the client code.

We can get persistent entity in either of two ways:

* Load the entity using _get()_ or _load()_ method.
* Persist the transient or detached entity using _persist()_, _save()_, _update()_ or _saveOrUpdate()_ methods.

```
EmployeeEntity employee = session.load(1);

//or

EmployeeEntity employee = new EmployeeEntity();
session.save(employee);
```

#### 1.3. Detached

**Detached entities have a representation in the database but these are currently not managed by the **_**Session**_. Any changes to a detached entity will not be reflected in the database, and vice-versa.

```
session.close();

//or
session.evict(entity);
```

> One reason you might consider doing this would be to read an object out of the database, modify the properties of the object in memory, and then store the results some place other than your database. This would be an alternative to doing a deep copy of the object.

A detached instance can be associated with a new Hibernate session when your application calls one of the `load()`, `refresh()`, `merge()`, `update()`, or `save()` methods on the new session with a reference to the detached object.

#### 1.4. Removed

Removed entities are objects that were being managed by Hibernate (persistent entities, in other words) and now those have been passed to the session’s `remove()` method.

When the application marks the changes held in the _Session_ as to be committed, the entries in the database that correspond to removed entities are deleted.

```
session.remove(employee);
```

### 2. Conclusion

1. The newly created POJO object will be in the transient state. The transient entity doesn’t represent any row of the database i.e. not associated with any session object. It’s a plain simple java object.
2. A persistent entity represents one row of the database and is always associated with some unique hibernate session. Changes to persistent objects are tracked by hibernate and are saved into the database when commit calls happen.
3. Detached entities are those who were once persistent in the past, and now they are no longer persistent. To persist changes done in detached objects, you must re-attach them to hibernate session.
4. Removed entities are persistent objects that have been passed to the session’s `remove()` method and soon will be deleted as soon as changes held in the session will be committed to the database.
