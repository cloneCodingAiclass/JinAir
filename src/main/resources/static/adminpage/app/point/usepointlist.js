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

    let point = 0;

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

            let url = "";
            let NumberPage = 0;
            let last = pagination.totalPages;

            for(NumberPage; NumberPage < last; NumberPage++){
                url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
            }
            document.getElementById("footer").innerHTML = url;

            $(".pageButton").on('click', function (){
                page = $(this).attr('id');
                list(page);
            })
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
                        $(`#totalPoint${i}`).text(sum);
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


                let NumberPage = 0;
                let last = pagination.totalPages;

                for(NumberPage; NumberPage < last; NumberPage++){
                    url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
                }
                document.getElementById("footer").innerHTML = url;

                $(".pageButton").on('click', function (){
                    page = $(this).attr('id');
                    list(page);
                })
            })
        })
    }

})(jQuery)