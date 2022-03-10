$(function () {
    $('.modal_container').hide();

    $('.sc_add').on('click', function(){
        $('.modal_container').fadeIn(200);
    })
    $('.btn_cancel').on('click', function(){
        $('.modal_container').fadeOut(200);
    })

    $('.nav2').find('a').css({"color":"#BDD600"});
    $('.nav2').siblings('li').css({"display":"block"});
    $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});

    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd)"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#adb5bd"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

    // 24시간 표시
    $(document).ready(function (){
        $('input.timepicker').timepicker({
            timeFormat: "HH:mm",
            interval: 30,
            startTime : '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        })
    })


    let apList = new Vue({
        el : '#aplist',
        data : {
            apList : {}
        }
    })

    sclist();

    function sclist(){
        $.get("/api/airplane/list", function(response){
            console.dir(response);

            // 검색 데이터
            apList.apList = response.data;

        })
    }
    $("#adid").change(function (){
        let seat = $(this).val();
        $("#resultseat").val(seat);
    })

    function register(){
        let apname = document.getElementById("apname").value;
        let apid = document.getElementById("adid").text;
        let startdate = document.getElementById("startdate").value + "T08:00:00";
        let departurepoint = document.getElementById("departurepoint").value;
        let starttime = "2000-01-01T" + document.getElementById("starttime").value;
        let arrivalpoint = document.getElementById("arrivalpoint").value;
        let arrivaldate = "2000-01-01T" + document.getElementById("arrivaldate").value ;
        let resultseat = document.getElementById("resultseat").value;
        let flyingtime = "2000-01-01T" + document.getElementById("flyingtime").value;
        let price = document.getElementById("price").value;
        let point = document.getElementById("point").value;

        let schedule = {
            data: {
                schAirplaneName: apname,
                schAirplaneId: apid,
                schDepartureDate: startdate,
                schDeparturePoint: departurepoint,
                schStartTime: starttime,
                schArrivalPoint: arrivalpoint,
                schArrivalDate: arrivaldate,
                schAirplaneSeat: resultseat,
                schFlyingTime: flyingtime,
                schBasicPrice: price,
                schPoint: point
            }
        }

        $.ajax({
            url : '/api/schedule',
            type : 'POST',
            dataType : 'json',
            data : JSON.stringify(schedule),
            dataType:"text",
            contentType : "application/json"
        });
    }

    $('#regist').click( () =>{
        register();
        location.href='/pages/admin/scheduleList';

    })
});