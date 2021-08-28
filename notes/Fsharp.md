Open questions:

- async/await, what is `Aync\<T>`?
- should I use pipes whenever possible - `test(x)` vs `test x` vs `x |> test`
- what is this: `type DestinationIndex = int`
- how to read [interfaces](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)
  ```
  type INumericFSharp =
      abstract Add: x: int -> y: int -> int
  ```
- Classes:

  - why there is ' sign for generics `someMethod<'T>`
  - property declaration: `val X` vs `(x, y)` vs `member X`
  - why there is x/model in class methods `member x.SomeMethod = ...`

To note:

- record vs class - declaration
- option vs enum
- what are signs like: `:?`

Links:

- https://try.fsharp.org/
