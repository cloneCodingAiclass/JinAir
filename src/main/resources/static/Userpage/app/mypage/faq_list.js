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
        // ??? faq ????????? ??? ??????
        $('.quick_faq > ul > li').click(function(e){
            $(this).addClass('check');
            $('.quick_faq > ul > li').not(this).removeClass('check');
        });
    });

});
(function ($) {
    let indexBtn = [];

    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    // ????????? ??????
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

        // faq ?????????
        $.get('/api/faq/list?page='+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            faqList.faqList = response.data;


            // ?????????
            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (response2){
                    $(`#tr_answer${i}`).hide();
                    $(`#faqNumber${i}`).on('click', function (){
                        $(`#tr_answer${i}`).toggle();
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


    function searchFaq(schFaq){
        $.get("/api/faq/listsearch/"+schFaq, function(response){
            faqList.faqList = response.data;



            let url = "";
            let NumberPage = 0;
            let last = pagination.totalPages;





            for(NumberPage; NumberPage < last; NumberPage++){
                url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
            }
            document.getElementById("footer").innerHTML = url;

            console.log(NumberPage)

            console.dir(response)
            console.log(pagination)
            if (response.data.length == 0){
                $("#footer").css({"display":"none"});
                alert("???????????? ??????");
                location.reload()
            }

            $(".pageButton").on('click', function (){
                schFaq = $(this).attr('id');
                searchFaq(schFaq);
            })

        });
    }


    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val());
        if ( $('#searchText').val().length == 0){
            alert('???????????? ??????????????????.');
        }
    });

    function Type(type, page){
        $.get("/api/faq/typeSearch/"+type+"?page="+page, function(response){

            faqList.faqList = response.data;

            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            let url = "";
            let NumberPage = 0;
            let last = pagination.totalPages;

            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (){
                    $(`#tr_answer${i}`).hide();
                    $(`#faqNumber${i}`).on('click', function (){
                        $(`#tr_answer${i}`).toggle();
                    })


                })

            }

            for(NumberPage; NumberPage < last; NumberPage++){
                url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
            }
            document.getElementById("footer").innerHTML = url;

            console.log(NumberPage)

            $(".pageButton").on('click', function (){
                page = $(this).attr('id');
                Type(type, page);
            })



        });
    }
    $('#faq1').on('click', function () {
        list();
        list();
    });

    $('#faq2').on('click', function () {
        Type($('#faq2').attr("value"));
    });
    $('#faq3').on('click', function () {
        Type($('#faq3').attr("value"));
    });
    $('#faq4').on('click', function () {
        Type($('#faq4').attr("value"));
    });
    $('#faq5').on('click', function () {
        Type($('#faq5').attr("value"));
    });
    $('#faq6').on('click', function () {
        Type($('#faq6').attr("value"));
    });

})(jQuery);

