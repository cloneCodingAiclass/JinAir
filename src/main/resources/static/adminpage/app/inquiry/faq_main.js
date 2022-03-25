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
    $('#board1').css({"display" : "none"});
    $('#board2').css({"display" : "none"});
    $('#board3').css({"display" : "none"});
    $('#board4').css({"display" : "none"});
    $('#board5').css({"display" : "none"});
    $('.tab').on('click', function (){
        $('#board').css({"display" : "block"});
        $('#checkBox').css({"background-color" : "#fff"});
        $('#board1').css({"display" : "none"});
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#board2').css({"display" : "none"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#board3').css({"display" : "none"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#board4').css({"display" : "none"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#board5').css({"display" : "none"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
    });
    $('.tab1').on('click', function (){
        $('#board').css({"display" : "none"});
        $('#checkBox').css({"background-color" : "#BDD600"});
        $('#board1').css({"display" : "block"});
        $('#checkBox1').css({"background-color" : "#fff"});
        $('#board2').css({"display" : "none"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#board3').css({"display" : "none"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#board4').css({"display" : "none"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#board5').css({"display" : "none"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
    });
    $('.tab2').on('click', function (){
        $('#board').css({"display" : "none"});
        $('#checkBox').css({"background-color" : "#BDD600"});
        $('#board1').css({"display" : "none"});
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#board2').css({"display" : "block"});
        $('#checkBox2').css({"background-color" : "#fff"});
        $('#board3').css({"display" : "none"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#board4').css({"display" : "none"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#board5').css({"display" : "none"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
    });
    $('.tab3').on('click', function (){
        $('#board').css({"display" : "none"});
        $('#checkBox').css({"background-color" : "#BDD600"});
        $('#board1').css({"display" : "none"});
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#board2').css({"display" : "none"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#board3').css({"display" : "block"});
        $('#checkBox3').css({"background-color" : "#fff"});
        $('#board4').css({"display" : "none"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#board5').css({"display" : "none"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
    });
    $('.tab4').on('click', function (){
        $('#board').css({"display" : "none"});
        $('#checkBox').css({"background-color" : "#BDD600"});
        $('#board1').css({"display" : "none"});
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#board2').css({"display" : "none"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#board3').css({"display" : "none"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#board4').css({"display" : "block"});
        $('#checkBox4').css({"background-color" : "#fff"});
        $('#board5').css({"display" : "none"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
    });
    $('.tab5').on('click', function (){
        $('#board').css({"display" : "none"});
        $('#checkBox').css({"background-color" : "#BDD600"});
        $('#board1').css({"display" : "none"});
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#board2').css({"display" : "none"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#board3').css({"display" : "none"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#board4').css({"display" : "none"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#board5').css({"display" : "block"});
        $('#checkBox5').css({"background-color" : "#fff"});
    });


});

(function ($) {


    // let tableBoard1 = new Vue({
    //     el : '#tableBoard1',
    //     data : {
    //         tableBoard1 : {}
    //     }
    //
    // });
    let tableBoard = new Vue({
        el : '#tableBoard',
        data : {
            tableBoard : {}
        }
    })

    let tableBoard1 = new Vue({
        el : '#tableBoard1',
        data : {
            tableBoard1 : {}
        },
        methods: {
            tableBoard1By: function (faqType){
                return this.tableBoard1.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });

    let tableBoard2 = new Vue({
        el : '#tableBoard2',
        data : {
            tableBoard2 : {}
        },
        methods: {
            tableBoard2By: function (faqType){
                return this.tableBoard2.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });

    let tableBoard3 = new Vue({
        el : '#tableBoard3',
        data : {
            tableBoard3 : {}
        },
        methods: {
            tableBoard3By: function (faqType){
                return this.tableBoard3.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });

    let tableBoard4 = new Vue({
        el : '#tableBoard4',
        data : {
            tableBoard4 : {}
        },
        methods: {
            tableBoard4By: function (faqType){
                return this.tableBoard4.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });
    let tableBoard5 = new Vue({
        el : '#tableBoard5',
        data : {
            tableBoard5 : {}
        },
        methods: {
            tableBoard5By: function (faqType){
                return this.tableBoard5.filter(function (board){
                    return board.faqType == faqType;
                });
            }
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
    })



    list(0);

    function list(page){
        $.get("/api/faq/list?page="+page, function(response){

            pagination = response.pagination;

            showPage.totalPages = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;
            tableBoard.tableBoard = response.data;
            tableBoard1.tableBoard1 = response.data;
            tableBoard2.tableBoard2 = response.data;
            tableBoard3.tableBoard3 = response.data;
            tableBoard4.tableBoard4 = response.data;
            tableBoard5.tableBoard5 = response.data;


            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str);
            if(page == 0) {
                $(".firstPage1").css("visibility", "hidden");
            }
            if(page == lastPage-1) {
                $(".lastPage1").css("visibility", "hidden");
            }
            $(".pageNum").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage1', function(){
                list(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                list(lastPage-1);
            });


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
            tableBoard.tableBoard = response.data;
            tableBoard1.tableBoard1 = response.data;
            tableBoard2.tableBoard2 = response.data;
            tableBoard3.tableBoard3 = response.data;
            tableBoard4.tableBoard4 = response.data;
            tableBoard5.tableBoard5 = response.data;
        });
    }

    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val());
        if ( $('#searchText').val().length == 0){
            alert('검색어를 확인해주세요.');
        }
    });



})(jQuery);


