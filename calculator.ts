type Operation = "add" | "subtract" | "multiply" | "divide" | "modulus";

function calculate(op: Operation, ...values: number[]): number {
        switch (op) {
            case "add":
                return values.reduce((acc, val) => acc + val, 0);
            case "subtract":
                return values.reduce((acc, val) => acc - val)
            case "multiply":
                return values.reduce((acc, val) => acc * val, 1);
            case "divide":
                return values.reduce((acc, val) => {
                    if(val === 0) throw new Error('can not devide by zero');
                    return acc / val
                });
            case "modulus":
                return values.reduce((acc, val) => acc % val);
            default:
                throw new Error("Invalid operation");
        }
}

console.log(calculate("add", 1, 2, 3, 4)); // Output: 10
console.log(calculate("subtract", 10, 2, 1)); // Output: 7
console.log(calculate("multiply", 2, 3, 4)); // Output: 24
console.log(calculate("divide", 100, 2, 5)); // Output: 10
console.log(calculate("modulus", 10, 3)); // Output: 1
