$(document).ready (function() {
    // $('.announcement').append("<button class='close'>X</button>");
    // $('.announcement').after("<button class='show' class='hidden'>Show announcement</button>");

    // var buttons = document.querySelectorAll("button");
    // buttons.forEach(function(button) {
    //     button.addEventListener('click', function() {
    //         if(button.innerText === "X") {
    //             $('.announcement').addClass('hidden');
    //             button.innerText = "Show announcement";
    //         } else {
    //             $('.announcement').removeClass('hidden');
    //             //$('.announcement').after("<button id='button'>X</button>");
    //             button.innerText = "X";
    //         }
    //     })
    // });

    //for each announcement (lookup announcments and then .foreach())

    var announcements = document.querySelectorAll(".announcement")
    announcements.forEach(function(announcement) {
        var close = document.createElement("BUTTON");
        close.innerText = "X"

        var div = document.createElement("div");
        var show = document.createElement("BUTTON");
        div.append(show);
        show.innerText = "Show announcement"
        $(show).addClass('hidden');

        close.addEventListener('click', function() {
            $(announcement).addClass('hidden');
            $(show).removeClass('hidden');
        })
        show.addEventListener('click', function() {
            $(announcement).removeClass('hidden');
            $(show).addClass('hidden');
        })
        announcement.append(close);
        announcement.after(div);
        //add two buttons, .append() the hide button, .after() the show button
        //for both buttons, we use .toggle() on the announcement object
        //initialize the .after() button as hidden, and 
        //when we click the hide button, we need to unhide the show button
    })
});