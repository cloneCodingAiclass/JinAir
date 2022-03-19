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
    let radio2 = $("#person2_0").parents(".passenger_info2");
    borderChange2(radio2);

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
    $("#seat_info1").css("display", "none");
    $("#seat_info2").css("display", "none");
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
    $("#seat_info1").css("display", "none");
    $("#seat_info2").css("display", "block");
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
    if ($(".ins_check").is(":checked")) {
      $(".insurance_menu_wrap .ins_menu1").css("background-color", "#fff");
      $(".insurance_menu_wrap .ins_menu2").css("background-color", "#661e43");
      $(".insurance_menu_wrap .ins_menu1").css("color", "#444");
      $(".insurance_menu_wrap .ins_menu2").css("color", "#fff");
      $(".insContent1").css("display", "none");
      $(".insContent2").css("display", "block");
      console.log("왜도대체왜안되는건덴아ㅣ루나ㅣㅓ둑/눌마.울.안ㄹ" + nameArr);
      for (let i = 0; i < personNumber; i++) {
        console.log("0번째" + nameArr[0]);
        console.log("1번째" + nameArr[1]);
        console.log("2번째" + nameArr[2]);
        if(nameArr[i] != null) {
          str7 += '<div class="nameBox" id="modal_ins_people_' + i + '">'
          str7 += '<input type="checkbox" class="checkbox insCheckBox" id="ins_check_' + i + '"><span>' + nameArr[i] + '</span>'
          str7 += '</div>'
        }
      }  $("#modal_ins_people").html(str7);
      console.log($("#modal_ins_people").html());
    } else {
      $("#modal_agree_wrap").fadeIn();
    }
  })
  $("#modal_agree_wrap input").on("click", function () {
    $("#modal_agree_wrap").fadeOut();
  })

  $(".insContent2 .noti").on("click", function () {
    $("#modal_insurance_info_wrap").fadeIn();

  })
  $("#modal_insurance_info_wrap .title .close").on("click", function () {
    $("#modal_insurance_info_wrap").fadeOut();
    str7 = "";
  })


  $(".insContent2 .ins_before_butt").on("click", function () {
    $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
    $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
    $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
    $(".insurance_menu_wrap .ins_menu2").css("color", "#444");
    str7 = "";
    let offset = $(".insurance_menu_wrap .ins_menu1").offset();
    $("html body").animate({ scrollTop: offset.top }, 2000);
    $(".insContent1").css("display", "block");
    $(".insContent2").css("display", "none");
  })






  /*보험가입 페이지 끝 */

  // 탑승객 수
  let personNumber = 3;
  let str = "";  // 좌석선택 탑승객 1
  let str2 = ""; // 좌석선택 탑승객 2
  let str3 = ""; // 수하물 탑승객
  let str4 = ""; // 수하물 선택
  let str5 = ""; // 보험 탑승객
  let str6 = ""; // 보험 선택
  let str7 = ""; // 모달 보험 가입자 선택

  $("#person_cnt").html("성인 " + personNumber);

  for (let i = 0; i < personNumber; i++) {
    str += "<div class='passenger_info passenger_info1'>"
    str += "<h3>탑승객 " +  Number(i+1) + "</h3>";
    str += "<label for='person_" + i + "' ><img src='/userpage/lib/img/ico-person.png' alt='탑승객'><span class='cursor'>" + '유/영은' + "</span></label>"
    str += "<label for='person_" + i + "'  class='label'><p class='select_seat_num select_seat_num1'>"
    str += "<input type='text' class='seat_num seat_num1 cursor' id='seat_num1_" + i + "' readonly>"
    str += "<span class='close cursor'>x</span>"
    str += "</p>"
    str += "<p class='select_seat_price' id='seat_price1_" + i + "'>"
    str += "<span class='seat_P seat_P1'>KRW</span>"
    str += "<span class='price price1' id='price1_" + i + "'></span>"
    str += "</p>"
    str += "<input type='radio' name='selectPerson' class='checkPerson' id='person_" + i + "'></label>"
    str += "</div>"
  }
  $("#passenger_info_1").html(str);

  for (let i = 0; i < personNumber; i++) {
    str2 += "<div class='passenger_info passenger_info2'>"
    str2 += "<h3>탑승객 " + Number(i+1) + "</h3>";
    str2 += "<label for='person2_" + i + "'><img src='/userpage/lib/img/ico-person.png' alt='탑승객'><span class='cursor'>" + '유/영은' + "</span></label>"
    str2 += "<label for='person2_" + i + "'  class='label'><p class='select_seat_num select_seat_num2'>"
    str2 += "<input type='text' class='seat_num seat_num2' id='seat_num2_" + i + "' readonly>"
    str2 += "<span class='close cursor'>x</span>"
    str2 += "</p>"
    str2 += "<p class='select_seat_price select_seat_price2' id='seat_price2_" + i + "'>"
    str2 += "<span class='seat_P seat_P2'>KRW</span>"
    str2 += "<span class='price price2' id='price2_'" + i + "'></span>"
    str2 += "</p>"
    str2 += "<input type='radio' name='selectPerson2' class='checkPerson2' id='person2_" + i + "'>"
    str2 += "</div>"
  }
  $("#passenger_info_2").html(str2);

  for (let i = 0; i < personNumber; i++) {
    str3 += "<div class='passenger_info' id='passenger_info3_" + i + "'>"
    str3 += "<h3>탑승객 " + Number(i+1) + "</h3>"
    str3 += "<p><img src='/userpage/lib/img/ico-person.png' alt=''><span>유/영은</span></p>"
    str3 += "<p class='section1 section'><img src='/userpage/lib/img/airplane2.png' alt='비행기'>구간1</p>"

    str3 += "<p class='select_bagg_price select_bagg_price1' id = select_bagg_price1_" + i + "'>"
    str3 += "<span class='select_bagg' id='select_bagg1_" + i + "'></span>"
    str3 += "<span class='close cursor' id='bagg_close1_" + i + "'>x</span>"
    str3 += "</p>"
    str3 += "<p class='bot_bagg_price bot_bagg_price1'><span class='cur' id='cur1_" + i + "'>KRW</span><span class='price bagg_price' id='bagg_price1_" + i + "'></span></p>"
    str3 += "<p class='section2 section'><img src='/userpage/lib/img/airplane2.png' alt='비행기'>구간2</p>"

    str3 += "<p class='select_bagg_price select_bagg_price2' id = select_bagg_price2_" + i + "'>"
    str3 += "<span class='select_bagg' id='select_bagg2_" + i + "'></span>"
    str3 += "<span class='close cursor' id='bagg_close2_" + i + "'>x</span>"
    str3 += "</p>"
    str3 += "<p class='bot_bagg_price bot_bagg_price2'><span class='cur' id='cur2_" + i + "'>KRW</span><span class='price bagg_price' id='bagg_price2_" + i + "'></span></p>"
    str3 += "</div>"
  }
  $("#passenger_info_3").html(str3);

  for (let i = 0; i < personNumber; i++) {
    str4 += "<div class='baggage_wrap' id='baggage_wrap" + i + "'>"
    str4 += "<div class='baggage_1'>"
    str4 += "<p class='section1 section'>"
    str4 += "<img src='/userpage/lib/img/airplane2.png' alt='비행기'>구간1(탑승객 " + Number(i+1) + ")</p>"
    str4 += "<select class='selectBagg1' name='bagg1_" + i + "' id='bagg1_" + i + "'>"
    str4 += "<option value=''>초과수하물 추가 선택</option>"
    str4 += "<option value='5KG(+KRW 8,000)'>5KG(+KRW 8,000)</option>"
    str4 += "<option value='10KG(+KRW 16,000)'>10KG(+KRW 16,000)</option>"
    str4 += "<option value='15KG(+KRW 24,000)'>15KG(+KRW 24,000)</option>"
    str4 += "<option value='20KG(+KRW 32,000)'>20KG(+KRW 32,000)</option>"
    str4 += "</select>"
    str4 += "</div>"
    str4 += "<div class='baggage_2'>"
    str4 += "<p class='section2 section'>"
    str4 += "<img src='/userpage/lib/img/airplane2.png' alt='비행기'>구간2(탑승객 " + Number(i+1) + ")</p>"
    str4 += "<select class='selectBagg2' name='bagg2_" + i + "' id='bagg2_" + i + "'>"
    str4 += "<option value=''>초과수하물 추가 선택</option>"
    str4 += "<option value='5KG(+KRW 8,000)'>5KG(+KRW 8,000)</option>"
    str4 += "<option value='10KG(+KRW 16,000)'>10KG(+KRW 16,000)</option>"
    str4 += "<option value='15KG(+KRW 24,000)'>15KG(+KRW 24,000)</option>"
    str4 += "<option value='20KG(+KRW 32,000)'>20KG(+KRW 32,000)</option>"
    str4 += "</select>"
    str4 += "</div>"
    str4 += "</div>"
  }
  str4 += "<input type='button' class='cursor select_comp' value='선택완료'>"
  $("#select_baggage_wrap").html(str4);

  for (let i = 0; i < personNumber; i++) {
    str5 += "<div class='passenger_info' id='passenger_info_ins_" + i + "'>"
    str5 += "<h3>탑승객 " + Number(i+1) + "</h3>"
    str5 += "<p><img src='/userpage/lib/img/ico-person.png' alt=''><span>유/영은</span></p>"
    str5 += "<p class='select_ins_num'>"
    str5 += "<input type='text' class='insuranceNum cursor' id='ins_num_" + i + "' readOnly>"
    // str5 += "<span class='close cursor' id='ins_close_" + i + "'>x</span>"
    str5 += "</p>"
    str5 += "<p class='select_ins_price' id='select_ins_price_" + i + "'>"
    str5 += "<span class='ins_P cur' id='ins_" + i + "'>KRW</span>"
    str5 += "<span class='ins_price' id='ins_price_" + i + "'></span>"
    str5 += "</p>"
    str5 += "</div>"
  }
  $("#passenger_info_wrap_ins").html(str5);

  for (let i = 0; i < personNumber; i++) {
    str6 += '<tr>'
    str6 += '<td class="normal"><label for="check_ins_'+i+'">'
    str6 += '<input type="checkbox" class="ins_check" name="check_ins_'+i+'" id="check_ins_' + i + '"><span id="name' + i + '">' + '유영은' + '</span></label></td>'
    str6 += '<td class="normal">여</td>'
    str6 += '<td class="normal bir_date">'
    str6 += '<input type="text" value="19970924" class="birth" id="ins_birth_' + i + '" readOnly></td>'
    str6 += '<td class="normal">5,000만원</td>'
    str6 += '<td class="normal">1,970</td>'
    str6 += '<td class="normal">7,000만원</td>'
    str6 += '<td class="normal">3,660</td>'
    str6 += '<td class="normal">1억원</td>'
    str6 += '<td class="normal">7,040</td>'
    str6 += '<td class="normal sel_pro">'
    str6 += '<select name="product_' + i + '" class="select_product" id="select_product_' + i + '" disabled>'
    str6 += '<option value="1970">실속형</option>'
    str6 += '<option value="3660" selected>표준형</option>'
    str6 += '<option value="7040">고급형</option>'
    str6 += '</select>'
    str6 += '</td>'
    str6 += '</tr>'
  }
  $("#ins_people").html(str6);

  $(".seat_P1, .seat_P2").css("visibility", "hidden");

  $(".passenger_info_wrap1 p.select_seat_num1 span.close").on('click', function () {
    radio = $(this).parents(".passenger_info1");
    let i = radio.val();
    console.log(radio);
    $('input:checkbox[value="' + i + '"]').prop("checked", false);
    radio.find(".seat_num1").val("");
    radio.find(".price1").text("");
    radio.find(".seat_P1").css("visibility", "hidden");
    radio.find(".checkPerson").val("");
    radio.val("");
    totalChecked--;

  });
  $(".passenger_info_wrap2 p.select_seat_num2 span.close").on('click', function () {
    radio2 = $(this).parents(".passenger_info2");
    let i = radio2.val();
    console.log(radio2);
    $('input:checkbox[value="' + i + '"]').prop("checked", false);
    radio2.find(".seat_num2").val("");
    radio2.find(".price2").text("");
    radio2.find(".seat_P2").css("visibility", "hidden");
    radio2.find(".checkPerson2").val("");
    radio2.val("");
    totalChecked--;
  });

  let price1 = '9,000';let price2 = '5,000';let price3 = '9,000';let price4 = '7,000';let price5 = '3,000';
  let price6 = '1,000';let price7 = "7,000";

  $(".select_seat_wrap .box1").siblings().text(price1);
  $(".select_seat_wrap .box2").siblings().text(price2);
  $(".select_seat_wrap .box3").siblings().text(price3);
  $(".select_seat_wrap .box4").siblings().text(price4);
  $(".select_seat_wrap .box5").siblings().text(price5);
  $(".select_seat_wrap .box6").siblings().text(price6);
  $(".select_seat_wrap .box7").siblings().text("");
  $(".select_seat_wrap .boxPlus").siblings().text(price7);


  let radio;
  let radio2;

  $(".checkPerson").change(function() {
    if($(".checkPerson").is(":checked")) {
      radio = $(this).parents(".passenger_info1");
      borderChange(radio)
    }
  })

  $(".checkPerson2").change(function() {
    if($(".checkPerson2").is(":checked")) {
      radio2 = $(this).parents(".passenger_info2");
      borderChange2(radio2)
    }
  })

  function borderChange(radio) {
    let c = radio.find(".select_seat_num");
    $(".select_seat_num").not(c).css("border", "none");
    c.css("border", "3px solid #661e43");
  }

  function borderChange2(radio2) {
    console.log(radio2)
    let c = radio2.find(".select_seat_num2");
    $(".select_seat_num2").not(c).css("border", "none");
    c.css("border", "3px solid #661e43");
  }

  if ($(".checkPerson").is(":checked") == false) {
    $("#person_0").prop("checked", true)
    radio = $("#person_0").parents(".passenger_info1");
    borderChange(radio)
  }

  if ($(".checkPerson2").is(":checked") == false ) {
    $("#person2_0").prop("checked", true)
    radio2 = $("#person2_0").parents(".passenger_info2");
    borderChange2(radio2)
  }

  if($(".checkPerson").val().length != 0) {
    $("input:radio[name ='selectPerson']:input[value='']").prop("checked", true);
  }

  if($(".checkPerson2").val().length != 0) {
    $("input:radio[name ='selectPerson2']:input[value='']").prop("checked", true);
  }

  for(let i = 0; i < $(".checkPerson").length; i++) {
      console.log("#person_"+i + "");
  }

  for(let i = 0; i < $(".checkPerson2").length; i++) {
      console.log("#person2_"+i + "");
  }

  function changeRadio() {
    console.log("실행됨")
    for(let i = 0; i < $(".checkPerson").length; i++) {
      if ($("#person_" + i + "").val() == 'on' || $("#person_" + i + "").val().length == 0) {
        $("#person_" + i + "").prop("checked", true);
        radio = $("#person_" + i + "").parents(".passenger_info1");
        borderChange(radio);
        break;
      }
    }
  }

  function changeRadio2() {
    console.log("실행됨")
    for(let i = 0; i < $(".checkPerson2").length; i++) {
      if ($("#person2_" + i + "").val() == 'on' || $("#person2_" + i + "").val().length == 0) {
        $("#person2_" + i + "").prop("checked", true);
        radio2 = $("#person2_" + i + "").parents(".passenger_info2");
        borderChange2(radio2);
        break;
      }
    }
  }
  $(".SSC").on("click", function() {
    let num = $(this).val();
    let price = $(this).next().text();
    if (radio.val().length == 0 && $(this).hasClass('prop') == false) { // radio값이 없고, 체크박스가 미체크 시
      $(this).prop("checked", true);
      $(this).addClass('prop'); // 체크값 구별하기 위한 클래스 추가
      radio.find(".seat_num1").val(num);
      radio.find(".price").html(price);
      radio.find(".seat_P1").css("visibility", "visible")
      radio.val(num);
      radio.find(".checkPerson").val(num);
      radio.addClass('check');
      radio.prop("checked", false);
      changeRadio(radio);
    }
    else if(radio.val().length != 0 && $(this).hasClass('prop') == false) { // radio 에 값이 있고 체크박스가 미체크 일 시
      $(this).prop("checked", false); // 여러개 중복 방지.
      $(this).click(false);
    }
    else if ((radio.val().length == 0 && $(this).hasClass('prop')) || (radio.val().length != 0 && $(this).hasClass('prop'))){ // 이미 체크되어 있을 시 체크된 체크박스 체크해제, 라디오 초기화
      let thisVal = $(this).val();
      $(this).removeClass('prop')
      let a = $("input:radio[name ='selectPerson']:input[value='" + thisVal + "']");
      if (a.val() == thisVal) {
        a.prop("checked", true);
        a.val("");
        radio = a.parents(".passenger_info1");
        radio.find(".seat_num1").val("");
        radio.find(".price").html("");
        radio.find(".seat_P1").css("visibility", "hidden")
        radio.val("");
        borderChange(radio);
      }
    }
    else if(radio.val() == $(this).val() && $(this).hasClass('prop')) { // radio의 값이 체크박스의 밸류값과 일치 시 체크박스 체크 해제
      $(this).attr("disabled", false);
      $(this).removeClass('prop')
      $(this).prop("checked", false);
      radio.find(".seat_num1").val("");
      radio.find(".price").html("");
      radio.find(".seat_P1").css("visibility", "hidden")
      radio.val("");
      radio.find(".checkPerson").val("");
      radio.removeClass('check');
      borderChange(radio);
    }
    else if(radio.val() != $(this).val() && $(this).hasClass('prop')) { // radio 값과 체크박스의 값이 같지 않고, 체크박스가 선택되어있을 때
      let thisVal2 = $(this).val();
      let a = $("input:radio[name ='selectPerson']:input[value='" + thisVal2 + "']");
      console.log($(i));
      if (a.val() == $(this).val()) {
        $(this).attr("disabled", false);
        $(this).removeClass('prop')
        $(this).prop("checked", false);
        radio = a.find('.passenger_info1');
        radio.find(".seat_num1").val("");
        radio.find(".price").html("");
        radio.find(".checkPerson").val("");
        radio.find(".seat_P1").css("visibility", "hidden")
        radio.val("");
        radio.removeClass('check');
      }
    }
  })



  $(".SSC2").on("click", function() {
    let num2 = $(this).val();
    let price2 = $(this).next().text();
    if (radio2.val().length == 0 && $(this).hasClass('prop') == false) { // radio값이 없고, 체크박스가 미체크 시
      $(this).prop("checked", true);
      $(this).addClass('prop'); // 체크값 구별하기 위한 클래스 추가
      radio2.find(".seat_num2").val(num2);
      radio2.find(".price2").html(price2);
      radio2.find(".seat_P2").css("visibility", "visible")
      radio2.val(num2);
      radio2.find(".checkPerson2").val(num2);
      radio2.addClass('check');
      radio2.prop("checked", false);
      changeRadio2(radio2);
    }
    else if(radio2.val().length != 0 && $(this).hasClass('prop') == false) { // radio 에 값이 있고 체크박스가 미체크 일 시
      $(this).prop("checked", false); // 여러개 중복 방지.
      $(this).click(false);
    }
    else if ((radio2.val().length == 0 && $(this).hasClass('prop')) || (radio2.val().length != 0 && $(this).hasClass('prop'))){ // 이미 체크되어 있을 시 체크된 체크박스 체크해제, 라디오 초기화
      let thisVal = $(this).val();
      $(this).removeClass('prop')
      let a2 = $("input:radio[name ='selectPerson2']:input[value='" + thisVal + "']");
      if (a2.val() == thisVal) {
        a2.prop("checked", true);
        a2.val("");
        radio2 = a2.parents(".passenger_info2");
        radio2.find(".seat_num2").val("");
        radio2.find(".price2").html("");
        radio2.find(".seat_P2").css("visibility", "hidden")
        radio2.val("");
        borderChange2(radio2);
      }
    }
    else if(radio2.val() == $(this).val() && $(this).hasClass('prop')) { // radio의 값이 체크박스의 밸류값과 일치 시 체크박스 체크 해제
      $(this).attr("disabled", false);
      $(this).removeClass('prop');
      $(this).prop("checked", false);
      radio2.find(".seat_num2").val("");
      radio2.find(".price2").html("");
      radio2.find(".seat_P2").css("visibility", "hidden")
      radio2.val("");
      radio2.find(".checkPerson2").val("");
      radio2.removeClass('check');
      borderChange2(radio2);
    }
    else if(radio2.val() != $(this).val() && $(this).hasClass('prop')) { // radio 값과 체크박스의 값이 같지 않고, 체크박스가 선택되어있을 때
      let thisVal = $(this).val();
      let a2 = $("input:radio[name ='selectPerson2']:input[value='" + thisVal + "']");
      console.log($(i));
      if (a2.val() == $(this).val()) {
        $(this).attr("disabled", false);
        $(this).removeClass('prop')
        $(this).prop("checked", false);
        radio2 = a2.find('.passenger_info2');
        radio2.find(".seat_num2").val("");
        radio2.find(".price").html("");
        radio2.find(".checkPerson2").val("");
        radio2.find(".seat_P2").css("visibility", "hidden")
        radio2.val("");
        radio2.removeClass('check');
      }
    }
  })

  /*좌석 선택 끝 */

  /*수하물 선택 구간 */

  $(".bot_bagg_price1 .cur").css("display", "none");
  $(".bot_bagg_price1 .price").text("");
  $(".bot_bagg_price1 .close").css("display", "none");

  $(".bot_bagg_price2 .cur").css("display", "none");
  $(".bot_bagg_price2 .price").text("");
  $(".bot_bagg_price2 .close").css("display", "none");
  $(".seat_info_wrap .seat_box .cur, .seat_box .seat_name").css("display", "block");



  // 수하물 선택 구간1
  function bagg_borderChange(priceBox) {
    $(".select_bagg_price").not(priceBox).css("border", "none")
    priceBox.css("border", "3px solid #661e43");
  }

  let i = $(".selectBagg1").length
  console.log("select 개수 : " + i)
  for(let i = 0; i < $(".selectBagg1").length; i++) {
    $('#bagg1_'+i +'').change(function () {
      let s = i;
      let a = $("#select_bagg_price1_" + s);
      console.log($("#select_bagg_price1_" + i));
      bagg_borderChange(a)
      $('#select_bagg1_' + i + '').text($(this).val());
      $("#cur1_" + i).css("display", "inline-block");
      $("#bagg_price1_" + i).text("");
      $("#bagg_close1_" + i).css("display", "block");
      if ($('#bagg1_'+i +'').val() == "5KG(+KRW 8,000)") {
        $("#bagg_price1_" + i).text("8,000");
      } else if ($('#bagg1_'+i +'').val() == "10KG(+KRW 16,000)") {
        $("#bagg_price1_" + i).text("16,000");
      } else if ($('#bagg1_'+i +'').val() == "15KG(+KRW 24,000)") {
        $("#bagg_price1_" + i).text("24,000");
      } else if ($('#bagg1_'+i +'').val() == "20KG(+KRW 32,000)") {
        $("#bagg_price1_" + i).text("32,000");
      } else {
        $("#cur1_" + i).css("display", "none");
        $("#bagg_price1_" + i).text("");
        $("#bagg_close1_" + i).css("display", "none");
      }
    });
    $("#bagg_close1_" + i).on("click", function() {
      $("#cur1_" + i).css("display", "none");
      $("#bagg_price1_" + i).text("");
      $('#select_bagg1_' + i + '').text("");
      $("#bagg_close1_" + i).css("display", "none");
      $('#bagg1_'+i).val('').prop("selected", true);
    })
  }

  // 수하물 선택 구간2
  let i2 = $(".selectBagg2").length
  console.log("select 개수 : " + i2)
  for(let i2 = 0; i2 < $(".selectBagg2").length; i2++) {
    $('#bagg2_'+i2 +'').change(function () {
      $('#select_bagg2_' + i2 + '').text($(this).val());
      $("#cur2_" + i2).css("display", "inline-block");
      $("#bagg_price2_" + i2).text("");
      $("#bagg_close2_" + i2).css("display", "block");
      if ($('#bagg2_'+i2 +'').val() == "5KG(+KRW 8,000)") {
        $("#bagg_price2_" + i2).text("8,000");
      } else if ($('#bagg2_'+i2 +'').val() == "10KG(+KRW 16,000)") {
        $("#bagg_price2_" + i2).text("16,000");
      } else if ($('#bagg2_'+i2 +'').val() == "15KG(+KRW 24,000)") {
        $("#bagg_price2_" + i2).text("24,000");
      } else if ($('#bagg2_'+i2 +'').val() == "20KG(+KRW 32,000)") {
        $("#bagg_price2_" + i2).text("32,000");
      } else {
        $("#cur2_" + i2).css("display", "none");
        $("#bagg_price2_" + i2).text("");
        $("#bagg_close2_" + i2).css("display", "none");
      }
    });
    $("#bagg_close2_" + i2).on("click", function() {
      $("#cur2_" + i2).css("display", "none");
      $("#bagg_price2_" + i2).text("");
      $('#select_bagg2_' + i2 + '').text("");
      $("#bagg_close2_" + i2).css("display", "none");
      $('#bagg2_'+i2).val('').prop("selected", true);
    })
  }

  /*수하물 선택 구간 끝 */


  /*보험 선택 구간 */

  // 처음 페이지 로드 시 총보험료 0원 세팅, 셀렉트박스 비활성화화
  $(".insurance_price .int_tot_price").text("0");
  $('.select_product').prop('disabled', true);

  let priceArr = [];
  let nameArr = [personNumber];
  let totalPrice = Number(0);
  let sum = 0;
  for (let i = 0; i < personNumber; i++) {
    $("#check_ins_" + i).change(function() {
      // 가입자명 체크박스 체크 시 보험종료 선택 가능
      if ($("#check_ins_" + i).is(":checked")) {
        $("#select_product_" + i).prop('disabled', false);
        priceArr[i] = Number($("#select_product_" + i).val());
        totalPrice += priceArr[i]
        nameArr[i] = $("#name" + i).text();
        sum += 1;
        console.log(i + " : " + nameArr[i])
        $(".insurance_price .int_tot_price").text(totalPrice.toLocaleString('ko-KR'));
      } else if ($("#check_ins_" + i).is(":checked") == false) {
        $("#select_product_" + i).prop('disabled', true);
        totalPrice -= priceArr[i]
        nameArr[i] = "";
        console.log(i + " : " + nameArr[i])
        sum -= 1;
        console.log("sum개수" + sum);
        console.log(nameArr)
        $(".insurance_price .int_tot_price").text(totalPrice.toLocaleString('ko-KR'));
      }
    })
    $("#select_product_" + i).change(function() {
      if ($("#select_product_" + i).val() == "1970") {
        totalPrice -= priceArr[i];
        priceArr[i] = Number(1970);
        totalPrice += priceArr[i];
      } else if ($("#select_product_" + i).val() == "3660") {
        totalPrice -= priceArr[i];
        priceArr[i] = Number(3660);
        totalPrice += priceArr[i];
      } else if ($("#select_product_" + i).val() == "7040") {
        totalPrice -= priceArr[i];
        priceArr[i] = Number(7040);
        totalPrice += priceArr[i];
      }
      $(".insurance_price .int_tot_price").text(totalPrice.toLocaleString('ko-KR'));
    })
  }

  $(".ins_join_butt").on("click", function () {
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
      $("#modal_service_app_wrap").fadeIn();
      $(".modal_join_ins").fadeIn();
    }
  });

  // 보험 안내사항 확인 눌렀을 시 체크박스 확인
  $("#modal_insurance_info_wrap .butt_ok").on("click", function () {
    let isCheck = $(".insCheckBox").length;
    let is = 0;
    for (let i = 0; i < personNumber; i++) {
      if ($("#ins_check_" + i).is(":checked")) {
        is += 1;
      }
    }
    if (isCheck == is) {
      $("#modal_insurance_info_wrap").fadeOut();
      $("#agree_check1").prop("checked", true);
    } else {
      $("#modal_insurance_info_wrap .modal_agree2").fadeIn();
    }

  })

  $(".insCheckBox").change(function() {
    console.log("나실행됨ㄴㅇㄹㅇ너ㅏ라ㅓㄴㄷ")
    for (let i = 0; i < personNumber; i++) {
      if ($("ins_check_" + i).is(':checked')) {
        console.log("나실행됨ㄴㅇㄹㅇ너ㅏ라ㅓㄴㄷ")
        $("#modal_ins_people_" + i).css("background-color", "rgb(0, 173, 239)");
        $("#modal_ins_people_" + i).css("color", "#fff");
      } else {
        $("#modal_ins_people_" + i).css("background-color", "#fff");
        $("#modal_ins_people_" + i).css("color", "rgb(0, 173, 239)");
      }
    }
  })

  /*보험 선택 구간 끝*/



  /*하단 총액 모달창 */
  $(".info_table_wrap").css("overflow", "hidden");
  $(".info_table_wrap").css("overflow-x", "none");

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
    $(".info_table_wrap").css("overflow", "scroll");
    $(".info_table_wrap").css("overflow-x", "hidden");
    $(".info_table_wrap").animate({ scrollTop: 300 }, 600);
    $(".plus_1").css("display", "none");
    $(".minus_1").css("display", "inline-block");
  })
  $(".minus_1").on('click', () => {
    $(".info_table_wrap").css("overflow", "hidden");
    $(".info_table_wrap").css("overflow-x", "none");
    $(".plus_1").css("display", "inline-block");
    $(".minus_1").css("display", "none");
  })


  $(window).scroll(function () {
    let y = $(".fix_bott_wrap").offset().top - 650;
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
  let block;
  if ($(".passenger_info_wrap1").css("display", "block")) {
    block = $(".checkPerson").is("b").parents(".passenger_info1");
  } else if($(".passenger_info_wrap1").css("display", "block")) {
    block = $(".checkPerson2").is(":checked").parents(".passenger_info2");
  }

  $('#modal_notice_wrap').hide();
  $(".select_seat .exit_seat, box3").on('click', () => {
    if ($(".exit_seat").is(":checked")) {
      $("#modal_notice_wrap").fadeIn();
      $("#modal_notice_wrap").css("display", "flex")
      $("body").css("overflow", "hidden");
      $("#checkbox_m").prop("checked", false);
      $('#modal_notice_wrap .modal_content_wrap').animate({//모달띄울 때 스크롤위치 위로 고정
        scrollTop: 0
      }, 50);
    }
  })

  $(".modal_notice_wrap .close").on('click', () => {
    console.log(block)
    block.find(".seat_P").css("display", "none");
    block.find(".seat_num").html("");
    $("#modal_notice_wrap").fadeOut();
    $("body").css("overflow", "scroll");
    $('.box3').prop("checked", false);
    $('.box3').attr("disabled", false);
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

})


/*보험 가입 모달창 끝 */

/*여행자보험 가입규약 및 개인정보 제3자 제공 동의 모달창*/
$(() => {
  $("#modal_agreement_wrap").hide();
  $(".modal_agree2").hide();

  $("#agree_check2").on("click", function () {
    $("#modal_agreement_wrap").fadeIn();
    if ($("#agree1").is(":checked") && $("#agree2").is(":checked")) {
      $("#agree_check2").prop("checked", true);
    } else {
      $("#agree_check2").prop("checked", false);
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

  $(".modal_join_ins .modal_join_butt input").on("click", () => {
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




