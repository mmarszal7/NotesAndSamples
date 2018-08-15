## Contents:
1. [Database installation](#1.-database-installation)
2. [Commands](#2.-commands)<br>
    2.1. [General Notes](#2.1-general-notes)<br>
    2.2. [Database and Tables](#2.2-database-and-tables)<br>
    2.3. [Data Selection](#2.3-data-selection)<br>
    2.4. [Data Modification](#2.4-data-modification)<br>
    2.5. **[Joins](#2.5-joins)<br>**
    2.6. [Agregation Functions](#2.6-agregation-functions)<br>
    2.7. [Indexes](#2.7-indexes)<br>
    2.8. [Views](#2.8-views)<br>
    2.9. **[Stored procedures](#2.9-stored-procedures)<br>**
    2.10. **[Transactions](#2.10-transactions)<br>**
    2.11 **[Subqueries](2.11-subqueries)**
4. [Datatypes and Constraints](#3.-datatypes-and-constraints)
5. [Exercises](#4.-exercises)

---
## 1. Database installation: 
 SQLite installation:
1. Download 32bit Precompiled Binaries for Windows (with CLI tools for managing SQLite database files)
2. Unzip into ProgramFiles folder
3. Add sqlite to PATH environment variable
4. Create database: sqlite3 test.db
5. List tables and their schemas : .tables and .schema tableName             

---
## 2. Commands:
## 2.1 General notes:
- Upper-case - SQL keywords are **NOT case sensitive**: select is the same as SELECT
- Semicolon - **some** database systems require a semicolon at the end of each SQL statement
- SQL has **3 main subsets** (definitions in job faq) reflected bu SQL commands. Commands in SQL are devided in few subsets based on type of data transformations: 
    * on **database level**: CREATE/ALTER/DELETE DATABASE dbName
    * on **table level** there are commands defining: table modifications, data-types, constrains and views
    * on **data level** there are commands for: selecting, joining, modifing and agregating data
- SQL comments: 
    ``` sql
    -- one line comment
    /*
        Multiple line comment
    */
    ```
- cannot refer to aliases in WHERE command

### **Alises** - allows you to name columns and tables:
> SELECT **column_name AS alias_name** FROM table_name;

>SELECT column_name(s)
FROM **table_name AS alias_name**;

Missing coma is also interpreted as alias:
> SELECT column_name(s)
FROM **table_name alias_name**;

### Subqueries:
---
## 2.2 Database and Tables:

### Database:
> CREATE/ALTER DATABASE *databaseName* *options*\*

> DROP DATABASE *databaseName*

### Tables:
> **CREATE TABLE *tableName* (*data-type* *constraint*) <br>**
> example:<br> CREATE TABLE testTable (first varchar(10) PRIMARY KEY,  second varchar(10) NOT NULL);

>ALTER TABLE *tableName* ADD/ALTER/DROP COLUMN *name* *datatype* *constrain*;

>DROP TABLE *tableName*; <br>
>TRUNCATE TABLE *tableName*;

\* **For more info about data types and constraints see[Datatypes](#Datatypes)**

---
## 2.3 Data selection:
``` SQL
SELECT [DISTINCT] [AS]
FROM [AS]
JOIN ON
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
```
- **SELECT** data **FROM** - obvious

- **DISTINCT** - returns distinct records
    > SELECT **DISTINCT** Country FROM Customers;

- **AS** - alias for columns and tables (described in [General Notes](#general-notes))

- **HAVING/WHERE**:<br>
**WHERE** is used to filter records before any groupings take place.<br>
**HAVING** is used to filter values after they have  been groups.  
***!** Only columns or expression in the GROUP BY can be included in the HAVING clause’s conditions. **!***

    WHERE/HAVING **operators**: 
    - **=, <, >,** 
    - **LIKE** - with LIKE you can use 'wildcard' operators: % and _(?  in MS SQL); % means 'some characters', _ means 'one character'   - so 'a%o_' means 'string that starts with a, next contains   some unspecified characters and ends with 'o' followed by a   unspecified character'
    - **AND, OR, NOT, IS NULL**
    - **BETWEEN .. AND ...** - also strings: BETWEEN 'A' AND 'Z' 
    - **IN ()** - to specify multiple possible values for a column:     WHERE country IN ('Poland', 'Germany', 'UK')

    Operators for subqueries:
    - **EXISTS** - used with subqueries (only with WHERE) - checks  returns true if the subquery returns one or more records
        > SELECT * FROM table WHERE **EXISTS** (SELECT column FROM table  WHERE condition);
    - **ANY** and **ALL** - allow to perform a comparison between a single  column value and a range of other values (all with all)
        > SELECT * FROM table WHERE column operator **ANY/ALL** (SELECT   column FROM table WHERE condition);
        
        > SELECT * FROM table WHERE id > **ANY/ALL** (SELECT id FROM  table WHERE id > 10);

- **ORDER BY**:
    > SELECT * FROM table **ORDER BY** columns;
    
    > SELECT * FROM Customers **ORDER BY** Country, CustomerName;
ORDER BY has 2 operators: ASC and DECS.

- **LIMIT/TOP**:
    > SELECT columns FROM table WHERE condition **LIMIT** number;<br>
    > SELECT * FROM Customers LIMIT 3;

     for MS SQL: 
    > SELECT **TOP** number columns FROM table WHERE condition;<br>
    > SELECT TOP 3 * FROM Customers;

- **UNION**:

    The UNION operator is used to combine the result of two or more SELECT statements.
Each SELECT statement within UNION must have the same number of columns with the same data types
(e.g. SELECT(1) with 3 columns: int, varchar, varchar // SELECT(2) with 3 columns: int, varchar, varchar)
    ``` SQL
    SELECT columns FROM table1 WHERE ...
    **UNION**
    SELECT columns FROM table2 WHERE ...

    /*
    result: 
    someNumber1
    someNumber1
    someNumber2
    someNumber2
    */
    ```

    **\*** you can also query for UNION ALL (which means 'union all columns') - but it has to meet requirements about numer and type of columns

- **CAST** and **ROUND**:
    > **CAST**(number AS **dataType**)<br>
    > **ROUND**(number, **decimalPlaces**)

    > CAST(ROUND(1/15, 2) AS FLOAT)


## 2.4 Data Modification
- **INSERT** **INTO** table (columns...) **VALUES** (values...)
    ``` SQL
    INSERT INTO Customers (CustomerName, City, Country) VALUES  ('Cardinal', 'Stavanger', 'Norway');
    ```

- **UPDATE** table **SET** column1 = value1, column2 = value2, **WHERE** condition;
    ``` SQL
    UPDATE Customers SET ContactName = 'Alfred Schmidt', City=  'Frankfurt' WHERE CustomerID = 1;
    ```

- **DELETE** **FROM** table **WHERE** condition;
    DELETE is like SELECT ? E.G. CAN I LIMIT DETELE? Check it!
    ``` SQL
    DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
    ```
    To truncate table just ignore WHERE: 
    ``` SQL
    DELETE FROM Customers
    ```

## 2.5 Joins

**Joins** - in JOIN there **SHOULD** be foreign key (is there is not it means that there is a mistake)

## 2.6 Agregation Functions
**SQL Aggregate Functions** - return a single value, calculated from values in a column:

```
COUNT() - Returns the number of rows
SUM() - Returns the sum
FIRST() - Returns the first value
LAST() - Returns the last value
MAX() - Returns the largest value
MIN() - Returns the smallest value
AVG() - Returns the average value
```

**SQL Scalar functions** - return a single value, based on the input value. 3 main categories are:
- strings (UCASE() - *uppercase*, LCASE(), LEN()...)
- numbers (ROUND(), COS()...)
- dates (e. g. NOW(), YEAR(), DAY()...)
---
## 2.7 Indexes:

Indexes may be added a specifict column to speed up queries.
When created they order column records (this order is seen only from db perspective), which helps when searching for data - it is easier to find data in ordered list.
> **CREATE INDEX** columnName **ON** tableName<br>
> **DROP INDEX** columnName

---
## 2.8 Views:
CREATE VIEW creates virtual table which contains data specified in SELECT query - its something like predefined SELECT:
``` SQL
CREATE OR REPLACE VIEW viewName AS 
SELECT...

DROP VIEW viewName
```
---
2.9 Stored procedures:
---
2.10 Transactions:
---
2.11 Subqueries
---
## 3. Datatypes and constraints:

Type | description
---|---
boolean	| Stores TRUE or FALSE values. In some databases boolean is replaced with bit/byte or int
int/integer(p) (or integer, smallint, bigint) | Integer numerical (no decimal). With different precision p (smallint, bigint etc. have fixed p)
char(size) | Fixed-length character string. It always takes 'size' characters in databese, they are filles with trailing spaces (removed when retrieved from db) to make up the specified length. Size is specified in parenthesis. Max 255 bytes. 50% faster than varchar. 
varchar(size) | Variable-length character string. It always takes number of characters in database equal to its length . Max size is specified in parenthesis. Slower than char.
number(size) |Number value with a max number of column digits specified in parenthesis.
date | Date value 
number(size,d) |	Number value with a maximum number of digits of "size" total, with a maximum number of "d" digits to the right of the decimal.
xml | Stores xml data
---
## Constraints

Constraint | Description
---|---
NOT NULL | Ensures that a column cannot have a NULL value
UNIQUE | Ensures that all values in a column are different
PRIMARY KEY | A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY | Uniquely identifies a row/record in another table
CHECK | Ensures that all values in a column satisfies a specific condition (e.g. CREATE TABLE table (age int CHECK(age>=18)))
DEFAULT | Sets a default value for a column when no value is specified
INDEX | Used to create and retrieve data from the database very quickly

## 4. Exercises: