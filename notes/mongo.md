## General notes:

- data in Mongo is stored in objects called **BSON** (binary JSON)
- Mongo **CLI** is based on **JavaScript** syntax and interpreter
- as in JS `1` in commands often means `true`
- SQL: `Database -> table -> row` = Mongo: `Database -> collection -> document`

## Environment variables:

- `mongod` - run Mongo server
- `mongo` - start Mongo client CLI
- `mongoimport` - import data to Mongo: `mongoimport -d DATABASE_NAME -c COLLECTION_NAME -f FILE_NAME`

## CLI basics:

- `db` - prints current db
- `show dbs` - lists all dbs
- `use DB_NAME` - changes current db
- `show collections` - shows collections in current db
- $match (key1: {\$lte:500,\$gte:800}), $project, \$group

## Operations on collection:

- CRUD:

  - .find({}, {key1:1, key2:1, \_id:0 }) - SELECT key key2 FROM COLLECTION_NAME (ignore \_id)
  - .insert({"name": "test"})
  - .update():
    - \$set
    - \$setToAdd
  - .remove():

- Other:
  - .drop():
  - .count(_search_)
  - .pretty()
  - .sort({key1:-1}) - order by key1 in reverse order
  - .limit(10)
  - .skip(10)
  - .findOne(_seach_)
  - .createIndex(
    {"field":1},
    {unique: true}
    )
  - .aggregate
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
            $out: "newTableName"
        }
    ])
  ```
