jQuery(document).ready(function() {

    $(".sidebar-content-1 > ul > li > a").on("click", function(e) {

        if (!$(this).hasClass("active")) {

            // hide any open menus and remove all other classes
            $(".sidebar-content-1 ul li ul ").slideUp(400);
            $(".sidebar-content-1 ul li ul a").removeClass("active");

            // open our new menu and add the open class
            $(this).next(".sidebar-content-1 ul li ul").slideDown(400);
            $(this).addClass("active");

        } else if ($(this).hasClass("active")) {

            $(this).removeClass("active");
            $(this).next(".sidebar-content-1 ul li ul").slideUp(400);
        }
    });

});


$('.btn-up').click(function() {
    $(this).parents('.sidebar-content-2').insertBefore($(this).parents('.sidebar-content-2').prev());
});

$('.btn-down').click(function() {
    $(this).parents('.sidebar-content-2').insertAfter($(this).parents('.sidebar-content-2').next());
});