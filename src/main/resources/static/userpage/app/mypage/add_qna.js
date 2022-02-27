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

    $('.btn_agree').click(function(e){
        $('.covid_info').fadeOut(200);  
        $('body').css('overflow', '');        
        e.stopPropagation();  
    });
    $('.close').click(function(e){
        $('.covid_info').fadeOut(200);  
        $('body').css('overflow', '');        
        e.stopPropagation();  
    });
    
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

    let filebox = document.querySelector('.file_box');
    filebox.addEventListener('dragenter', function(e){
    })
    filebox.addEventListener('dragover', function(e){
        e.preventDefault;
        let vaild = e.dataTransfer.types.indexOf('Files') >= 0;
        if(!vaild){        
            this.style.backgroundColor = 'lightred';
        }else{
            this.style.backgroundColor = 'lightgray';
        }
    });
    filebox.addEventListener('dragleave', function(e){
        this.style.backgroundColor = 'white';
    })
    filebox.addEventListener('drop', function(e){
        e.preventDefault;
        this.style.backgroundColor = 'white';

        console.dir(e.dataTransfer);

        let data = e.dataTransfer.files[0];
        console.dir(data);        
    })

    $('#file_add').on('change', function(){
        $('.addfilecontent').css('display', 'block');
        $('.addfilecontenttext').html($(this).val());
    })
    $('.addfilecontentbtn').on('click', function(){
        $('.addfilecontent').css('display', 'none');
        $('.addfilecontenttext').html('');
        $('#file_add').val('');
    })
});

$(function() {
    $(".point_info").click(function(){
        $('.pointInfo_modal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.pointInfo_modal').fadeOut();
        $('body').css('overflow', '');
    });
});

$(function() {
    $(".mkt_info").click(function(){
        $('.mkt_modal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
});

$(function() {
    $(".btnTypeA").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
    $(".btnTypeB").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
});