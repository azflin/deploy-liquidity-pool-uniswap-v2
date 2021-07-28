require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.7.3"
        },
        {
            version: "0.8.0"
        },
        {
          version: "0.5.16"
        },
        {
          version: "0.4.18"
        }
    ]
}
};
