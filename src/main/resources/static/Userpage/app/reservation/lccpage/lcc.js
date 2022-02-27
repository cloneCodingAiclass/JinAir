'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })

});

$(() => {
    //최저가
    $(".lcc_search_btn").on('click', function () {
        $(".custom_search, .now_lcc").css("display", "none");
        $(".custom_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".lcc_search").css("display", "block");
        $('.search_list').css('display','none');
    })
    // 최저가 조회
    $('.submit_btn').on('click', function () {
        $('.search_list').css('display','block');
    })

    //맞춤
    $(".custom_search_btn").on('click', function () {
        $(".lcc_search, .now_lcc").css("display", "none");
        $(".lcc_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, now_lcc").css("display", "none");
        $(".custom_search").css("display", "block");
        $(".custom_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $('.search_list').css('display','none');
    })
    //맞춤
    $('.submit_btn').on('click', function () {
        $('.search_list').css('display','block');
    })

    //지금 이순간
    $(".now_lcc_btn").on('click', function () {
        $(".custom_search, .lcc_search").css("display", "none");
        $(".lcc_search_btn, .custom_search_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, .custom_search").css("display", "none");
        $(".now_lcc").css("display", "block");
        $(".now_lcc_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });

    })
})

