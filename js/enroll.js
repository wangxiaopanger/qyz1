$(function () {
    //返回顶部
    $(window).scroll(function () {
        let gd = $(document.body).scrollTop() || $(document.documentElement).scrollTop();
        if (gd > 600) {
            $(".back").css("display", "block");
        }
        else {
            $(".back").css("display", "none");
        }
    })
    $(".back").click(function () {
        $(document.body).animate({scrollTop: 0}, 1000);
        $(document.documentElement).animate({scrollTop: 0}, 1000);
    })


    //more
    $("header .more li").eq(3).addClass("active");

    $("header a i").click(function () {
        $("header .more").css("display", "flex");
    })

    $("header .more span").click(function () {
        $("header .more").css("display", "none");
    })

    $("header .more li").click(function () {
        if ($(this).attr("class") == "1 active") {
            return;
        }
        else if ($(this).attr("class") == "1") {
            $("header .more li").removeClass("active");
            $(this).addClass("active");
            window.location.href = "index.html";
            $("header .more").css("display", "none");
        }
        else if ($(this).attr("class") == "2 active") {
            return;
        }
        else if ($(this).attr("class") == "2") {
            $("header .more li").removeClass("active");
            $(this).addClass("active");
            window.location.href = "list.html";
            $("header .more").css("display", "none");
        }
        else if ($(this).attr("class") == "3 active") {
            return;
        }
        else if ($(this).attr("class") == "3") {
            $("header .more li").removeClass("active");
            $(this).addClass("active");
            window.location.href = "login.html";
            $("header .more").css("display", "none");
        }
        else if ($(this).attr("class") == "4 active") {
            return;
        }
        else if ($(this).attr("class") == "4") {
            $("header .more li").removeClass("active");
            $(this).addClass("active");
            window.location.href = "enroll.html";
            $("header .more").css("display", "none");
        }
    })
})