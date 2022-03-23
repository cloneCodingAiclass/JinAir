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

    $(".birthD").each(function (i){
        let age = $('.birthD').eq(i).attr("value");
        let resultAge = 2022 - age.substr(0, 4);

        console.log(age)
        console.log(resultAge)
        let result = "";
        if(resultAge > 13){
            result = "성인";
            $('.birthD').eq(i).html(result);
        }else if(resultAge < 13){
            result = "소아"
            $('.birthD').eq(i).html(result);
        }else if(resultAge < 12){
            result = "유아"
            $('.birthD').eq(i).html(result);
        }
    })
    // 예약 번호 출력
    let reserNum = "";
    for(let i = 0; i < 6; i++){
        let ranstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        reserNum += ranstr.charAt(Math.floor(Math.random() * ranstr.length))
    }
    console.log(reserNum)
    $("#modal_fare_rules .butt_ok").on("click", () => {
        if ($("#modal_fare_rules #checkBox2").is(":checked")) {
            let final = new Array();
            $('.cookies').each(function (i) {
                let reIndex = $('.cookies').eq(i).attr("value");
                let finalarr = new Object();
                finalarr.reIndex = reIndex;
                finalarr.reTotal = price;
                finalarr.rePayment = "KAKAOPAY";
                finalarr.reReserNum = reserNum;
                finalarr.reExtraSale = $('#sel_coupon option:selected').attr("value2");
                finalarr.reStatus = "PaymentFinished";
                final.push(finalarr);
            });

            $.ajax({
                url: "/api/reservation/paymentsUpdate",
                type: "PUT",
                data: JSON.stringify(final),
                dataType: "text",
                contentType: "application/json",
                async: false,
                success: function (final) {
                    location.href = "/pages/pay/" + reserNum;
                },error(error) {
                    console.log('error')
                    console.dir(error)
                }
            });

            $("#modal_fare_rules").fadeOut();
        }else {
            $("#modal_fare_rules > .modal_conf_ok_wrap").fadeIn();
        }
    });
    if (str[5] == 'oneway'){
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1, #tripinfo1').text('편도');
        $('.arrow_img, .jour2_wrap, .multiway').css('display', "none");
        $('.fare_info').css('height', '140px');

    }else if (str[5] == 'multiway') {
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1, #triptype2, #tripinfo1, #tripinfo2').text('다구간');
        $('.jour2_wrap, .multiway').css('display', "flex");

        $(".arrow_img").on("click", function () {
            $(".arrow_img").css("display", "none");
            $(".arrow_up_img").css("display", "block");
            $(".trip_info2").slideDown(200);
        });
        $(".arrow_up_img").on("click", function () {
            $(".arrow_img").css("display", "block");
            $(".arrow_up_img").css("display", "none");
            $(".trip_info2").slideUp(200);
        });
    }else if (str[5] == 'twoway') {
        // 여행 타입에 따른 값, 클릭이벤트 변경
        $('#triptype1, #triptype2, #tripinfo1, #tripinfo2').text('왕복');
        $('.jour2_wrap, .multiway').css('display', "flex");

        $(".arrow_img").on("click", function () {
            $(".arrow_img").css("display", "none");
            $(".trip_info2").slideDown(200);
            $(".arrow_up_img").css("display", "block");
        });
        $(".arrow_up_img").on("click", function () {
            $(".arrow_img").css("display", "block");
            $(".arrow_up_img").css("display", "none");
            $(".trip_info2").slideUp(200);
        });
    }else{
        alert("잘못된 경로입니다.");
        history.back();
    }

    // 멤버정보 가져오기
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

    $(".modal_conf_ok_wrap .butt_conf").on("click", () => {
        $("#modal_fare_rules .modal_conf_ok_wrap").fadeOut();
    });

    let sel_coupon = new Vue({
        el : '#sel_coupon',
        data : {
            sel_coupon : {}
        }
    })

    let memIndex;
    $('.memid').each(function (i){
        memIndex = $('.memid').eq(i).attr("value");
        console.log(memIndex);
    });

    couponList(memIndex);

    function couponList(memIndex){
        $.get("/api/userCoupon/couponList/"+memIndex+"/Unused", function (response){
            console.dir(response);
            sel_coupon.sel_coupon = response.data;
        })
    }

});



