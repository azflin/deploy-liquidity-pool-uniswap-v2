async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("FooCoin");
  const token = await Token.deploy();
  console.log("Token address:", token.address);

  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
  console.log("UniswapV2Factory address:", uniswapV2Factory.address);

  const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
  const uniswapV2Pair = await UniswapV2Pair.deploy();
  console.log("UniswapV2Pair address:", uniswapV2Pair.address);

  const WETH = await ethers.getContractFactory("WETH9");
  const weth = await WETH.deploy();
  console.log("WETH address:", weth.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });