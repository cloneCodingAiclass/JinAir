$(function () {
    $('.nav11').find('a').css({"color":"#BDD600"});
    $('.nav11').siblings('li').css({"display":"block"});
    $('.nav11').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav11').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav11').find('a').css({"color":"#BDD600"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav11').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav11').find('a').css({"color":"#BDD600"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

});

$(()=> {
    $(".modal_isfind").hide();
    $(".del_btn").on('click', () => {
        $(".modal_isfind").fadeIn(200);
    })
    $(".btn_cancel").on('click', () => {
        $(".modal_isfind").fadeOut(200);
    })
})

$(()=> {
    $("#modal_isfind").hide();
    $(".edit_btn").on('click', () => {
        $("#modal_isfind").fadeIn(200);
    })
    $(".uncomplete").on('click', () => {
        $("#modal_isfind").fadeOut(200);
    })
})

$(()=> {
    $('#ex_file1').on('change', function(){
        $('.filetext1').val($('#ex_file1').val());
    });
});
$(()=> {
    $('#ex_file2').on('change', function(){
        $('.filetext2').val($('#ex_file2').val());
    });
});
$(()=> {
    $('#ex_file3').on('change', function(){
        $('.filetext3').val($('#ex_file3').val());
    });
});