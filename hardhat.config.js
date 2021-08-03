require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.8.0"
        },
        {
          version: "0.5.16"
        },
        {
          version: "0.6.6"
        },
        {
          version: "0.4.18"
        }
    ]
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
        throwOnTransactionFailures: true,
        throwOnCallFailures: true,
        allowUnlimitedContractSize: true,
        blockGasLimit: 0x1fffffffffffff,
    }
  }
};
