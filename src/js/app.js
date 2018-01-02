App = {
    web3Provider: null,
    accounts: null,

    init: function() {
        App.initWeb3();
    },

    initWeb3: function() {
        var host = "http://localhost:8545";
        App.web3Provider = new Web3.providers.HttpProvider(
                                   host);
        web3 = new Web3(App.web3Provider);
        App.accounts = web3.eth.accounts;

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

    signClickedEvent: function(event) {
        event.preventDefault();
        var nu = parseInt($(event.target).data('id'));
        console.log(nu);
    },

    selectClickedEvent: function(event) {
        console.log("clicked");
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
