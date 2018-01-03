// ------------------------------------------
// Transaction table buildup.
// ------------------------------------------
var rowOpen = '<tr>';
var cellOpen = '<td>';
var cellClose = '</td>';
var dropDownDivOpen = '<div class="dropdown">';

var dropDownCSS        = 'class="btn btn-default dropdown-toggle"';
var dropDownType       = 'type="button"';
var dropDownId         = 'id="dropdownMenu1"';
var dropDownDataToggle = 'data-toggle="dropdown"';
var dropDownAriaHasPopup = 'aria-haspopup="true"';
var dropDownAriaExpanded = 'aria-expanded="true"';

var dropDownButtonHTML = '<button' + ' ' + dropDownCSS;
dropDownButtonHTML    += dropDownType;
dropDownButtonHTML    += dropDownId;
dropDownButtonHTML    += dropDownDataToggle;
dropDownButtonHTML    += dropDownAriaHasPopup;
dropDownButtonHTML    += dropDownAriaExpanded;

var dropDownButtonHost  = dropDownButtonHTML + '>' + 'Select Host';
var dropDownButtonGuest = dropDownButtonHTML + '>' + 'Select Guest';

dropDownButtonHost  += '<span class="caret"></span></button>';
dropDownButtonGuest += '<span class="caret"></span></button>';

var ulClass          = 'class="dropdown-menu "';
var ulAriaLabelledBy = 'aria-labelledby="dropdownMenu1"';
var ulOpen = '<ul ' + ulClass + ulAriaLabelledBy + '>';

var liOpen = '<li>';
var aClose = '</a>';
var liClose = '</li>';

function aOpenWithId(i) {
    s  = '<a class="selectAccount" href="#" ';
    s += 'data-link-id="';
    s += i
    s += '"' + '>';
    return s;
}

var ulClose = '</ul>';
var rowClose = '</tr>';
var divClose = '</div>';
// ------------------------------------------
