$(function () {
    $('.nav9').find('a').css({"color":"#BDD600"});
    $('.nav9').siblings('li').css({"display":"block"});
    $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav9').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav9').find('a').css({"color":"#BDD600"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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

    let pointList = new Vue({
        el : '#pointList',
        data : {
            pointList : {}
        }
    })


    list(0);

    let page;

    function list(page){
        // 포인트 리스트
        $.get('/api/point?page='+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            pointList.pointList = response.data;

            // 유저
            for(let i = 0; i < response.data.length; i++){
                $.get('/api/user/'+ response.data[i].poUserindex, function (response2){
                    $(`#userid${i}`).text(response2.data.memUserid)
                })
            }

            // 유저의 총 포인트
            for(let i = 0; i < response.data.length; i++){
                let sum = 0;
                $.get(`/api/point/user/${response.data[i].poUserindex}?page=` + page, function (response3){
                    for(let j = 0; j < response3.data.length; j++){
                        let point = response3.data[j].poPoint;
                        sum += point;
                    }
                    $(`#totalPoint${i}`).text(sum);
                })
            }

            for(let i = 0; i < response.data.length; i++){
                $.get('/api/point', function (response4){
                    if(response4.data[i].poPoint > 0){
                        // 적립 내역
                        console.log('적립')
                        console.log(response4.data[i].poPoint)
                        $(`#addPoint${i}`).text(response4.data[i].poPoint)
                        $(`#usePoint${i}`).text('-')
                    }else{
                        // 사용 내역
                        console.log('사용')
                        console.log(response4.data[i].poPoint)
                        $(`#addPoint${i}`).text('-')
                        $(`#usePoint${i}`).text(response4.data[i].poPoint)
                    }
                })
            }

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

    $('#searchUser').on('click', function (){
        searchList($('#userid').val(), 0)
    })

    // 사용자 아이디로 검색
    function searchList(userid, page){
        $.get("/api/user/search/" + userid, function (response){
            let idx = response.data[0].memIndex;
            // 사용자 포인트 리스트
            $.get(`/api/point/user/${idx}?page=`+ page, function (response){
                console.dir(response)
                indexBtn = [];
                pagination = response.pagination;

                showPage.totalElements = pagination.currentPage;
                showPage.currentPage = pagination.currentPage;

                pointList.pointList = response.data;

                // 유저
                for(let i = 0; i < response.data.length; i++){
                    $.get('/api/user/'+ response.data[i].poUserindex, function (response2){
                        $(`#userid${i}`).text(response2.data.memUserid)
                    })
                }

                // 유저의 총 포인트
                for(let i = 0; i < response.data.length; i++){
                    let sum = 0;
                    $.get(`/api/point/user/${idx}?page=` + page, function (response3){
                        for(let j = 0; j < response3.data.length; j++){
                            let point = response3.data[j].poPoint;
                            sum += point;
                        }
                        if(sum < 0){
                            $(`#totalPoint${i}`).text(0);
                        }else{
                            $(`#totalPoint${i}`).text(sum);
                        }
                    })
                }

                for(let i = 0; i < response.data.length; i++){
                    $.get(`/api/point/user/${idx}?page=` + page, function (response4){
                        if(response4.data[i].poPoint > 0){
                            // 적립 내역
                            console.log('적립')
                            console.log(response4.data[i].poPoint)
                            $(`#addPoint${i}`).text(response4.data[i].poPoint)
                            $(`#usePoint${i}`).text('-')
                        }else{
                            // 사용 내역
                            console.log('사용')
                            console.log(response4.data[i].poPoint)
                            $(`#addPoint${i}`).text('-')
                            $(`#usePoint${i}`).text(response4.data[i].poPoint)
                        }
                    })
                }


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
        })
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

})(jQuery)