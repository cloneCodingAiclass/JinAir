$(function () {

    $('.btn_login').on('click', function(){
        if( $('.admin_id').val().length == 0 || $('.admin_pw').val().length == 0){
             alert('아이디 비밀번호를 확인하세요');
        }
    })


});
