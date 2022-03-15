'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })

});

$(() => {
    //최저가
    $(".lcc_search_btn").on('click', function () {
        $(".custom_search, .now_lcc").css("display", "none");
        $(".custom_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".lcc_search").css("display", "block");
        $('.search_list').css('display','none');
    })


    //맞춤
    $(".custom_search_btn").on('click', function () {
        $(".lcc_search, .now_lcc").css("display", "none");
        $(".lcc_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, now_lcc").css("display", "none");
        $(".custom_search").css("display", "block");
        $(".custom_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $('.search_list').css('display','none');
    })

    //지금 이순간
    $(".now_lcc_btn").on('click', function () {
        $(".custom_search, .lcc_search").css("display", "none");
        $(".lcc_search_btn, .custom_search_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, .custom_search").css("display", "none");
        $(".now_lcc").css("display", "block");
        $(".now_lcc_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });

    })
})


$(() => {
    // 출발지 스케줄 검색에 따른 도착지 막기(실패)
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    $('#go_layer1').children().find('a').on('click', function (){
        searchStart($(this).html());
    })
    function searchStart(schDeparturePoint){
        $.post({
            url: "/api/schedule/Departure",
            data: "schDeparturePoint=" + schDeparturePoint,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList.itemList = dataJson.data;
            }
        })
    }

    // 최저가 항공권 검색
    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {}
        },
        methods:{
        }
    });

    $('#searchBtn1').on('click', function (){
        search($('.go_select_optt').val(), $('.arrive_select_optt').val());
    })
    function search(schDeparturePoint, schArrivalPoint){
        $.post({
            url: "/api/schedule/DepAri",
            data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                if(dataJson.data == 0){
                    $('#itemList1').css('display','none');
                    $('#search_null1').css('display','block');
                }else{
                    itemList1.itemList1 = dataJson.data;
                    $('#itemList1').css('display','block');
                    $('#search_null1').css('display','none');
                }
            }
        })
    }

    // 맞춤 항공권 검색
    let itemList2 = new Vue({
        el : '#itemList2',
        data : {
            itemList2 : {}
        },
        methods:{
        }
    });

    $('#searchBtn2').on('click', function (){
        if($('#go_select').val()=="출발지" || $('.go_date_select_optt').val() == "가는날"|| $('.come_date_select_optt').val() == "오는날"){
            $('#itemList2').css('display','none');
            $('#search_null2').css('display','block');
        }else if($('#go_select').val() !="출발지" && $('.go_date_select_optt').val() != "가는날"
            &&  $('.come_date_select_optt').val() != "오는날" && $('#budge_cnt').val() == "100,000"){
            searchss($('#go_select').val(), 100000, $('.go_date_select_optt').val(), $('.come_date_select_optt').val());
        }else{
            searchss($('#go_select').val(), $('#budge_cnt').val(), $('.go_date_select_optt').val(), $('.come_date_select_optt').val());
        }
    })
    function searchss(schDeparturePoint, wishPrice, goDay, comeDay){
        $.post({
            url: "/api/schedule/collaboration",
            data: "schDeparturePoint=" + schDeparturePoint + "&wishPrice=" + wishPrice + "&goDay=" + goDay + "&comeDay=" + comeDay,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                console.log(dataJson.data);
                if(dataJson.data == 0){
                    $('#itemList2').css('display','none');
                    $('#search_null2').css('display','block');
                }else{
                    itemList2.itemList2 = dataJson.data;
                    $('#search_null2').css('display','none');
                    $('#itemList2').css('display','block');
                }
            }
        })
    }


    // 지금 이순간 최저가 항공권 국내
    let itemList3 = new Vue({
        el : '#itemList3',
        data : {
            itemList3 : {}
        },
        methods:{
        }
    });
    LccDomeSearch();
    function LccDomeSearch(){
        $.get({
            url: "/api/schedule/Lcc/국내",
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList3.itemList3 = dataJson.data;
            }
        })
    }

    // 지금 이순간 최저가 항공권 국내
    let itemList4 = new Vue({
        el : '#itemList4',
        data : {
            itemList4 : {}
        },
        methods:{
        }
    });
    LccForiSearch();
    function LccForiSearch(){
        $.get({
            url: "/api/schedule/Lcc/국외",
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList4.itemList4 = dataJson.data;
            }
        })
    }
})
