// unknown:
/* In TypeScript (TS), the unknown type is a special type that acts as a safer alternative to any. It is used 
when you do not know the type of a value at the time of writing your code but want to enforce type-checking 
before performing operations on it.

Key Points About unknown
More Restrictive Than any:

Unlike any, you cannot perform operations on an unknown value without first narrowing its type.
This makes unknown safer, as it enforces runtime type checks.
Assignability:

Any type can be assigned to unknown (similar to any).

Common Use Cases:

When working with dynamic or external data (e.g., JSON parsing, API responses).
As a return type for functions whose output cannot be determined statically. 
*/

let value: unknown;

value = "Hello, TypeScript!";
value = 42; // Can assign any type to `unknown`

// Error: Cannot perform operations directly on `unknown`
 //console.log(value.toUpperCase());

// Use Type Narrowing
if (typeof value === "string") {
  console.log(value.toUpperCase()); // OK: Value is narrowed to string
}

if (typeof value === "number") {
  console.log(value.toFixed(2)); // OK: Value is narrowed to number
}


//However, you cannot assign unknown to other types unless you narrow it or use type assertions.

let unknownValue: unknown;
unknownValue = "Hello, World!"; // Assigning a string to unknown is fine

let stringValue: string;
// Error: Type 'unknown' is not assignable to type 'string'
// stringValue = unknownValue;

//Fixing the Error: Narrowing the Type
if (typeof unknownValue === "string") {
    stringValue = unknownValue; // Now it is safe to assign because it's narrowed to string
  }


//2nd way --Type Assertion forces the type (use cautiously)

let unknownInput: unknown = 123;

let numValue: number;
// Error: Type 'unknown' is not assignable to type 'number'
// numValue = unknownInput;

// Fix with type guard - 1st way
if (typeof unknownInput === "number") {
  numValue = unknownInput; // Type is now narrowed to number
}

// Fix with type assertion - 2nd way
numValue = unknownInput as number; //Type assertion forces TypeScript to treat it as a number


  