# JavaScript Guide 

## Basic writing conventions

- Use lowercase letters for all project
- Use `camelCasing` for writing JavaScript
- Do not use spaces to separate out different words, instead use hyphen. For example: `some-word`, to separate out the words. 


## Introduction



## Setup and Project structure 

- Font family is Open Sans font family

## Variables 

Variables are containers that store values. You start by declaring a variable with the let keyword, followed by the name you give to the variable:

```
let myVariable;
````

A semicolon at the end of a line indicates where a statement ends. It is only required when you need to separate statements on a single line. However, some people believe it's good practice to have semicolons at the end of each statement. There are other rules for when you should and shouldn't use semicolons. For more details, see Your Guide to Semicolons in JavaScript.

You can name a variable nearly anything, but there are some restrictions. (See this section about naming rules.) If you are unsure, you can check your variable name to see if it's valid.

JavaScript is case sensitive. This means myVariable is not the same as myvariable. If you have problems in your code, check the case!

After declaring a variable, you can give it a value:
After declaring a variable, you can give it a value:

```
myVariable = 'Bob';  
```
Also, you can do both these operations on the same line:
```
let myVariable = 'Bob';
```
You retrieve the value by calling the variable name:

```
myVariable;
```
After assigning a value to a variable, you can change it later in the code:

```
let myVariable = 'Bob';
myVariable = 'Steve';
```

