# Powershell cheatsheet:

## General concepts:

- PowerShell ISE - Integrated Scripting Environment
- CMDLET - powershell commands; they are .NET Framework class objects, and not just stand-alone executables

## [Operators](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-6):

- logical operators: `AND`, `OR`, `NOT`
- \> - save into file `"test string" > file.txt`
- -gt, -lt, -eq... - comparison operators `1,2,3 -gt 1`
- @() - create array from object inside `@(ls).Name`
- | - pipeline operator `ls | Where-Object {$_.Name -gt "D"}`
- . - run script: `. script.ps`
- \$\_ - current object in the pipeline
- -match/-notmatch - regex matcher - `"some text" -match "text"`
- ` - line wrap operator
- \& - call operator - call cmdlet from string: `$cmdlet = "ls"; & $cmdlet`
- ? - same as `Where-Object`

## General:

- arrays - to create array type: `1,2,3`, `1..3` or `@(1..3)`
- \$variable - creates new variable (e.g. `$variable = "test"`)
- `Get-Member` - list of cmdlet properties
- alias - shows alias and its cmdlet: `Alias ls`
- measure-object - count lines from output

## Arrays:

- accessing array item - `$array[0]`, `$array[-1..-3]`, `$array`
- array length - `$array.Length`, `$array.Count`
- other: `$array.Clear()`, `$array.Where()`, `$array.Last()`,
- for loops - `for ($i = 0; $i -le @(ls).Length; $i += 2) { Write-Host @(ls)[$i] }` or `@(ls).ForEach({ Write-Host $_ })`

## Path:

- Get-Location - your location
