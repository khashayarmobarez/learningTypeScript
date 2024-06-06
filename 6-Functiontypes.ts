// Function types define the types of the parameters and the return type of a function. This makes the function's contract explicit and helps with type safety. 


// Define a function type
type GreetFunction = (name: string) => string;

// Implement a function that matches the type
const greet: GreetFunction = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
