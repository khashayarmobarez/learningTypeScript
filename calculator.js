function calculate(op, a, b) {
    if (Array.isArray(a)) {
        switch (op) {
            case "add":
                return a.reduce(function (acc, val) { return acc + val; }, 0);
            case "multiply":
                return a.reduce(function (acc, val) { return acc * val; }, 1);
            default:
                throw new Error("Invalid operation for array input");
        }
    }
    else {
        switch (op) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                if (b === 0)
                    throw new Error("Cannot divide by zero");
                return a / b;
            case "modulus":
                return a % b;
            default:
                throw new Error("Invalid operation");
        }
    }
}
console.log(calculate("add", 5, 3)); // Output: 8
console.log(calculate("subtract", 5, 3)); // Output: 2
console.log(calculate("multiply", 5, 3)); // Output: 15
console.log(calculate("divide", 6, 3)); // Output: 2
console.log(calculate("modulus", 7, 3)); // Output: 1
console.log(calculate("add", [1, 2, 3, 4])); // Output: 10
console.log(calculate("multiply", [1, 2, 3, 4])); // Output: 24
