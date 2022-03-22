$(function () {
    $('.nav4').find('a').css({"color":"#BDD600"});
    $('.nav4').siblings('li').css({"display":"block"});
    $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

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
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav4').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav4').find('a').css({"color":"#BDD600"});
        $('.nav4').siblings('li').css({"display":"block"});
        $('.nav4').parent().siblings().find('li').css({"display":"none"});
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav4').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav4').find('a').css({"color":"#BDD600"});
        $('.nav4').siblings('li').css({"display":"block"});
        $('.nav4').parent().siblings().find('li').css({"display":"none"});
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
});

(function ($) {

    let indexBtn = [];

    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    // 페이지 정보
    let showPage = new Vue({
        el : '#showPage',
        data : {
            totalElements : {},
            currentPage : {}
        }
    })

    let memberList = new Vue({
        el : '#memList',
        data : {
            memberList : {}
        }
    })

    let page;

    list(0);

    function list(page){
        console.log("page : " + page);
        $.get("/api/user?page="+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;
            console.dir(showPage);

            memberList.memberList = response.data;

            let lastPage = response.pagination.totalPages;
            let str2 = "";
            str2 += "<td class='firstPage2'><<</td>";
            for ( let i = 0; i < lastPage; i++ ) {
                str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
            }
            str2 += "<td class='lastPage2'>>></td>";
            $("#showPage").html(str2);
            if ( page == 0 ) {
                $(".firstPage2").css("visibility", "hidden");
            }
            if ( page == lastPage-1 || response.totalElements != 0 ) {
                $(".lastPage2").css("visibility", "hidden");
            }
            if ( response.pagination.totalElements == 0 ) {
                alert("검색결과가 없습니다.");
                list(0);
            }
            $(".pagesS").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(document).on('click', '.firstPage2', function(){
                searchNoti(searchStr, 0);
            });
            $(document).on('click', '.lastPage2', function(){
                searchNoti(searchStr, lastPage-1);
            });
        })
    }

    function search(id){
        $.get("/api/user/search/" + id, function (response){
            console.dir(response);
            memberList.memberList = response.data;

            $("#footer").css("display", "none");
        })
    }

    $("#searchSubmit").click(() => {
        search($("#searchUserid").val());
        if($("#searchUserid").val() == null){
            alert("검색어를 확인해주세요");
        }
    })

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
