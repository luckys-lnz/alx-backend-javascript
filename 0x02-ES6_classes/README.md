# JavaScript Classes
## Introduction
JavaScript classes are a syntactical sugar over JavaScript's existing prototype-based inheritance. They provide a cleaner and more intuitive way to create objects and manage inheritance in your code. Classes allow you to define blueprints for objects and encapsulate data and behavior.

# What is a Class?
A class in JavaScript is a template for creating objects. It encapsulates data (properties) and methods (functions) that operate on that data. Classes can also inherit from other classes, allowing for code reuse and organization.

# Defining a Class syantax
You can define a **class** using the class keyword followed by the class name. Inside the class, you can define a constructor method that is called when an instance of the class is created.

```
class ClassName {
    constructor(parameters) {
        // Initialization code
    }

    methodName() {
        // Method code
    }
}

```

## A simple **class** example
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);
person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.

```

# Inheritance
JavaScript classes support inheritance, allowing one class to extend another. This is done using the **extends** keyword.

**Example of Inheritance**
```
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    describe() {
        console.log(`I am ${this.name}, a ${this.position}.`);
    }
}

// Creating an instance of the Employee class
const employee1 = new Employee('Bob', 25, 'Software Engineer');
employee1.introduce(); // Output: Hello, my name is Bob and I am 25 years old.
employee1.describe();   // Output: I am Bob, a Software Engineer.

```

# Static Methods
Static methods are defined on the class itself, not on instances of the class. You can define a **static method** using the **static** keyword.

```
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

// Using the static method
console.log(MathUtil.add(5, 3)); // Output: 8

```

# Getters and Setters
You can define getters and setters in a class to control access to properties.

```
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions(dimensions) {
        [this.width, this.height] = dimensions;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.dimensions = [20, 10];
console.log(rect.area); // Output: 200

```

# Conclusion
JavaScript classes provide a powerful way to organize and structure your code, making it more maintainable and reusable. With features like inheritance, static methods, and accessors, classes help you manage complexity in your applications.

# Relevant links
- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [Javscript info](https://javascript.info/classes)