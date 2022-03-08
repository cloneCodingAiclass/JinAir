$(function () {
    $('.nav6').find('a').css({"color":"#BDD600"});
    $('.nav6').siblings('li').css({"display":"block"});
    
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
        $('.nav6').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav6').find('a').css({"color":"#BDD600"});
        $('.nav6').siblings('li').css({"display":"block"});
        $('.nav6').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav6').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav6').find('a').css({"color":"#BDD600"});
        $('.nav6').siblings('li').css({"display":"block"});
        $('.nav6').parent().siblings().find('li').css({"display":"none"});
    })



});

(function ($) {


    let notiList = new Vue({
        el : '#notiList',
        data : {
            notiList : {}
        }
    })

    let searchStr =  "";

    list(0);

    function list(page){
        $.get("/api/notify/list?page="+page, function(response){
            console.dir(response);
            notiList.notiList = response.data;
            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pages' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str);
            $(".pages").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });

        })
    };



    // 검색 데이터
    function searchNoti(key, page){
        $.get("/api/notify/searchlist/" + key + "?page=" + page, function(response){
            console.dir(response)
            notiList.notiList = response.data;
            let lastPage = response.pagination.totalPages;
            let str2 = "";
            console.log("마지막 페이지2 : " + lastPage);
            for (let i = 0; i < lastPage; i++) {
                str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str2);

            $(".pagesS").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
        });
    }

    $(document).on('click', '#searchNoti', function(){
        searchStr = $('#searchText').val();
        searchNoti(searchStr, 0);
        if ( searchStr.length == 0){
            alert('검색어를 확인해주세요.');
            searchNoti(searchStr, 0);
        }
    });

    $(document).on('click', '.pages', function(){
        let pageId = this.id;
        list(pageId);
    });

    $(document).on('click', '.pagesS', function(){
        let pageId2 = this.id;
        searchNoti(searchStr, pageId2);
    });

})(jQuery);
