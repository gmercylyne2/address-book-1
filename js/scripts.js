// Business Logic
function Contact(first, last) {
  'use strict';
  this.firstName = first;
  this.lastName = last;
}

// User Interface Logic
$(document).ready(function () {
  'use strict';
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val(),
      inputtedLastName = $("input#new-last-name").val(),
      newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append('<li><span class="contact">' + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});