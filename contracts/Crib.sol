pragma solidity ^0.4.17;

contract Crib {

    /* On sign event, a crib is associated with
    the address of a tenant. Initialized with '0x0'. */
    address[10] public cribs;

    /* ------------------------------- */
    // Branch 'transactionCounter'.
    uint8 public transactionCounter;

    function Crib() public {
        transactionCounter = 0;
    }

    function getTransactionCounter() returns (uint8) {
        return transactionCounter;
    }
    /* ------------------------------- */

    function sign(uint cribId) public returns (uint) {

        /* ------------------------------- */
        // Branch 'transactionCounter'.
        transactionCounter += 1;
        /* ------------------------------- */

        cribs[cribId] = msg.sender;
        return cribId;
    }

    

}
