# 1) Union & Intersection Types

## Union Types (`|`)

Union Type ব্যবহার করা হয় যখন একটি ভ্যারিয়েবলে একাধিক টাইপের যেকোনো একটি টাইপ হতে পারে।

```ts
// This Variable can be either string or number 
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("abc-123"); // Output: ABC-123
printId(42.5678);    // Output: 42.57
```
---

## Intersection Types (`&`)

**Intersection Type** ব্যবহার করা হয় যখন একাধিক টাইপের সবগুলো property একসাথে থাকা দরকার।

```ts
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

// type Person must have both name and age property
type Person = HasName & HasAge;

const myPerson: Person = {
  name: "Jane Doe",
  age: 30,
};
```

**সামারি:** <br>
Intersection Type → সবকিছুই নিবে। <br>
Union Type → যেকোনো একটা নিবে।

---

# 2) Interface vs Type

### a. **Extending**

Interface সহজে extend করা যায়।

```ts
interface A {
  name: string;
}

interface B extends A {
  age: number;
}
```

Type-ও extend করা যায়, তবে একটু ভিন্নভাবে:

```ts
type A = {
  name: string;
}

type B = A & {
  age: number;
};
```

### b. **Declaration Merging**

Interface merge হতে পারে কিন্তু type পারে না।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// User = { name: string; age: number }
```

Type alias কখনো merge হয় না।

```ts
type User = { name: string };
type User = { age: number }; // ❌ Error
```

### 🟦 3. **Primitive, Union, Tuple ইত্যাদি**

Type alias বেশি flexible: primitive, union, tuple, function ইত্যাদি define করা যায়।

```ts
type ID = string | number;
type Point = [number, number];
```

Interface এগুলো করতে পারে না। শুধুমাত্র object structure।







