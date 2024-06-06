// Optional parameters are parameters that don't need to be provided when the function is called. They are defined with a ? after the parameter name. 


function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}

console.log(buildName("Alice")); // Output: Alice
console.log(buildName("Alice", "Johnson")); // Output: Alice Johnson
