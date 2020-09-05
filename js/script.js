const loader = document.getElementById('overlay');
window.addEventListener('load', function() {
    loader.style.display = "none";
});

$(document).on('click', '.olink', function() {
    event.preventDefault()
    var linkTo = $(this).attr("href")
    /* document.querySelector(linkTo).scrollIntoView({ 
        top: 100,
        behavior: 'smooth' 
    }); */
    $('html, body').animate({scrollTop: $(linkTo).offset().top -100 }, 'slow');
})