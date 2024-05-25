// Type Aliases

// Type aliases create a new name for a type. This can make your code more readable and maintainable.

type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };


// You can also use type aliases with union types:

type ID = string | number;

function printID(id: ID): void {
    console.log(`ID: ${id}`);
}

printID(123); // OK
printID("abc"); // OK