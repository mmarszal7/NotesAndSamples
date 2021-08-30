Open questions:

- *should I use pipes whenever possible - `test(x)` vs `test x` vs `x |> test`*
- what is this: `type DestinationIndex = int`
  > it is just an abstraction over int
- *how to read [interfaces](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)*
  ```
  type INumericFSharp =
      abstract Add: x: int -> y: int -> int
  ```
- why there is x/model in class methods `member x.SomeMethod = ...`
  > not only 'x' but also '\_', 'this' or anything other means this

To note:
- examples of class property declarations: `val X` vs `(x, y)` vs `member X`
- example of async/await, what is `Aync\<T>`?
- record vs class - declaration
- option vs enum
- what are signs like: `:?`

Links:

- https://try.fsharp.org/
