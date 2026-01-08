const divide = require("../src/divide");

if (divide(10, 2) !== 5) {
  throw new Error("Divide(10, 2) should return 5");
}

if (divide(9, 3) !== 3) {
  throw new Error("Divide(9, 3) should return 3");
}

// test division par 0 (doit throw)
let threw = false;
try {
  divide(10, 0);
} catch (e) {
  threw = true;
}

if (!threw) {
  throw new Error("Divide(10, 0) should throw an error");
}

console.log("Divide tests passed");