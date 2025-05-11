const os = require("os");

// infor about current user
const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime} seconds`); // 100 seconds

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
