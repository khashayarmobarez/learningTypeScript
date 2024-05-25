// Literal Types
// Literal types are specific values that a variable can have, rather than general types like string or number.
function move(direction) {
    console.log("Moving ".concat(direction));
}
move("up"); // OK
move("left"); // OK
// move("north"); // Error: Argument of type '"north"' is not assignable to parameter of type 'Direction'.
