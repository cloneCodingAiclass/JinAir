'use strict';

let ccc = 'n';
let bbb = 'n';


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

    $('.dis_schedule').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })
    $('.dis_departure').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.departure').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
    })
    $('.dis_route').on('click', function () {
        $('#container').css({"height":"1500px"});
        $('.route').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.departure').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })

    // 왕복 편도 번환
    $('#oneway').on('change', function(){
        $('.sc_search_bw').css({"display":"none"});
        $('.sc_search_oneway').css({"display":"block"});
    })
    $('#between').on('change', function(){
        $('.sc_search_oneway').css({"display":"none"});
        $('.sc_search_bw').css({"display":"block"});
    })

    // 출발지, 도착지
    $('.go_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideDown(100);
        $('.go_layer1').slideUp(50);
        $(this).addClass("on");
        $('.arrive_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.go_select_opt').removeClass("on");
    })
    $('.arrive_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer1').slideDown(100);
        $('.go_layer').slideUp(50);
        $(this).addClass("on");
        $('.go_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.arrive_select_opt').removeClass("on");
    })

    // 조회 결과 도출
    $('.search_btn').on('click', function () {
        $('.result_wrapper').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })
    $('.de_result_btn').on('click', function () {
        $('.de_result_wrap').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })

    // 스케줄 결과 표
    $('.dis_go').on('click', function () {
        $('.go').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_back').css({"background-color":"white", "color": "#444"});
        $('.back').css({"display":"none"});
    })
    $('.dis_back').on('click', function () {
        $('.back').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_go').css({"background-color":"white", "color": "#444"});
        $('.go').css({"display":"none"});
    })



    // 왕복 달력 모달
    $('.go_date_select_opt').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal').css({"display":"flex"});
            $('.whatday').html('가는날');
        }
    })
    $('.come_date_select_opt').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal').css({"display":"flex"});
            $('.whatday').html('오는날');
        }
    })

    // 편도 달력 모달
    $('.go_date_select_opt2').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal2').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal2').css({"display":"flex"});
            $('.whatday').html('가는날');
        }
    })

    // 달력 X 버튼
    $('.x_box').on('click', function () {
        $('.cal').css({"display":"none"});
        $('.cal2').css({"display":"none"});
    })

    // 모달모음 확인 버튼
    $('.btn_cancel').on('click', function () {
        $('.modal_container').fadeOut(200);
    })


    // 출발지 지정
    $('.go_layer').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.go_select_optt').val(str);
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideDown(100);
        $('.go_select_opt').removeClass("on");
        $('.arrive_select_opt').addClass("on");
        bbb = 'y';
    })
    // 도착지 지정
    $('.go_layer1').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.arrive_select_optt').val(str);
        ccc='y';
    })

    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'flightCont1'){
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $('.dis_schedule').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }else if(directId == 'flightCont2'){
        $('#container').css({"height":"1100px"});
        $('.departure').css({"display":"block"});
        $('.dis_departure').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
    }else if(directId == 'flightCont3'){
        $('#container').css({"height":"1500px"});
        $('.route').css({"display":"block"});
        $('.dis_route').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.departure').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }else{
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $('.dis_schedule').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }
});


function comewhatday(){
    $('.whatday').html('오는날');
}
function gowhatday(){
    $('.whatday').html('가는날');
}

function gowhatdaydd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.go_date_select_optt').val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.come_date_select_optt').val(`${str1}-${str2}-${str3}`);
}
function gowhatdayddd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.go_date_select_optt2').val(`${str1}-${str2}-${str3}`);
}


function minday(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발일보다 이전 날짜를 선택할 수 없습니다.');
}
function departure(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발지 항목을 입력하세요.');
}
function arrive(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('도착지 항목을 입력하세요.');
}


function twochoice(){
$('.cal').css({"display":"none"});
$('.cal2').css({"display":"none"});
}