# [Big Data & Reporting with MongoDB][0]

[Data][1]

## 3. The $group Pipeline Operator

### Simple $group

```
> var s1 = { "$group" : { "_id" : "all", "sum" : { "$sum" : 1 } } }
> db.zips.aggregate(s1)
{ "_id" : "all", "sum" : 29353 }
```

### $min $max $avg

```
> var s1 = { $group : { _id : "all", avg : { $avg : "$pop" } } }
> db.zips.aggregate(s1)
{ "_id" : "all", "avg" : 8462.794262937348 }
```

```
> var s1 = { $group : { _id : "all", min : { $min : "$pop" } } }
> db.zips.aggregate(s1)
{ "_id" : "all", "min" : 0 }
```

```
> var s1 = { $group : { _id : "all", max : { $max : "$pop" } } }
> db.zips.aggregate(s1)
{ "_id" : "all", "max" : 112047 }
```

```
> var s1 = { $group : { _id : "all", sum : { $sum : 1 }, avg : { $avg : "$pop" }, min : { $min : "$pop" }, max : { $max : "$pop" }}}
> db.zips.aggregate(s1)
{ "_id" : "all", "sum" : 29353, "avg" : 8462.794262937348, "min" : 0, "max" : 112047 }
```

[0]: http://www.pluralsight.com/courses/mongodb-big-data-reporting
[1]: http://media.mongodb.org/zips.json
