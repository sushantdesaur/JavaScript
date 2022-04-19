# JavaScript Guide 

## Basic writing conventions

- Use lowercase letters for all project
- Use `camelCasing` for writing JavaScript
- Do not use spaces to separate out different words, instead use hyphen. For example: `some-word`, to separate out the words. 

## Introduction

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

- `HTML` is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
- `CSS` is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
- `JavaScript` is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

The three layers build on top of one another nicely. Let's take a simple text label as an example. We can mark it up using HTML to give it structure and purpose:
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

