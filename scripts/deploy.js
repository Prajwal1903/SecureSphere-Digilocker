// const hre = require("hardhat");

// async function main() {
//     const Upload = await hre.ethers.getContractFactory("Upload");
//     const upload = await Upload.deploy();

//     await upload.deployed();

//     console.log("Library deployed to:", upload.address);
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });


// update 2

// const hre = require("hardhat");

// async function main() {
//     const upload = await hre.ethers.deployContract("Upload");
//     await upload.waitForDeployment();
//     console.log("Library deployed to:", upload.target);

// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });const hre = require("hardhat");

async function main() {
    // Get the ContractFactory
    const Upload = await hre.ethers.getContractFactory("Upload");

    // Deploy the contract
    const upload = await Upload.deploy();

    // Wait for the deployment to complete
    await upload.deployed();

    console.log("Contract deployed to:", upload.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});