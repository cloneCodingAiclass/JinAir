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
        if (result == '?????? ?????? ??????') {
        $('.point_category').show();
        } else {
        $('.point_category').hide();
        }
    });

    $('#select_box').change(function() {
        $('.select_user').hide();
        let result = $('#select_box option:selected').val();
        if (result != '?????? ?????? ??????') {
        $('.user_category').show();
        } else {
        $('.user_category').hide();
        }
    });
    $('.select_rs').hide();
    $('#reserveUserBtn').on('click', function() {
        $('.select_rs').show();
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

    // ?????? ??????
    let memList = new Vue({
        el : '#memList',
        data : {
            memList : {}
        }
    })

    let resList = new Vue({
        el : '#resList',
        data : {
            resList : {}
        }
    })

    area();
    airplaneType();

    // ????????? ?????? ????????? ??????
    function airplaneType(){
        $.get("/api/airplane/list", function (response){
            console.dir(response)
            let arr = response.data.map(function (val, index){
                return val['apType']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            for (let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#schAirplaneType').append(option);
            }

        })
    }

    $(document).on('click', '#findName', function (){
        airplaneName($('#schAirplaneType').find('option:selected').val());
    })

    // ????????? ????????? ?????? ?????? ??????
    function airplaneName(type) {
        $('#airplaneName').find('option').remove();
        $.get("/api/airplane/list/" + type, function (response){

            let arr = response.data.map(function (val, index){
                return val['apName']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            for(let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#airplaneName').append(option);
            }
        })
    }

    // ????????? ????????? ????????? ??????
    function area(){
        $.get("/api/airport/list", function (response){
            // ????????? ?????????
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#departure_point').append(option);
            }
            // ????????? ?????????
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
        if(!$('#airplaneName').find('option:selected').val() || !$('#start').val()){
            alert('????????? ??????????????????')
        }else {
            searchSch($('#schAirplaneType').find('option:selected').val(), $('#airplaneName').find('option:selected').val(), $('#departure_point').find('option:selected').val(), $('#arrive_point').find('option:selected').val(), $('#start').val() + 'T08:00:00')
            $('#schList').find('option').remove();
        }
    })

    // ????????? ??????
    function searchSch(schAirplaneType, schAirplaneName, schDeparturePoint, schArrivalPoint, schDepartureDate){
        $.post({
            url : '/api/schedule/list/find',
            data : "schAirplaneType=" + schAirplaneType + "&schAirplaneName=" + schAirplaneName + "&schDepartureDate=" + schDepartureDate + "&schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dataType: 'text',
            success : function (response){
                let dataJson = JSON.parse(response);
                for(let i = 0; i < dataJson.data.length; i++){
                    let option = document.createElement('option');
                    option.innerText = dataJson.data[i].schStartTime.substr(11, 8);
                    option.value = dataJson.data[i].schStartTime.substr(11, 8);
                    $('#schList').append(option);
                }
            }
        })
    }


    // ?????? ????????? ??????
    function searchUserid(userid){
        $.get("/api/user/search/"+userid, function (response){
            console.dir(response)
            if(response.data.length == 0){
                alert("?????? ????????? ????????????")
                $('.select_user').hide();
            }else {
                memList.memList = response.data;
            }

        })
    }

    let size = 0;

    $('#reserveUserBtn').on('click', function (){
        let aptype = $('#schAirplaneType').find('option:selected').val();
        let apname = $('#airplaneName').find('option:selected').val();
        let startTime = $('#start').val() + 'T' + $('#schList').find('option:selected').val();
        let startPoint = $('#departure_point').find('option:selected').val();
        let arrPoint = $('#arrive_point').find('option:selected').val();
        if(!startTime){
            alert('????????? ??????????????????!')
        }else{
            $.post({
                url: "/api/reservation/searchForUser",
                data : "airType=" + aptype + "&airName=" + apname + "&startTime=" + startTime + "&startPoint=" + startPoint + "&arrivePoint=" + arrPoint,
                dataType: 'text',
                success: function (response){
                    let jsonData = JSON.parse(response)
                    console.dir(jsonData)

                    resList.resList = jsonData.data;

                    size = jsonData.data.length;
                }
            })
        }

    })

    $('.btn_usersearch').on('click', function (){
        if(!$('#userid').val()){
            alert('???????????? ??????????????????')
        }else{
            if(!searchUserid($('#userid').val())) {
                searchUserid($('#userid').val());
                $('.select_user').show();
            }
        }
    })

    // 1??? ????????? ??????
    $(document).on('click', '#updatePoint', function (){
        console.log($('#searched:checked').val());
        let jsonData = {
            data : {
                poPoint : $('#pointNumber2').val(),
                poMemo : $('#pointMemo2').val(),
                poUserindex: $('#searched:checked').val()
            }
        }
        $.post({
            url : '/api/point',
            data : JSON.stringify(jsonData),
            dataType : 'text',
            contentType : 'application/json',
            success : function (){
                alert('????????????');
                location.reload();
            },
            error : function (){
                alert('?????? ?????? \n ????????? ??????????????????')
                location.reload();
            }
        })
    })

    // ?????? ????????? ??????
    $(document).on('click', '#updatePointList', function (){
        let arr = [];
        let userIdx;
        for(let i = 0; i < size; i++){
            userIdx = $(`#schUser${i}:checked`).val();
            let arrData;
            $('input:checkbox[class="schUser"]:checked').each(function (){
                arrData = {};
                arrData.poUserindex = userIdx;
                arrData.poPoint = $('#pointNumber1').val();
                arrData.poMemo = $('#pointMemo1').val();
            })
            arr.push(arrData);
        }
        console.dir(arr)
        $.post({
            url : '/api/point/saveAll',
            data : JSON.stringify(arr),
            dataType : 'text',
            contentType : 'application/json',
            success : function (){
                alert('????????????');
                location.reload();
            },
            error : function (){
                alert('?????? ?????? \n ????????? ??????????????????')
                location.reload();
            }
        })
    })

})(jQuery)