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
    $('.infoboxli1').click(function(){
        $('.infoboxli1').css('background-color', '#661E43');
        $('.infoboxli1').css('color', 'white');
        $('.infoboxli2').css('background-color', 'white');
        $('.infoboxli2').css('color', 'black');
        $('.bbsbox2').css('display', 'none');
        $('.bbsbox1').css('display', 'block');
    });
    $('.infoboxli2').click(function(){
        $('.infoboxli2').css('background-color', '#661E43');
        $('.infoboxli2').css('color', 'white');
        $('.infoboxli1').css('background-color', 'white');
        $('.infoboxli1').css('color', 'black');
        $('.bbsbox1').css('display', 'none');
        $('.bbsbox2').css('display', 'block');
    });

    $('.reser_change_btn').click(function(){
        $('.reser_change').css('display', 'flex');
        $('.reser_change').fadeIn(200);
        $('.change_ticket').click(function(){
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if(!tripcheck || !peoplecheck){
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function(){
                    $('.false_modal').css('display', 'none');
                });
            }else{
                alert('넘어가자');

            }
            $('.btn_cancel').click(function(){
                $('.reser_change').hide();
            })
        });
    });
    $('.reser_cancel_btn').click(function(){
        $('.reser_cancel').css('display', 'flex');
        $('.reser_cancel').fadeIn(200);
        $('.next_ticket').click(function(){
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if(!tripcheck || !peoplecheck){
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function(){
                    $('.false_modal').css('display', 'none');
                });
            }else{
                location.href='/UserPage/payment/extras.html'
            }
        });
    });
    
    $('.btn_cancel').click(function(){
        $('.reser_change').hide();
        
        $('.reser_cancel').hide();
    })
    $('.peopleAll').click(function(){
        let checked = $('.peopleAll').is(':checked');

        if(checked){
            $('.people_name').prop('checked', true);
        }
        else{
            $('.people_name').prop('checked', false);
        }
    });
    $('.tripAll').click(function(){
        let checked = $('.tripAll').is(':checked');
        if(checked){
            $('.trip_name').prop('checked', true);
        }
        else{
            $('.trip_name').prop('checked', false);
        }
    });

    $('.confirm_btn').click(function(){
        let confirmcheck = $('#check').is(':checked');
        if(confirmcheck){
            location.href="/UserPage/payment/completePayment.html"
    }else{
        $('.false_modal').css('display', 'flex');
        $('.false_modal').fadeIn(200);
        $('.confirm_btn').click(function(){
            $('.false_modal').fadeOut(200);
            $('.false_modal').css('display', '');
        })
    }
});
    $('.cancl_btn').click(function(){
        location.href="/UserPage/index/mypage/Mypage_main.html"
    })
});


$(() => {
    let a = $(".detail1").offset().top + 70;
    let x = $(".detail1").offset().left + 30;
    let b = $(".detail2").offset().top + 70;
    let y = $(".detail2").offset().left + 30;
    
    $(".modal_flight_info1").css("top", a);
    $(".modal_flight_info2").css("top", b);
    $(".modal_flight_info1").css("left", x);
    $(".modal_flight_info2").css("left", y);
    
    $(".modal_flight_info1").hide();
    $(".modal_flight_info2").hide();

    $("p.detail1").on("click", () => {
        $(".modal_flight_info1").fadeIn();
        $(".modal_flight_info2").hide();
    })
    $(".modal_flight_info1 .close1").on("click", () => {
        $(".modal_flight_info1").fadeOut();
    })

    $("p.detail2").on("click", () => {
        $(".modal_flight_info2").fadeIn();
        $(".modal_flight_info1").hide();
    })
    $(".modal_flight_info2 .close2").on("click", () => {
        $(".modal_flight_info2").fadeOut();
    })
});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}