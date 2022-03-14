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
    $("#apname").change(function (){
        let seat = $(this).val();
        $("#resultseat").val(seat);
    })

    $('#departurepoint').on('select', function (){
        console.log( $('#departurepoint').val());
    })


    function register(){
        let arrivaldate;

        let date = new Date($('#startdate').val().substring(0,4), $('#startdate').val().substring(5,7)-1, $('#startdate').val().substring(8,10));
        date.setDate(date.getDate()+1);
        let str = date.getMonth()+1;
        if(str<10){
            str = "0" + str;
        }
        let strrr = date.getFullYear()+"-"+str+"-"+date.getDate();


        if($('#arrivaldate').val().substring(0,2) > $('#starttime').val().substring(0,2)){
            arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
        }else if($('#arrivaldate').val().substring(0,2) == $('#starttime').val().substring(0,2)){
            if($('#arrivaldate').val().substring(3,5) > $('#starttime').val().substring(3,5)){
                arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
            }else if($('#arrivaldate').val().substring(3,5) == $('#starttime').val().substring(3,5)){
                arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
            }else{
                arrivaldate = strrr + "T" + document.getElementById("arrivaldate").value ;
            }
        }else{
            arrivaldate = strrr + "T" + document.getElementById("arrivaldate").value ;
        }

        let nationType = $('#nationType').find('option:selected').val();
        let apname = document.getElementById("apname").value;
        let apid = $("#adid option:checked").text();
        let startdate = document.getElementById("startdate").value + "T08:00:00";
        let departurepoint = document.getElementById("departurepoint").value;
        let starttime = document.getElementById("startdate").value+ "T" + document.getElementById("starttime").value;
        let arrivalpoint = document.getElementById("arrivalpoint").value;
        let resultseat = document.getElementById("resultseat").value;
        let flyingtime = "2000-01-01T" + document.getElementById("flyingtime").value;
        let price = document.getElementById("price").value;
        let point = document.getElementById("point").value;

        let schedule = {
            data: {
                schNationType : nationType,
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