Open questions:

- **should I use pipes whenever possible - `test(x)` vs `test x` vs `x |> test`**
- what is this: `type DestinationIndex = int`
  > it is just an abstraction over int
- how to read [interfaces](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)
  > https://stackoverflow.com/a/32383872
  ```
  type INumericFSharp =
      abstract Add: x: int -> y: int -> int
  ```
  ```f#
  type IService = 
   abstract member testFunc: string -> int -> string

  type TestClass() =
      interface IService with
          member this.testFunc name age = name + ": " + age.ToString() 
  
  let test = TestClass()
  let johnRecord = (test :> IService).testFunc "John" // here you 'partially applied John to testFunc
  johnRecord 5 |> printf "%s" // John: 5
  johnRecord 15 |> printf "%s" // John: 15
  johnRecord 25 |> printf "%s" // John: 25
  ```
- why there is x/model in class methods `member x.SomeMethod = ...`
  > not only 'x' but also '\_', 'this' or anything other means this
- [class property declarations](https://stackoverflow.com/questions/24840948/when-should-i-use-let-member-val-and-member-this): `val X` vs `(x, y)` vs `member X`
  ```
  // 1. (dx : int, dy : int) is just a constructor and without properties it's useless
  // 2. val X doesn't exist - it's only member val X or member this.X and both are similar (e.g. read-only by default)
  // 3. difference is that val creates private field
  type Vector2D(dx : int, dy : int) =
      member this.dx = dx
      member val x = 0
  
  let vector1 = Vector2D(3, 4)
  printf "%i %i" vector1.dx vector1.x //vector1.dy
  ```
To note:

- example of async/await, what is `Aync\<T>`?
- record vs class - declaration
- option vs enum
- what are signs like: `:?`

Links:

- https://try.fsharp.org/
