$(function () {
    $('.nav7').find('a').css({"color":"#BDD600"});
    $('.nav7').siblings('li').css({"display":"block"});
    $('.nav7').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
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
        $('.nav7').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

    $('.del_container').hide();
    $('.btn_del').on('click', function(){
        $('.del_container').fadeIn(200);
    });

    $('.btn_cancel').on('click', function(e){
        $('.del_container').fadeOut(200);
        e.stopPropagation();
    });
    $('.edit_container').hide();
    $('.btn_edit').on('click', function(){
        $('.edit_container').fadeIn(200);
    });

    $('.btn_cancel').on('click', function(e){
        $('.edit_container').fadeOut(200);
        e.stopPropagation();
    });


    // 데이터 리스트
    let tableBoard = new Vue({
        el : '#tableBoard',
        data : {
            tableBoard : {}
        },
        methods:{
        }
    });

    searchStart();

    function searchStart(){

        $.get("/api/faq/list", function (response){

            tableBoard.tableBoard = response.data;
        })
    };

    var str = $(location).attr('href').split('/');
    searchStart(str[6]);

    function searchFaq(searchFaq){
        $.get("/api/faq/listsearch/"+searchFaq, function(response){
            // 검색 데이터
            tableBoard.tableBoard = response.data;
        });
    }
    $('.btn_searchFaq').on('click', function (){
        searchFaq($('.searchFaq').val());
        if ( $('.searchFaq').val().length == 0){
            alert('검색어를 확인해주세요.');
        }
    });

    function writing(){
        jsonData = {
            data : {
                faqType : $("#faqType").val(),
                faqTitle : $("#faqTitle").val(),
                faqContent : $("#faqContent").val()
            }
        }
        $.ajax({
            url : "/api/faq/",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#writeFaq").click( () => {
        if ( $("#faqTitle").val().length == 0 || $("#faqContent").val().length == 0 ) {
            alert('내용을 입력하세요.');
        } else {
            writing();
            location.href = `/pages/admin/faq_main`;
        }
    })

    $("#delete").click( () => {
        deleteFaq();
        location.href = `/pages/admin/faq_main`;
    })

    function deleteFaq() {
        $.ajax({
            url: `/api/faq/` + searchFaq,
            method: "DELETE",
            dataType: "text",
        })
    }
});




