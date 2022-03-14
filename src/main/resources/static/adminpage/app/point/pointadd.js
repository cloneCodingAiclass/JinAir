$(function () {
    $('.nav9').find('a').css({"color":"#BDD600"});
    $('.nav9').siblings('li').css({"display":"block"});
    $('.nav9').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
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
        $('.nav9').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav9').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav9').find('a').css({"color":"#BDD600"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav9').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav9').find('a').css({"color":"#BDD600"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

    $('.point_category').hide();
    $('#select_box').change(function() {
        $('.select_rs').hide();
        let result = $('#select_box option:selected').val();
        if (result == '이륙 지원 보상') {
        $('.point_category').show();
        } else {
        $('.point_category').hide();
        }
    });

    $('#select_box').change(function() {
        $('.select_user').hide();
        let result = $('#select_box option:selected').val();
        if (result != '이륙 지원 보상') {
        $('.user_category').show();
        } else {
        $('.user_category').hide();
        }
    });
    $('.select_rs').hide();
    $('#reserveUserBtn').on('click', function() {
        $('.select_rs').show();
    });

    $('.select_user').hide();
    $('.btn_usersearch').on('click', function() {
        $('.select_user').show();
    });
});

(function ($){
    let memIndex;

    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    // 유저 목록
    let memList = new Vue({
        el : '#memList',
        data : {
            memList : {}
        }
    })

    area();
    airplane();

    // 항공기 종류 데이터 목록
    function airplane(){
        $.get("/api/airplane/list", function (response){
            console.dir(response)
            for (let i = 0; i < response.data.length; i++){
                let a = response.data[i].apName;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#airplaneId').append(option);
            }
        })
    }

    // 출발지 도착지 데이터 목록
    function area(){
        $.get("/api/airport/list", function (response){
            // 출발지 셀렉트
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#departure_point').append(option);
            }
            // 도착지 셀렉트
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#arrive_point').append(option);
            }
        })
    }


    $('#searchSch').on('click', function (){
        console.log($('#airplaneId').find('option:selected').val(), $('#departure_point').find('option:selected').val(), $('#arrive_point').find('option:selected').val(), $('#start').val() + 'T08:00:00')
        searchSch($('#airplaneId').find('option:selected').val(), $('#departure_point').find('option:selected').val(), $('#arrive_point').find('option:selected').val(), $('#start').val() + 'T08:00:00')
    })

    // 스케줄 목록
    function searchSch(schAirplaneName, schDeparturePoint, schArrivalPoint, schDepartureDate){
        $.post({
            url : '/api/schedule/list/find',
            data : "schAirplaneName=" + schAirplaneName + "&schDepartureDate=" + schDepartureDate + "&schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dataType: 'text',
            success : function (response){
                let dataJson = JSON.parse(response);
                console.dir(dataJson);
                for(let i = 0; i < dataJson.data.length; i++){
                    let option = document.createElement('option');
                    option.innerText = dataJson.data[i].schDeparturePoint + '->' + dataJson.data[i].schArrivalPoint + ' ' + dataJson.data[i].schStartTime;
                    option.value = dataJson.data[i].schDeparturePoint + '->' + dataJson.data[i].schArrivalPoint + ' ' + dataJson.data[i].schStartTime;
                    $('#schList').append(option);
                }
            }
        })
    }

    // 스케줄을 통한 유저 검색
    function searchSchofUser(data){
        let time;
        $.post({
            url : "",
            data : "time=" + time,
            dataType : 'text',
            success : function (response){
                memList.memList = response.data;
            }
        })
    }

    // 유저 아이디 검색
    function searchUserid(userid){
        $.get("/api/user/search/"+userid, function (response){
            memList.memList = response.data;

            memIndex = response.data[0].memIndex;
            $('#memIndex').val(memIndex)
        })
    }

    $('#reserveUserBtn').on('click', function (){
        searchSchofUser($('.country_box').find('option:selected').val(), $('#start').val(), $('.airport_box').find('option:selected').val());
    })

    $('.btn_usersearch').on('click', function (){
        searchUserid($('#userid').val());
    })
/*
    // 인덱스 값을 못 뽑아옴
    $('#updatePoint').on('click', function (){
    })
 */
    /*
    function searchSch(){
        $.get("")
    }
     */
})(jQuery)