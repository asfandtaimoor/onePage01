// Show the navigation bar

$(".fa-bars").click(function() {
    $(".nav-pills").toggle();
});


// Hide the navBar when click on times icon and click on the link
$(".nav-link").click(function() {
    $(".nav-pills").hide();
});