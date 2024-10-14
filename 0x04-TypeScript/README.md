# TypeScript Basics and Namespaces

## Introduction

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is designed for the development of large applications and provides static type definitions, which help catch errors at compile time rather than runtime.

## Why TypeScript?

TypeScript introduces several features that enhance JavaScript, such as:

- Static Typing: Define the type of variables, parameters, and return values.
- Advanced IDE support: IntelliSense helps with autocompletion, tooltips, and better error-checking.
- ES6+ features: TypeScript supports ECMAScript 6 and later features like classes, arrow functions, destructuring, and more.
- Improved scalability: Perfect for large applications where maintaining and refactoring code is crucial.

## Installation of Typescript

using npm:

```
npm install -g typescript

```

check version:

```
tsc --version
```

## Basic types:

```
Number:
let age: number = 25;

String:
let name: string = "John";

Boolean:
let isDone: boolean = false;

Array:
let list: number[] = [1, 2, 3];
let genericList: Array<number> = [1, 2, 3];

Tuple:
let tuple: [string, number];
tuple = ["Hello", 10];

Enum:
enum Color {Red, Green, Blue}
let color: Color = Color.Green;

Any:
let uncertain: any = 4;
uncertain = "Could be a string";

Void:
function logMessage(): void {
    console.log("This is a message");
}

Null and undefined:
let u: undefined = undefined;
let n: null = null;

Never:
function error(message: string): never {
    throw new Error(message);
}

```

## Functions

Typed Functions:

You can define types for parameters and their return types:

```
function add(a: number, b: number): number {
    return a + b;
}
```

### Optional and Default Parameters

You can define optional parameters and default values in functions.

```
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}
```

## Interfaces

Interfaces in TypeScript define the structure of an object.

```
interface Person {
    firstName: string;
    lastName: string;
    age?: number;  // optional property
}

function getPersonInfo(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

```

## Classes

TypeScript provides full support for the class-based object-oriented programming paradigm.

```
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters} meters.`);
    }
}

const dog = new Animal("Dog");
dog.move(10);
```

## Namespaces

### What are Namespaces?

Namespaces in TypeScript are used to organize code into logical groups and prevent name collisions in the global scope. They are a way to structure and encapsulate code, especially in large applications.

### Defining a Namespace

You define a namespace using the namespace keyword. You can encapsulate classes, interfaces, functions, or variables inside a namespace.

```
namespace Shapes {
    export class Circle {
        constructor(public radius: number) {}

        area(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    export class Square {
        constructor(public sideLength: number) {}

        area(): number {
            return this.sideLength * this.sideLength;
        }
    }
}
```

In this example, the Shapes namespace encapsulates two classes, Circle and Square.

### Using Namespaces

To use elements from a namespace, you need to reference them with the namespace prefix, unless you're in the same namespace or you import them.

```
let circle = new Shapes.Circle(10);
console.log(circle.area());  // Outputs: 314.159...
```

Alternatively, you can import specific members using the import statement:

```
import Circle = Shapes.Circle;
let myCircle = new Circle(5);
console.log(myCircle.area());  // Outputs: 78.539...
```

Namespaces can also span multiple files, and you can use the /// <reference path="..."/> directive to reference other files.

## In Summary
TypeScript enhances JavaScript by adding static typing, modern features, and a more structured coding environment. Understanding the basics like types, functions, classes, and namespaces will help you write more robust and maintainable code.