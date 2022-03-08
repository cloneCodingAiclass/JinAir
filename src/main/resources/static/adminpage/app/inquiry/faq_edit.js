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
    $('.edit_container').css("display","none");
    $('.btn_cancel').on('click', function() {
        $('.edit_container').css("display", "none");
    })
});

(function ($){
    // 세부사항 출력
    let faqEdit = new Vue({
        el : '#faqEdit',
        data : {
            faqEdit : {}
        },
        methods:{
        }
    });


    let str = $(location).attr('href').split('/');
    searchStart(str[6]);

    function searchStart(index){
        $.get("/api/faq/"+index, function(response){
            console.dir(response);
            $("#faqType").val(response.data.faqType);
            $("#faqRegdate").text("등록일 " + response.data.faqRegdate);
            $("#faqTitle").val(response.data.faqTitle);
            $("#faqContent").val(response.data.faqContent);
            faqEdit.faqEdit = response.data;

        });
    }



})(jQuery)

function delBtn(){
    $('.edit_container').css("display","flex");
}