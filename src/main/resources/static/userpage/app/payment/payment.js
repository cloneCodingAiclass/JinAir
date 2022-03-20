// reIndex 정보 가져오기
$(() => {
    let str = $(location).attr('href').split('/');
    let priceT = 0;

    // 날짜 자르기
    let spst1 = $('#spanStart1').attr("value").split("T");
    let spst2 = $('#spanStart2').attr("value").split("T");
    let spend1 = $('#spanEnd1').attr("value").split("T");
    let spend2 = $('#spanEnd2').attr("value").split("T");
    $('#spanStart1, #goArea1').text(" " + spst1[0] + " " + spst1[1]);
    $('#spanEnd1, #arrArea1').text(" " + spend1[0] + " " + spend1[1]);
    $('#spanStart2, #goArea2').text(" " + spst2[0] + " " + spst2[1]);
    $('#spanEnd2, #arrArea2').text(" " + spend2[0] + " " + spend2[1]);

    $('.areaPrice').each(function (i){
        let price = Number($('.areaPrice').eq(i).attr("value"));
        priceT += price;
        $('.areaPrice').eq(i).text(Math.ceil(price).toLocaleString());
    })
    $('.areaTtotal').text(Math.ceil(priceT).toLocaleString());
    let oil = 4000;
    let oilT = 0;
    let tax = 5000;
    let taxT = 0;
    // 유류 할증료
    $('.oil').each(function (i){
        $('.oil').eq(i).text(oil.toLocaleString());
        oilT += oil;
    })
    $('.oilT').text(oilT.toLocaleString());

    $('.tax').each(function (i){
        $('.tax').eq(i).text(oil.toLocaleString());
        taxT += tax;
    })
    $('.taxT').text(taxT.toLocaleString());

    let priceSum = priceT + oilT + taxT;
    $('.priceSum').text(Math.ceil(priceSum).toLocaleString());


    // 운임료 구하기
    let optPrice = $('.optPrice').text();

    // 총 운임료
    let price = Number(priceSum) + Number(optPrice);

    $('#pPrice').text(Math.ceil(price).toLocaleString('ko-KR'));
    $('#totalPrice').text(Math.ceil(price).toLocaleString('ko-KR'));

    // 쿠폰 디스카운트 요금 더하기기
    $('#checkBut').on('click', function (){
        let optval = $('#sel_coupon option:selected').val();            // 디스카운트율
        console.log(optval);

        let dis = price * (optval*0.01);
        $('#disC').text(Math.ceil(dis).toLocaleString('ko-KR'));
        let tot = price-dis;

        $('#totalPrice').text(Math.ceil(tot).toLocaleString('ko-KR'));
    });
    console.log(str[5])

    $('#finalPayment').on('click', function (){
        let status = 'PaymentFinished';
        let arr = [];
        $('.cookies').each(function (i){
            let arr1 = new Object();
            arr.reTotal = price;
            arr.rePayment = "KAKAOPAY";
            arr.
        })

        $.get({
            url : "/api/reservation",
            data : JSON.stringify()

        })
    })
    if (str[5] == 'oneway'){
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1, #tripinfo1').text('편도');
        $('.arrow_img, .jour2_wrap, .multiway').css('display', "none");
        $('.fare_info').css('height', '140px');

    }
    if (str[5] == 'multiway') {
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1,  #tripinfo1').text('왕복');

    }
    if (str[5] == 'twoway') {
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1, #triptype2').text('편도');

    }

});

// 클릭 이벤트(왕복, 다구간용)
//
// $(".arrow_img").on("click", function () {
//     $(".arrow_img").css("display", "none");
//     $(".trip_info2").slideDown(200);
//     $(".arrow_up_img").css("display", "block");
// });
// $(".arrow_up_img").on("click", function () {
//     $(".arrow_img").css("display", "block");
//     $(".arrow_up_img").css("display", "none");
//     $(".trip_info2").slideUp(200);
// });

$(function () {
    // 멤버정보 가져오기
    let memIndex = $('#memid').val();

    /*운임 규정 안내 모달창 */
    $("#modal_fare_rules").hide();
    $("#modal_fare_rules .modal_conf_ok_wrap").hide();

        /* 운송제한품목 체크 후 결제 이동*/
    $(".butt_pay").on("click", () => {
        let checkbox_wrap = $('#modal_checkbox').is(':checked');
        if (checkbox_wrap) {
            $("#modal_fare_rules").css('display', 'flex');
            $("#modal_fare_rules").fadeIn();
            $("body").css("overflow", "hidden");
        } else {
            $('.false_modal').css('display', 'flex');
            $('.false_modal').fadeIn(200);
            $("body").css("overflow", "hidden");
        }
    });
    // $("#modal_fare_rules").on("click", () => {
    // })
    $('.confirm_btn').click(function () {
        $('.false_modal').hide();
        $("body").css("overflow", "");
    })
    $("#modal_fare_rules .butt_canc, #modal_fare_rules .close").on("click",
        () => {
           $("#modal_fare_rules").fadeOut();
                $("body").css("overflow", "scroll");
    });
    $("#modal_fare_rules .butt_ok").on("click", () => {
        if ($("#modal_fare_rules #checkBox").is(":checked")) {
            let item_name = "초코파이";
            let quantity = 2;
            let total_amount = 2200;
            let vat_amount = 200;
            let tax_free_amount = 0;

            let arr = new Array();
            for (i = 0; i < quantity; i++) {
                let data = new Object();
                data.reTotal = 100000;
                arr.push(data);
            }
            $.post({
                url: "/api/kakao/create",
                data: JSON.stringify(arr),
                async: false,
                success: function(arr) {
                    window.open(arr, 'width=500, height=700');
                    location.href=arr;
                },
                error: function (error) {
                    console.log('error')
                    console.dir(error)
                }
            })
                // $(location).attr("href", "/pages/complete");
            $("#modal_fare_rules").fadeOut();
            $("body").css("overflow", "scroll");
        } else {
            $("#modal_fare_rules > .modal_conf_ok_wrap").fadeIn();
        }
    });

    $(".modal_conf_ok_wrap .butt_conf").on("click", () => {
        $("#modal_fare_rules .modal_conf_ok_wrap").fadeOut();
    });

    let sel_coupon = new Vue({
        el : '#sel_coupon',
        data : {
            sel_coupon : {}
        }
    })

    couponList(memIndex);

    function couponList(memIndex){
        $.get("/api/userCoupon/couponList/"+memIndex+"/Unused", function (response){
            console.dir(response);
            sel_coupon.sel_coupon = response.data;
        })
    }



});

    /*운임 규정 안내 모달창 끝 */
    // $('#modal_fare_rules #checkBox').on('click', function () {
    // });
    //

