const loader = document.getElementById('overlay');
window.addEventListener('load', function() {
    loader.style.display = "none";
    displayModal()
});

var displayModal = () => {
    var currentDate = new Date()
    var previousDate = new Date(localStorage.getItem("modal"))
    var diffMs = (currentDate - previousDate);
    var diffInMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
    if(previousDate !== null) {
        if(diffInMins >= 30) {
            var modals = ["#mantra1", "#mantra2", "#mantra3"]
            var modal = modals[Math.floor(Math.random() * modals.length)];
            UIkit.modal(modal).show();
            localStorage.setItem("modal", currentDate)
        }
    } else {
        var modals = ["#mantra1", "#mantra2", "#mantra3"]
        var modal = modals[Math.floor(Math.random() * modals.length)];
        UIkit.modal(modal).show();
        localStorage.setItem("modal", currentDate)
        console.log("local storage null")
    }
}

$(document).on('click', '.olink', function() {
    event.preventDefault()
    var linkTo = $(this).attr("href")
    /* document.querySelector(linkTo).scrollIntoView({ 
        top: 100,
        behavior: 'smooth' 
    }); */
    $('html, body').animate({scrollTop: $(linkTo).offset().top -100 }, 'slow');
})

$(document).on('click', '.stabs a', function() {
    event.preventDefault()
    var tablink = $(this).attr("href")
    $(".stabs a.uk-active").removeClass("uk-active")
    $(this).addClass("uk-active")

    $(".skill-section .exp.active").removeClass("active")
    $(tablink).addClass("active")
})

$(document).on("click", ".exp-a", function() {
    var div = $(this).attr("data-div")
    var activeDiv = $(".exp-div.active")

    activeDiv.removeClass('active')
    $("#"+div).addClass('active')
})

/* $("div.pc-content").slice(0, 6).show();
$("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".pc-content:hidden").slice(0, 6).show();
    if($(".pc-content:hidden").length == 0) {
        $("#loadMore").hide();
    }
}); */