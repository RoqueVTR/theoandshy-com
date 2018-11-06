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

        if (scrollPos >= 10) {
            $(".navbar").animate(
                {
                    backgroundColor: "#fafafa",
                    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)"
                },
                "slow"
            );
        } else {
            $(".navbar").animate(
                {
                    backgroundColor: "transparent",
                    boxShadow: "none"
                },
                "slow"
            );
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
            } else {
                currLink.closest("li").removeClass("active");
            }
        });
    });
});
