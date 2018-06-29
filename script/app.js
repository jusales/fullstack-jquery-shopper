$(document).ready (function() {
    $('.announcement').append("<button id='button'>X</button>");

    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if(button.text === "X") {
                $('.announcement').addClass('hidden');
                $(button).addClass('clicked');
            } else {
                $('.announcement').removeClass('hidden');
                $(button).removeClass('clicked');
            }
        })
    });
});