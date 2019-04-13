## General notes:

- data in Mongo is stored in objects called **BSON** (binary JSON)
- Mongo **CLI** is based on **JavaScript** syntax and interpreter
- as in JS `1` in commands often means `true`
- SQL: `Database -> table -> row` = Mongo: `Database -> collection -> document`
- `_id` is a unique number which assures the uniqueness of every document; it can be overriden but only by unique values

## Environment variables:

- `mongod` - run Mongo server
- `mongo` - start Mongo client CLI
- `mongoimport` - import data to Mongo, e.g.:<br> `mongoimport -d DATABASE_NAME -c COLLECTION_NAME -f FILE_NAME`

## CLI basics:

- `db` - prints current database
- `show dbs` - lists all databases
- `use DB_NAME` - changes current database
- `show collections` - shows collections in current database

## Operations on collection:

- Database level:

  - `use DB_NAME` - creates or changes current database
  - `DB_NAME.dropDatabase()` - drops database

- Collection level:

  - `db.createCollection(COLLECTION_NAME)` or `db.COLLECTION_NAME.insert(JSON)` - creates new collection
  - `db.COLLECTION_NAME.drop()` - drops collection

- Actions on collections (`db.COLLECTION_NAME...`):

  - `.insert(JSON)` - adds new document to collection
  - `.find(SELECTION_CRITERIA, {key1:1, key2:1, \_id:0 })` - selective search, equal to: `SELECT key key2 FROM COLLECTION_NAME` (ignores \_id)
  - `.update(SELECTION_CRITERIA, UPDATED_DATA)`:
    - `$set` - overrides field
    - `$setToAdd` - append new data to field
  - `.remove(SELECTION_CRITERIA)` - removing data from collection;<br> `.remove()` - removes everything;<br> `.remove(..., 1)` - removes only 1 record
  - `.aggregate(AGGREGATE_OPERATION)`
  - `.createIndex( {"fieldName":1}, {unique: true} )` - creates index for field

- Other:
  - `.count(SELECTION_CRITERIA)`
  - `.pretty()` - output formatting
  - `.sort({key1:-1})` - order by key1 in reverse order
  - `.limit(10)`
  - `.skip(10)`
  - `.findOne(SELECTION_CRITERIA)`

## Quering Document - `SELECTION_CRITERIA`:

- Template:

  ```JS
  SELECTION_CRITERIA = {
        $and/$or: [
           {key1: CRITERIA}, {key2:CRITERIA}
        ]
     }

  CRITERIA = value | {$lt:value} | {$gt:value} |  {$gt:value} |
  ```

- Examples:

  ```JS
  SELECTION_CRITERIA = {"name": "John"}

  SELECTION_CRITERIA = {"age":{$gt:20}}

  SELECTION_CRITERIA = {
      $and: [
          {"name": "John"}, {"age":{$gt:20}}
      ]
  }
  ```

## Aggregation:

Expressions: `$sum | $avg | $min | $max | $first | $last`

- Examples:

  ```JS
  .aggregate([
      {
          $group : {
              _id : "user",
              num_tutorial : {$sum : 1}
          }
      }]
  )
  ```

  ```JS
  .aggregate([
      {
          $group: {
              _id: "value",
              average: {$avg:"key1"},
              count: {$count:"key2"}
          }
      },
      {
          $out: "newCollectionName"
      }
  ])
  ```

## Pipelines:

- `$match` − filtering operation, reduce the amount of documents that are given as input to the next stage
- `$project` − select some specific fields from a collection
- `$group` − aggregation
- `$sort`
- `$skip`
- `$limit`
- `$out` − saves result in new collection

Example:

```JS
[
      {
          $match: {"age": {$gt:20}}
      },
      {
          $project: {name: 1, age: 1, _id: 0}
      },
      {
          $group: {
               _id: "value",
              average: {$avg:"key1"},
          }
      },
      {
          $skip: 5
      },
      {
          $limit: 3
      },
      {
          $out: "newCollectionName"
      }
  ]
```
