const substract = require("../src/substract");

if (substract(5, 3) !== 2) {
  throw new Error("Substract(5, 3) should return 2");
}

if (substract(3, 5) !== -2) {
  throw new Error("Substract(3, 5) should return -2");
}

console.log("Substract tests passed");
