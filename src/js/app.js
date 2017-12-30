App = {
    web3Provider: null,

    init: function() {
        App.initWeb3();
    },

    initWeb3: function() {
        var host = "http://localhost:8545";
        App.web3Provider = new Web3.providers.HttpProvider(
                                   host);
        web3 = new Web3(App.web3Provider);

        return App.bindEvents();
    },

    bindEvents: function() {
        $(document).on("click", ".btn", App.listAccounts);
        return App.populate(event);
    },

    populate: function(event) {
        event.preventDefault();
        console.log(k);

        accounts = web3.eth.accounts;

        table = "";

        // Row
        for(k=0; k<accounts.length;k++) {

            row = "";
            row += rowOpen;

            numberColumn = "";
            hostColumn   = "";
            guestColumn  = "";
            buttonColumn = "";

            // -----------------------------
            // Number column.
            // -----------------------------
            numberColumn += cellOpen;
            numberColumn += k;
            numberColumn += cellClose;
            // -----------------------------

 
            // -----------------------------
            // Host column.
            // -----------------------------
            hostColumn += cellOpen;
            hostColumn += dropDownDivOpen;
            hostColumn += dropDownButton;
            hostColumn += "\n";

            hostColumn += ulOpen;
            hostColumn += "\n";

            for(i=0; i<accounts.length;i++) {
                hostColumn += liOpen;
                hostColumn += accounts[i];
                hostColumn += liClose;
                hostColumn += "\n";
            }
            hostColumn += ulClose;
            hostColumn += "\n";

            hostColumn += divClose;
            hostColumn += "\n";

            hostColumn += cellClose;
            hostColumn += "\n";
            // -----------------------------


            // -----------------------------
            // Guest column.
            // -----------------------------
            guestColumn += cellOpen;
            guestColumn += dropDownDivOpen;
            guestColumn += dropDownButton;
            guestColumn += "\n";

            guestColumn += ulOpen;
            guestColumn += "\n";

            for(i=0; i<accounts.length;i++) {
                guestColumn += liOpen;
                guestColumn += accounts[i];
                guestColumn += liClose;
                guestColumn += "\n";
            }
            guestColumn += ulClose;
            guestColumn += "\n";

            guestColumn += divClose;
            guestColumn += "\n";

            guestColumn += cellClose;
            guestColumn += "\n";
            // -----------------------------


            // -----------------------------
            // Sign button.
            // -----------------------------
            buttonColumn += cellOpen;
            buttonColumn += signButton;
            buttonColumn += cellClose;
            // -----------------------------

            row += numberColumn + hostColumn
            row += guestColumn + buttonColumn + "\n\n\n";
            row += rowClose;
            table += row;
            console.log(row);
        }

        $('#hostGuestTable').html(table);




    },

    listAccounts: function(event) {
        event.preventDefault();
        accounts = web3.eth.accounts;
        $('#RPCaccounts').html(accounts);
    }

    /*
    contracts:    {},


    initContract: function() {},

    // Transfer, Transaction, ..., see ERC20Basic
    handleX: function(event) {},

    getBalances: function() {},
    */
};

$(function() {
    $(window).load(function() {App.init(); })
});
