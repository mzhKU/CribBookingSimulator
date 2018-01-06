function buildTable(table) {
    // Row
    for(k=0; k<App.accounts.length;k++) {
        row = rowOpen;
        numberColumn = "";
        column       = "";
        hostColumn   = "";
        guestColumn  = "";
        buttonColumn = "";
    
        // Number column.
        numberColumn += cellOpen + k + cellClose;

        // Crib column.
        // column += cellOpen + dropDownDivOpen;
        column += cellOpenCrib + dropDownDivOpen;
        column += dropDownButtonHost + ulOpen;
        for(i=0; i<App.accounts.length;i++) {
            hostColumn += liOpen + aOpenWithId(i);
            //hostColumn += App.accounts[i] + aClose + liClose;
            hostColumn += "Crib Id: " + i + aClose + liClose;
        }
        column += hostColumn + ulClose + divClose + cellClose;

        // Guest column.
        column += cellOpen + dropDownDivOpen;
        column += dropDownButtonGuest + ulOpen;
        for(i=0; i<App.accounts.length;i++) {
            guestColumn += liOpen + aOpenWithId(i);
            guestColumn += App.accounts[i] + aClose + liClose;
        }
        column += guestColumn + ulClose + divClose + cellClose;
    
        // Sign button.
        buttonColumn += cellOpenSign + signButton(k);
        buttonColumn += cellClose;
    
        row += numberColumn + column + buttonColumn;
        row += rowClose;
        table += row;
    
        //console.log(row);
    }
    return table;
}

function signButton(i) {
    var signButton  = '<button class="btn btn-primary btn-sm"';
    signButton += ' ' + 'type="button"';
    signButton += ' ' + 'data-id=' + '"' + i + '"' + '>Sign';
    signButton += '</button>';
    return signButton;
}
