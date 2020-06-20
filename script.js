// Show the navigation bar

$(".fa-bars").click(function() {
    $("#navigation-bar").show();

    $(".fa-bars").hide(); // hide menu icon
    $(".fa-times").show(); // Show the exit icon

});


$(".fa-times").click(function() {
    $("#navigation-bar").hide();

    $(".fa-bars").show(); // hide menu icon
    $(".fa-times").hide(); // Show the exit icon

});