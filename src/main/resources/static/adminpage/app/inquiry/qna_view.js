$(function () {

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });


    var str = $(location).attr('href').split('/');
    searchStart(str[6]);

    function searchStart(index){
        $.get("/api/qnaAns/list/"+index, function(response){

            // 검색 데이터
            itemList.itemList = response.data;

        });
    }

    $(".qa_btn").click( () => {
        if( $('#qaTitle').html() != null || $('#qaContent').html() != null) {
            alert('답변이 완료되어 접근이 불가능합니다. 문의가 필요하시면 010-5516-4987로 연락바랍니다.');
        }else{
            location.href=`/pages/admin/qna_reply/${str[6]}`
        }
    })

});