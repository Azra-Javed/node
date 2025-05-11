//blocking -> synchronous
const { readFileSync, writeFileSync, read } = require("fs");
// read file contents
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

// 2 argumens -> file name if not it create
// 2nd -> files
// if 3rd -> {flag: "a"} -> then it will append content to pre content
//write data to file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
