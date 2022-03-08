$(function () {
    $('.nav5').find('a').css({"color":"#BDD600"});
    $('.nav5').siblings('li').css({"display":"block"});
    $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
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
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

});

$(() => {
    document.getElementById('arrival_date').valueAsDate = new Date();

    $("#item_img").on('change',function(){
        let fileName = $("#item_img").val();
        $(".item_img_upload").val(fileName);
    });
})

$(() => {

    let airplaneList = [
        '필수 선택', 'B777-200ER', 'B737-800', 'B737-900'
    ]

    let typeList = [
        '필수 선택', '가방', '전자제품', '노트북/테블릿', '담배', '도서', '모자'
        , '배게/담요', '시계', '식품', '신발', '안경/선글라스', '액세서리', '의류'
        , '이어폰/휴대폰', '주류', '지갑', '화장품', '기타'
    ]

    let airportList = [
        '필수 선택', '인천', '김포', '부산', '제주'
    ]

    let itemList = $("#item_list");
    let arrAirport = $("#arrival_airport_list");
    let airplane = $("#airplane_list");

    for (let i = 0; i < typeList.length; i++){
        let option = document.createElement('option');
        option.innerText = typeList[i];
        option.value = typeList[i];
        itemList.append(option);
    }

    for (let i = 0; i < airportList.length; i++){
        let option = document.createElement('option');
        option.innerText = airportList[i];
        option.value = airportList[i];
        arrAirport.append(option);
    }

    for (let i = 0; i < airplaneList.length; i++){
        let option = document.createElement('option');
        option.innerText = airplaneList[i];
        option.value = airplaneList[i];
        airplane.append(option);
    }

    $("option[value='필수 선택']").attr('selected', true);

    let jsonData;

    function insert(){
        jsonData = {
            data : {
                losAirplane : $("#airplane_list").find('option:selected').val(),
                losType : $("#item_list").find('option:selected').val(),
                losArrivedate : $("#arrival_date").val() + "T00:00:00",
                losAirportArea : $("#arrival_airport_list").find('option:selected').val(),
                losImg : $("#item_img").val()
            }
        }
        $.ajax({
            url : "/api/lost",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#createBtn").click(() => {
        insert();
        alert('등록완료');
        location.reload();
        console.dir(jsonData);
        console.log($("#arrival_date").val());
    })


});
