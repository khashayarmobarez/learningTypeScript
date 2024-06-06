// Rest parameters allow a function to accept an indefinite number of arguments as an array. 

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
