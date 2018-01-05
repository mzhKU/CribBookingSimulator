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
        $(document).on("click", "a.selectAccount", App.selectClickedEvent);

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
        console.log("Event Nr.: " + nu);
    },

    selectClickedEvent: function(event) {
        var k = $(event.target).html();

        // The button is the sibling of the unordered list.
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
        console.log(eventHTML);
        t.html(eventHTML);
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
