var reEscape = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g');
var fnFormatSearchResult = function(value, data, currentValue) {
    var pattern = '(' + currentValue.replace(reEscape, '\\$1') + ')';
    var listing = users[value]["name"] + " (" + users[value]["username"] + ")";

    listing = listing.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
    return '<img src="https://secure.gravatar.com/avatar.php?gravatar_id=' + users[value]["email"] + '&s=25" /> ' + listing;
};

$('#search').autocomplete({ 
    minChars:2, 
    maxHeight:400,
    width:300,
    fnFormatResult: fnFormatSearchResult,
    onSelect: function(value, data){ window.location = "user.php?username=" + users[value]["username"]; },
    lookup: lookup
});

// vim: set expandtab shiftwidth=4 softtabstop=4 tabstop=4 : 
