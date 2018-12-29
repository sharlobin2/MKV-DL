$(document).ready(function() {

    $(".request-us").click(function re() {

        $("#request_us").fadeIn("slow");
    });
    $(".close").click(function ci() {

        $("#request_us").fadeOut();
    });

    $(".sign-in").click(function si() {

        $("#sign_in").fadeIn("slow");
    });

    $(".close").click(function ci() {

        $("#sign_in").fadeOut();
    });

    $(".sign-up").click(function si() {

        $("#sign_up").fadeIn("slow");
    });

    $(".close").click(function cu() {

        $("#sign_up").fadeOut();
    });
    $(".psw").mousedown(function fp() {

        $("#sign_in").fadeOut();
        $("#forget_psw").fadeIn();
    });
    $(".close").click(function cu() {

        $("#forget_psw").fadeOut();
    });
});