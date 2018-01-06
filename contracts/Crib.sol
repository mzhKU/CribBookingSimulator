pragma solidity ^0.4.17;

contract Crib {

    /* On sign event, a crib is associated with
    the address of a tenant. Initialized with '0x0'. */
    address[10] public cribs;

    function sign(uint cribId) public returns (uint) {
        cribs[cribId] = msg.sender;
        return cribId;
    }

}
