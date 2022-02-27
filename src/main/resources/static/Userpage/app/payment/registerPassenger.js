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



    $(window).scroll(function () {
        let y = $(".contentswrap").offset().top;    //고정할 메뉴
        if (window.pageYOffset <= $(".contentswrap").offset().top) {
            $(".fix_trip_info").css("position", "fixed");
            $(".fix_trip_info").css("top", y);
        } else {
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "absolute");
        }
    });

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

    /*자세히 보기 */
    $(".det1").on('click', () => {
        $(".detD1").css("display", "inline-block");
    })

    $(".det2").on('click', () => {
        $(".detD2").css("display", "inline-block");
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
            $(".fix_trip_info").css("position", "fixed");
        } else {
            $(".fix_bott").css("position", "absolute");
            $("#modal_totP_wrap").css("position", "absolute");
            $("#modal_totP_wrap").css("top", y - 280);
            $(".fix_trip_info").css("position", "absolute");
        }
    });

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
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
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
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
        iPaxCount = iAdultCount + iChildCount;

    // Count 증감
    switch (strPaxType) {
        case "ADULT":
            ++iAdultCount;
            ++iPaxCount;
            console.log(iAdultCount)
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            break;
        case "CHILD":
            ++iChildCount;
            ++iPaxCount;
            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            ++iInfantCount;
            if (iInfantCount > iAdultCount && iAdultCount == 0) {
                alert('소아는 성인 한 명이 같이 동반 해야함!')
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
    let person = $(".person_cnt").text();
    let go1 = $("#go_area1").text();
    let arr1 = $("#arr_area1").text().trim();
    let godate = $("#godate").text();

    let sub = godate.substr(5, 14);

    $(".person_num").text(person);
    $(".go_default").attr("value", go1);
    $(".arrive_default").attr("value", arr1);
    $(".go_date_default").attr("value", sub);
}