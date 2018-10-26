# C# Coding Guidelines:

## 1. Sources:
- [CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines)
- [MSDN](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/index)
- [C# Coding Standards](http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf)


## 2. Notes:
### a) Classes:
1. If you want to expose an extension point from your class, expose it as an interface rather than a base class
2. Avoid static classes or static stateful properties - when Unit Testing it is hard to Assert its state because many components can change its value between your Act and Assert
3. Don’t hide inherited members with the new keyword
4. An object should not expose any other classes it depends on:
```
class ViewModel()
{
	private IDataProvider SomeProvider;
	
	public ViewMode(IDataProvider someProvider)
	{
		SomeProvider = someProvider;
	}

}
```
\* Inversion of Control or Dependency Injection frameworks often require you to expose a dependency as a public property (property injection). As long as this property is not used for anything else than dependency injection it is not considered it a violation.

\** Using a class that is designed using the Fluent Interface pattern does seem to violate this rule, but it is simply returning itself so that method chaining is allowed.

### b) Fields, Properties and Methods:
1. Put fields and properties alphabetically
6. Allow properties to be set in any order. It should not be difference in first setting property PropI and then PropII or vice versa.
7. Return an IEnumerable or ICollection instead of a concrete collection class. In general, you don’t want callers to be able to change an internal collection, so don’t return arrays, lists or other collection classes directly. Instead, return an IEnumerable, or, if the caller must be able to determine the count, an ICollection (or ReadOnlyCollection, IReadOnlyList or IReadOnlyDictionary).
8. Properties, methods and arguments representing **strings** or **collections** should never be null. Instead return empty collection or string.
9. Consider using domain-specific value types rather than primitives. Instead of using strings, integers etc. for representing domain specific types such as an an email address or amount of money, consider created dedicated value objects that wrap both the data and the validation rules that apply to it.

### c) Exceptions:
1. Always use validation to avoid exceptions. 
2. Avoid re-throwing an exception. Allow it to bubble-up instead. 

### d) Project structure:
1. Do keep a flat folder structure as long as possible (eg. new folder for more than 7 files). 