# Section B — JavaScript Variables & Datatypes

> This section has the questions and answers of Section B of the assignment.

### 1. What is a variable in JavaScript?

A variable is a container used to store data values in JavaScript such as a number, text, or object.

---

### 2. List the three ways to declare variables in JavaScript.

- `var`
- `let`
- `const`

---

### 3. Explain the difference between let and const.

- `let` allows the value of the variable to be changed later. The value can be updated but cannot be re-declared in the same block.

```js
let age = 25;
age = 26; // Allowed
let age = 30; // Error: Cannot re-declare in same block
console.log(age); // Output: 26
```

- `const` does _not_ allow reassignment i.e. the value cannot change after it is initialized. It cannot be updated or re-declared and it is used when the value should stay the same.

```js
const country = "Nigeria";
country = "Ghana"; // Error: Cannot update
const country = "Kenya"; // Error: Cannot re-declare
console.log(country); // Output: Nigeria
```

---

### 4. Mention the seven primitive datatypes in JavaScript.

1. String: Text data.
2. Number: Numeric values.
3. Boolean: True or false.
4. Null: Represents an intentional absence of value.
5. Undefined: A variable declared but not assigned a value.
6. BigInt: For very large integers beyong 'Number' limits.
7. Symbol: Uninque values used for object keys (e.g. let sym = Symbol("id");)

---

### 5. What datatype is assigned to the value: true?

Boolean.

---

### 6. What datatype is a JavaScript array?

In JavaScript, an array is technically of the **object** data type.

---

### 7. Give one example of a string in JavaScript.

"Hello Cheali"

---

### 8. Give one example of a number in JavaScript.

42

---

### 9. What will be the output of this expression?

```js
typeof "123";
```

string

---

### 10. Explain the difference between null and undefined.

- Null means an intentional empty value.

```js
let y = null;
console.log(y); // Output: null
```

- undefined means a variable has been declared but has not been assigned any value.

```js
let x;
console.log(x); // Output: undefined
```
