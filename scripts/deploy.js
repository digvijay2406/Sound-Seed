// Calucator deployed to: 0x065ffbA56bec9cd6A45B6451754cD615760320ba
// contract2 deployed to: 0xe8EF684feBe1eF7a50355816C1c2954Fe458859D

const { ethers } = require("hardhat");

async function main() {
  const Calucator = await ethers.deployContract("SongToken");
  await Calucator.waitForDeployment();

  console.log("Calucator deployed to:", await Calucator.getAddress());

  const contract2 = await ethers.deployContract("Music");
  await contract2.waitForDeployment();
  console.log("contract2 deployed to:", await contract2.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });