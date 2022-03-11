'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom": "none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom": "none"});
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
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    });
    $(".point_flex").on('click', function () {
        $(".save_container, .srh_container").css("display", "none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".flex_container").css("display", "block");
    })
    $(".point_srh").on('click', function () {
        $(".save_container, .flex_container").css("display", "none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".srh_container").css("display", "block");
    });
    $('.edit').click(function () {
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_cancel').click(function () {
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
        })
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
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

    if (directId == 'navipoint1') {
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    } else if (directId == 'navipoint2') {
        $(".save_container, .srh_container").css("display", "none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".flex_container").css("display", "block");
    } else if (directId == 'navipoint3') {
        $(".save_container, .flex_container").css("display", "none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".srh_container").css("display", "block");
    } else {
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    }
    // 출발지 도착지 레이어

    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").addClass('close');
        $(".go_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_select_opt").addClass('on');
        $(".go_layer").slideDown("fast");

        // 도착지1 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);
    })

    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").addClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".arrive_select_opt").addClass('on');
        $(".arrive_layer").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);

    });

    $(".go_date_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);

    });
    $(".come_date_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".come_date_layerbtn").addClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".come_date_select_opt").addClass('on');
        $(".come_date_select").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

    });
    $("body").on('click', function (e) {
        e.stopPropagation();

        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);
    })

    let bbb = 'n';
    let ccc = 'n';
    let ddd = 'n';
    let fff = 'n';

    // 포인트 계산 및 발급용
    let tripType = '';
    let weekday = '';
    let go_layer = '';
    let arrive_layer = '';

    $('.go_layer').find('li').find('a').on('click', function (e) {
        e.stopPropagation();
        go_layer = $(this).html();
        $('.go_select_optt').val(go_layer);
        $('.go_layer').slideUp(50);
        $('.arrive_layer').slideDown(100);
        $(".go_select_opt").removeClass('on');
        $(".arrive_select_opt").addClass('on');
        bbb = 'y';
    })
    // 왕복, 편도 도착지 지정
    $('.arrive_layer').find('li').find('a').on('click', function () {
        arrive_layer = $(this).html();
        $('.arrive_select_optt').val(arrive_layer);
        ccc = 'y';
    })
    $('.go_date_select').find('li').find('a').on('click', function () {
        let go_date_select = '';
        go_date_select = $(this).html();
        $('.go_date_select_optt').val(go_date_select);
        ddd = 'y';
        weekday = go_date_select;
    })
    $('.come_date_select').find('li').find('a').on('click', function () {
        let come_date_select = '';
        come_date_select = $(this).html();
        $('.come_date_select_optt').val(come_date_select);
        fff = 'y';
        tripType = come_date_select;
    })
    // 왕복 달력 모달
    $('.go_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        }
    })
    $('.come_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        }
    })
    function departure() {
        $('.modal_container').fadeIn(200);
        $('.moditext').html('출발지 항목을 입력하세요.');
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })
    }
    function arrive() {
        $('.modal_container').fadeIn(200);
        $('.moditext').html('도착지 항목을 입력하세요.');
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })
    }

    // 포인트 차감 로직
    let necessary = '';
    $('.coupon_add').on('click', function (e){
        if(weekday == '평일' && tripType == '편도'){
            necessary = 100;
        }else if(weekday == '평일' && tripType == '왕복'){
            necessary = 200;
        }else if(weekday == '주말' && tripType == '편도'){
            necessary = 150;
        }else if(weekday == '주말' && tripType == '왕복'){
            necessary = 300;
        }else {
            alert('입력 정보를 확인해주세요.');
            e.stopPropagation()
        }

        console.log(necessary);

        if (go_layer == arrive_layer) {
            $('.modal_container').fadeIn(200);
            $('.moditext').html('출발지와 도착지가 같습니다.');
            e.stopPropagation()
        }
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })


    });
});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}