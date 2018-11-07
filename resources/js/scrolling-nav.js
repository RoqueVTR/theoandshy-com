//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on("click", "a.page-scroll", function(event) {
        let $anchor = $(this);
        let scroll = $($anchor.attr("href")).offset().top;

        if ($anchor.attr("href") == "#home") {
            scroll = $("html, body").offset().top;
        }

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: scroll
                },
                1500,
                "easeInOutExpo"
            );

        event.preventDefault();
    });

    $(document).on("scroll", function(event) {
        var scrollPos = $(document).scrollTop();
        if (scrollY >= 30) {
            $(".navbar").css({
                backgroundColor: "#fafafa",
                boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)"
            });
        } else {
            $(".navbar").css({
                backgroundColor: "transparent",
                boxShadow: "none"
            });
        }

        $(".navbar-nav li a").each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $(".navbar-nav li").removeClass("active");
                currLink.closest("li").addClass("active");

                if (currLink.attr("href") == "#contact") {
                    $("html, body").css({
                        background: "url('/img/bg_2.jpg') no-repeat fixed",
                        "background-position-y": "85%",
                        "background-position-x": "60%",
                        "background-size": "140%"
                    });
                } else if (currLink.attr("href") == "#timeline") {
                    $("html, body").css({
                        background: "url('/img/bg.jpg') no-repeat fixed",
                        "background-position-y": "10%",
                        "background-position-x": "50%",
                        "background-size": "110%"
                    });
                }
            } else {
                currLink.closest("li").removeClass("active");
            }
        });
    });
});
