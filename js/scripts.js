// Business Logic
function Contact(first, last) {
    'use strict';
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
}

// User Interface Logic
$(document).ready(function() {
    'use strict';

    $("#add-address").click(function() {
        $("#new-addresses").append(
            '<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control" id="new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control" id="new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-county">County</label>' +
            '<input type="text" class="form-control" id="new-county">' +
            '</div>' +
            '</div>');
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val(),
            inputtedLastName = $("input#new-last-name").val(),
            newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    });
});
