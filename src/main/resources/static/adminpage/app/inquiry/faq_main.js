$(function () {
    $('.nav7').find('a').css({"color": "#BDD600"});
    $('.nav7').siblings('li').css({"display": "block"});
    $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});

    $('.nav1').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav2').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav3').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav4').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav5').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav6').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav7').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('.nav8').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav9').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav10').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav11').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color": "#adb5bd"});
        $('.nav7').find('a').css({"color": "#BDD600"});
        $('.nav7').siblings('li').css({"display": "block"});
        $('.nav7').parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color": "#adb5bd"});
        $('.nav7').find('a').css({"color": "#BDD600"});
        $('.nav7').siblings('li').css({"display": "block"});
        $('.nav7').parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('#board').css({"display" : "block"});
    $('#faq1').on('click', function (){
        $('#checkBox1').css({"background-color" : "#fff"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq2').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#fff"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq3').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#fff"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq4').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#fff"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq5').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#fff"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq6').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#fff"});
    });



});

(function ($) {
    let indexBtn = [];


    // let tableBoard1 = new Vue({
    //     el : '#tableBoard1',
    //     data : {
    //         tableBoard1 : {}
    //     }
    //
    // });
    let faqList = new Vue({
        el : '#faqList',
        data : {
            faqList : {}
        }
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
    })



    list(0);

    function list(page){
        $.get("/api/faq/list?page="+page, function(response){

            indexBtn = [];
            pagination = response.pagination;

            showPage.totalPages = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;
            faqList.faqList = response.data;

            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (){

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
    };

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });





    // 검색어 데이터
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

    function Type(type, page){
        $.get("/api/faq/typeSearch/"+type+"?page="+page, function(response){


            faqList.faqList = response.data;

            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;


            let url = "";
            let NumberPage = 0;
            let last = pagination.totalPages;


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


