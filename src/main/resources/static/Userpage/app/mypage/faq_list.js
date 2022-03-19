'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
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

    $(document).ready(function(){
        // 퀵 faq 선택시 색 변환
        $('.quick_faq > ul > li').click(function(e){
            $(this).addClass('check');
            $('.quick_faq > ul > li').not(this).removeClass('check');
        });
    });
    $("#board").css({"display" : "block"});
    $("#board1").css({"display" : "none"});
    $("#board2").css({"display" : "none"});
    $("#board3").css({"display" : "none"});
    $("#board4").css({"display" : "none"});
    $("#board5").css({"display" : "none"});


    $(".faq1").click(function (){
        $("#board").css({"display" : "block"});
        $("#board1").css({"display" : "none"});
        $("#board2").css({"display" : "none"});
        $("#board3").css({"display" : "none"});
        $("#board4").css({"display" : "none"});
        $("#board5").css({"display" : "none"});
    })
    $(".faq2").click(function (){
        $("#board").css({"display" : "none"});
        $("#board1").css({"display" : "block"});
        $("#board2").css({"display" : "none"});
        $("#board3").css({"display" : "none"});
        $("#board4").css({"display" : "none"});
        $("#board5").css({"display" : "none"});
    })
    $(".faq3").click(function (){
        $("#board").css({"display" : "none"});
        $("#board1").css({"display" : "none"});
        $("#board2").css({"display" : "block"});
        $("#board3").css({"display" : "none"});
        $("#board4").css({"display" : "none"});
        $("#board5").css({"display" : "none"});
    })
    $(".faq4").click(function (){
        $("#board").css({"display" : "none"});
        $("#board1").css({"display" : "none"});
        $("#board2").css({"display" : "none"});
        $("#board3").css({"display" : "block"});
        $("#board4").css({"display" : "none"});
        $("#board5").css({"display" : "none"});
    })
    $(".faq5").click(function (){
        $("#board").css({"display" : "none"});
        $("#board1").css({"display" : "none"});
        $("#board2").css({"display" : "none"});
        $("#board3").css({"display" : "none"});
        $("#board4").css({"display" : "block"});
        $("#board5").css({"display" : "none"});
    })
    $(".faq6").click(function (){
        $("#board").css({"display" : "none"});
        $("#board1").css({"display" : "none"});
        $("#board2").css({"display" : "none"});
        $("#board3").css({"display" : "none"});
        $("#board4").css({"display" : "none"});
        $("#board5").css({"display" : "block"});
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

    let faqList = new Vue({
        el : '#faqList',
        data : {
            faqList : {}
        }
    })

    list(0);


    function list(page){
        // faq 리스트
        $.get('/api/faq/list?page='+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            faqList.faqList = response.data;

            // 리스트
            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (){
                    $(`#faqNumber${i}`).on('click', function (){
                        $(`#tr_answer${i}`).toggle('fast');
                    })
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
    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val(), 0)
    })

    function searchFaq(searchFaq){
        $.get("/api/faq/listsearch/"+searchFaq, function(response){
            faqList.faqList = response.data;
        });
    }

    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val());
        if ( $('#searchText').val().length == 0){
            alert('검색어를 확인해주세요.');
        }
    });

})(jQuery);

