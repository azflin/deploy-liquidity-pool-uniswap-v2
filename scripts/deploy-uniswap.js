async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("FooCoin");
  const token = await Token.deploy();
  console.log("Token address:", token.address);

  const WETH = await ethers.getContractFactory("WETH9");
  const weth = await WETH.deploy();
  console.log("WETH address:", weth.address);

  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(deployer.address);
  console.log("UniswapV2Factory address:", uniswapV2Factory.address);

  const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(uniswapV2Factory.address, weth.address, {gasLimit: 12450000});
  console.log("UniswapV2Router02 address:", uniswapV2Router02.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });