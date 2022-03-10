$(function () {
    $('.nav10').find('a').css({"color":"#BDD600"});
    $('.nav10').siblings('li').css({"display":"block"});
    $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })


    $('#add_btn').on('click', function () {
        let text = "";
        let title = $('#title').val();
        let discount = $('#discount').val();
        let startDate = $('#startDate').val();
        let endDate = $('#endDate').val();
        let totalcoupon = $('#totalcoupon').val();
        let crprice = $('#crprice').val();
        let type = $('#type').val();

        text += '<p>' + '타이틀 : ' + title + ' / ' + '<br> 할인율 : ' + discount + "%<br> 기간 : " + startDate + " ~ " + endDate +
            " <br> 판매 포인트 : " + crprice + "<br> 총 " + totalcoupon + "매의 쿠폰을 발급하겠습니다." + '</p>'
        //
        // if (title == "" || totalcoupon == "" || discount == "" || startDate == "" || endDate == "" || crprice == "") {
        //     alert('미입력 정보가 있습니다.');
        //     location.reload();
        // } else {
            document.getElementById("modal_isfind_title").innerHTML = text;
        //
        // let arr = new Array();
            $('.complete').on('click', function (){
                // for(let i = 0; i < totalcoupon; i++){
                //     // register();
                //     let arrData = new Object();
                //     arrData.crType = type;
                //     arrData.crPrice = crprice;
                //     arrData.crDesc = title;
                //     arrData.crDiscount = discount;
                //     arrData.crIssuanceDay = startDate;
                //     arrData.crEndDay = endDate;
                //     arrData.crTotCoupon = totalcoupon;
                //     arrData.crStockCoupon = totalcoupon;
                //     arrData.crStatus = "Addcoupon";
                //     arrData.crCode = 0;
                //     arr.push(arrData);
                // }
                // console.dir(arr);
                register()
            });
        // }
    });

    let airPort = new Vue({
        el : '#airPortList',
        data : {
            airPort : {}
        }
    })

    airPortList();

    // 공항 정보 옵션용
    function airPortList() {
        $.get("/api/airport/list", function (response) {
            console.dir(response);

            airPort.airPort = response.data;
        });
    }

    // 쿠폰 등록
    function register(){

        type = $('#type').val();
        crprice = $('#crprice').val();
        title = $('#title').val();
        discount = $('#discount').val();
        startDate = $('#startDate').val() + "T00:00:00";
        endDate = $('#endDate').val() + "T00:00:00";
        totalcoupon = $('#totalcoupon').val();
        crCode = Math.random().toString(36).substr(2,15).toUpperCase();

        let coupon = {
            data : {
                crType: type,
                crPrice: crprice,
                crDesc: title,
                crDiscount: discount,
                crIssuanceDay: startDate,
                crEndDay: endDate,
                crTotCoupon: totalcoupon,
                crStockCoupon : totalcoupon,
                crStatus : "AddCoupon",
                crCode : crCode
            }
        }
        $.ajax({
            url : '/api/coupon',
            type : 'POST',
            dataType : 'json',
            data : JSON.stringify(coupon),
            dataType:"text",
            contentType : "application/json",
            success(coupon){
                alert("등록이 완료되었습니다.");
                location.reload()
            },
            error(error){
                alert("등록에 실패했습니다.")
            }
        });
    }

});

$(()=> {
    $(".coupon_btn").on('click', () => {
        $("#modal_isfind").css('display', 'flex');
        $("#modal_isfind").fadeIn();
    })
    $(".complete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
})