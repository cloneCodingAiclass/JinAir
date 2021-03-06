"use strict";

$(function () {
  $(".open1").on("click", function (e) {
    e.stopPropagation();
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".reservation").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open2").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".service").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open3").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".benefit").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open4").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".optional").slideUp(50);
    $(".point").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open5").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });

  $(".modal").hide();
  $("li[class *= 'open']").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeIn(200);
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });

  $("select .KRW").on("select", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });
  $("select .USD").on("click", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });

  $(".list1_wrap").on("click", function () {
    $(".list2_wrap").focus();
  });

  /*?????? ??? ???????????? */
  $(".datail_add").hide();
  $(".arr_top").css("display", "none");
  $(".arr_bott").css("display", "block");
  $(".datail_add").css("width", "100%");

  $(".arr_bott1").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top1").css("display", "inline-block");
    // $(".datail_add1").slideDown(200);
    $(".datail_add1").toggle();
  });
  $(".arr_top1").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott1").css("display", "inline-block");
    $(".datail_add1").slideUp(200);
  });

  $(".arr_bott2").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top2").css("display", "block");
    $(".datail_add2").slideDown();
  });
  $(".arr_top2").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott2").css("display", "block");
    $(".datail_add2").slideUp();
  });

  $(".arr_bott3").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top3").css("display", "block");
    $(".datail_add3").slideDown();
  });
  $(".arr_top3").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott3").css("display", "block");
    $(".datail_add3").slideUp();
  });

  let a = $(".detail1").offset().top - 30;
  let x = $(".detail1").offset().left + 30;

  $(".modal_flight_info1").css("left", x);
  $(".modal_flight_info1").css("top", a);

  /*?????? ??? ???????????? ???*/

  /*??????????????? */
  $(".arr_bott4").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top4").css("display", "block");
    $(".datail_add4").slideDown();
  });
  $(".arr_top4").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott4").css("display", "block");
    $(".datail_add4").slideUp();
  });

  $(".arr_bott5").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top5").css("display", "block");
    $(".datail_add5").slideDown();
  });
  $(".arr_top5").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott5").css("display", "block");
    $(".datail_add5").slideUp();
  });

  $(".arr_bott6").on("click", function () {
    $(this).css("display", "none");
    $(".arr_top6").css("display", "block");
    $(".datail_add6").slideDown();
  });
  $(".arr_top6").on("click", function () {
    $(this).css("display", "none");
    $(".arr_bott6").css("display", "block");
    $(".datail_add6").slideUp();
  });
  /*??????????????? ??? */

  /*??????*/
  $("input[name=discount]").change(function () {
    $(".discount_coup").css("display", "block");
    $(".discount_card").css("display", "none");

    if ($("#coupone").is(":checked")) {
      $(".discount_coup").css("display", "block");
      $(".discount_card").css("display", "none");
    }
    if ($("#card").is(":checked")) {
      $(".discount_coup").css("display", "none");
      $(".discount_card").css("display", "block");
    }
  });

  /*?????? ???*/

  /*????????????*/
  $(".card_wrap2").hide();
  $(".sel_easy_more").on("click", function () {
    $(".card_wrap2").toggle();
  });

  $("input[name=payM]").change(function () {
    if ($("#payM1").is(":checked")) {
      $(".cardImg_wrap1").css("background-color", "#7E0049");
      $("#cardImg1").removeClass("cardImg1");
      $("#cardImg1").addClass("cardImg1-2");
      $(".cardImg_wrap1 .text").css("color", "#fff");

      $(".cardImg_wrap").not(".cardImg_wrap1").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap1 .text").css("color", "#444");

      // $("#cardImg1").removeClass("cardImg1-2");
      // $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg4").removeClass("cardImg4-2");
      $("#cardImg4").addClass("cardImg4");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");

      $("#selectCardCode").css("display", "block");
      $("#selectInstallment").css("display", "block");
      $(".card_wrap2").hide();
    }
    if ($("#payM2").is(":checked")) {
      $(".cardImg_wrap2").css("background-color", "#2B64CE");
      $("#cardImg2").removeClass("cardImg2");
      $("#cardImg2").addClass("cardImg2-2");
      $(".cardImg_wrap").not(".cardImg_wrap2").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap2 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      // $("#cardImg2").removeClass("cardImg2-2");
      // $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");

      $("#selectCardCode").css("display", "block");
      $("#selectInstallment").css("display", "none");
      $(".card_wrap2").hide();
    }

    if ($("#payM3").is(":checked")) {
      $(".cardImg_wrap3").css("background-color", "#7E0049");
      $(".cardImg_wrap3 .text").css("color", "#fff");
      $("#cardImg3").removeClass("cardImg3");
      $("#cardImg3").addClass("cardImg3-2");
      $(".cardImg_wrap").not(".cardImg_wrap3").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap3 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      // $("#cardImg3").removeClass("cardImg3-2");
      // $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");

      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
      $(".card_wrap2").hide();
    }
    if ($("#payM4").is(":checked")) {
      $(".cardImg_wrap4").css("background-color", "#FFEB00");
      $(".cardImg_wrap4 .text").css("color", "#fff");
      $(".cardImg_wrap").not(".cardImg_wrap4").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap4 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");

      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
      $(".card_wrap2").hide();
    }
    if ($("#payM5").is(":checked")) {
      $(".cardImg_wrap5").css("background-color", "#92278F");
      $(".cardImg_wrap5 .text").css("color", "#fff");
      $("#cardImg5").removeClass("cardImg5");
      $("#cardImg5").addClass("cardImg5-2");
      $(".cardImg_wrap").not(".cardImg_wrap5").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap5 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      // $("#cardImg5").removeClass("cardImg5-2");
      // $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }
    if ($("#payM6").is(":checked")) {
      $(".cardImg_wrap6").css("background-color", "#282260");
      $(".cardImg_wrap6 .text").css("color", "#fff");
      $("#cardImg6").removeClass("cardImg6");
      $("#cardImg6").addClass("cardImg6-2");
      $(".cardImg_wrap").not(".cardImg_wrap6").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap6 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      // $("#cardImg6").removeClass("cardImg6-2");
      // $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }
    if ($("#payM7").is(":checked")) {
      $(".cardImg_wrap7").css("background-color", "#273447");
      $(".cardImg_wrap7 .text").css("color", "#fff");
      $("#cardImg7").removeClass("cardImg7");
      $("#cardImg7").addClass("cardImg7-2");
      $(".cardImg_wrap").not(".cardImg_wrap7").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap7 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      // $("#cardImg7").removeClass("cardImg7-2");
      // $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }

    if ($("#payM8").is(":checked")) {
      $(".cardImg_wrap8").css("background-color", "#00C73C");
      $(".cardImg_wrap8 .text").css("color", "#fff");
      $("#cardImg8").removeClass("cardImg8");
      $("#cardImg8").addClass("cardImg8-2");
      $(".cardImg_wrap").not(".cardImg_wrap8").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap8 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      // $("#cardImg8").removeClass("cardImg8-2");
      // $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }

    if ($("#payM9").is(":checked")) {
      $(".cardImg_wrap9").css("background-color", "#E7181E");
      $(".cardImg_wrap9 .text").css("color", "#fff");
      $("#cardImg9").removeClass("cardImg9");
      $("#cardImg9").addClass("cardImg9-2");
      $(".cardImg_wrap").not(".cardImg_wrap9").css("background-color", "#fff");
      $(".cardImg_wrap .text").not(".cardImg_wrap9 .text").css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      // $("#cardImg9").removeClass("cardImg9-2");
      // $("#cardImg9").addClass("cardImg9");
      $("#cardImg10").removeClass("cardImg10-2");
      $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }
    if ($("#payM10").is(":checked")) {
      $(".cardImg_wrap10").css("background-color", "#FF1744");
      $(".cardImg_wrap10 .text").css("color", "#fff");
      $("#cardImg10").removeClass("cardImg10");
      $("#cardImg10").addClass("cardImg10-2");
      $(".cardImg_wrap").not(".cardImg_wrap10").css("background-color", "#fff");
      $(".cardImg_wrap .text")
        .not(".cardImg_wrap10 .text")
        .css("color", "#444");

      $("#cardImg1").removeClass("cardImg1-2");
      $("#cardImg1").addClass("cardImg1");
      $("#cardImg2").removeClass("cardImg2-2");
      $("#cardImg2").addClass("cardImg2");
      $("#cardImg3").removeClass("cardImg3-2");
      $("#cardImg3").addClass("cardImg3");
      $("#cardImg5").removeClass("cardImg5-2");
      $("#cardImg5").addClass("cardImg5");
      $("#cardImg6").removeClass("cardImg6-2");
      $("#cardImg6").addClass("cardImg6");
      $("#cardImg7").removeClass("cardImg7-2");
      $("#cardImg7").addClass("cardImg7");
      $("#cardImg8").removeClass("cardImg8-2");
      $("#cardImg8").addClass("cardImg8");
      $("#cardImg9").removeClass("cardImg9-2");
      $("#cardImg9").addClass("cardImg9");
      // $("#cardImg10").removeClass("cardImg10-2");
      // $("#cardImg10").addClass("cardImg10");
      $("#selectCardCode").css("display", "none");
      $("#selectInstallment").css("display", "none");
    }
  });
  /*???????????? ???*/

});

$(() => {
  $("#modal_free_wrap").hide();
  $(".service_title2 .section1").on("click", () => {
    $("#modal_free_wrap").fadeIn();
  });
  $(".modal_free_wrap .close").on("click", () => {
    $("#modal_free_wrap").fadeOut();
  });
});

/* ?????? fixed */
$(window).scroll(function () {
  let y = $(".contentswrap").offset().top; //????????? ??????
  if (window.pageYOffset <= $(".contentswrap").offset().top) {
    $(".fix_trip_info").css("position", "fixed");
    $(".fix_trip_info").css("top", y);
  } else {
    $(".fix_trip_info").css("top", "0px");
    $("#header").css("position", "absolute");
    $("#header nav").css("position", "absolute");

  }
});
/* ????????? ????????? ?????? ????????? */
$(() => {
  $("#modal_restricted_items_wrap").hide();
  $("#modal_restricted_items_wrap .modal_conf_ok_wrap").hide();

  $(".checkbox_wrap #checkbox").on("click", () => {
    $("#modal_restricted_items_wrap").fadeIn();
    $(".modal_restricted_items_wrap").fadeIn();
    $("#modal_restricted_items_wrap").css("display", "flex");
    $("body").css("overflow", "hidden");
  });
  $(
    "#modal_restricted_items_wrap .butt_canc, #modal_restricted_items_wrap .close"
  ).on("click", () => {
    $("#modal_restricted_items_wrap").fadeOut();
    $(".modal_restricted_items_wrap").fadeOut();
    $(".checkbox_wrap #checkbox").prop("checked", false);
    $("body").css("overflow", "scroll");
  });
  $("#modal_restricted_items_wrap .butt_ok").on("click", () => {
    if ($("#modal_restricted_items_wrap #modal_checkbox").is(":checked")) {
      $("#modal_restricted_items_wrap").fadeOut();
      $(".modal_restricted_items_wrap").fadeOut();
      $(".checkbox_wrap #checkbox").prop("checked", true);
      $("body").css("overflow", "scroll");
    } else {
      $("#modal_restricted_items_wrap .modal_conf_ok_wrap").fadeIn();
      $(".modal_restricted_items_wrap .modal_conf_ok_wrap").fadeIn();
    }
  });
  $("#modal_restricted_items_wrap .modal_conf_ok_wrap").on("click", () => {
    $("#modal_restricted_items_wrap .modal_conf_ok_wrap").fadeOut();
    $(".modal_restricted_items_wrap .modal_conf_ok_wrap").fadeOut();
  });
});
/* ????????? ????????? ?????? ????????? ???*/

/*???????????? ????????? ?????? ??? ?????? ?????? ????????? */
$(() => {
  $("#modal_credit_int").hide();
  $(".dis_int").on("click", () => {
    $("#modal_credit_int").fadeIn();
    $(".modal_credit_int").fadeIn();
    $("#modal_credit_int").css("display", "flex");
    $("body").css("overflow", "hidden");
  });
  $(
    "#modal_credit_int .butt_canc_credit, #modal_fare_rules, .butt_ok_credit, .close"
  ).on("click", () => {
    $("#modal_credit_int").fadeOut();
    $(".modal_credit_int").fadeOut();
    $("body").css("overflow", "scroll");
  });
});
/*???????????? ????????? ?????? ??? ?????? ?????? ????????? ??? */

$(() => {
  $(".modal_flight_info1").hide();
  $(".modal_flight_info2").hide();

  $("p.detail1").on("click", () => {
    $(".modal_flight_info1").fadeIn();
  });
  $(".modal_flight_info1 .close1").on("click", () => {
    $(".modal_flight_info1").fadeOut();
  });

  $("p.detail2").on("click", () => {
    $(".modal_flight_info2").fadeIn();
  });
  $(".modal_flight_info2 .close2").on("click", () => {
    $(".modal_flight_info2").fadeOut();
  });
});

// ?????? ?????? ??? ***********************
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

    // ?????? ?????? ????????? ??????
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
  // ??????1
  $(".go_layerbtn").on("click", function (e) {
    e.stopPropagation();

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");

    // ?????? ??? ?????? ??????
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // ?????????1 ????????? ??????
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    // ????????? ??????2 ??????
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // ?????? 2
  $(".go_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt2").addClass("on");
    $(".go_layer2").slideDown("fast");

    // ?????? ??? ?????? ??????
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // ?????????2 ????????? ??????
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);

    // ??????1 ??????
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
  // ?????? 1
  $(".arrive_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt").addClass("on");
    $(".arrive_layer").slideDown("fast");

    // ?????? ??? ?????? ??????
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // ?????????1 ????????? ??????
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // ????????? ??????2 ??????
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // ?????? 2
  $(".arrive_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt2").addClass("on");
    $(".arrive_layer2").slideDown("fast");

    // ?????? ??? ?????? ??????
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // ?????????2 ????????? ??????
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    // ????????? ??????1 ??????
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

// ?????? ??????
$(() => {
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // ?????? ??? ?????? ??????
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

  // Count ??????
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
        alert("????????? ????????? ?????? ??? ??????");
        break;
      }
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function submit1() {
  console.log("??????");
  var iAdultCount = parseInt(
          $(".person_pop_layer1").find("strong[name=adultPaxCnt]").text()
      ),
      iChildCount = parseInt(
          $(".person_pop_layer1").find("strong[name=childPaxCnt]").text()
      ),
      iInfantCount = parseInt(
          $(".person_pop_layer1").find("strong[name=infantPaxCnt]").text()
      );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("?????? " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("?????? " + iChildCount);
  }

  // ??????. ?????? ?????? ?????? ??? ??????, ??????, ????????? ?????? input:hidden??? ??????
  // ???????????? ?????? ?????? ?????? .adultPaxCnt??? default??? : 1??? ??????
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

function submit2() {
  console.log("??????");
  var iAdultCount = parseInt(
          $(".person_pop_layer2").find("strong[name=adultPaxCnt]").text()
      ),
      iChildCount = parseInt(
          $(".person_pop_layer2").find("strong[name=childPaxCnt]").text()
      ),
      iInfantCount = parseInt(
          $(".person_pop_layer2").find("strong[name=infantPaxCnt]").text()
      );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("?????? " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("?????? " + iChildCount);
  }

  // ??????. ?????? ?????? ?????? ??? ??????, ??????, ????????? ?????? input:hidden??? ??????
  // ???????????? ?????? ?????? ?????? .adultPaxCnt??? default??? : 1??? ??????
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

function submit3() {
  console.log("??????");
  var iAdultCount = parseInt(
          $(".person_pop_layer3").find("strong[name=adultPaxCnt]").text()
      ),
      iChildCount = parseInt(
          $(".person_pop_layer3").find("strong[name=childPaxCnt]").text()
      ),
      iInfantCount = parseInt(
          $(".person_pop_layer3").find("strong[name=infantPaxCnt]").text()
      );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "?????? " + iAdultCount + " ?????? " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("?????? " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("?????? " + iChildCount);
  }

  // ??????. ?????? ?????? ?????? ??? ??????, ??????, ????????? ?????? input:hidden??? ??????
  // ???????????? ?????? ?????? ?????? .adultPaxCnt??? default??? : 1??? ??????
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
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

function updateTrip() {
  let person = $("#person_cnt").text();
  let go1 = $("#go_area1").text();
  let arr1 = $("#arr_area1").text();

  $(".person_num").text(person);
  $(".go_default").attr("value", go1.substr(0,go1.indexOf("[??????]")-1));
  $(".arrive_default").attr("value", arr1.substr(0,arr1.indexOf("[??????]")-1));
}

function modification() {
  let inonesoo = $('.person_num').html().split(' ');
  let modiAdult = 0;
  let modiChild = 0;
  let modiBaby = 0;
  if(inonesoo.length == 2){
    if(inonesoo[0] == '??????'){
      modiChild = Number(inonesoo[1])
    }else if(inonesoo[0] == '??????'){
      modiAdult = Number(inonesoo[1])
    }
  }else if(inonesoo.length == 4){
    if(inonesoo[2] == '??????'){
      modiAdult = Number(inonesoo[1]);
      modiBaby = Number(inonesoo[3]);
    }else if(inonesoo[2] == '??????'){
      modiAdult = Number(inonesoo[1]);
      modiChild = Number(inonesoo[3])
    }
  }else if(inonesoo.length == 6){
    modiAdult = Number(inonesoo[1]);
    modiChild = Number(inonesoo[3])
    modiBaby = Number(inonesoo[5]);
  }


  if($('input[type="radio"][name="tripType"]:checked').val() == "??????"){

    if($('.go_date_select_optt').val()=="?????????" || $('.come_date_select_optt').val()=="?????????"){
      alert('???????????? ????????? ??????????????????');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'comeDateSelectOptt');
      obj4.setAttribute('value', $('.come_date_select_optt').val());
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'AdultNumber');
      obj5.setAttribute('value', modiAdult);
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'ChildNumber');
      obj6.setAttribute('value', modiChild);
      f.appendChild(obj6);

      let obj7;
      obj7 = document.createElement('input');
      obj7.setAttribute('type', 'hidden');
      obj7.setAttribute('name', 'InfantNumber');
      obj7.setAttribute('value', modiBaby);
      f.appendChild(obj7);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/twoway');
      document.body.appendChild(f);
      f.submit();
    }
  }else if($('input[type="radio"][name="tripType"]:checked').val() == "??????") {
    if($('.go_date_select_optt').val()=="?????????"){
      alert('???????????? ????????? ??????????????????');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'AdultNumber');
      obj4.setAttribute('value', modiAdult);
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'ChildNumber');
      obj5.setAttribute('value', modiChild);
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'InfantNumber');
      obj6.setAttribute('value', modiBaby);
      f.appendChild(obj6);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/oneway');
      document.body.appendChild(f);
      f.submit();
    }
  }else if($('input[type="radio"][name="tripType"]:checked').val() == "?????????") {
    if($('.go_select_optt').val()=="?????????" || $('.arrive_select_optt').val()=="?????????" ||
        $('.go_date_select_optt').val()=="?????????" || $('.go_select_optt2').val()=="?????????" ||
        $('.arrive_select_optt2').val()=="?????????" || $('.go_date_select_optt2').val()=="?????????"){
      alert('???????????? ????????? ??????????????????');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'schDeparturePoint1');
      obj4.setAttribute('value', $('.go_select_optt2').val());
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'schArrivalPoint1');
      obj5.setAttribute('value', $('.arrive_select_optt2').val());
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'goDateSelectOptt1');
      obj6.setAttribute('value', $('.go_date_select_optt2').val());
      f.appendChild(obj6);

      let obj7;
      obj7 = document.createElement('input');
      obj7.setAttribute('type', 'hidden');
      obj7.setAttribute('name', 'AdultNumber');
      obj7.setAttribute('value', modiAdult);
      f.appendChild(obj7);

      let obj8;
      obj8 = document.createElement('input');
      obj8.setAttribute('type', 'hidden');
      obj8.setAttribute('name', 'ChildNumber');
      obj8.setAttribute('value', modiChild);
      f.appendChild(obj8);

      let obj9;
      obj9 = document.createElement('input');
      obj9.setAttribute('type', 'hidden');
      obj9.setAttribute('name', 'InfantNumber');
      obj9.setAttribute('value', modiBaby);
      f.appendChild(obj9);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/multiway');
      document.body.appendChild(f);
      f.submit();
    }
  }
}



function comewhatday() {
  $(".whatday").html("?????????");
}
function gowhatday() {
  $(".whatday").html("?????????");
}

// ????????? ????????????
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

// ????????? ????????????
function gowhatdayddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// ???????????? ????????????
function gowhatdaydddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
  $(".modal_container").fadeIn(200);
  $(".moditext").html("??????????????? ?????? ????????? ????????? ??? ????????????.");
}

function twochoice() {
  $(".cal").css({ display: "none" });
  $(".cal2").css({ display: "none" });
  $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
  // ??????, ?????? ????????? ??????
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
  // ??????, ?????? ????????? ??????
  $(".arrive_layer")
      .find("li")
      .find("a")
      .on("click", function () {
        let str = "";
        str = $(this).html();
        $(".arrive_select_optt").val(str);
        ccc = "y";
      });
  // ?????? ?????? ??????
  $(".go_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("?????????");
    d;
  });
  $(".come_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("?????????");
  });

  // ?????? ?????? ??????
  $(".go_date2").on("click", function () {
    $(".cal2").css({ display: "flex" });
    $(".whatday").html("?????????");
  });

  // ????????? ????????? ??????
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
  // ????????? ????????? ??????
  $(".arrive_layer2")
      .find("li")
      .find("a")
      .on("click", function () {
        let str = "";
        str = $(this).html();
        $(".arrive_select_optt2").val(str);
        ccc = "y";
      });
  // ?????????1 ?????? ??????
  $(".go_date3").on("click", function () {
    if (bbb == "n" && ccc == "n") {
      departure();
      $(".cal3").css({ display: "none" });
    } else if (bbb == "y" && ccc == "n") {
      arrive();
    } else {
      $(".cal3").css({ display: "flex" });
      $(".whatday").html("?????????");
    }
  });

  // ?????? X ??????
  $(".x_box").on("click", function () {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
  });

  // ???????????? ?????? ??????
  $(".btn_cancel").on("click", function () {
    $(".modal_container").fadeOut(200);
  });
});


