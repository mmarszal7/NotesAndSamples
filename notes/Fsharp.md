# Notes:

- should I use pipes whenever possible - `x |> test` over `test x` over `test(x)`

  > **Answer**: Yes, especially as a begginer avoid "dot notation" and if you can use pipelines and composition

- what is this: `type DestinationIndex = int`

  > **Answer**: it is just an abstraction over int

- how to read **interfaces** like this:

  ```fsharp
  type INumericFSharp =
      abstract Add: x: int -> y: int -> int
  ```

  > **Answer**: https://stackoverflow.com/a/32383872

  ```fsharp
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

  > **Answer**: not only 'x' but also '\_', 'this' or anything other means "current object"

- [class property declarations](https://stackoverflow.com/questions/24840948/when-should-i-use-let-member-val-and-member-this): `val X` vs `(x, y)` vs `member X`:

  ```fsharp
  // 1. (dx : int, dy : int) is just a constructor and without properties it's useless
  // 2. val X doesn't exist - it's only member val X or member this.X and both are similar (e.g. read-only by default)
  // 3. difference is that val creates private field

  type Vector2D(dx : int, dy : int) =
      member this.dx = dx
      member val x = 0

  let vector1 = Vector2D(3, 4)
  printf "%i %i" vector1.dx vector1.x //vector1.dy
  ```

- example of async/await, what is `Async<'T>`?

  > **Answer**: `Async<'T>` is C#s `Task<T>`; also `let!` is C#s `await`

  ```fsharp
  let TestTask(): Async<string> =
    async {
        return "test"
    }

  // this method is necessary because let! can only be used in an async method
  let TestMethod() =
      async {
          let! toast = TestTask()
          return toast
      }

  TestMethod()
  |> Async.RunSynchronously
  |> printf "%s"
  ```

- `record` vs `class` - declaration

  > **Answer**: "Records are essentially sealed classes with extra topping: default immutability, structural equality, and pattern matching support."

  ```fsharp
  type Record = { Name : string; Age : int }

  type Class(name: string, age : int) =
    let privateMember = "prefix"
    member this.Name = name
    member this.Age = age
  ```

- discriminated `union` vs `enum`

  > **Answer**: prefer unions over enums (use those only when you need int values associated with a field); biggest difference is that unions are reference types and enums are stucts

  ```fsharp
  type Union =
    | Red
    | Green
    | Blue

  type Enum =
    | Red = 0
    | Green = 1
    | Blue = 2
  ```

- operators like: `:?`

  > **Answer**: https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/#function-symbols-and-operators

  | operator | name              | example                                           |
  | -------- | ----------------- | ------------------------------------------------- |
  | ->       | lambda            | x `->` x.ToString()                               |
  | \|>      | pipeline          | "test" `|>` toLower `|>` printf                   |
  | >>       | composition       | "test" `|>` (toLower `>>` printf)                 |
  | :?       | `is` type match   | try ... with `:?` System.DivideByZeroException -> |
  | :>       | `as` casts higher | (dog `:>` IAnimal).eat()                          |
  | :?>      | cast lower        | (animal `:?>` Dog).bark()                         |

# Links:

- Playground: https://try.fsharp.org/ or https://fable.io/repl/
- Dos and Don'ts: https://fsharpforfunandprofit.com/learning-fsharp/#dos-and-donts
- F# for C# devs: https://github.com/knocte/2fsharp/blob/master/csharp2fsharp.md
- F# cheatsheet: http://dungpa.github.io/fsharp-cheatsheet/
