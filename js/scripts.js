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
    s
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
