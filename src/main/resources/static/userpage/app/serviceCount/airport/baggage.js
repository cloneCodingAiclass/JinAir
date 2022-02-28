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
    $(".modal").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    


    $('.bag_save').on('click', function () {
        $('#baggage1').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_limit').on('click', function () {
        $('#baggage2').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_compensation').on('click', function () {
        $('#baggage3').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_find').on('click', function () {
        $('#baggage4').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
    })
    

    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'findbaggage'){
        $('#baggage4').css({"display":"block"});
        $('.bag_find').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
    }
});