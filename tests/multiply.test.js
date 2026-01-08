const multiply = require("../src/multiply");

if (multiply(2, 3) !== 6) {
  throw new Error("Multiply(2, 3) should return 6");
}

if (multiply(5, 0) !== 0) {
  throw new Error("Multiply(5, 0) should return 0");
}

console.log("Multiply tests passed");
