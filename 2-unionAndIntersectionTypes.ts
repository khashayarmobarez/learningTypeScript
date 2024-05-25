// 1. Union and Intersection Types

// Union Types allow a value to be one of several types. It’s a way of providing multiple options for a variable or parameter.

type StringOrNumber = string | number;

function printValue(value: StringOrNumber): void {
    console.log(`Value: ${value}`);
}

printValue(123); // OK
printValue("Hello"); // OK
printValue(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'StringOrNumber'.


// Intersection Types combine multiple types into one. This is useful for combining properties of multiple types into a single type.

interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

const person: Person = {
    name: "John",
    age: 30
};
