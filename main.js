const { ethers } = require("ethers");
const { abi: FooCoinAbi } = require("./artifacts/contracts/FooCoin.sol/FooCoin.json");
const { abi: UniswapV2FactoryAbi } = require("./artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const { abi: UniswapV2PairAbi } = require("./artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json");

const FOO_COIN_CONTRACT = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const PUBLIC_KEY = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const UNISWAP_PAIR_CONTRACT = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const UNISWAP_FACTORY_CONTRACT = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const WETH_CONTRACT = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

(async () => {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const fooCoinContract = new ethers.Contract(FOO_COIN_CONTRACT, FooCoinAbi, signer);
  const pairContract = new ethers.Contract(UNISWAP_PAIR_CONTRACT, UniswapV2PairAbi, signer);
  const factoryContract = new ethers.Contract(UNISWAP_FACTORY_CONTRACT, UniswapV2FactoryAbi, signer);

  // await fooCoinContract.transfer("0x70997970c51812dc3a010c7d01b50e0d17dc79c8", ethers.utils.parseUnits("1000"));
  console.log("FOO Balance of account 1: ", ethers.utils.formatEther(await fooCoinContract.balanceOf(PUBLIC_KEY)));
  console.log("FOO Balance of account 2: ", ethers.utils.formatEther(await fooCoinContract.balanceOf("0x70997970c51812dc3a010c7d01b50e0d17dc79c8")));

  console.log("factory allPairsLength: ", (await factoryContract.allPairsLength()).toString());
})();