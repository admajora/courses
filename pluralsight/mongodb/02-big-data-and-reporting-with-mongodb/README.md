# [Big Data & Reporting with MongoDB][0]

[Data][1]

Data structure:

```
> db.zips.findOne()
{
  "_id" : "01007",
  "city" : "BELCHERTOWN",
  "loc" : [
    -72.410953,
    42.275103
  ],
  "pop" : 10579,
  "state" : "MA"
}
```

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

### Group by field

```
> var s1 = { $group : { _id : "$state", sum : { $sum : 1 }}}
> db.zips.aggregate(s1)
{ "_id" : "WA", "sum" : 484 }
{ "_id" : "HI", "sum" : 80 }
{ "_id" : "CA", "sum" : 1516 }
{ "_id" : "OR", "sum" : 384 }
{ "_id" : "NM", "sum" : 276 }
{ "_id" : "UT", "sum" : 205 }
{ "_id" : "OK", "sum" : 586 }
{ "_id" : "LA", "sum" : 464 }
{ "_id" : "NE", "sum" : 574 }
{ "_id" : "TX", "sum" : 1671 }
{ "_id" : "MO", "sum" : 994 }
{ "_id" : "MT", "sum" : 314 }
{ "_id" : "ND", "sum" : 391 }
{ "_id" : "AK", "sum" : 195 }
{ "_id" : "SD", "sum" : 384 }
{ "_id" : "DC", "sum" : 24 }
{ "_id" : "MN", "sum" : 882 }
{ "_id" : "ID", "sum" : 244 }
{ "_id" : "KY", "sum" : 809 }
{ "_id" : "WI", "sum" : 716 }
{ "_id" : "TN", "sum" : 582 }
{ "_id" : "AZ", "sum" : 270 }
{ "_id" : "CO", "sum" : 414 }
{ "_id" : "KS", "sum" : 715 }
{ "_id" : "MS", "sum" : 363 }
{ "_id" : "FL", "sum" : 804 }
{ "_id" : "IA", "sum" : 922 }
{ "_id" : "NC", "sum" : 705 }
{ "_id" : "VA", "sum" : 816 }
{ "_id" : "IN", "sum" : 676 }
{ "_id" : "ME", "sum" : 410 }
{ "_id" : "WV", "sum" : 656 }
{ "_id" : "MD", "sum" : 420 }
{ "_id" : "GA", "sum" : 635 }
{ "_id" : "NH", "sum" : 218 }
{ "_id" : "NV", "sum" : 104 }
{ "_id" : "DE", "sum" : 53 }
{ "_id" : "AL", "sum" : 567 }
{ "_id" : "CT", "sum" : 263 }
{ "_id" : "SC", "sum" : 350 }
{ "_id" : "RI", "sum" : 69 }
{ "_id" : "PA", "sum" : 1458 }
{ "_id" : "VT", "sum" : 243 }
{ "_id" : "MA", "sum" : 474 }
{ "_id" : "WY", "sum" : 140 }
{ "_id" : "MI", "sum" : 876 }
{ "_id" : "OH", "sum" : 1007 }
{ "_id" : "AR", "sum" : 578 }
{ "_id" : "IL", "sum" : 1237 }
{ "_id" : "NJ", "sum" : 540 }
{ "_id" : "NY", "sum" : 1595 }
```

```
> var s1 = { $group : { _id : "$state", sum : { $sum : 1 }, avg : { $avg : "$pop" }, min : { $min : "$pop" }, max : { $max : "$pop" }}}
> db.zips.aggregate(s1)
{ "_id" : "WA", "sum" : 484, "avg" : 10055.148760330578, "min" : 2, "max" : 50515 }
{ "_id" : "HI", "sum" : 80, "avg" : 13852.8625, "min" : 0, "max" : 62915 }
{ "_id" : "CA", "sum" : 1516, "avg" : 19627.236147757256, "min" : 0, "max" : 99568 }
{ "_id" : "OR", "sum" : 384, "avg" : 7401.877604166667, "min" : 0, "max" : 48007 }
{ "_id" : "NM", "sum" : 276, "avg" : 5489.380434782609, "min" : 0, "max" : 57502 }
{ "_id" : "UT", "sum" : 205, "avg" : 8404.146341463415, "min" : 9, "max" : 55999 }
{ "_id" : "OK", "sum" : 586, "avg" : 5367.892491467577, "min" : 8, "max" : 45542 }
{ "_id" : "LA", "sum" : 464, "avg" : 9089.644396551725, "min" : 0, "max" : 58905 }
{ "_id" : "NE", "sum" : 574, "avg" : 2749.3710801393727, "min" : 5, "max" : 35325 }
{ "_id" : "TX", "sum" : 1671, "avg" : 10164.333333333334, "min" : 0, "max" : 79463 }
{ "_id" : "MO", "sum" : 994, "avg" : 5141.496981891348, "min" : 0, "max" : 54994 }
{ "_id" : "MT", "sum" : 314, "avg" : 2544.420382165605, "min" : 7, "max" : 40121 }
{ "_id" : "ND", "sum" : 391, "avg" : 1632.4092071611253, "min" : 12, "max" : 42195 }
{ "_id" : "AK", "sum" : 195, "avg" : 2793.3230769230768, "min" : 0, "max" : 32383 }
{ "_id" : "SD", "sum" : 384, "avg" : 1810.9296875, "min" : 8, "max" : 45328 }
{ "_id" : "DC", "sum" : 24, "avg" : 25287.5, "min" : 11, "max" : 62924 }
{ "_id" : "MN", "sum" : 882, "avg" : 4958.02947845805, "min" : 0, "max" : 51421 }
{ "_id" : "ID", "sum" : 244, "avg" : 4126.020491803279, "min" : 0, "max" : 40912 }
{ "_id" : "KY", "sum" : 809, "avg" : 4543.243510506799, "min" : 0, "max" : 46563 }
{ "_id" : "WI", "sum" : 716, "avg" : 6832.079608938548, "min" : 2, "max" : 57187 }
{ "_id" : "TN", "sum" : 582, "avg" : 8378.792096219931, "min" : 2, "max" : 60508 }
{ "_id" : "AZ", "sum" : 270, "avg" : 13574.918518518518, "min" : 2, "max" : 57131 }
{ "_id" : "CO", "sum" : 414, "avg" : 7955.929951690821, "min" : 0, "max" : 59418 }
{ "_id" : "KS", "sum" : 715, "avg" : 3461.937062937063, "min" : 0, "max" : 50178 }
{ "_id" : "MS", "sum" : 363, "avg" : 7088.749311294766, "min" : 0, "max" : 46968 }
{ "_id" : "FL", "sum" : 804, "avg" : 15779.407960199005, "min" : 0, "max" : 73194 }
{ "_id" : "IA", "sum" : 922, "avg" : 3011.301518438178, "min" : 12, "max" : 52105 }
{ "_id" : "NC", "sum" : 705, "avg" : 9402.321985815603, "min" : 0, "max" : 69179 }
{ "_id" : "VA", "sum" : 816, "avg" : 7575.341911764706, "min" : 0, "max" : 68525 }
{ "_id" : "IN", "sum" : 676, "avg" : 8201.384615384615, "min" : 75, "max" : 56543 }
{ "_id" : "ME", "sum" : 410, "avg" : 2991.8243902439026, "min" : 0, "max" : 40434 }
{ "_id" : "WV", "sum" : 656, "avg" : 2733.454268292683, "min" : 0, "max" : 70185 }
{ "_id" : "MD", "sum" : 420, "avg" : 11384.235714285714, "min" : 1, "max" : 76002 }
{ "_id" : "GA", "sum" : 635, "avg" : 10201.914960629922, "min" : 0, "max" : 58646 }
{ "_id" : "NH", "sum" : 218, "avg" : 5088.311926605505, "min" : 27, "max" : 41438 }
{ "_id" : "NV", "sum" : 104, "avg" : 11556.086538461539, "min" : 1, "max" : 51532 }
{ "_id" : "DE", "sum" : 53, "avg" : 12569.207547169812, "min" : 108, "max" : 50573 }
{ "_id" : "AL", "sum" : 567, "avg" : 7126.255731922399, "min" : 0, "max" : 44165 }
{ "_id" : "CT", "sum" : 263, "avg" : 12498.539923954373, "min" : 25, "max" : 60670 }
{ "_id" : "SC", "sum" : 350, "avg" : 9962.00857142857, "min" : 0, "max" : 66990 }
{ "_id" : "RI", "sum" : 69, "avg" : 14539.391304347826, "min" : 45, "max" : 53733 }
{ "_id" : "PA", "sum" : 1458, "avg" : 8149.275034293552, "min" : 0, "max" : 80454 }
{ "_id" : "VT", "sum" : 243, "avg" : 2315.8765432098767, "min" : 0, "max" : 39127 }
{ "_id" : "MA", "sum" : 474, "avg" : 12692.879746835442, "min" : 0, "max" : 65046 }
{ "_id" : "WY", "sum" : 140, "avg" : 3239.4857142857145, "min" : 6, "max" : 33107 }
{ "_id" : "MI", "sum" : 876, "avg" : 10611.069634703197, "min" : 0, "max" : 84712 }
{ "_id" : "OH", "sum" : 1007, "avg" : 10771.119165839125, "min" : 38, "max" : 66674 }
{ "_id" : "AR", "sum" : 578, "avg" : 4066.998269896194, "min" : 0, "max" : 53532 }
{ "_id" : "IL", "sum" : 1237, "avg" : 9238.137429264349, "min" : 0, "max" : 112047 }
{ "_id" : "NJ", "sum" : 540, "avg" : 14315.162962962962, "min" : 17, "max" : 69646 }
{ "_id" : "NY", "sum" : 1595, "avg" : 11279.248902821317, "min" : 0, "max" : 111396 }
```

### Value-of-field

```
> var s2 = { $group : { _id : "$sku", min : { $min : "$item.qty" }}}
```

### Field name

```
> var s1 = { $group : { _id : "all", "some field name" : { $sum : 1 }}}
> db.zips.aggregate(s1)
{ "_id" : "all", "some field name" : 29353 }
```

### $addToSet

```
> var s1 = { $group : { _id : "all", states : { $addToSet : "$state" }}}
> db.zips.aggregate(s1)
{ "_id" : "all", "states" : [ "WA", "HI", "CA", "OR", "NM", "UT", "OK", "LA", "NE", "TX", "MO", "MT", "ND", "AK", "SD", "DC", "MN", "ID", "KY", "WI", "TN", "AZ", "CO", "KS", "MS", "FL", "IA", "NC", "VA", "IN", "ME", "WV", "MD", "GA", "NH", "NV", "DE", "AL", "CT", "SC", "RI", "PA", "VT", "MA", "WY", "MI", "OH", "AR", "IL", "NJ", "NY" ] }
```

### $push

```
> var s1 = { $group : { _id : "all", states : { $push : "$state" }}}
> db.zips.aggregate(s1)
# Will push every item in the array repeatedly
```

### $first

```
> var s1 = { $group : { _id : "$state", sample : { $first : "$city" }}}
> db.zips.aggregate(s1)
{ "_id" : "WA", "sample" : "ALGONA" }
{ "_id" : "HI", "sample" : "ELEELE" }
{ "_id" : "CA", "sample" : "LOS ANGELES" }
{ "_id" : "OR", "sample" : "AURORA" }
{ "_id" : "NM", "sample" : "ALGODONES" }
{ "_id" : "UT", "sample" : "ALTAMONT" }
{ "_id" : "OK", "sample" : "ALEX" }
{ "_id" : "LA", "sample" : "METAIRIE" }
{ "_id" : "NE", "sample" : "ABIE" }
{ "_id" : "TX", "sample" : "ALLEN" }
{ "_id" : "MO", "sample" : "MANCHESTER" }
{ "_id" : "MT", "sample" : "ACTON" }
{ "_id" : "ND", "sample" : "ALICE" }
{ "_id" : "AK", "sample" : "ANCHORAGE" }
{ "_id" : "SD", "sample" : "AURORA" }
{ "_id" : "DC", "sample" : "WASHINGTON" }
{ "_id" : "MN", "sample" : "EAST BETHEL" }
{ "_id" : "ID", "sample" : "FORT HALL" }
{ "_id" : "KY", "sample" : "BARDSTOWN" }
{ "_id" : "WI", "sample" : "ADELL" }
.
.
.
```

### $last

```
> var s1 = { $group : { _id : "$state", city : { $last : "$city" }}}
> db.zips.aggregate(s1)
{ "_id" : "WA", "city" : "DAYTON" }
{ "_id" : "HI", "city" : "HONOLULU" }
{ "_id" : "CA", "city" : "CARNELIAN BAY" }
{ "_id" : "OR", "city" : "PRAIRIE CITY" }
{ "_id" : "NM", "city" : "BELL RANCH" }
{ "_id" : "UT", "city" : "PAROWAN" }
{ "_id" : "OK", "city" : "OCTAVIA" }
{ "_id" : "LA", "city" : "WINNFIELD" }
{ "_id" : "NE", "city" : "LAKESIDE" }
{ "_id" : "TX", "city" : "EL PASO" }
{ "_id" : "MO", "city" : "SPRINGFIELD" }
{ "_id" : "MT", "city" : "WHITEFISH" }
{ "_id" : "ND", "city" : "SURREY" }
{ "_id" : "AK", "city" : "ANGOON" }
{ "_id" : "SD", "city" : "ZEONA" }
{ "_id" : "DC", "city" : "WASHINGTON" }
{ "_id" : "MN", "city" : "SAINT VINCENT" }
{ "_id" : "ID", "city" : "WORLEY" }
{ "_id" : "KY", "city" : "MILLTOWN" }
{ "_id" : "WI", "city" : "WINNECONNE" }
.
.
.
```

## 4. Document Selection

### $match

```
> var s3 = { $match : { state : "CA" }}
> db.zips.aggregate(s3)
{ "_id" : "90001", "city" : "LOS ANGELES", "loc" : [ -118.247896, 33.973093 ], "pop" : 51841, "state" : "CA" }
{ "_id" : "90002", "city" : "LOS ANGELES", "loc" : [ -118.246213, 33.94969 ], "pop" : 40629, "state" : "CA" }
{ "_id" : "90003", "city" : "LOS ANGELES", "loc" : [ -118.272739, 33.965335 ], "pop" : 53938, "state" : "CA" }
{ "_id" : "90005", "city" : "LOS ANGELES", "loc" : [ -118.301197, 34.058508 ], "pop" : 35864, "state" : "CA" }
{ "_id" : "90004", "city" : "LOS ANGELES", "loc" : [ -118.302863, 34.076163 ], "pop" : 64062, "state" : "CA" }
{ "_id" : "90006", "city" : "LOS ANGELES", "loc" : [ -118.291687, 34.049323 ], "pop" : 63389, "state" : "CA" }
{ "_id" : "90007", "city" : "LOS ANGELES", "loc" : [ -118.287095, 34.029442 ], "pop" : 46985, "state" : "CA" }
{ "_id" : "90008", "city" : "LOS ANGELES", "loc" : [ -118.341123, 34.011643 ], "pop" : 33073, "state" : "CA" }
{ "_id" : "90010", "city" : "LOS ANGELES", "loc" : [ -118.302664, 34.060633 ], "pop" : 5335, "state" : "CA" }
{ "_id" : "90011", "city" : "LOS ANGELES", "loc" : [ -118.258189, 34.007856 ], "pop" : 96074, "state" : "CA" }
{ "_id" : "90012", "city" : "LOS ANGELES", "loc" : [ -118.238479, 34.061396 ], "pop" : 28518, "state" : "CA" }
{ "_id" : "90014", "city" : "LOS ANGELES", "loc" : [ -118.250937, 34.044272 ], "pop" : 2715, "state" : "CA" }
{ "_id" : "90013", "city" : "LOS ANGELES", "loc" : [ -118.243366, 34.044841 ], "pop" : 5653, "state" : "CA" }
{ "_id" : "90015", "city" : "LOS ANGELES", "loc" : [ -118.271613, 34.043439 ], "pop" : 18880, "state" : "CA" }
{ "_id" : "90017", "city" : "LOS ANGELES", "loc" : [ -118.266582, 34.055864 ], "pop" : 21790, "state" : "CA" }
{ "_id" : "90016", "city" : "LOS ANGELES", "loc" : [ -118.352787, 34.029826 ], "pop" : 43669, "state" : "CA" }
{ "_id" : "90018", "city" : "LOS ANGELES", "loc" : [ -118.315173, 34.028972 ], "pop" : 48267, "state" : "CA" }
{ "_id" : "90019", "city" : "LOS ANGELES", "loc" : [ -118.33426, 34.048158 ], "pop" : 64996, "state" : "CA" }
{ "_id" : "90020", "city" : "LOS ANGELES", "loc" : [ -118.302211, 34.066535 ], "pop" : 34926, "state" : "CA" }
{ "_id" : "90021", "city" : "LOS ANGELES", "loc" : [ -118.244698, 34.033303 ], "pop" : 2869, "state" : "CA" }
.
.
.
```

### $match and Arrays

```
> var s3 = { $match : { loc : 42.275103 }}
> db.zips.aggregate(s3)
{ "_id" : "01007", "city" : "BELCHERTOWN", "loc" : [ -72.410953, 42.275103 ], "pop" : 10579, "state" : "MA" }
```

### Compound $match

```
> var s3 = { $match : { pop : { $gte : 103000, $lt : 113000 }}}
> db.zips.aggregate(s3)
{ "_id" : "10021", "city" : "NEW YORK", "loc" : [ -73.958805, 40.768476 ], "pop" : 106564, "state" : "NY" }
{ "_id" : "11226", "city" : "BROOKLYN", "loc" : [ -73.956985, 40.646694 ], "pop" : 111396, "state" : "NY" }
{ "_id" : "60623", "city" : "CHICAGO", "loc" : [ -87.7157, 41.849015 ], "pop" : 112047, "state" : "IL" }
```

### $sort

```
> var s3 = { $sort : { pop : 1 }}
> db.zips.aggregate(s3)
{ "_id" : "02163", "city" : "CAMBRIDGE", "loc" : [ -71.141879, 42.364005 ], "pop" : 0, "state" : "MA" }
{ "_id" : "04013", "city" : "BUSTINS ISLAND", "loc" : [ -70.042247, 43.79602 ], "pop" : 0, "state" : "ME" }
{ "_id" : "05405", "city" : "UNIV OF VERMONT", "loc" : [ -73.2002, 44.477733 ], "pop" : 0, "state" : "VT" }
{ "_id" : "12922", "city" : "CHILDWOLD", "loc" : [ -74.675878, 44.286715 ], "pop" : 0, "state" : "NY" }
{ "_id" : "13333", "city" : "EAST SPRINGFIELD", "loc" : [ -74.759741, 42.832947 ], "pop" : 0, "state" : "NY" }
{ "_id" : "13436", "city" : "RAQUETTE LAKE", "loc" : [ -74.537959, 43.866224 ], "pop" : 0, "state" : "NY" }
{ "_id" : "15744", "city" : "HAMILTON", "loc" : [ -79.093987, 40.921432 ], "pop" : 0, "state" : "PA" }
{ "_id" : "19113", "city" : "PHILADELPHIA", "loc" : [ -75.275196, 39.864998 ], "pop" : 0, "state" : "PA" }
{ "_id" : "23337", "city" : "WALLOPS ISLAND", "loc" : [ -75.506503, 37.827338 ], "pop" : 0, "state" : "VA" }
{ "_id" : "25139", "city" : "MOUNT CARBON", "loc" : [ -81.333373, 38.160097 ], "pop" : 0, "state" : "WV" }
{ "_id" : "28528", "city" : "GLOUCESTER", "loc" : [ -76.527627, 34.685645 ], "pop" : 0, "state" : "NC" }
{ "_id" : "29506", "city" : "QUINBY", "loc" : [ -79.794547, 34.245178 ], "pop" : 0, "state" : "SC" }
{ "_id" : "30334", "city" : "ATLANTA", "loc" : [ -84.388188, 33.74715 ], "pop" : 0, "state" : "GA" }
{ "_id" : "31314", "city" : "FORT STEWART", "loc" : [ -81.440489, 31.979085 ], "pop" : 0, "state" : "GA" }
{ "_id" : "32215", "city" : "CECIL FIELD NAS", "loc" : [ -81.663142, 30.23295 ], "pop" : 0, "state" : "FL" }
{ "_id" : "36419", "city" : "ALLEN", "loc" : [ -87.66746, 31.624266 ], "pop" : 0, "state" : "AL" }
{ "_id" : "39269", "city" : "JACKSON", "loc" : [ -90.188503, 32.30085 ], "pop" : 0, "state" : "MS" }
{ "_id" : "40808", "city" : "BIG LAUREL", "loc" : [ -83.156468, 37.002795 ], "pop" : 0, "state" : "KY" }
{ "_id" : "42326", "city" : "BROWDER", "loc" : [ -86.978197, 37.259333 ], "pop" : 0, "state" : "KY" }
{ "_id" : "42555", "city" : "SLOANS VALLEY", "loc" : [ -84.376201, 36.968617 ], "pop" : 0, "state" : "KY" }
.
.
.
```

```
> var s3 = { $sort : { pop : -1 }}
> db.zips.aggregate(s3)
{ "_id" : "60623", "city" : "CHICAGO", "loc" : [ -87.7157, 41.849015 ], "pop" : 112047, "state" : "IL" }
{ "_id" : "11226", "city" : "BROOKLYN", "loc" : [ -73.956985, 40.646694 ], "pop" : 111396, "state" : "NY" }
{ "_id" : "10021", "city" : "NEW YORK", "loc" : [ -73.958805, 40.768476 ], "pop" : 106564, "state" : "NY" }
{ "_id" : "10025", "city" : "NEW YORK", "loc" : [ -73.968312, 40.797466 ], "pop" : 100027, "state" : "NY" }
{ "_id" : "90201", "city" : "BELL GARDENS", "loc" : [ -118.17205, 33.969177 ], "pop" : 99568, "state" : "CA" }
{ "_id" : "60617", "city" : "CHICAGO", "loc" : [ -87.556012, 41.725743 ], "pop" : 98612, "state" : "IL" }
{ "_id" : "90011", "city" : "LOS ANGELES", "loc" : [ -118.258189, 34.007856 ], "pop" : 96074, "state" : "CA" }
{ "_id" : "60647", "city" : "CHICAGO", "loc" : [ -87.704322, 41.920903 ], "pop" : 95971, "state" : "IL" }
{ "_id" : "60628", "city" : "CHICAGO", "loc" : [ -87.624277, 41.693443 ], "pop" : 94317, "state" : "IL" }
{ "_id" : "90650", "city" : "NORWALK", "loc" : [ -118.081767, 33.90564 ], "pop" : 94188, "state" : "CA" }
{ "_id" : "60620", "city" : "CHICAGO", "loc" : [ -87.654251, 41.741119 ], "pop" : 92005, "state" : "IL" }
{ "_id" : "60629", "city" : "CHICAGO", "loc" : [ -87.706936, 41.778149 ], "pop" : 91814, "state" : "IL" }
{ "_id" : "60609", "city" : "CHICAGO", "loc" : [ -87.653279, 41.809721 ], "pop" : 89762, "state" : "IL" }
{ "_id" : "60618", "city" : "CHICAGO", "loc" : [ -87.704214, 41.946401 ], "pop" : 88377, "state" : "IL" }
{ "_id" : "11373", "city" : "JACKSON HEIGHTS", "loc" : [ -73.878551, 40.740388 ], "pop" : 88241, "state" : "NY" }
{ "_id" : "91331", "city" : "ARLETA", "loc" : [ -118.420692, 34.258081 ], "pop" : 88114, "state" : "CA" }
{ "_id" : "11212", "city" : "BROOKLYN", "loc" : [ -73.914483, 40.662474 ], "pop" : 87079, "state" : "NY" }
{ "_id" : "90280", "city" : "SOUTH GATE", "loc" : [ -118.201349, 33.94617 ], "pop" : 87026, "state" : "CA" }
{ "_id" : "11385", "city" : "RIDGEWOOD", "loc" : [ -73.896122, 40.703613 ], "pop" : 85732, "state" : "NY" }
{ "_id" : "10467", "city" : "BRONX", "loc" : [ -73.871242, 40.873671 ], "pop" : 85710, "state" : "NY" }
.
.
.
```

```
> var s3 = { $sort : { state: 1, pop : -1 }}
> db.zips.aggregate(s3)
{ "_id" : "99504", "city" : "ANCHORAGE", "loc" : [ -149.74467, 61.203696 ], "pop" : 32383, "state" : "AK" }
{ "_id" : "99508", "city" : "ANCHORAGE", "loc" : [ -149.810085, 61.205959 ], "pop" : 29857, "state" : "AK" }
{ "_id" : "99801", "city" : "JUNEAU", "loc" : [ -134.529429, 58.362767 ], "pop" : 24947, "state" : "AK" }
{ "_id" : "99709", "city" : "FAIRBANKS", "loc" : [ -147.846917, 64.85437 ], "pop" : 23238, "state" : "AK" }
{ "_id" : "99507", "city" : "ANCHORAGE", "loc" : [ -149.828912, 61.153543 ], "pop" : 20128, "state" : "AK" }
{ "_id" : "99701", "city" : "COLDFOOT", "loc" : [ -147.710431, 64.840238 ], "pop" : 19316, "state" : "AK" }
{ "_id" : "99577", "city" : "EAGLE RIVER", "loc" : [ -149.508515, 61.311357 ], "pop" : 18429, "state" : "AK" }
{ "_id" : "99516", "city" : "ANCHORAGE", "loc" : [ -149.779998, 61.10541 ], "pop" : 18356, "state" : "AK" }
{ "_id" : "99515", "city" : "ANCHORAGE", "loc" : [ -149.897401, 61.119381 ], "pop" : 17094, "state" : "AK" }
{ "_id" : "99502", "city" : "ANCHORAGE", "loc" : [ -150.093943, 61.096163 ], "pop" : 15891, "state" : "AK" }
{ "_id" : "99517", "city" : "ANCHORAGE", "loc" : [ -149.936111, 61.190136 ], "pop" : 15192, "state" : "AK" }
{ "_id" : "99705", "city" : "NORTH POLE", "loc" : [ -147.369353, 64.78049 ], "pop" : 14672, "state" : "AK" }
{ "_id" : "99501", "city" : "ANCHORAGE", "loc" : [ -149.876077, 61.211571 ], "pop" : 14436, "state" : "AK" }
{ "_id" : "99687", "city" : "WASILLA", "loc" : [ -149.533003, 61.578032 ], "pop" : 14215, "state" : "AK" }
{ "_id" : "99901", "city" : "KETCHIKAN", "loc" : [ -131.683175, 55.372028 ], "pop" : 13886, "state" : "AK" }
{ "_id" : "99615", "city" : "AKHIOK", "loc" : [ -152.500169, 57.781967 ], "pop" : 13309, "state" : "AK" }
{ "_id" : "99503", "city" : "ANCHORAGE", "loc" : [ -149.893844, 61.189953 ], "pop" : 12534, "state" : "AK" }
{ "_id" : "99645", "city" : "BUTTE", "loc" : [ -149.065323, 61.613814 ], "pop" : 12358, "state" : "AK" }
{ "_id" : "99611", "city" : "KENAI", "loc" : [ -151.254556, 60.614467 ], "pop" : 10508, "state" : "AK" }
{ "_id" : "99654", "city" : "WASILLA", "loc" : [ -149.395875, 61.592349 ], "pop" : 10404, "state" : "AK" }
.
.
.
```

```
> var s3 = { $sort : { pop : -1, state : 1 }}
> db.zips.aggregate(s3)
{ "_id" : "60623", "city" : "CHICAGO", "loc" : [ -87.7157, 41.849015 ], "pop" : 112047, "state" : "IL" }
{ "_id" : "11226", "city" : "BROOKLYN", "loc" : [ -73.956985, 40.646694 ], "pop" : 111396, "state" : "NY" }
{ "_id" : "10021", "city" : "NEW YORK", "loc" : [ -73.958805, 40.768476 ], "pop" : 106564, "state" : "NY" }
{ "_id" : "10025", "city" : "NEW YORK", "loc" : [ -73.968312, 40.797466 ], "pop" : 100027, "state" : "NY" }
{ "_id" : "90201", "city" : "BELL GARDENS", "loc" : [ -118.17205, 33.969177 ], "pop" : 99568, "state" : "CA" }
{ "_id" : "60617", "city" : "CHICAGO", "loc" : [ -87.556012, 41.725743 ], "pop" : 98612, "state" : "IL" }
{ "_id" : "90011", "city" : "LOS ANGELES", "loc" : [ -118.258189, 34.007856 ], "pop" : 96074, "state" : "CA" }
{ "_id" : "60647", "city" : "CHICAGO", "loc" : [ -87.704322, 41.920903 ], "pop" : 95971, "state" : "IL" }
{ "_id" : "60628", "city" : "CHICAGO", "loc" : [ -87.624277, 41.693443 ], "pop" : 94317, "state" : "IL" }
{ "_id" : "90650", "city" : "NORWALK", "loc" : [ -118.081767, 33.90564 ], "pop" : 94188, "state" : "CA" }
{ "_id" : "60620", "city" : "CHICAGO", "loc" : [ -87.654251, 41.741119 ], "pop" : 92005, "state" : "IL" }
{ "_id" : "60629", "city" : "CHICAGO", "loc" : [ -87.706936, 41.778149 ], "pop" : 91814, "state" : "IL" }
{ "_id" : "60609", "city" : "CHICAGO", "loc" : [ -87.653279, 41.809721 ], "pop" : 89762, "state" : "IL" }
{ "_id" : "60618", "city" : "CHICAGO", "loc" : [ -87.704214, 41.946401 ], "pop" : 88377, "state" : "IL" }
{ "_id" : "11373", "city" : "JACKSON HEIGHTS", "loc" : [ -73.878551, 40.740388 ], "pop" : 88241, "state" : "NY" }
{ "_id" : "91331", "city" : "ARLETA", "loc" : [ -118.420692, 34.258081 ], "pop" : 88114, "state" : "CA" }
{ "_id" : "11212", "city" : "BROOKLYN", "loc" : [ -73.914483, 40.662474 ], "pop" : 87079, "state" : "NY" }
{ "_id" : "90280", "city" : "SOUTH GATE", "loc" : [ -118.201349, 33.94617 ], "pop" : 87026, "state" : "CA" }
{ "_id" : "11385", "city" : "RIDGEWOOD", "loc" : [ -73.896122, 40.703613 ], "pop" : 85732, "state" : "NY" }
{ "_id" : "10467", "city" : "BRONX", "loc" : [ -73.871242, 40.873671 ], "pop" : 85710, "state" : "NY" }
.
.
.
```

### $sort and Indexes

- Use $match before $sort to save memory

### $limit

```
> var s3 = { $limit : 3 }
> db.zips.aggregate(s3)
{ "_id" : "01007", "city" : "BELCHERTOWN", "loc" : [ -72.410953, 42.275103 ], "pop" : 10579, "state" : "MA" }
{ "_id" : "01008", "city" : "BLANDFORD", "loc" : [ -72.936114, 42.182949 ], "pop" : 1240, "state" : "MA" }
{ "_id" : "01010", "city" : "BRIMFIELD", "loc" : [ -72.188455, 42.116543 ], "pop" : 3706, "state" : "MA" }
```

### $skip

```
> var s4 = {}
> s4.$skip = 2
2
> db.zips.aggregate(s4)
{ "_id" : "01010", "city" : "BRIMFIELD", "loc" : [ -72.188455, 42.116543 ], "pop" : 3706, "state" : "MA" }
{ "_id" : "01011", "city" : "CHESTER", "loc" : [ -72.988761, 42.279421 ], "pop" : 1688, "state" : "MA" }
{ "_id" : "01012", "city" : "CHESTERFIELD", "loc" : [ -72.833309, 42.38167 ], "pop" : 177, "state" : "MA" }
{ "_id" : "01013", "city" : "CHICOPEE", "loc" : [ -72.607962, 42.162046 ], "pop" : 23396, "state" : "MA" }
{ "_id" : "01020", "city" : "CHICOPEE", "loc" : [ -72.576142, 42.176443 ], "pop" : 31495, "state" : "MA" }
{ "_id" : "01022", "city" : "WESTOVER AFB", "loc" : [ -72.558657, 42.196672 ], "pop" : 1764, "state" : "MA" }
{ "_id" : "01026", "city" : "CUMMINGTON", "loc" : [ -72.905767, 42.435296 ], "pop" : 1484, "state" : "MA" }
{ "_id" : "01027", "city" : "MOUNT TOM", "loc" : [ -72.679921, 42.264319 ], "pop" : 16864, "state" : "MA" }
{ "_id" : "01028", "city" : "EAST LONGMEADOW", "loc" : [ -72.505565, 42.067203 ], "pop" : 13367, "state" : "MA" }
{ "_id" : "01031", "city" : "GILBERTVILLE", "loc" : [ -72.198585, 42.332194 ], "pop" : 2385, "state" : "MA" }
{ "_id" : "01032", "city" : "GOSHEN", "loc" : [ -72.844092, 42.466234 ], "pop" : 122, "state" : "MA" }
{ "_id" : "01033", "city" : "GRANBY", "loc" : [ -72.520001, 42.255704 ], "pop" : 5526, "state" : "MA" }
{ "_id" : "01035", "city" : "HADLEY", "loc" : [ -72.571499, 42.36062 ], "pop" : 4231, "state" : "MA" }
{ "_id" : "01036", "city" : "HAMPDEN", "loc" : [ -72.431823, 42.064756 ], "pop" : 4709, "state" : "MA" }
{ "_id" : "01038", "city" : "HATFIELD", "loc" : [ -72.616735, 42.38439 ], "pop" : 3184, "state" : "MA" }
{ "_id" : "01039", "city" : "HAYDENVILLE", "loc" : [ -72.703178, 42.381799 ], "pop" : 1387, "state" : "MA" }
{ "_id" : "01034", "city" : "TOLLAND", "loc" : [ -72.908793, 42.070234 ], "pop" : 1652, "state" : "MA" }
{ "_id" : "01005", "city" : "BARRE", "loc" : [ -72.108354, 42.409698 ], "pop" : 4546, "state" : "MA" }
{ "_id" : "01050", "city" : "HUNTINGTON", "loc" : [ -72.873341, 42.265301 ], "pop" : 2084, "state" : "MA" }
{ "_id" : "01040", "city" : "HOLYOKE", "loc" : [ -72.626193, 42.202007 ], "pop" : 43704, "state" : "MA" }
.
.
.
```

### Paging

```
> var lim = { $limit : 2 }
> var skip = { $skip : 2 }
> db.zips.aggregate(lim)
{ "_id" : "01007", "city" : "BELCHERTOWN", "loc" : [ -72.410953, 42.275103 ], "pop" : 10579, "state" : "MA" }
{ "_id" : "01008", "city" : "BLANDFORD", "loc" : [ -72.936114, 42.182949 ], "pop" : 1240, "state" : "MA" }
> db.zips.aggregate(skip, lim)
{ "_id" : "01010", "city" : "BRIMFIELD", "loc" : [ -72.188455, 42.116543 ], "pop" : 3706, "state" : "MA" }
{ "_id" : "01011", "city" : "CHESTER", "loc" : [ -72.988761, 42.279421 ], "pop" : 1688, "state" : "MA" }
```

### Paging Cost

- $sort items
- Pass to your app more items than showed in app. Ex: Pagination 10 in 10 items - Query on db 100 in 100 items

## 5. Shaping Documents

Sample collection:

```
[
  {
    "book": "Book 0",
    "author": "Author 5",
    "category": [
      "tag5",
      "tag6",
      "tag7"
    ]
  },
  {
    "book": "Book 1",
    "author": "Author 1",
    "category": [
      "tag1"
    ]
  },
  {
    "book": "Book 2",
    "author": "Author 2",
    "category": [
      "tag2"
    ]
  },
  {
    "book": "Book 3",
    "author": "Author 3",
    "category": [
      "tag1",
      "tag2",
      "tag3"
    ]
  },
  {
    "book": "Book 4",
    "author": "Author 4",
    "category": [
      "tag4"
    ]
  },
  {
    "book": "Book 5",
    "author": "Author 5",
    "category": [
      "tag5",
      "tag6",
      "tag7"
    ]
  },
  {
    "book": "Book 6",
    "author": "Author 3",
    "category": [
      "tag1",
      "tag2",
      "tag3"
    ]
  },
  {
    "book": "Book 7",
    "author": "Author 7",
    "category": [
      "tag7"
    ]
  },
  {
    "book": "Book 8",
    "author": "Author 8",
    "category": [
      "tag8"
    ]
  },
  {
    "book": "Book 9",
    "author": "Author 3",
    "category": [
      "tag1",
      "tag2",
      "tag3"
    ]
  },
  {
    "book": "Book 10",
    "author": "Author 5",
    "category": [
      "tag5",
      "tag6",
      "tag7"
    ]
  },
  {
    "book": "Book 11",
    "author": "Author 11",
    "category": [
      "tag11"
    ]
  },
  {
    "book": "Book 12",
    "author": "Author 3",
    "category": [
      "tag1",
      "tag2",
      "tag3"
    ]
  },
  {
    "book": "Book 13",
    "author": "Author 13",
    "category": [
      "tag13"
    ]
  },
  {
    "book": "Book 14",
    "author": "Author 14",
    "category": [
      "tag14"
    ]
  },
  {
    "book": "Book 15",
    "author": "Author 5",
    "category": [
      "tag5",
      "tag6",
      "tag7"
    ]
  }
]
```

### $unwind

```
> var s3 = { $unwind : "$category" }
> db.books.aggregate(s3)
{ "_id" : ObjectId("559151b563ca0a83487c31c8"), "book" : "Book 0", "author" : "Author 5", "category" : "tag5" }
{ "_id" : ObjectId("559151b563ca0a83487c31c8"), "book" : "Book 0", "author" : "Author 5", "category" : "tag6" }
{ "_id" : ObjectId("559151b563ca0a83487c31c8"), "book" : "Book 0", "author" : "Author 5", "category" : "tag7" }
{ "_id" : ObjectId("559151b563ca0a83487c31c9"), "book" : "Book 1", "author" : "Author 1", "category" : "tag1" }
{ "_id" : ObjectId("559151b563ca0a83487c31ca"), "book" : "Book 2", "author" : "Author 2", "category" : "tag2" }
{ "_id" : ObjectId("559151b563ca0a83487c31cb"), "book" : "Book 3", "author" : "Author 3", "category" : "tag1" }
{ "_id" : ObjectId("559151b563ca0a83487c31cb"), "book" : "Book 3", "author" : "Author 3", "category" : "tag2" }
{ "_id" : ObjectId("559151b563ca0a83487c31cb"), "book" : "Book 3", "author" : "Author 3", "category" : "tag3" }
{ "_id" : ObjectId("559151b563ca0a83487c31cc"), "book" : "Book 4", "author" : "Author 4", "category" : "tag4" }
{ "_id" : ObjectId("559151b563ca0a83487c31cd"), "book" : "Book 5", "author" : "Author 5", "category" : "tag5" }
{ "_id" : ObjectId("559151b563ca0a83487c31cd"), "book" : "Book 5", "author" : "Author 5", "category" : "tag6" }
{ "_id" : ObjectId("559151b563ca0a83487c31cd"), "book" : "Book 5", "author" : "Author 5", "category" : "tag7" }
{ "_id" : ObjectId("559151b563ca0a83487c31ce"), "book" : "Book 6", "author" : "Author 3", "category" : "tag1" }
{ "_id" : ObjectId("559151b563ca0a83487c31ce"), "book" : "Book 6", "author" : "Author 3", "category" : "tag2" }
{ "_id" : ObjectId("559151b563ca0a83487c31ce"), "book" : "Book 6", "author" : "Author 3", "category" : "tag3" }
{ "_id" : ObjectId("559151b563ca0a83487c31cf"), "book" : "Book 7", "author" : "Author 7", "category" : "tag7" }
{ "_id" : ObjectId("559151b563ca0a83487c31d0"), "book" : "Book 8", "author" : "Author 8", "category" : "tag8" }
{ "_id" : ObjectId("559151b563ca0a83487c31d1"), "book" : "Book 9", "author" : "Author 3", "category" : "tag1" }
{ "_id" : ObjectId("559151b563ca0a83487c31d1"), "book" : "Book 9", "author" : "Author 3", "category" : "tag2" }
{ "_id" : ObjectId("559151b563ca0a83487c31d1"), "book" : "Book 9", "author" : "Author 3", "category" : "tag3" }
.
.
.
```

### $project - field selection

```
> var s3 = { $project : { book : 1 }}
> db.books.aggregate(s3)
{ "_id" : ObjectId("559151b563ca0a83487c31c8"), "book" : "Book 0" }
{ "_id" : ObjectId("559151b563ca0a83487c31c9"), "book" : "Book 1" }
{ "_id" : ObjectId("559151b563ca0a83487c31ca"), "book" : "Book 2" }
{ "_id" : ObjectId("559151b563ca0a83487c31cb"), "book" : "Book 3" }
{ "_id" : ObjectId("559151b563ca0a83487c31cc"), "book" : "Book 4" }
{ "_id" : ObjectId("559151b563ca0a83487c31cd"), "book" : "Book 5" }
{ "_id" : ObjectId("559151b563ca0a83487c31ce"), "book" : "Book 6" }
{ "_id" : ObjectId("559151b563ca0a83487c31cf"), "book" : "Book 7" }
{ "_id" : ObjectId("559151b563ca0a83487c31d0"), "book" : "Book 8" }
{ "_id" : ObjectId("559151b563ca0a83487c31d1"), "book" : "Book 9" }
{ "_id" : ObjectId("559151b563ca0a83487c31d2"), "book" : "Book 10" }
{ "_id" : ObjectId("559151b563ca0a83487c31d3"), "book" : "Book 11" }
{ "_id" : ObjectId("559151b563ca0a83487c31d4"), "book" : "Book 12" }
{ "_id" : ObjectId("559151b563ca0a83487c31d5"), "book" : "Book 13" }
{ "_id" : ObjectId("559151b563ca0a83487c31d6"), "book" : "Book 14" }
{ "_id" : ObjectId("559151b563ca0a83487c31d7"), "book" : "Book 15" }
```

```
> s3.$project._id = 0
0
> db.books.aggregate(s3)
{ "book" : "Book 0" }
{ "book" : "Book 1" }
{ "book" : "Book 2" }
{ "book" : "Book 3" }
{ "book" : "Book 4" }
{ "book" : "Book 5" }
{ "book" : "Book 6" }
{ "book" : "Book 7" }
{ "book" : "Book 8" }
{ "book" : "Book 9" }
{ "book" : "Book 10" }
{ "book" : "Book 11" }
{ "book" : "Book 12" }
{ "book" : "Book 13" }
{ "book" : "Book 14" }
{ "book" : "Book 15" }
```

[0]: http://www.pluralsight.com/courses/mongodb-big-data-reporting
[1]: http://media.mongodb.org/zips.json
