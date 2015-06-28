# [Big Data & Reporting with MongoDB][0]

[Data][1]

## 3. The $group Pipeline Operator

### Simple $group

```
> var s1 = { "$group" : { "_id" : "all", "sum" : { "$sum" : 1 } } }
> db.zips.aggregate(s1)
{ "_id" : "all", "sum" : 29353 }
```

[0]: http://www.pluralsight.com/courses/mongodb-big-data-reporting
[1]: http://media.mongodb.org/zips.json
