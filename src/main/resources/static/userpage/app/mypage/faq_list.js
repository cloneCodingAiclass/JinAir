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

    // $('.showQ').on('click', function (){
    //     alert('dfsdfsdf')
    //     let showA = $(this).attr('id');
    //     console.log(showA);
    //     // $(showA).addClass('showA');
    //     // $('.showA').css({"display" : "table-cell"});
    // })
    // $(document).load('.showQ','click', function (){
    //     alert('dfsdfsdf')
    //     let showA = $(this).attr('id');
    //     console.log(showA);
    //     // $(showA).addClass('showA');
    //     // $('.showA').css({"display" : "table-cell"});
    // })


});

// function showFaq(){
//     let showA = $(this).attr('id');
//     // $(this).attr('#que + i');
//     $(this).attr('id').css({"display": "table-cell"});
//     // $(this).attr('.tb_answer').css({"display": "table-cell"});
//     ($.not(this)).$('.tb_answer').css({"display" : "none"});
//
// }

// function showFaq(faqA){
//     $('faq'+ i).css("display", "table-cell");
//     let target = $(obj).attr("href");
//     $(target).add($(target).find('faq'+ i)).toggle();
// }function showFaq(){
// //     $(".").css("display", "none");
// //     let target = $(obj).attr("href");
// //     $(target).add($(target).find("index")).toggle();
// // }
//

    // $("#faq1").click(function (){
    //     if($(".tr_answer").css("display")== "none")
    //     {
    //         $(this).next(".tr_answer").toggle();
    //     }else {
    //         $(this).next(".tr_answer").toggle();
    //     }
    // });



(function ($){
    리스트 출력 원본
    let listFaq = new Vue({
        el : '#listFaq',
        data : {
            // isActive: true,
            listFaq : {}

        },

    // 사본
    // let listFaq = new Vue({
    //     el : '#listFaq',
    //     data :
    //         function() {
    //             return {
    //                 key: true,
    //                 listFaq: {},
    //             }
    //         }, methods: {
    //             toggle: function() {
    //                 this.key = !this.key
    //             }
    //         }

    // 사본 2
    // let listFaq = new Vue({
    //     el : '#listFaq',
    //     data : {
    //         show: true,
    //         // isActive: true,
    //         listFaq : {}
    //
    //     },

    // 사본 3
    // let listFaq = new Vue({
    //     el : '#listFaq',
    //     data : {
    //         listFaq : {}
    //
    //     },

        // methods: {
        //     showFaq() {
        //         (this).attr("ques");
        //         (this).attr("anss");
        //         this.$('.anss').css({"display":"table-cell"});
        //         this.$('anss').css({"display":"none"});
        //
        //     }
        // }


        // showA: "i",
        // methods:{
        //     showFaq(){
        //         this.showA = true;
        //
        //     }
        // }
    })

    // let tgFaq = new Vue({
    //     el: '#tgFaq',
    //     data: function(){
    //         return {
    //             key: false
    //         }
    //     },methods:{
    //         toggle: function(){
    //             this.key  = !this.key
    //         }
    //     }
    // })

    /* 카테고리 주석 시작
    let faqSet1 = new Vue({
        el : '#faqSet1',
        data : {
            faqSet1 : {}
        },
        methods: {
            faqSet1: function (faqType){
                return this.faqSet1.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });
    let faqSet2 = new Vue({
        el : '#faqSet2',
        data : {
            faqSet2 : {}
        },
        methods: {
            faqSet2: function (faqType){
                return this.faqSet2.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });
    let faqSet3 = new Vue({
        el : '#faqSet3',
        data : {
            faqSet3 : {}
        },
        methods: {
            faqSet3: function (faqType){
                return this.faqSet3.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    let faqSet4 = new Vue({
        el : '#faqSet4',
        data : {
            faqSet4 : {}
        },
        methods: {
            faqSet4: function (faqType){
                return this.faqSet4.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    let faqSet5 = new Vue({
        el : '#faqSet5',
        data : {
            faqSet5 : {}
        },
        methods: {
            faqSet5: function (faqType){
                return this.faqSet5.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    카테고리 주석 끝 */


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

            showPage.totalPages = pagination.totalPages;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;
            listFaq.listFaq = response.data;
            // faqSet1.faqSet1 = response.data;
            // faqSet2.faqSet2 = response.data;
            // faqSet3.faqSet3 = response.data;
            // faqSet4.faqSet4 = response.data;
            // faqSet5.faqSet5 = response.data;


            console.dir(listFaq);
            console.dir(pagination);


            let url = "";
            let NumberPage = 0;
            let last = showPage.totalPages;

            for (NumberPage; NumberPage < last; NumberPage++){
                url += '<div id="' + NumberPage + '" class="pageButton">' + (NumberPage+1) + '</div>';
            }
            document.getElementById("button").innerHTML = url;

            $(".pageButton").on('click', function (){
                page = $(this).attr("id");
                list(page);
            })
        })
    };

    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val());
        if ( $('#searchText').val().length == 0){
            alert('검색어를 확인해주세요.');
        }
    });

    // console.dir(faqSet1);





})(jQuery);

