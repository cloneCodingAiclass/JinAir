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

    $('.email_modal').hide();
    $("input:radio[name='find']").click(function(){
        let check = $("input:radio[name='find']:checked").val();

        if(check == '아이디 찾기'){
            $('.modal_main_id').css('display', 'block');
            $('.modal_main_pw').css('display', 'none');
        }else if(check == '비밀번호 찾기'){
            $('.modal_main_id').css('display', 'none');
            $('.modal_main_pw').css('display', 'block');
        }
    });
    
    $('.confirm_email').click(function(){
        $('.email_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(){
            $('.email_modal').fadeOut(200);
            $('body').css('overflow', '');
        })
    });

    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'findid'){
        $("input:radio[name='find']:radio[value='아이디 찾기']").prop('checked', true);
        $('.modal_main_id').css('display', 'block');
        $('.modal_main_pw').css('display', 'none');
    }else if(directId == 'findpw'){
        $("input:radio[name='find']:radio[value='비밀번호 찾기']").prop('checked', true);
        $('.modal_main_id').css('display', 'none');
        $('.modal_main_pw').css('display', 'block');
    }else{
        $('.modal_main_id').css('display', 'block');
        $('.modal_main_pw').css('display', 'none');
    }
});