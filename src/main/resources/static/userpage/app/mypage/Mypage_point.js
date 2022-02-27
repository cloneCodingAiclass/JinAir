'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
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

    $('.srh_container').hide();
    $('.flex_container').hide();
    $(".point_save").on('click', function () {
        $(".flex_container, .srh_container").css("display","none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".save_container").css("display","block");
    });
    $(".point_flex").on('click', function () {
        $(".save_container, .srh_container").css("display","none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".flex_container").css("display","block");
    })
    $(".point_srh").on('click', function () {
        $(".save_container, .flex_container").css("display","none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".srh_container").css("display","block");
    });
    $('.edit').click(function(){
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(){
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
        })
    })
    $(window).scroll(function() {
        if($(this).scrollTop() > 90) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0px");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "90px");
            $("#header").css("position", "absolute");
        }
    });
    
    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'navipoint1'){
        $(".flex_container, .srh_container").css("display","none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".save_container").css("display","block");
    }else if(directId == 'navipoint2'){
        $(".save_container, .srh_container").css("display","none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".flex_container").css("display","block");
    }else if(directId == 'navipoint3'){
        $(".save_container, .flex_container").css("display","none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".srh_container").css("display","block");
    }else{
        $(".flex_container, .srh_container").css("display","none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".save_container").css("display","block");
    }
});


function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}