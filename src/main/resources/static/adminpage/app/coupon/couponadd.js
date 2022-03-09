$(function () {
    $('.nav10').find('a').css({"color":"#BDD600"});
    $('.nav10').siblings('li').css({"display":"block"});
    $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

    $('#add_btn').on('click', function () {
        let text = "";
        let title = $('#title').val();
        let nation = $('#nation option:selected').text();
        let route = $('#route option:selected').text();
        let discount = $('#discount').val();
        let startDate = $('#startDate').val();
        let endDate = $('#endDate').val();
        let totalcoupon = $('#totalcoupon').val();

        text += '<p>' + '타이틀 : ' + title + nation + ' / ' + route + '<br> 할인율 : ' + discount + "%<br> 기간 : " + startDate + " ~ " + endDate + " <br> 총 " + totalcoupon + "매의 쿠폰을 발급하겠습니다." + '</p>'

        if (title == "" || totalcoupon == "" || discount == "" || startDate == "" || endDate == "") {
            location.reload();
        } else {
            document.getElementById("modal_isfind_title").innerHTML = text;
        }
    });

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

    function sclist(index) {
        $.get("/api/coupon/list?page=" + index, function (response) {
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

            for (NumberPage; NumberPage < last; NumberPage++) {
                url += '<td id="' + NumberPage + '" class="pageButton">' + (NumberPage + 1) + '</td>';
            }
            document.getElementById("button").innerHTML = url;

            $(".pageButton").on('click', function () {
                index = $(this).attr("id");
                sclist(index);
            })
        })
    }
});

$(()=> {
    $(".coupon_btn").on('click', () => {
        $("#modal_isfind").css('display', 'flex');
        $("#modal_isfind").fadeIn();
    })
    $(".complete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
})