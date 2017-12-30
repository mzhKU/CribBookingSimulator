pragma solidity ^0.4.17;

//import 'zeppelin-solidity/contracts/token/StandardToken.sol';

// contract TutorialToken is StandardToken {

contract Rep {

    string public name           = "Rep";
    string public symbol         = "REP";
    uint8  public decimals       = 0;
    uint   public INITIAL_SUPPLY = 10000;

    function Rep() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }


}
