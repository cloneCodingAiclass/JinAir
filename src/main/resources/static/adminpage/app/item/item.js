$(function () {
    $('.nav5').find('a').css({"color":"#BDD600"});
    $('.nav5').siblings('li').css({"display":"block"});
    $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

});

// 달력 현재 날짜
$(() => {
    document.getElementById('item_start_date').valueAsDate = new Date();
    document.getElementById('item_end_date').valueAsDate = new Date();
})


$(() =>{
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

    let lostList = new Vue({
        el : '#lostList',
        data : {
            lostList : {}
        }
    })


    list(0);

    function list(page){
        console.log("page : " + page);
        $.get("/api/lost?page="+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;


            lostList.lostList = response.data;

            // for(let i = 0; i < response.data.length; i++){
            //     if(response.data[i].losIsfind === "Receipt") {
            //         console.log(response.data[i].losIsfind, '완료쪽');
            //         $("#lostList").find($("#item_isfind_btn")).val("완료");
            //     }else{
            //         console.log(response.data[i].losIsfind, '미완료쪽');
            //         $("#item_isfind_btn").val("미완료");
            //     }
            // }


        })
    }




    /*
    function search(id){
        $.get("/api/user/search/" + id, function (response){
            console.dir(response);
            memberList.memberList = response.data;
        })
    }

    $("#searchSubmit").click(() => {
        search($("#searchUserid").val());
        if($("#searchUserid").val() == null){
            alert("검색어를 확인해주세요");
        }
    })

     */
})