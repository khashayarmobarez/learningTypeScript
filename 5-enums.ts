// Enums
// Enums allow you to define a set of named constants, which can make your code more readable and maintainable.

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); // Output: 1 (index of Green)



// You can also assign custom values to enum members: 
enum Color {
    Red1 = 1,
    Green1 = 2,
    Blue1 = 4
}

let d: Color = Color.Blue1;
console.log(c); // Output: 4