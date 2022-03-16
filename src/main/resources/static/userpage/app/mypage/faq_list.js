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
    // 리스트 출력 원본
    let listFaq = new Vue({
        el : '#listFaq',
        data : {
            listFaq : {},
            visible : false

        },
        methods: {
            toggle: function (){
                    this.visible = !this.visible;
            },

        }

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
    //         listFaq : {},
    //         visible : false
    //
    //     },
    //     methods: {
    //         toggle: function (event){
    //             this.visible = !this.visible;
    //             if (event){
    //                 alert('답변 생성 성공!')
    //             }
    //         },
    //
    //     }

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

    // 카테고리 주석 시작
    let listFaq1 = new Vue({
        el : '#listFaq1',
        data : {
            listFaq1 : {},
            visible : false
        },
        methods: {
        toggle: function (){
                this.visible = !this.visible;
            },
            listFaq1By: function (faqType){
                return this.listFaq1.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });
    let listFaq2 = new Vue({
        el : '#listFaq2',
        data : {
            listFaq2 : {},
            visible : false

        },
        methods: {
            toggle: function (){
                this.visible = !this.visible;

            },
            listFaq2By: function (faqType){
                return this.listFaq2.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }

    });
    let listFaq3 = new Vue({
        el : '#listFaq3',
        data : {
            listFaq3 : {},
            visible : false

        },
        methods: {
            toggle: function (){
                this.visible = !this.visible;

            },
            listFaq3By: function (faqType){
                return this.listFaq3.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    let listFaq4 = new Vue({
        el : '#listFaq4',
        data : {
            listFaq4 : {},
            visible : false

        },
        methods: {
            toggle: function (){
                this.visible = !this.visible;

            },
            listFaq4By: function (faqType){
                return this.listFaq4.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    let listFaq5 = new Vue({
        el : '#listFaq5',
        data : {
            listFaq5 : {},
            visible : false

        },
        methods: {
            toggle: function (){
                this.visible = !this.visible;

            },
            listFaq5By: function (faqType){
                return this.listFaq5.filter(function (board){
                    return board.faqType == faqType;
                });
            }
        }
    });
    // 카테고리 주석 끝


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
            listFaq1.listFaq1 = response.data;
            listFaq2.listFaq2 = response.data;
            listFaq3.listFaq3 = response.data;
            listFaq4.listFaq4 = response.data;
            listFaq5.listFaq5 = response.data;


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

