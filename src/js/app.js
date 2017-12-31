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
        $(document).on("click", ".btn", App.defaultCallback);
        return App.populate(event);
    },

    populate: function(event) {
        event.preventDefault();
        // As global variable?
        accounts = web3.eth.accounts;
        tab = "";
        table = buildTable(tab);
        $('#hostGuestTable').html(table);
    },

    defaultCallback: function(event) {
        event.preventDefault();
        var nu = parseInt($(event.target).data('id'));
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
