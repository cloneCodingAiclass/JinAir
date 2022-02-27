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

  $(".arrow_img").on('click', function () {
    $(".arrow_img").css("display", "none");
    $(".trip_info2").slideDown(200);
    $(".arrow_up_img").css("display", "block");
  })
  $(".arrow_up_img").on('click', function () {
    $(".arrow_img").css("display", "block");
    $(".arrow_up_img").css("display", "none");
    $(".trip_info2").slideUp(200);
  })

  $("select .KRW").on('select', function () {
    $("butt_ok").css("background-color", "#BDD600");
  })
  $("select .USD").on('click', function () {
    $("butt_ok").css("background-color", "#BDD600");
  })

  $(".list1_wrap").on("click", function () {
    $(".list2_wrap").focus();
  })

  /*화면 구성 */

  $(".service_menu .menu1img").css("display", "none");
  $(".service_menu .menu1_invert").css("display", "block");

  $(".service_menu .menu2img").css("display", "block");
  $(".service_menu .menu2_invert").css("display", "none");

  $(".service_menu .menu3img").css("display", "block");
  $(".service_menu .menu3_invert").css("display", "none");


  $(".service_content_wrap1").css("display", "blcok");
  $(".service_content_wrap2").css("display", "none");
  $(".service_content_wrap3").css("display", "none");
  $("service_content_wrap3 section1").css("background", "")
  $("service_content_wrap3 section1")

  $(".service_menu .menu1").on("click", function () {
    $(".service_content_wrap1").css("display", "block");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "none");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");

    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "none");
    $(".service_menu .menu1_invert").css("display", "block");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");

    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");
    $(".seat_info").css("z-index", "20");

  })
  $(".service_menu .menu2").on("click", function () {
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "block");
    $(".service_content_wrap3").css("display", "none");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "none");
    $(".service_menu .menu2_invert").css("display", "block");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");
  })
  $(".select_seat_wrap2 .select_comp").on("click", function () {
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "block");
    $(".service_content_wrap3").css("display", "none");
    $(".service_menu .menu2").css("color", "white");
    $(".service_menu .menu2").css("background-color", "#661e43");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "none");
    $(".service_menu .menu2_invert").css("display", "block");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");
  })

  $(".service_menu .menu3").on("click", function () {
    $("#modal_agree_wrap").hide();
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "block");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");
    $("table .detail").css("display", "none");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "none");
    $(".service_menu .menu3_invert").css("display", "block");
  })

  $(".select_baggage_wrap .select_comp").on("click", function () {
    $("#modal_agree_wrap").hide();
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "block");
    $(".service_menu .menu3").css("color", "white");
    $(".service_menu .menu3").css("background-color", "#661e43");
    $("table .detail").css("display", "none");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "none");
    $(".service_menu .menu3_invert").css("display", "block");
  })


  /*좌석안내 모달창 */
  $(".seat_info_wrap .info").click(function () {
    $(".modal_seat_info_wrap").fadeIn(200);

    $(".modal_seat_info_wrap .close").click(function () {
      $(".modal_seat_info_wrap").fadeOut(200);
    })
  })


  /*좌석안내 모달창 끝 */
  /*구간선택 */

  $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#661e43");
  $(".service_content_wrap1 .service_title1 .section2").css("color", "#fff");
  $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
  $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

  $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
  $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

  $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
  $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");

  $(".service_content_wrap1 .select_seat_wrap1").css("display", "flex");
  $(".service_content_wrap1 .select_seat_wrap2").css("display", "none");



  /*구간선택1 */
  $(".service_content_wrap1 .service_title1 .section1").on('click', function () {
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");
    $(".seat_info").css("z-index", "20");

    $(this).css("background-color", "#661e43");
    $(this).css("color", "#fff");
    $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
    $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

    $(".select_seat_wrap1").css("display", "flex");
    $(".select_seat_wrap2").css("display", "none");
    $(".passenger_info_wrap1").css("display", "block");
    $(".passenger_info_wrap2").css("display", "none");
    $(".seat_info_wrap1").css("display", "block");
    $(".seat_info_wrap2").css("display", "none");
  })
  /*구간선택1 끝*/

  /*구간선택2 */
  $(".service_content_wrap1 .service_title1 .section2").on('click', function () {
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");

    $(this).css("background-color", "#661e43");
    $(this).css("color", "#fff");
    $(".service_title1 .section1").css("background-color", "#EBEBEB");
    $(".service_title1 .section1").css("color", "#444");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "inline-block");
    $(".select_seat_wrap1").css("display", "none");
    $(".select_seat_wrap2").css("display", "flex");
    $(".passenger_info_wrap1").css("display", "none");
    $(".passenger_info_wrap2").css("display", "block");
    $(".seat_info_wrap1").css("display", "none");
    $(".seat_info_wrap2").css("display", "block");
  })

  $(".select_seat_wrap1 .select_comp").on("click", function () {
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");

    $(".service_title1 .section1").css("background-color", "#EBEBEB");
    $(".service_title1 .section1").css("color", "#444");
    $(".service_title1 .section2").css("background-color", "#661e43");
    $(".service_title1 .section2").css("color", "#fff");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "inline-block");
    $(".select_seat_wrap1").css("display", "none");
    $(".select_seat_wrap2").css("display", "flex");
    $(".passenger_info_wrap1").css("display", "none");
    $(".passenger_info_wrap2").css("display", "block");
    $(".seat_info_wrap1").css("display", "none");
    $(".seat_info_wrap2").css("display", "block");
  })
  /*구간선택2 */
  /*구간선택 끝 */

  /*스크롤시 따라다니는 영역 */
  $(window).scroll(function () {
    let x = $(".seat_info_wrap1").offset().left + 30;
    let i = $(".seat_info_wrap2").offset().left + 30;
    console.log($(".select_comp").offset().left)

    if (x == 30) {
      $(".seat_map").css("top", "0px");
      $(".seat_info_wrap").css("top", "0px");

      if ($(window).scrollTop() > $(".service_title1").offset().top - 115 && $(window).scrollTop() < 1900) {
        $(".move_map").css("position", "fixed");
        $(".move_map").css("top", "239px");
        $(".seat_info").css("position", "fixed");
        $(".seat_info").css("top", "239px");
        $(".seat_info").css("left", i);
        $(".seat_info").css("z-index", "20");
        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");

      } else if ($(window).scrollTop() > 1895) {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "1680px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "5px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "absolute");
        $(".select_comp").css("left", "20%");
      } else {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      }
    } else {
      $(".seat_map").css("top", "0px");
      $(".seat_info_wrap").css("top", "0px");
      if ($(window).scrollTop() > $(".service_title1").offset().top - 115 && $(window).scrollTop() < 1900) {
        $(".move_map").css("position", "fixed");
        $(".move_map").css("top", "239px");
        $(".seat_info").css("position", "fixed");
        $(".seat_info").css("top", "239px");
        $(".seat_info").css("left", x);
        $(".seat_info").css("z-index", "20");
        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      } else if ($(window).scrollTop() > 1895) {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "1680px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "1680px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "absolute");
        $(".select_comp").css("left", "20%");
      }
      else {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      }
    }
  });

  /*스크롤시 미니맵 이동 */
  $(window).scroll(function () {
    let a = $(window).scrollTop();  //스크롤 위치
    let b = $(".location").offset().top; //지도 가리키는 영역 위치

    //좌석선택영역 높이 : 2250px;
    //지도 높이 : 400px
    //지도 가르키는 영역 높이 : 160px

    let x = $(".move_map").height();
    // if($(window).scrollTop() >  $(".seat_map").offset().top+5) {
    //     $(".location").css("height", "160px");
    // } else {
    //     $(".location").css("heigth", "100px");
    // }
    if ($(window).scrollTop() < 1900) {
      if (a / ($(".location").height() * b < 400)) {
        $(".location").css("top", a / (2250 / x));
      }
    }
  })
  /*스크롤시 미니맵 이동 끝*/
  /*스크롤시 따라다니는 영역 끝*/
  /*수하물 선택 구간 */

  $(".bot_bagg_price1 .passenger_info_wrap .cur").css("display", "none");
  $(".bot_bagg_price1 .passenger_info_wrap .price").text(" ");
  $(".bot_bagg_price2 .passenger_info_wrap .cur").css("display", "none");
  $(".bot_bagg_price2 .passenger_info_wrap .price").text(" ");
  $(".seat_info_wrap .seat_box .cur, .seat_box .seat_name").css("display", "block");

  $('#bagg1').change(function () {
    $(".select_bagg_price1 .select_bagg").text($(this).val());
    $(".bot_bagg_price1 .cur").css("display", "inline-block");
    $(".bot_bagg_price1 .price").text(" ");
    if ($(this).val() == "5KG(+KRW 8,000)") {
      $(".bot_bagg_price1 .price").text("8,000");
    } else if ($(this).val() == "10KG(+KRW 16,000)") {
      $(".bot_bagg_price1 .price").text("16,000");
    } else if ($(this).val() == "15KG(+KRW 24,000)") {
      $(".bot_bagg_price1 .price").text("24,000");
    } else if ($(this).val() == "20KG(+KRW 32,000)") {
      $(".bot_bagg_price1 .price").text("32,000");
    } else {
      $(".bot_bagg_price1 .cur").css("display", "none");
      $(".bot_bagg_price1 .price").text(" ");
    }
  });

  $('#bagg2').change(function () {
    $(".select_bagg_price2 .select_bagg").text($(this).val());
    $(".bot_bagg_price2 .cur").css("display", "inline-block");
    $(".bot_bagg_price2 .price").text(" ");
    if ($(this).val() == "5KG(+KRW 8,000)") {
      $(".bot_bagg_price2 .price").text("8,000");
    } else if ($(this).val() == "10KG(+KRW 16,000)") {
      $(".bot_bagg_price2 .price").text("16,000");
    } else if ($(this).val() == "15KG(+KRW 24,000)") {
      $(".bot_bagg_price2 .price").text("24,000");
    } else if ($(this).val() == "20KG(+KRW 32,000)") {
      $(".bot_bagg_price2 .cur").css("display", "inline-block");
      $(".bot_bagg_price2 .price").text("32,000");
    } else {
      $(".bot_bagg_price2 .cur").css("display", "none");
      $(".bot_bagg_price2 .price").text(" ");
    }
  });

  /*수하물 선택 구간 끝 */

  /*보험 선택 구간 */

  $(".insurance_price .price").text("0");
  $('#select_product').prop('disabled', true);

  $("#check_ins").change(function () {
    if ($("#check_ins").is(":checked")) {
      $(".insurance_price .price").text("3,660");
      $('#select_product').attr('disabled', false);
      // prop('readonly', true);
    } else {
      $('#select_product').attr("disabled", true);
      $(".insurance_price .price").text("0");
    }
  })


  $('#select_product').change(function () {
    $(".bot_bagg_price2 .price").text(" ");
    if ($(this).val() == "실속형") {
      $(".insurance_price .price").text("1,970");
    } else if ($(this).val() == "표준형") {
      $(".insurance_price .price").text("3,660");
    } else if ($(this).val() == "고급형") {
      $(".insurance_price .price").text("7,040");
    }
  });

  $(".ins_join_butt").on("click", function () {
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
      $("#modal_service_app_wrap").fadeIn();
      $(".modal_join_ins").fadeIn();
    }
    else {
    }
  });

  /*보험 선택 구간 끝*/

  /*무료 수하물/기내식 안내*/
  $(".modal_content1").css("display", "block");
  $(".modal_content2").css("display", "none");
  $(".modal_menu_wrap > .menu1").css("background", "#661e43");
  $(".modal_menu_wrap > .menu1").css("color", "#fff");

  $(".modal_menu_wrap > .menu2").css("background", "#fff");
  $(".modal_menu_wrap > .menu2").css("color", "#444");

  $(".modal_menu_wrap .menu2").on("click", function () {
    $(".modal_menu_wrap > .menu1").css("background", "#fff");
    $(".modal_menu_wrap > .menu1").css("color", "#444");
    $(".modal_menu_wrap > .menu2").css("background", "#661e43");
    $(".modal_menu_wrap > .menu2").css("color", "#fff");
    $(".modal_content1").css("display", "none");
    $(".modal_content2").css("display", "block");
  })

  $(".modal_menu_wrap .menu1").on("click", function () {
    $(".modal_menu_wrap > .menu2").css("background", "#fff");
    $(".modal_menu_wrap > .menu2").css("color", "#444");
    $(".modal_menu_wrap > .menu1").css("background", "#661e43");
    $(".modal_menu_wrap > .menu1").css("color", "#fff");
    $(".modal_content1").css("display", "block");
    $(".modal_content2").css("display", "none");
  })

  /*무료 수하물/기내식 안내 끝*/

  /*보험가입 페이지*/
  $(".service_content_wrap3 .service_title1 .section1").css("background-color", "#661e43");
  $("service_content_wrap3 .service_title1 .section1").css("color", "#fff");

  $(".service_content_wrap3 .service_title1 .section2").css("background-color", "#661e43");
  $("service_content_wrap3 .service_title1 .section2").css("color", "#fff");

  $(".service_content_wrap3 .service_title1 .section2").off('click');
  $(".service_content_wrap3 .service_title1 .section1").off('click');

  $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
  $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
  $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
  $(".insurance_menu_wrap .ins_menu2").css("color", "#444");

  $(".insContent1").css("display", "block");
  $(".insContent2").css("display", "none");

  $(".insurance_price .next_butt").on("click", function () {
    if ($("#check_ins").is(":checked")) {
      $(".insurance_menu_wrap .ins_menu1").css("background-color", "#fff");
      $(".insurance_menu_wrap .ins_menu2").css("background-color", "#661e43");
      $(".insurance_menu_wrap .ins_menu1").css("color", "#444");
      $(".insurance_menu_wrap .ins_menu2").css("color", "#fff");

      $(".insContent1").css("display", "none");
      $(".insContent2").css("display", "block");
    } else {
      $("#modal_agree_wrap").fadeIn();
    }
  })
  $("#modal_agree_wrap input").on("click", function () {
    $("#modal_agree_wrap").fadeOut();
  })

  $(".insContent2 .ins_before_butt").on("click", function () {
    $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
    $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
    $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
    $(".insurance_menu_wrap .ins_menu2").css("color", "#444");

    let offset = $(".insurance_menu_wrap .ins_menu1").offset();
    $("html body").animate({ scrollTop: offset.top }, 2000);

    $(".insContent1").css("display", "block");
    $(".insContent2").css("display", "none");
  })




  /*보험가입 페이지 끝 */

  /*좌석 선택 */

  $(".seat_P1, .seat_P2").css("visibility", "hidden");

  $(".passenger_info_wrap1 p.select_seat_num1 span.close").on('click', function () {
    $(".passenger_info_wrap1 .seat_num").text("");
    $(".passenger_info_wrap1 .seat_number").text("");
    $(".passenger_info_wrap1 .price").text("");
    $(".seat_P1").css("visibility", "hidden");
    $('.seat_sel').css('pointer-events', 'auto');
    if ($('.SSC').is(':checked')) {
      $('.SSC').prop("checked", false);
      $('.SSC').attr("disabled", false);
    };
  });
  $(".passenger_info_wrap2 p.select_seat_num2 span.close").on('click', function () {
    $(".passenger_info_wrap2 .seat_num").text("");
    $(".passenger_info_wrap2 .seat_number").text("");
    $(".passenger_info_wrap2 .price").text("");
    $(".passenger_info_wrap2 .price").text("");
    $(".seat_P2").css("visibility", "hidden");
    $('.seat_sel').css('pointer-events', 'auto');
    if ($('.SSC2').is(':checked')) {
      $('.SSC2').prop("checked", false);
      $('.SSC2').attr("disabled", false);
    };
  });

  let price1 = '9,000';
  let price2 = '5,000';
  let price3 = '9,000';
  let price4 = '7,000';
  let price5 = '3,000';
  let price6 = '1,000';

  $(".select_seat_wrap .box1").siblings().text(price1);
  $(".select_seat_wrap .box2").siblings().text(price2);
  $(".select_seat_wrap .box3").siblings().text(price3);
  $(".select_seat_wrap .box4").siblings().text(price4);
  $(".select_seat_wrap .box5").siblings().text(price5);
  $(".select_seat_wrap .box6").siblings().text(price6);
  $(".select_seat_wrap .box7").siblings().text("");


  $('.SSC').click(function () {
    if ($(this).is(':checked')) {
      $(".passenger_info_wrap1 .select_seat_num1 .seat_num1").html($(this).val());
      $(".passenger_info_wrap1 .select_seat_price .price").html($(this).next().text());
      $(".passenger_info_wrap1 .seat_P1").css("display", "block");
      $('.passenger_info_wrap1 .seat_sel').css('pointer-events', 'auto');
      $('.SSC').not(this).attr("disabled", true);
      $(".seat_P1").css("visibility", "visible");
      console.log($(".seat_P1").text());

      if ($(this).next().hasClass("box7") === true) {
        $(".passenger_info_wrap1 .select_seat_num1 .seat_num1").html("");
        $(".passenger_info_wrap1 .select_seat_price .price").html($(this).next().text());
        $(".seat_P1").css("visibility", "hidden");
        $(this).css("disabled", false);
      }
    } else {
      $(".passenger_info_wrap1 .select_seat_num1 .seat_num1").html("");
      $(".passenger_info_wrap1 .select_seat_price .price").html("");
      $(".seat_P1").css("visibility", "hidden");

      $('.SSC').not(this).attr("disabled", false);
    }
  });

  $('.SSC2').click(function () {
    if ($('.SSC2').is(':checked')) {
      $(".passenger_info_wrap2 .select_seat_num2 span.seat_num2").html($(this).val());
      $(".seat_P2").css("display", "block");

      console.log($(".seat_P2").text());
      $(".passenger_info_wrap2 .price").html($(this).next().text());
      $('.SSC2').not(this).attr("disabled", true);
      $(".seat_P2").css("visibility", "visible");

      if ($('.SSC2').next().hasClass("box7") === true) {
        $(".passenger_info_wrap2 .select_seat_price .price").html($(this).next().text());
        $(".passenger_info_wrap2 .select_seat_price .seat_P2").css("display", "none");
        $(this).css("disabled", false);
        // $(".seat_P2").css("visibility", "hidden");
      }
    } else {
      $(".passenger_info_wrap2 .select_seat_num2 span.seat_num2").html("");

      $(".passenger_info_wrap2 .select_seat_price .price").html("");
      $(".passenger_info_wrap2 .select_seat_price .seat_P2").css("display", "none");
      $(".seat_P2").css("visibility", "hidden");
      $('.SSC2').not(this).attr("disabled", false);
    }
  });



  // $(".select_seat1 .box1").on("click", function() {
  //     $('.select_seat1 .seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background1');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })

  // $(".select_seat1 .box2").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background2');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })



  // $(".select_seat2 .box1").on("click", function() {
  //     $('.select_seat1 .seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background1');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })




  // $(".select_seat1 .box2").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background2');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })
  // $(".select_seat2 .box2").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background2');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })


  // $(".select_seat1 .box3").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background3');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })
  // $(".select_seat2 .box3").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background3');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })



  // $(".select_seat1 .box4").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background4');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })
  // $(".select_seat2 .box4").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background4');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })

  // $(".select_seat1 .box5").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background5');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })
  // $(".select_seat2 .box5").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background5');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })

  // $(".select_seat1 .box6").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap1 .seat_num").html($(this).html());
  //     $(this).toggleClass('background6');
  //     $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap1 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap1 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap1 .seat_num").html("");
  //         $(".passenger_info_wrap1 .seat_P").css("display", "none");
  //     })
  // })
  // $(".select_seat2 .box6").on("click", function() {
  //     $('.seat_sel').not(this).css('pointer-events', 'none');
  //     $(".passenger_info_wrap2 .seat_num").html($(this).html());
  //     $(this).toggleClass('background6');
  //     $(".passenger_info_wrap2 .select_seat_price .price").html("9,000");
  //     $(".passenger_info_wrap2 .seat_P").css("display", "block");
  //     $(this).on('click', function() {
  //         $('.seat_sel').css('pointer-events', 'auto');
  //         $(".passenger_info_wrap2 .select_seat_price .price").html("");
  //         $(".passenger_info_wrap2 .seat_num").html("");
  //         $(".passenger_info_wrap2 .seat_P").css("display", "none");
  //     })
  // })


  /*좌석 선택 끝 */


  /*하단 총액 모달창 */
  $("#info_table_wrap").css("overflow", "hidden");
  $("#info_table_wrap").css("overflow-x", "none");

  $(".img").on('click', () => {
    $(".img").css("display", "none");
    $(".img2").css("display", "block");
    $("#modal_totP_wrap").fadeIn();
    $(".fix_modal").fadeIn();
  })
  $(".close").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })
  $(".img2").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })


  $(".plus_1").on('click', () => {
    $("#info_table_wrap").css("overflow", "scroll");
    $("#info_table_wrap").css("overflow-x", "hidden");
    $("#info_table_wrap").animate({ scrollTop: 300 }, 600);
    $(".plus_1").css("display", "none");
    $(".minus_1").css("display", "inline-block");
  })
  $(".minus_1").on('click', () => {
    $("#info_table_wrap").css("overflow", "hidden");
    $("#info_table_wrap").css("overflow-x", "none");
    $(".plus_1").css("display", "inline-block");
    $(".minus_1").css("display", "none");
  })


  $(window).scroll(function () {
    let y = $(".fix_bott_wrap").offset().top - 650;
    let h = $(document).scrollTop();
    if (window.pageYOffset <= y) {
      $(".fix_bott").css("position", "fixed");
      $(".fix_bott").css("bottom", "0px");
      $("#modal_totP_wrap").css("position", "fixed");
      $("#modal_totP_wrap").css("top", "-100px");
    } else {
      $(".fix_bott").css("position", "absolute");
      $("#modal_totP_wrap").css("position", "absolute");
      $("#modal_totP_wrap").css("top", y - 280);
    }
  });

  $(window).scroll(function () {
    let y = $(".contentswrap").offset().top;
    let h = $(document).scrollTop();

    if (h > y) {
      $(".fix_trip_info").css("position", "fixed");
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "absolute");
    } else {
      $(".fix_trip_info").css("position", "absolute");
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "fixed");
    }
  })
  /*하단 총액 모달창 끝 */
});


$(() => {
  document.getElementById('end_date').valueAsDate = new Date('2022', '02', '20');
});

$(() => {
  $('#modal_free_wrap').hide();
  $(".service_title2 .section1").on('click', () => {
    $("#modal_free_wrap").fadeIn();
    $("body").css("overflow", "hidden");
  })
  $(".modal_free_wrap .close").on('click', () => {
    $("#modal_free_wrap").fadeOut();
    $("body").css("overflow", "scroll");
  })
})

/* 비상구 좌석 유의사항안내 모달창 */
$(() => {
  $('#modal_notice_wrap').hide();
  $(".select_seat .exit_seat").on('click', () => {
    if ($(".exit_seat").is(":checked")) {
      $("#modal_notice_wrap").fadeIn();
      $("body").css("overflow", "hidden");
      $("#checkbox_m").prop("checked", false);
      $('#modal_notice_wrap .modal_content_wrap').animate({//모달띄울 때 스크롤위치 위로 고정
        scrollTop: 0
      }, 50);
    }
  })
  $(".modal_notice_wrap .close").on('click', () => {
    $("#modal_notice_wrap").fadeOut();
    $("body").css("overflow", "scroll");
    $(".SSC, .SSC2").prop("checked", false);

    $(".passenger_info_wrap .select_seat_num .seat_num").html("");
    $(".passenger_info_wrap .select_seat_price .price").html("");
    $(".seat_P").css("display", "none");
    $('.SSC, .SSC2').attr("disabled", false);

  })

  $("#modal_notice_wrap .butt_ok").on('click', () => {
    if ($("#checkbox_m").is(":checked")) {
      $("#modal_notice_wrap").fadeOut();
    }
    $("body").css("overflow", "scroll");
  })
})


$(() => {
  $(".detail .close").on('click', () => {
    $("table .detail").fadeOut();
  })
})


/*보험 가입 모달창 */

$(() => {
  $("#modal_insurance_info_wrap").hide();

  $("#agree_check1").on("click", function () {
    $("#modal_insurance_info_wrap").fadeIn();
    if ($(".nameBox .checkbox").is(":checked")) {
      $(this).prop("checked", true);
    } else {
      $(this).prop("checked", false);
    }
  })


  $(".insContent2 .noti").on("click", function () {
    $("#modal_insurance_info_wrap").fadeIn();
  })
  $("#modal_insurance_info_wrap .title .close").on("click", function () {
    $("#modal_insurance_info_wrap").fadeOut();
  })

  $("#modal_insurance_info_wrap .butt_ok").on("click", function () {
    if ($(".nameBox .checkbox").is(":checked")) {
      $("#modal_insurance_info_wrap").fadeOut();
      $("#agree_check1").prop("checked", true);
    } else {
      $("#modal_insurance_info_wrap .modal_agree2").fadeIn();
    }
  })

  $("#modal_insurance_info_wrap .modal_agree2 .butt input").on("click", function () {
    $("#modal_insurance_info_wrap .modal_agree2").fadeOut();
  })

  $(".detail .close").on("click", function () {
    $("table .detail").css("display", "none");
  })

  $("table .cursor1").on("click", function () {
    $("table .detail1").css("display", "block");
    $("table .detail").not("table .detail1").css("display", "none");
  })

  $("table .cursor2").on("click", function () {
    $("table .detail2").css("display", "block");
    $("table .detail").not("table .detail2").css("display", "none");
  })

  $("table .cursor3").on("click", function () {
    $("table .detail3").css("display", "block");
    $("table .detail").not("table .detail3").css("display", "none");
  })

  $("table .cursor4").on("click", function () {
    $("table .detail4").css("display", "block");
    $("table .detail").not("table .detail4").css("display", "none");
  })

  $("table .cursor5").on("click", function () {
    $("table .detail5").css("display", "block");
    $("table .detail").not("table .detail5").css("display", "none");
  })

  $("table .cursor6").on("click", function () {
    $("table .detail6").css("display", "block");
    $("table .detail").not("table .detail6").css("display", "none");
  })

  $("table .cursor7").on("click", function () {
    $("table .detail7").css("display", "block");
    $("table .detail").not("table .detail7").css("display", "none");
  })


  $("table .cursor8").on("click", function () {
    $("table .detail8").css("display", "block");
    $("table .detail").not("table .detail8").css("display", "none");
  })

  $("table .cursor9").on("click", function () {
    $("table .detail9").css("display", "block");
    $("table .detail").not("table .detail9").css("display", "none");
  })

  $("table .cursor10").on("click", function () {
    $("table .detail10").css("display", "block");
    $("table .detail").not("table .detail10").css("display", "none");
  })

  $("table .cursor11").on("click", function () {
    $("table .detail11").css("display", "block");
    $("table .detail").not("table .detail11").css("display", "none");
  })

  $("table .cursor12").on("click", function () {
    $("table .detail12").css("display", "block");
    $("table .detail").not("table .detail12").css("display", "none");
  })

  $("table .cursor13").on("click", function () {
    $("table .detail13").css("display", "block");
    $("table .detail").not("table .detail13").css("display", "none");
  })

  $("table .cursor14").on("click", function () {
    $("table .detail14").css("display", "block");
    $("table .detail").not("table .detail14").css("display", "none");
  })

  $("table .cursor15").on("click", function () {
    $("table .detail15").css("display", "block");
    $("table .detail").not("table .detail15").css("display", "none");
  })

  $("table .cursor16").on("click", function () {
    $("table .detail16").css("display", "block");
    $("table .detail").not("table .detail16").css("display", "none");
  })

  $("table .cursor17").on("click", function () {
    $("table .detail17").css("display", "block");
    $("table .detail").not("table .detail17").css("display", "none");
  })

  $("table .cursor18").on("click", function () {
    $("table .detail18").css("display", "block");
    $("table .detail").not("table .detail18").css("display", "none");
  })

  $(".nameBox .checkbox").change(function () {
    if ($(".nameBox .checkbox").is(':checked')) {
      $(".nameBox").css("background-color", "rgb(0, 173, 239)");
      $(".nameBox").css("color", "#fff");
    } else {
      $(".nameBox").css("background-color", "#fff");
      $(".nameBox").css("color", "rgb(0, 173, 239)");
    }
  })
})


/*보험 가입 모달창 끝 */

/*여행자보험 가입규약 및 개인정보 제3자 제공 동의 모달창*/
$(() => {
  $("#modal_agreement_wrap").hide();
  $(".modal_agree2").hide();

  $("#agree_check2").on("click", function () {
    $("#modal_agreement_wrap").fadeIn();
    if ($("#agree1").is(":checked") && $("#agree2").is(":checked")) {
      $(this).prop("checked", true);
    } else {
      $(this).prop("checked", false);
    }
  })
  $(".insContent2 .agree").on("click", function () {
    $("#modal_agreement_wrap").fadeIn();
  })
  $("#modal_agreement_wrap .close").on("click", function () {
    $("#modal_agreement_wrap").fadeOut();
  })

  $(".butt_agree").on("click", function () {
    if ($("#agree1").is(":checked") && $("#agree2").is(":checked")) {
      $("#modal_agreement_wrap").fadeOut();
      $("#agree_check2").prop("checked", true);
    } else {
      $("#modal_agreement_wrap #modal_agree").fadeIn();
    }
  })
  $(".modal_agree2 .butt").on("click", function () {
    $("#modal_agree").fadeOut();
  })
  $(".butt_canc, title close").on("click", function () {
    $("#modal_agreement_wrap").fadeOut();
  })

})
/*여행자보험 가입규약 및 개인정보 제3자 제공 동의 모달창 끝*/

$(() => {
  $(".fix_next_butt, .menu4").on("click", () => {
    $("#modal_service_app_wrap").fadeIn();
  });
})

$(() => {
  $("#modal_service_app_wrap").hide();
  $(".modal_join_ins").hide();
  $("#addmodal_autoCheck_noti").hide();
  $("#modal_conf_check").hide();



  $(".ins_join_butt").on("click", () => {
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
      $("#modal_service_app_wrap").fadeIn();
    }
    else {
      $("#modal_conf_check").fadeIn();
    }
  });

  $("#modal_conf_check input.cursor").on("click", () => {
    $("#modal_conf_check").fadeOut();
  })
  $("#modal_service_app_wrap .add_modal").on("click", () => {
    $("#addmodal_autoCheck_noti").fadeIn();
    $("#modal_service_app_wrap").fadeOut();
  })

  $("#addmodal_autoCheck_noti .add_modal_butt_ok, #addmodal_autoCheck_noti .add_modal_butt_canc, #addmodal_autoCheck_noti .tit_close").on("click", () => {
    $("#addmodal_autoCheck_noti").fadeOut();
    $("#modal_service_app_wrap").fadeIn();
    $("auto_check").prop(":checked", false);
  })

  $("#modal_service_app_wrap .modal_butt_ok").on("click", () => {
    if ($("#auto_check").is(":checked")) {
      $(location).attr("href", "payReservation.html");
    } else {

    }
  })

  $(".modal_join_ins .butt input").on("click", () => {
    $(".modal_join_ins").fadeOut();
  });

  $("#modal_service_app_wrap .modal_butt_canc, #modal_service_app_wrap .tit_close").on("click", () => {
    $("#modal_service_app_wrap").fadeOut();
  })

})


// 수정 모달 창 ***********************
$(() => {
  $(".trip_edit_butt").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "block");
    $("body").css("overflow", "hidden");
  });
  $(".modal_edit_close_btn").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "none");
    $("body").css("overflow", "");
  });
});

$(() => {
  $("#round").on("click", function () {
    $(".round_wrap").css("display", "block");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#oneway").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "block");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#multi").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "block");
    $(".edit_jour_wrap").css("height", "520px");
  });
});

//person-layer
$(() => {
  $(".person_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".person_down_img").css({ display: "none" });
    $(".person_up_img").css({ display: "inline-block" });
    $(".person_pop_layer").slideDown("fast");

    // 예약 관련 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img").css({ display: "inline-block" });
    $(".go_up_img").css({ display: "none" });
    $(".go_layer").slideUp(50);

    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img2").css({ display: "inline-block" });
    $(".go_up_img2").css({ display: "none" });
    $(".go_layer2").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_up_img").css({ display: "none" });
    $(".arrive_layer").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img2").css({ display: "inline-block" });
    $(".arrive_up_img2").css({ display: "none" });
    $(".arrive_layer2").slideUp(50);
  });
});

// go-layer
$(() => {
  // 옵션1
  $(".go_layerbtn").on("click", function (e) {
    e.stopPropagation();

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지1 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".go_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt2").addClass("on");
    $(".go_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지2 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);

    // 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
});

// arrive-layer
$(() => {
  // 옵션 1
  $(".arrive_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt").addClass("on");
    $(".arrive_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지1 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".arrive_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt2").addClass("on");
    $(".arrive_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지2 레이어 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    // 다구간 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
  $(".person_pop_layer").on("click", function (e) {
    e.stopPropagation();
  });
});

// 화면 클릭
$(() => {
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 사람 수 선택 닫기
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });
});

function fnSetPaxCountDown(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  switch (strPaxType) {
    case "ADULT":
      --iAdultCount;
      if (iAdultCount >= 0) {
        --iPaxCount;
      }

      if (iInfantCount > iAdultCount) {
        iInfantCount = iAdultCount;
      }

      if (iAdultCount <= 0) {
        iAdultCount = 0;
        iInfantCount = 0;
      }
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
    case "CHILD":
      --iChildCount;
      if (iChildCount >= 0) {
        --iPaxCount;
      }
      if (iChildCount <= 0) {
        iChildCount = 0;
      }

      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      --iInfantCount;
      if (iInfantCount <= 0) {
        iInfantCount = 0;
      }

      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function fnSetPaxCountUp(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  // Count 증감
  switch (strPaxType) {
    case "ADULT":
      ++iAdultCount;
      ++iPaxCount;
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      break;
    case "CHILD":
      ++iChildCount;
      ++iPaxCount;
      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      ++iInfantCount;
      if (iInfantCount > iAdultCount) {
        alert("소아는 성인을 넘을 수 없음");
        break;
      }
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function submit() {

  var
    iAdultCount = parseInt($('.round_wrap').find('strong[name=adultPaxCnt]').text()), // 성인
    iChildCount = parseInt($('.oneway_wrap').find('strong[name=childPaxCnt]').text()), // 소아
    iInfantCount = parseInt($('.multi_wrap').find('strong[name=infantPaxCnt]').text()); // 유아

  console.log(iAdultCount);
  console.log(iChildCount);
  console.log(iInfantCount)

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount + ' 유아 ' + iInfantCount);
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount);
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 유아 ' + iInfantCount);
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text('소아 ' + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $('.adultPaxCnt').val(iAdultCount);
  $('.childPaxCnt').val(iChildCount);
  $('.infantPaxCnt').val(iInfantCount);


  $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
  $(".person_down_img").css({ "display": "inline-block" });
  $(".person_up_img").css({ "display": "none" });
  $('.person_pop_layer').slideUp(50);


  $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass('on');
  $(".go_layer").slideDown("fast");
}

$(function () {
  $(".infant_modal").hide();
  $(".baby_info_btn").click(function () {
    $(".child_modal").hide();
    $(".infant_modal").fadeIn(200);
    $(".infant_modal").click(function () {
      $(".infant_modal").fadeOut(200);
    });
  });

  $(".child_modal").hide();
  $(".infant_modal").hide();
  $(".child_info_btn").click(function () {
    $(".child_modal").fadeIn(200);
    $(".child_modal").click(function () {
      $(".child_modal").fadeOut(200);
    });
  });
});

function comewhatday() {
  $(".whatday").html("오는날");
}
function gowhatday() {
  $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
  $(".modal_container").fadeIn(200);
  $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
  $(".cal").css({ display: "none" });
  $(".cal2").css({ display: "none" });
  $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
  // 왕복, 편도 출발지 지정
  $(".go_layer")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt").val(str);
      $(".go_layer").slideUp(50);
      $(".arrive_layer").slideDown(100);
      $(".go_select_opt").removeClass("on");
      $(".arrive_select_opt").addClass("on");
      bbb = "y";
    });
  // 왕복, 편도 도착지 지정
  $(".arrive_layer")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt").val(str);
      ccc = "y";
    });
  // 왕복 달력 모달
  $(".go_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("가는날");
    d;
  });
  $(".come_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("오는날");
  });

  // 편도 달력 모달
  $(".go_date2").on("click", function () {
    $(".cal2").css({ display: "flex" });
    $(".whatday").html("가는날");
  });

  // 다구간 출발지 지정
  $(".go_layer2")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt2").val(str);
      $(".go_layer2").slideUp(50);
      $(".arrive_layer2").slideDown(100);
      $(".go_select_opt2").removeClass("on");
      $(".arrive_select_opt2").addClass("on");
      bbb = "y";
    });
  // 다구간 도착지 지정
  $(".arrive_layer2")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt2").val(str);
      ccc = "y";
    });
  // 다구간1 달력 모달
  $(".go_date3").on("click", function () {
    if (bbb == "n" && ccc == "n") {
      departure();
      $(".cal3").css({ display: "none" });
    } else if (bbb == "y" && ccc == "n") {
      arrive();
    } else {
      $(".cal3").css({ display: "flex" });
      $(".whatday").html("가는날");
    }
  });

  // 달력 X 버튼
  $(".x_box").on("click", function () {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
  });

  // 모달모음 확인 버튼
  $(".btn_cancel").on("click", function () {
    $(".modal_container").fadeOut(200);
  });
});

function updateTrip() {
  let person = $("#person_cnt").text();
  let go1 = $("#go_area1").text();
  let arr1 = $("#arr_area1").text();
  let godate = $("#godate").text();

  console.log(go1, arr1, godate);

  $(".person_num").text(person);
  $(".go_default").attr("value", go1);
  $(".arrive_default").attr("value", arr1);
  $(".go_date_default").attr("value", godate);
}
