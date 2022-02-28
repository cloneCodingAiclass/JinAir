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


    $('.dis_ing').on('click', function () {
        $('#container').css({"height":"2150px"});
        $('.ing').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_end').css({"background-color":"white", "color": "#444"});
        $('.dis_win').css({"background-color":"white", "color": "#444"});
        $('.end').css({"display":"none"});
        $('.win').css({"display":"none"});
    })
    $('.dis_end').on('click', function () {
        $('#container').css({"height":"2250px"});
        $('.end').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_ing').css({"background-color":"white", "color": "#444"});
        $('.dis_win').css({"background-color":"white", "color": "#444"});
        $('.ing').css({"display":"none"});
        $('.win').css({"display":"none"});
    })
    $('.dis_win').on('click', function () {
        $('#container').css({"height":"1800px"});
        $('.win').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_ing').css({"background-color":"white", "color": "#444"});
        $('.dis_end').css({"background-color":"white", "color": "#444"});
        $('.ing').css({"display":"none"});
        $('.end').css({"display":"none"});
    })

});
$(() => {
    let thisSlide, autoPlayBtn, autoPlayState;
    let swiper = new Swiper(".mySwiper", {
        cssMode: true,
        observer: true,
        observeParents: true,
        loop: true,
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        on: {
            init: function () {
                thisSlide = this;
                autoPlayBtn = document.querySelector('.wrap-autoplay-control button');
                autoPlayBtn.addEventListener('click', (e) => {
                    autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                    if (autoPlayState === 'false') {
                        autoPlayBtn.setAttribute('aria-pressed', 'true');
                        thisSlide.autoplay.stop();
                    } else if (autoPlayState === 'true') {
                        autoPlayBtn.setAttribute('aria-pressed', 'false');
                        thisSlide.autoplay.start();
                    };
                });
            },
        },    
    });
});