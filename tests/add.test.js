const add = require("../src/add");

if (add(2, 2) !== 4) {
  console.error("Add test failed");
  process.exit(1);
}
console.log("Add test passed");
