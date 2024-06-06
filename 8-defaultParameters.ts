// Default parameters are parameters that have a default value if none is provided. 

function buildName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`;
}

console.log(buildName("Alice")); // Output: Alice Smith
console.log(buildName("Alice", "Johnson")); // Output: Alice Johnson
