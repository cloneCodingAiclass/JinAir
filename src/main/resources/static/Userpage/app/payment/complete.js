'use strict';

$(function () {
    // 예약 인원수 확인

    let sumResult = 0;
    $('.cookies').each(function (i){
        let num = $('.cookies').eq(i).attr("value");
        console.log(num);
        if(num % 2 != 0) {
            sumResult++;
        }
    });
    console.log(sumResult);
    $('#peopleSum').html(sumResult + "명");

    $(".isAdult").each(function (i){
        let age = $('.isAdult').eq(i).attr("value");
        let resultAge = 2022 - age.substr(0, 4);

        let result = "";
        if(resultAge > 13){
            result = "성인";
            $('.isAdult').eq(i).html(result);
        }else if(resultAge < 13){
            result = "소아"
            $('.isAdult').eq(i).html(result);
        }else if(resultAge < 12){
            result = "유아"
            $('.isAdult').eq(i).html(result);
        }
    })
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
    $('.btn').click(function(){
        location.href='/index.html'
    });

    let spst1 = $('#startTime1').attr("value").split("T");
    let spend1 = $('#endTime1').attr("value").split("T");
    let spst2 = $('#startTime2').attr("value").split("T");
    let spend2 = $('#endTime2').attr("value").split("T");
    $('#startTime1').text(" " + spst1[0] + " " + spst1[1]);
    $('#endTime1').text(" " + spend1[0] + " " + spend1[1]);
    $('#startTime2').text(" " + spst2[0] + " " + spst2[1]);
    $('#endTime2').text(" " + spend2[0] + " " + spend2[1]);

    let date = new Date();
    let week = new Array('일', '월', '화', '수', '목', '금', '토');
    let today = date.getFullYear() + "-" + ("00" + (date.getMonth()+1)).toString().slice(-2) + "-" + ("0" + date.getDay()).toString().slice(-2) + " (" + week[date.getDay()] +")";
    console.log("00"+date.getDay());

    $('#today, #reserDay').text(today);

    // let pay = $('#pay').attr("value")
    // console.log(pay)
    // if(pay == "KAKAOPAY"){
    //     $('#pay').html("카카오페이")
    // }

    // 총 결제금액 찍어주기
    let money = $('#totalPrice').attr("value");
    $('#totalPrice').text(" " + Math.ceil(money).toLocaleString() + "원");

    // 최종 업데이트
    $('.cookies').each(function (i) {
        let val = $('.cookie').eq(i).attr("value");
        console.log(val);
        finalUpdate(val);
    });

    function finalUpdate(val){

        let jsonData = {
            data :{
                reIndex : val,
                reStatus : "PaymentFinished"
            }
        }

        $.ajax({
            url: "/api/reservation/paymentsUpdate",
            type: "PUT",
            data: JSON.stringify(jsonData),
            dataType: "text",
            contentType: "application/json",
            success: function (jsonData) {
                alert("결제 완료")
                console.log(jsonData);
            },
            error(error) {
                console.dir(error)
            }
        });
    }

});