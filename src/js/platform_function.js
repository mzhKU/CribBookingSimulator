function getSignButton(i) {
    var signButton  = '<button class="btn btn-primary btn-sm"';
    signButton += ' ' + 'type="button"';
    signButton += ' ' + 'data-id=' + '"' + i + '"' + '>Sign';
    signButton += '</button>';
    return signButton;
}


function buildTable(table) {
    // Row
    for(k=0; k<App.accounts.length;k++) {
    
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
        hostColumn += dropDownButtonHost;
        hostColumn += "\n";
    
        hostColumn += ulOpen;
        hostColumn += "\n";
    
        for(i=0; i<App.accounts.length;i++) {
            hostColumn += liOpen;
            hostColumn += App.accounts[i];
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
        guestColumn += dropDownButtonGuest;
        guestColumn += "\n";
    
        guestColumn += ulOpen;
        guestColumn += "\n";
    
        for(i=0; i<App.accounts.length;i++) {
            guestColumn += liOpen;
            guestColumn += App.accounts[i];
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
        buttonColumn += getSignButton(k);
        buttonColumn += cellClose;
        // -----------------------------
    
        row += numberColumn + hostColumn
        row += guestColumn + buttonColumn + "\n\n\n";
        row += rowClose;
        table += row;
    
        //console.log(row);
    }
    return table;
}

// ------------------------------------------
// Callback events.
// ------------------------------------------
// function setButtonValueToSelection() {
//     var selText = $(this).text();
//     $('.dropdown-toggle ul').html(selText);
// }
// ------------------------------------------

