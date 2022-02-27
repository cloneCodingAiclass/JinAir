$(function () {
    $('.nav1').find('a').css({"color":"#BDD600"});
    $('.nav1').siblings('li').css({"display":"block"});
    $('.nav1').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    
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
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })

});

$(function () {

    function printtime(){ // 부다페스트
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-8;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime1(){ // 런던
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-9;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime2(){ // 뉴욕
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-14;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime3(){ // 베이징
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-1;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime4(){ // 하노이
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-2;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime5(){ // 두바이
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-5;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime6(){ // 도하
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-6;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime7(){ // 카이로
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-7;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    let st;
    let st1;
    let st2;
    let st3;
    let st4;
    let st5;
    let st6;
    let st7;

    st2 = window.setInterval(printtime2);
        
        $('#other_select').on('change', function(){
            window.clearInterval(st);   
            window.clearInterval(st1); 
            window.clearInterval(st2); 
            window.clearInterval(st3); 
            window.clearInterval(st4); 
            window.clearInterval(st5); 
            window.clearInterval(st6); 
            window.clearInterval(st7); 

                if($('#other_select').val()=='부다페스트'){
                    console.log($('#other_select').val());
                    st = window.setInterval(printtime);
                }else if($('#other_select').val()=='런던'){
                    console.log($('#other_select').val());
                    st1 = window.setInterval(printtime1);
                }else if($('#other_select').val()=='뉴욕'){
                    console.log($('#other_select').val());
                    st2 = window.setInterval(printtime2);
                }else if($('#other_select').val()=='베이징'){
                    console.log($('#other_select').val());
                    st3 = window.setInterval(printtime3);
                }else if($('#other_select').val()=='하노이'){
                    console.log($('#other_select').val());
                    st4 = window.setInterval(printtime4);
                }else if($('#other_select').val()=='두바이'){
                    console.log($('#other_select').val());
                    st5 = window.setInterval(printtime5);
                }else if($('#other_select').val()=='도하'){
                    console.log($('#other_select').val());
                    st6 = window.setInterval(printtime6);
                }else if($('#other_select').val()=='카이로'){
                    console.log($('#other_select').val());
                    st7 = window.setInterval(printtime7);
                }

        })



});

function printtime(){
let date = new Date();
let yyyy = date.getFullYear();
let mo = date.getMonth()+1;
if(mo < 10) mo = `0${mo}`;
let dd = date.getDate();
if(dd < 10) dd = `0${dd}`;
let hh = date.getHours();
if(hh < 10) hh = `0${hh}`;
let mm = date.getMinutes();
if(mm < 10) mm = `0${mm}`;
let ss = date.getSeconds();
if(ss < 10) ss = `0${ss}`;
document.getElementById("korea_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
}

const st = window.setInterval(printtime);  // 입장시 시간 출력



