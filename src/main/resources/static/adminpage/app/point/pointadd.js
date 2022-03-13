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
    $('.btn_search').on('click', function() {
        $('.select_rs').show();
    });

    $('.select_user').hide();
    $('.btn_usersearch').on('click', function() {
        $('.select_user').show();
    });
});

(function ($){
    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    let memList = new Vue({
        el : '#memList',
        data : {
            memList : {}
        }
    })

    // 스케줄 목록
    let schList = new Vue({
        el : '#schList',
        data : {
            schList : {}
        }
    })

    let memIndex;

    // 스케줄 목록
    function searchSch(type, start){
        $.post({
            url : '',
            data : 'type=' + type + '&start=' + start,
            dataType: 'text',
            success : function (response){
                let dataJson = JSON.parse(response);
                schList.scList = dataJson.data;
                for(let i = 0; i < dataJson.data.length; i++){
                    let option = document.createElement('option');
                    option.innerText = dataJson.data[i].schDeparturePoint + '->' + dataJson.data[i].schArrivalPoint + ' ' + dataJson.data[i].schStartTime;
                    option.value = dataJson.data[i].schDeparturePoint + '->' + dataJson.data[i].schArrivalPoint + ' ' + dataJson.data[i].schStartTime;
                    $('.airport_box').append(option);
                }

            }
        })
    }

    // 스케줄을 통한 유저 검색
    function searchSchofUser(type, start, schDate){
        $.post({
            url : "",
            data : "type=" + type + "&start=" + start + "&schDate=" + schDate,
            dataType : 'text',
            success : function (response){
                console.dir(response)
                let dataJson = JSON.parse(response)
                memList.memList = dataJson.data;
            }
        })
    }

    // 유저 아이디 검색
    function searchUserid(userid){
        $.get("/api/user/search/"+userid, function (response){
            console.dir(response)
            memList.memList = response.data;

            memIndex = response.data[0].memIndex;
            $('#memIndex').val(memIndex)
        })
    }

    $('.btn_search').on('click', function (){
        searchSchofUser($('.country_box').find('option:selected').val(), $('#start').val(), $('.airport_box').find('option:selected').val());
    })

    $('.btn_usersearch').on('click', function (){
        searchUserid($('#userid').val());
    })

    $('#updatePoint').on('click', function (){
        console.log($('#memIndex').val())
    })

    /*
    function searchSch(){
        $.get("")
    }
     */
})(jQuery)