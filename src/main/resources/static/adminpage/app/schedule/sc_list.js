$(function () {

    $('.nav2').find('a').css({"color":"#BDD600"});
    $('.nav2').siblings('li').css({"display":"block"});
    $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

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
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#adb5bd"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.modal_container').hide();

    $('.btn_search').on('click', function(){
        $('.modal_container').fadeIn(200);
    })
    $('.modal_cancel').on('click', function(){
        $('.modal_container').fadeOut(200);
    })

    let pagination = {
        totalPages : 0,
        totalElements : 0,
        currentPage : 0,
        currentElements : 0
    };

    let showPage = new Vue({
        el : '#showPage',
        data : {
            totalPages : {},
            currentPage : {}
        }
    });

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        }
    })

    sclist(0);

    function sclist(index){
        $.get("/api/schedule/list?page="+index, function(response){
            console.dir(response);

            pagination = response.pagination;

            showPage.totalPages = pagination.totalPages;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;

            // 검색 데이터
            itemList.itemList = response.data;

            let url = "";
            let NumberPage = 0;
            let last = showPage.totalPages;

            for (NumberPage; NumberPage < last; NumberPage++){
                url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
            }
            document.getElementById("button").innerHTML = url;

            $(".pageButton").on('click', function (){
                index = $(this).attr("id");
                sclist(index);
            })
        })
    }

    // 조건으로 찾기
    function findByDate(schAirplaneId, schDepartureDate, schDeparturePoint, schArrivalPoint){
        $.post({
            url: "/api/schedule/list/find",
            data: "schAirplaneId=" + schAirplaneId + "&schDepartureDate=" + schDepartureDate + "&schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dateType: 'text',
            success : function(response){
                console.dir(response);
                itemList.itemList = response.data;
            }
            // 검색 데이터
        });
    }

    $('.modal_search').on('click', function (){
        let schAirplaneId = $('#schAirplaneId').val();
        let schDepartureDate = $('#schDepartureDate').val() + "T08:00:00";
        let schDeparturePoint = $('#schDeparturePoint').val();
        let schArrivalPoint = $('#schArrivalPoint').val();
        console.log(schAirplaneId)
        console.log(schDepartureDate)
        console.log(schDeparturePoint)
        console.log(schArrivalPoint)
        findByDate(schAirplaneId, schDepartureDate, schDeparturePoint, schArrivalPoint);

        $('.modal_container').fadeOut(200);
    });
});