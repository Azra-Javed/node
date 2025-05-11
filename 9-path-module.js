const path = require("path");
//platform-specific file separator (/ for UNIX and \ for Windows):
console.log(path.sep);
// join a sequence of path segments using that platform specific separator
// reutrn normalized resulting path
const filePath = path.join("/content", "subfolder/", "text.txt");
console.log(filePath);
// get last portion of a path (the file name)
const base = path.basename(filePath);
console.log(base);
//Resolves a sequence of paths into an absolute path:
//accepts sequence of paths
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
