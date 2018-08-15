# Notes:
1. [Git CLI](./notes/gitCLI.md)
2. [Linux](./notes/linux.md)
3. [SQL](./notes/sql.md)
4. [JavaScript:]()<br>
4.1. [Angular](./notes/Angular.md)<br>
4.2. [Angular ngrx](./Books_NgrxSample/README.md)<br>
4.3. [React with Redux](./Counter_ReactSample/README.md)<br>
5. [Hotkeys](./notes/hotkeys.md)
6. [Visual Studio environment configuration](./notes/vsConfig.md)

# Design Patterns:
<p align="center"> 
<img src="./assets/designPatterns.jpg">
</p>

## 1. Builder

Builder uses Fluent Interface whitch is "object oriented API based extensively on **method chaining** with the goal of making the readability. It is implemented by each method return this (or self)."
```
var pokemon = new Pokemon.Builder()
                         .WithName('name')
                         .WithColor('blue')
                         .Build();
```

Where Pokemon is:

```
class Pokemon
{
    private string _name;
    private string _color;

    public Pokemon(Builder builder) //NOTE Only 1 parameter in constructor
    {
        _name = builder._name;
        _color = builder._color;
    }

    public class Builder //NOTE Builder class
    {
        internal string _name;
        internal string _color;

        public Builder WithName(string name)
        {
            _name = name;
            return this;
        }

        public Builder WithColor(string color)
        {
            _color = color;
            return this;
        }

        public Pokemon Build() {
            return new Pokemon(this);
        }
    }
}
```