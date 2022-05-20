$(document).ready(function () {

    window.onload = function () {
        $(".loading_page").fadeOut(2000, function () { $("body").css("overflow", "visible") });
    }

    $(".header").height(($(window).innerHeight() - $(".navbar").height()));
    $("body").css("paddingTop", $(".navbar").height() + 15);


    $(window).on("resize", function () {
        $(".header").height(($(window).innerHeight() - $(".navbar").height()));
        $("body").css("paddingTop", $(".navbar").height() + 15);
    });

    $(".OurWork .parent").on({
        mouseenter: function () { $(this).children(".overpost").fadeIn(500); },
        mouseleave: function () { $(this).children(".overpost").fadeOut(500); }
    });

    $(".OurWork .parent .overpost .f i:first-of-type").on("click", function () {
        var count = parseInt($(this).next().text());

        if ($(this).css("color") != "rgba(255, 255, 255, 0.67)") {
            $(this).next().text(count - 1);
            $(this).css("color", "rgba(255, 255, 255, 0.67)");

        }
        else {
            $(this).next().text(count + 1);
            $(this).css("color", "#fddb3a");
        }
    })
    var classes = [".header", ".service", ".OurWork", ".About_us", ".Find_us", ".book"];
    for (var i = 0; i < classes.length; i++) {
        $("a[data-class='" + classes[i] + "']").on("click", function () {
            event.preventDefault();
            var x = $(this).attr("data-class")
            $(window).scrollTop($(x).offset().top - 78);

        })

    }

    $(window).on("scroll", function () {
        for (var i = 0; i < classes.length; i++) {
            if ($(window).scrollTop() >= $(classes[i]).offset().top - 78) {
                $("a[data-class='" + classes[i] + "']").css("color", "#fddb3a");
                $("a[data-class!='" + classes[i] + "']").css("color", "white");
            }
        }
    })


});