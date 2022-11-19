const hre = require("hardhat");

async function main() {}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
