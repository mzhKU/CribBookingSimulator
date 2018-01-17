App = {
    web3Provider: null,
    accounts: null,
    contracts: {},

    init: function() {
        App.initWeb3();
    },

    initWeb3: function() {
        var host = "http://localhost:8545";
        App.web3Provider = new Web3.providers.HttpProvider(
                                   host);
        web3 = new Web3(App.web3Provider);
        App.accounts = web3.eth.accounts;

        return App.initContract();
    },

    initContract: function() {
        $.getJSON('Crib.json', function(data) {
            var CribArtifact = data; 
            App.contracts.Crib = TruffleContract(
                CribArtifact);
            App.contracts.Crib.setProvider(
                App.web3Provider);
        });
        return App.bindEvents();
    },

    bindEvents: function() {
        // Event for only 'Sign' button.
        $(document).on("click", ".btn-primary",
                                App.signClickedEvent);

        // Event for only 'Select' buttons.
        $(document).on("click", "a.selectAccount",
                       App.selectClickedEvent);

        return App.populate(event);
    },

    populate: function(event) {
        event.preventDefault();

        // As global variable? -> Yes, see declarations.
        // var accounts = web3.eth.accounts;

        tab = "";
        table = buildTable(tab);
        $('#hostGuestTable').html(table);
    },

    // Handle 'sign' button clicked event.
    signClickedEvent: function(event) {
        event.preventDefault();
        var eventNr = parseInt(
                        $(event.target).data('id')
        );

        /* -------------------------------- */
        // Get crib.
        var cribId = $(event.target).parent();
        cribId = cribId.siblings('.crib');
        cribId = cribId.children();
        cribId = cribId.children('.btn');
        cribId = cribId.children('.innerSpan').html();
        cribId = parseInt(cribId.split(":")[1]);
        // console.log(cribId);
        /* -------------------------------- */

        /* -------------------------------- */
        // Get account that signed booking.
        /* -------------------------------- */
        var guest = $(event.target).parent();
        guest = guest.siblings('.guest');
        guest = guest.children();
        guest = guest.children('.btn');
        guest = guest.children('.innerSpan').html();
        // console.log(guest);
        /* -------------------------------- */

        /* -------------------------------- */
        // Sign on contract.
        /* -------------------------------- */
        App.contracts.Crib.deployed().then(
            function(instance) {
                cribInstance = instance;
                return cribInstance.sign(cribId,
                    {from: guest});
        }).then(function(result) {
            // result.tx, result.logs, result.receipt 
            // console.log(result);
            return true;
        });
        /* -------------------------------- */

        /* -------------------------------- */
        // Increase counter.
        /* -------------------------------- */
        App.contracts.Crib.deployed().then(function(instance) {
            // meta = instance;
            return instance.getTransactionCounter.call();
        }).then(function(balance) {
            var cnt = balance;
            $('#transactionCounter').html(cnt);
        });
        /* -------------------------------- */
    },

    selectClickedEvent: function(event) {
        var k = $(event.target).html();

        // Button is the sibling of the unordered list.
        // <a> -> <li> -> <ul> + <button> (-> <div>)
        var eventHTML = "<span ";
        var eventHTMLClass = 'class="innerSpan" ';
        var eventHTMLStyle = 'style="width: 100px; ';
        eventHTMLStyle += 'display: inline-block; ';
        eventHTMLStyle += 'overflow: hidden;" ';
        eventHTML += eventHTMLClass + eventHTMLStyle;
        eventHTML += '>' + k + '</span>';
        eventHTML += '<span class="caret"></span';
        var t = $(event.target).parent().parent().siblings();
        // console.log(eventHTML);
        t.html(eventHTML);
    }

    /*
    // Transfer, Transaction, ..., see ERC20Basic
    handleX: function(event) {},
    getBalances: function() {},
    */
};

$(function() {
    $(window).load(function() {App.init(); })
});
