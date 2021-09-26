import { Test } from "./practice";

let x = new Test();
x.name = "test";
console.log(x);

//If I run "tsc test.ts" in the console, two js files will be generated (test.js and practice.js)
//because in test.ts, we imported a class in practice.ts
