$('.act').on('click', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$(".cross").on("click", function() {
    if ($(window).width() <= 1180) {
        // do your stuff

        $("#list").addClass('the_list');
        // $(".the_list").css("display", "none");
        $('.the_list').hide(500)
        $(".effect").css("display", "none");
        $("#list").removeClass('the_list');
        $(".dropdown-content").css("display", "none");
        $(".act").css("display", "block");
    }

});
$(".hamburger").on("click", function() {
    if ($(window).width() <= 1180) {
        // do your stuff

        $("#list").addClass('the_list');
        $(".effect").css("display", "block");
        $(".the_list").css("display", "block");
        $("#list").removeClass('the_list');
    }
});
$(window).resize(function() {
    if ($(this).width() > 1180) {
        $(".effect").css("display", "none");
        $("#list").css("display", "inline-flex");
    } else {
        $(".effect").css("display", "none");
        $("#list").css("display", "none");
    }
});
$('li').on('click', function() {
    $(".target").removeClass("target");
    $(this).addClass("target");
    $(".target .dropdown-content").show(500);
    $(".act").css("display", "none");
    $(".back").css("display", "block");

});
$('.back').on('click', function() {
    $(".dropdown-content").hide(500);
    $(".act").css("display", "block");
    $(".back").css("display", "none");
});