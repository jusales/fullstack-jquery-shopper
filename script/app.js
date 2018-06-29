$(document).ready (function() {
    $('.announcement').append("<button id='button'>X</button>");

    var buttons = document.querySelectorAll("button");
    buttons.addEventListener('click', function() {
        $('.announcement').hide();
    });
});