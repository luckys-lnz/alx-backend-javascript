# JavaScript Array Methods and Data Manipulation

This readme covers the following topics:

 - **Array Methods:** map(), filter(), reduce()
 - **Typed Arrays**
 - **Set, Map, and Weak Data Structures**

 **1.1** ***map()***

 The **map()** method creates a new array populated with the results of calling a provided function on every element in the original array.

 **syntax**
 ```
 const newArray = array.map(callback(currentValue, index, array));
 ```

 **example**
 ```
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * 2);
console.log(squares); // [2, 4, 6, 8, 10]
 ```

**1.2** ***filter()***

The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.

**syntax**
```
const filteredArray = array.filter(callback(element, index, array));
```

**example**
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

**1.3** ***reduce()***

The ***reduce()** method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**syntax**
```
const result = array.reduce((accumulator, currentValue, index, array) => {
  // return new accumulator value
}, initialValue);
```

**example**
```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

**2** ***Typed Arrays***

**Typed arrays** are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

**Common Typed Arrays:**

* Int8Array, Uint8Array, Uint8ClampedArray
* Int16Array, Uint16Array
* Int32Array, Uint32Array
* Float32Array, Float64Array

**example**
```
const buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
const int32View = new Int32Array(buffer); // Create a 32-bit integer view
int32View[0] = 42; // Set the first integer to 42
console.log(int32View[0]); // 42
```

**Benefits of using typed arrays.**

* Efficient handling of binary data
* Interoperable with Web APIs like WebGL, WebRTC, etc.


**3.** ***Set, Map, and Weak Data Structures***

**3.1** ***set***
A **Set** is a collection of unique values, meaning that no element can appear more than once in a set.

**syantax**
```
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet); // Set { 1, 2, 3, 4, 5 }
```

**Methods:**

* add(value): Adds a value to the set
* delete(value): Removes a value from the set
* has(value): Checks if the set contains a value
* clear(): Removes all elements from the set


**3.2** ***Map***
A **Map** is a collection of key-value pairs where keys can be any data type (including objects or functions).

**syantax**
```
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
console.log(myMap.get('name')); // 'Alice'
console.log(myMap.get('age')); // 25

```

**Methods:**

* set(key, value): Adds or updates an entry in the map
* get(key): Retrieves the value associated with the key
* delete(key): Removes the entry for a given key
* has(key): Checks if a key exists in the map


**3.2** ***WeakSet***
A **WeakSet** is similar to a Set, but it only stores objects and holds "weak" references, allowing garbage collection if the object is no longer referenced elsewhere.

**syantax**

```
const obj1 = {};
const obj2 = {};
const weakSet = new WeakSet([obj1, obj2]);
console.log(weakSet.has(obj1)); // true
```


**3.2** ***WeakMap***
A **WeakMap** is like a Map but keys must be objects, and the references to these objects are weak, allowing them to be garbage collected.

**syantax**

```
const weakMap = new WeakMap();
const keyObj = {};
weakMap.set(keyObj, 'value');
console.log(weakMap.get(keyObj)); // 'value'

```

**Differences (WeakSet and WeakMap):**

* Weak references do not prevent garbage collection.
* They do not support iteration (e.g., no forEach method).
* WeakSets and WeakMaps only hold objects as keys.


**Relevant links**

* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
* [Set Data structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [Map Data structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [Weakmap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)