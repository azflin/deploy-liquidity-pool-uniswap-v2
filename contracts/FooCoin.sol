pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract FooCoin is ERC20 {
  constructor() public ERC20("FooCoin", "FOO") {
    _mint(msg.sender, 1000000 * 10 ** 18);
  }
}