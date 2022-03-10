$(function () {
    $('.nav2').find('a').css({"color":"#BDD600"});
    $('.nav2').siblings('li').css({"display":"block"});
    $('.nav2').siblings('li').eq(2).find('a').css({"color":"#BDD600"});

    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('span').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(2).find('a').css({"color":"#BDD600"});
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
        $(this).parents().siblings().find('a').css({"color":"#adb5bd"});
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
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#BDD600"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(2).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#adb5bd"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(2).find('a').css({"color":"#BDD600"});
    })


    //데이터 리스트
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        }
    });

    searchStart();

    function searchStart(){
        $.get("/api/airplane/list", function(response){
            console.dir(response);
            itemList.itemList = response.data;
        })
    };

    function register(){
        let apname = document.getElementById("apName").value;
        let apid = document.getElementById("apId").value;
        let apseatsum = document.getElementById("apSeatSum").value;
        let apseatbiz = document.getElementById("apSeatBiz").value;
        let apseatplus = document.getElementById("apSeatPlus").value;

        let airplaneData = {
            data: {
                apName: apname,
                apId: apid,
                apSeatSum: apseatsum,
                apSeatBiz: apseatbiz,
                apSeatPlus: apseatplus
            }
        }

        console.log(airplaneData);

        $.ajax({
            url : '/api/airplane',
            type : 'POST',
            dataType : 'json',
            data : JSON.stringify(airplaneData),
            dataType:"text",
            contentType : "application/json"
        });
    }

    $('#regist').click( () =>{
       register();
       location.href='/pages/admin/airplane';
    })
});


