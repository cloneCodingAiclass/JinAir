"use strict";
let str = $(location).attr('href').split('/');
$(() => {
  let cookie = [];
  for( let i = 0 ; i < 20; i++){
    if(document.getElementById(`${i}`)){
      cookie[i] = $(`#${i}`).val();
      console.log( $(`#${i}`).val())
    }
  }
  // 구간1
  let itemList1 = new Vue({
    el : '#itemList1',
    data : {
      itemList1 : {}
    },
    methods:{
      crr_open : function (){
        $(".crr_modal").fadeIn(200);
        $("body").css("overflow", "hidden");
      }
    }
  });
  // 구간2
  let itemList2 = new Vue({
    el : '#itemList2',
    data : {
      itemList2 : {}
    },
    methods:{
      crr_open : function (){
        $(".crr_modal").fadeIn(200);
        $("body").css("overflow", "hidden");
      }
    }
  });

  // 구간1
  function goSearch(schDeparturePoint, schArrivalPoint, goDateSelectOptt){
    $.post({
      url: "/api/schedule/go",
      data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint + "&goDateSelectOptt=" + goDateSelectOptt,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        itemList1.itemList1 = dataJson.data;
      }
    })
  }
  // 구간2
  function comeSearch(schDeparturePoint, schArrivalPoint, comeDateSelectOptt){
    $.post({
      url: "/api/schedule/come",
      data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint + "&comeDateSelectOptt=" + comeDateSelectOptt,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        itemList2.itemList2 = dataJson.data;
      }
    })
  }

  if(str[5] == 'twoway'){
      $('.date3').html($('#goDateSelectOptt').val());
      $('.dating3').html($('#comeDateSelectOptt').val());
      $('.dep_area').html($('#schDeparturePoint').val());
      $('.arr_area').html($('#schArrivalPoint').val());
      $('.dep_area1').html($('#schArrivalPoint').val());
      $('.arr_area1').html($('#schDeparturePoint').val());
      $('.text_way').html('왕복');
      $('#go_area2').html($('#schArrivalPoint').val());
      $('#arr_area2').html($('#schDeparturePoint').val());

      // 처음 받아온 기본 데이터 넣기
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(),$('#comeDateSelectOptt').val());

      // 날짜 눌렀을때 데이터
      $(".date0").on("click", function () {
        str = $(".date0").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });

      $(".date1").on("click", function () {
        str = $(".date1").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date2").on("click", function () {
        str = $(".date2").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date3").on("click", function () {
        str = $(".date3").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date4").on("click", function () {
        str = $(".date4").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date5").on("click", function () {
        str = $(".date5").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date6").on("click", function () {
        str = $(".date6").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });

    // 날짜 눌렀을때 데이터
    $(".dating0").on("click", function () {
      str = $(".dating0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });

    $(".dating1").on("click", function () {
      str = $(".dating1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating2").on("click", function () {
      str = $(".dating2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating3").on("click", function () {
      str = $(".dating3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating4").on("click", function () {
      str = $(".dating4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating5").on("click", function () {
      str = $(".dating5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating6").on("click", function () {
      str = $(".dating6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });

  }
  if(str[5] == 'oneway'){
    $('.date3').html($('#goDateSelectOptt').val());
    $('.dating3').html($('#comeDateSelectOptt').val());
    $('.dep_area').html($('#schDeparturePoint').val());
    $('.arr_area').html($('#schArrivalPoint').val());
    $('.air_list_wrap2').css('display', 'none');
    $('.text_way').html('편도');
    $('.trip_info2').css('display', 'none');
    $(".arrow_img").css('display', 'none');
    // 처음 받아온 기본 데이터 넣기
    goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
    // 날짜 눌렀을때 데이터
    $(".date0").on("click", function () {
      str = $(".date0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    $(".date1").on("click", function () {
      str = $(".date1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date2").on("click", function () {
      str = $(".date2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date3").on("click", function () {
      str = $(".date3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date4").on("click", function () {
      str = $(".date4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date5").on("click", function () {
      str = $(".date5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date6").on("click", function () {
      str = $(".date6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

  }
  if(str[5] == 'multiway'){
    console.log($('#goDateSelectOptt1').val());
    $('.date3').html($('#goDateSelectOptt').val());
    $('.dating3').html($('#goDateSelectOptt1').val());
    $('.dep_area').html($('#schDeparturePoint').val());
    $('.arr_area').html($('#schArrivalPoint').val());
    $('.dep_area1').html($('#schDeparturePoint1').val());
    $('.arr_area1').html($('#schArrivalPoint1').val());
    $('.text_way').html('다구간');
    $('#go_area2').html($('#schDeparturePoint1').val());
    $('#arr_area2').html($('#schArrivalPoint1').val());

    // 처음 받아온 기본 데이터 넣기
    goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
    comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(),$('#goDateSelectOptt1').val());

    // 날짜 눌렀을때 데이터
    $(".date0").on("click", function () {
      str = $(".date0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    $(".date1").on("click", function () {
      str = $(".date1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date2").on("click", function () {
      str = $(".date2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date3").on("click", function () {
      str = $(".date3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date4").on("click", function () {
      str = $(".date4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date5").on("click", function () {
      str = $(".date5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date6").on("click", function () {
      str = $(".date6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    // 날짜 눌렀을때 데이터
    $(".dating0").on("click", function () {
      str = $(".dating0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });

    $(".dating1").on("click", function () {
      str = $(".dating1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating2").on("click", function () {
      str = $(".dating2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating3").on("click", function () {
      str = $(".dating3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating4").on("click", function () {
      str = $(".dating4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating5").on("click", function () {
      str = $(".dating5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating6").on("click", function () {
      str = $(".dating6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
  }

})
$(function () {
  $(".open1").on("click", function (e) {
    e.stopPropagation();
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".reservation").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open2").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".service").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open3").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".benefit").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open4").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".optional").slideUp(50);
    $(".point").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open5").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });

  $(".modal").hide();
  $("li[class *= 'open']").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeIn(200);
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });

  $(".arrow_img").on("click", function () {
    $(".arrow_img").css("display", "none");
    $(".trip_info2").slideDown(200);
    $(".arrow_up_img").css("display", "block");
  });
  $(".arrow_up_img").on("click", function () {
    $(".arrow_img").css("display", "block");
    $(".arrow_up_img").css("display", "none");
    $(".trip_info2").slideUp(200);
  });

  $("select .KRW").on("select", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });
  $("select .USD").on("click", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });

  $(".list1_wrap").on("click", function () {
    $(".list2_wrap").focus();
  });

  /* 상단 fixed */
  $(window).scroll(function () {
    let y = $(".contentswrap").offset().top; //고정할 메뉴
    if (window.pageYOffset <= $(".contentswrap").offset().top) {
      $(".fix_trip_info").css("position", "fixed");
      $(".fix_trip_info").css("top", y);
    } else {
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "absolute");
    }
  });
  /* 상단 fixed 끝 */

  /* 하단 fixed */

  $(".info_table_wrap").css("overflow", "hidden");
  $(".info_table_wrap").css("overflow-x", "none");

  $(".img").on('click', () => {
    $(".img").css("display", "none");
    $(".img2").css("display", "block");
    $("#modal_totP_wrap").fadeIn();
    $(".fix_modal").fadeIn();
  })
  $(".close").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })
  $(".img2").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })

  /*자세히 보기 */
  $(".det1").on('click', () => {
    $(".detD1").css("display", "inline-block");
  })

  $(".det2").on('click', () => {
    $(".detD2").css("display", "inline-block");
  })

  $(".plus_1").on('click', () => {
    $(".info_table_wrap").css("overflow", "scroll");
    $(".info_table_wrap").css("overflow-x", "hidden");
    $(".info_table_wrap").animate({ scrollTop: 300 }, 600);
    $(".plus_1").css("display", "none");
    $(".minus_1").css("display", "inline-block");
  })
  $(".minus_1").on('click', () => {
    $(".info_table_wrap").css("overflow", "hidden");
    $(".info_table_wrap").css("overflow-x", "none");
    $(".plus_1").css("display", "inline-block");
    $(".minus_1").css("display", "none");
  })


  $(window).scroll(function () {
    let y = $(".fix_bott_wrap").offset().top - 650;
    let h = $(document).scrollTop();
    if (window.pageYOffset <= y) {
      $(".fix_bott").css("position", "fixed");
      $(".fix_bott").css("bottom", "0px");
      $("#modal_totP_wrap").css("position", "fixed");
      $("#modal_totP_wrap").css("top", "-100px");
      $(".fix_trip_info").css("position", "fixed");
    } else {
      $(".fix_bott").css("position", "absolute");
      $("#modal_totP_wrap").css("position", "absolute");
      $("#modal_totP_wrap").css("top", y - 280);
      $(".fix_trip_info").css("position", "absolute");
    }
  });

  /*날짜 설정 */
  let today = new Date();

  $("#a").click(function () {
    $("#div").unbind("click");
  });
  let res = $(".date3").text(); // 나중에 jsp할 때 선택된 날짜 받아와서 넣어주기
  console.log(res);
  let sub_res = res.substring(0, 10);
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1; // 3 -> 4월
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let dat0 = new Date(yyyy, mm+1, dd - 3);
  let dat1 = new Date(yyyy, mm+1, dd - 2);
  let dat2 = new Date(yyyy, mm+1, dd - 1);
  let dat3 = new Date(yyyy, mm+1, dd);
  let dat4 = new Date(yyyy, mm+1, dd + 1);
  let dat5 = new Date(yyyy, mm+1, dd + 2);
  let dat6 = new Date(yyyy, mm+1, dd + 3);


  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
    })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
    })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
    })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
    })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
    })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
    })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
    })`;

  $(".date0").html(sel_date0);
  $(".date1").html(sel_date1);
  $(".date2").html(sel_date2);
  $(".date3").html(sel_date3);
  $(".date4").html(sel_date4);
  $(".date5").html(sel_date5);
  $(".date6").html(sel_date6);

  $(".date0").on("click", function () {
    res = $(".date0").html();
    set_day(res);
  });
  $(".date1").on("click", function () {
    res = $(".date1").html();
    set_day(res);
  });
  $(".date2").on("click", function () {
    res = $(".date2").html();
    set_day(res);
  });
  $(".date3").on("click", function () {
    res = $(".date3").html();
    set_day(res);
  });
  $(".date4").on("click", function () {
    res = $(".date4").html();
    set_day(res);
  });
  $(".date5").on("click", function () {
    res = $(".date5").html();
    set_day(res);
  });
  $(".date6").on("click", function () {
    res = $(".date6").html();
    set_day(res);
  });

  /*날짜 설정 --------------*/
  let todays = new Date();

  $("#a").click(function () {
    $("#div").unbind("click");
  });
  let ress = $(".dating3").text(); // 나중에 jsp할 때 선택된 날짜 받아와서 넣어주기
  console.log(ress);
  let sub_ress = ress.substring(0, 10);
  let select_days = sub_ress.split("-");

  let yyyy1 = Number(select_days[0]);
  let mm1 = Number(select_days[1])-1;
  let dd1 = Number(select_days[2]);
  let week1 = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr1 = new Array(1, 2, 3, 4, 5, 6, 7);

  let dating0 = new Date(yyyy1, mm1, dd1 - 3);
  let dating1 = new Date(yyyy1, mm1, dd1 - 2);
  let dating2 = new Date(yyyy1, mm1, dd1 - 1);
  let dating3 = new Date(yyyy1, mm1, dd1);
  let dating4 = new Date(yyyy1, mm1, dd1 + 1);
  let dating5 = new Date(yyyy1, mm1, dd1 + 2);
  let dating6 = new Date(yyyy1, mm1, dd1 + 3);

  let sel_dating0 = `${dating0.getFullYear()}-${dating0.getMonth()+1}-${dating0.getDate()}(${week1[dating0.getDay()]
  })`;
  let sel_dating1 = `${dating1.getFullYear()}-${dating1.getMonth()+1}-${dating1.getDate()}(${week1[dating1.getDay()]
  })`;
  let sel_dating2 = `${dating2.getFullYear()}-${dating2.getMonth()+1}-${dating2.getDate()}(${week1[dating2.getDay()]
  })`;
  let sel_dating3 = `${dating3.getFullYear()}-${dating3.getMonth()+1}-${dating3.getDate()}(${week1[dating3.getDay()]
  })`;
  let sel_dating4 = `${dating4.getFullYear()}-${dating4.getMonth()+1}-${dating4.getDate()}(${week1[dating4.getDay()]
  })`;
  let sel_dating5 = `${dating5.getFullYear()}-${dating5.getMonth()+1}-${dating5.getDate()}(${week1[dating5.getDay()]
  })`;
  let sel_dating6 = `${dating6.getFullYear()}-${dating6.getMonth()+1}-${dating6.getDate()}(${week1[dating6.getDay()]
  })`;

  $(".dating0").html(sel_dating0);
  $(".dating1").html(sel_dating1);
  $(".dating2").html(sel_dating2);
  $(".dating3").html(sel_dating3);
  $(".dating4").html(sel_dating4);
  $(".dating5").html(sel_dating5);
  $(".dating6").html(sel_dating6);

  $(".dating0").on("click", function () {
    ress = $(".dating0").html();
    setting_day(ress);
  });
  $(".dating1").on("click", function () {
    ress = $(".dating1").html();
    setting_day(ress);
  });
  $(".dating2").on("click", function () {
    ress = $(".dating2").html();
    setting_day(ress);
  });
  $(".dating3").on("click", function () {
    ress = $(".dating3").html();
    setting_day(ress);
  });
  $(".dating4").on("click", function () {
    ress = $(".dating4").html();
    setting_day(ress);
  });
  $(".dating5").on("click", function () {
    ress = $(".dating5").html();
    setting_day(ress);
  });
  $(".dating6").on("click", function () {
    ress = $(".dating6").html();
    setting_day(ress);
  });
});

function set_day(res) {
  let ress = res;
  console.log(ress);
  let sub_res;
  console.log(ress.length);
  if (ress.length == 13) {
    sub_res = res.substring(0, 10);
  } else if (ress.length == 12) {
    sub_res = res.substring(0, 9);
  } else {
    sub_res = res.substring(0, 8);
  }
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1;
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
  })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
  })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
  })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
  })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
  })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
  })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
  })`;

  $(".date0").html(sel_date0);
  $(".date1").html(sel_date1);
  $(".date2").html(sel_date2);
  $(".date3").html(sel_date3);
  $(".date4").html(sel_date4);
  $(".date5").html(sel_date5);
  $(".date6").html(sel_date6);
}

function setting_day(res) {
  let ress = res;
  console.log(ress);
  let sub_res;
  console.log(ress.length);
  if (ress.length == 13) {
    sub_res = res.substring(0, 10);
  } else if (ress.length == 12) {
    sub_res = res.substring(0, 9);
  } else {
    sub_res = res.substring(0, 8);
  }
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1;
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
  })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
  })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
  })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
  })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
  })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
  })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
  })`;

  $(".dating0").html(sel_date0);
  $(".dating1").html(sel_date1);
  $(".dating2").html(sel_date2);
  $(".dating3").html(sel_date3);
  $(".dating4").html(sel_date4);
  $(".dating5").html(sel_date5);
  $(".dating6").html(sel_date6);
}

$(() => {
  $(".code").on("click", () => {
    $("#modal_input_code_wrap").fadeIn();
    $("body").css("overflow", "hidden");
  });
  $(".input_ok").on("click", () => {
    $("#modal_input_code_wrap").fadeOut();
    $("body").css("overflow", "");
  });
  $(".close").on("click", () => {
    $("#modal_input_code_wrap").fadeOut();
    $("body").css("overflow", "");
  });

});

// 찬영 라인

$(() => {
  // let strrr1 = 0;
  // let strrr2 = 0;
  //
  // $('.price_wrap').on('click' ,function(){
  //   console.log(1123)
  //   $('.price_wrap').removeClass('on');
  //   $(this).addClass('on');
  //
  //   // 위치 움직이기
  //   window.scrollTo({
  //     top: $('.air_list2_wrap').offset().top - 90,
  //     behavior: 'smooth'
  //   });
  //
  //   let str = $(this).children('.date_price').html().split(',');
  //   strrr1 = '';
  //   for (let i = 0; i < str.length; i++) {
  //     strrr1 = strrr1 + str[i];
  //   }
  //   // 확인점1
  //   // 구간 1 + 구간 2 = 항공운임
  //   let totprice = Number(strrr1) + Number(strrr2);
  //   // 구간1 (,) 넣어주고 자세히보기에 출력
  //   if (strrr1.length == 5) {
  //     $('.strrr1').html(`${strrr1.substr(-5, 2)},${strrr1.substr(-3, 3)}`);
  //   } else if (strrr1.length == 6) {
  //     $('.strrr1').html(`${strrr1.substr(-6, 3)},${strrr1.substr(-3, 3)}`);
  //   }
  //   // 구간2 (,) 넣어주고 자세히보기에 출력
  //   if (strrr2.length == 5) {
  //     $('.strrr2').html(`${strrr2.substr(-5, 2)},${strrr2.substr(-3, 3)}`);
  //   } else if (strrr2.length == 6) {
  //     $('.strrr2').html(`${strrr2.substr(-6, 3)},${strrr2.substr(-3, 3)}`);
  //   }
  //
  //   // 항공운인 (,) 처리
  //   let totpricecom = '';
  //   if (String(totprice).length == 5) {
  //     totpricecom = `${String(totprice).substr(-5, 2)},${String(totprice).substr(-3, 3)}`;
  //   } else if (String(totprice).length == 6) {
  //     totpricecom = `${String(totprice).substr(-6, 3)},${String(totprice).substr(-3, 3)}`;
  //   }
  //
  //   $('.tot_price_wrap').find('.tot_price1').html(totpricecom); // 항공운임에 출력
  //   $('.tot_price11').html(totpricecom); // 자세히보기에 항공운임 출력
  //
  //   let taxprice = totprice * 0.01; // 세금 계산
  //   if (String(taxprice).length > 3) { // 세금이 4자리수 넘어갈 때
  //     let backtaxpricecom = '';
  //
  //     if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 3) {
  //       // 뒷 3자리 처리
  //       backtaxpricecom = `,${Math.floor(String(taxprice).substr(-3, 3))}`;
  //     } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 2) {
  //       if (Math.floor(String(taxprice).substr(-3, 3)) % 10 == 0) {
  //         backtaxpricecom = `,${String(Math.floor(String(taxprice).substr(-3, 3)))}0`;
  //       } else {
  //         backtaxpricecom = `,0${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
  //       }
  //     } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 1) {
  //       backtaxpricecom = `,00${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
  //     }
  //     // 앞자리 처리
  //     let forwardtaxpricecom = ''
  //     if (String(taxprice).length == 4) {
  //       forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-4, 1)));
  //     } else if (String(taxprice).length == 5) {
  //       forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-5, 2)));
  //     }
  //
  //     // 앞 뒷자리 결합
  //     let taxpricecom = forwardtaxpricecom + backtaxpricecom;
  //     $('.tot_price_wrap').find('.tot_price3').html(taxpricecom); // 세금 출력
  //     $('.tot_price33').html(taxpricecom); // 자세히보기 1 출력
  //     $('.taxpriceprint').html(taxpricecom); // 자세히보기 2 출력
  //   } else { // 세금이 3자리수 이하일때
  //     $('.tot_price_wrap').find('.tot_price3').html(taxprice);  // 세금 출력
  //     $('.tot_price33').html(taxprice); // 자세히보기 1 출력
  //     $('.taxpriceprint').html(taxprice); // 자세히보기 2 출력
  //   }
  //
  //   // 총액
  //   let totalprice = totprice + 10000 + totprice * 0.01;
  //   let finaltotalprice = '';
  //   if (String(totalprice).length == 5) {
  //     finaltotalprice = `${String(totalprice).substr(-5, 2)},${String(totalprice).substr(-3, 3)}`;
  //   } else if (String(totalprice).length == 6) {
  //     finaltotalprice = `${String(totalprice).substr(-6, 3)},${String(totalprice).substr(-3, 3)}`;
  //   }
  //
  //   $('.total_price_wrap').find('.total_price').html(finaltotalprice);
  //   $('.finaltotalprice').html(finaltotalprice);
  //   $('.finaltotalpricee').html(finaltotalprice);
  //
  //   // 확인점2
  //   $('.price_wrap1').on('click', function () {
  //     $('.price_wrap1').removeClass('on1');
  //     // 위치 움직이기
  //     window.scrollTo({
  //       top: $('.fare_wrap').offset().top - 120,
  //       behavior: 'smooth'
  //     });
  //
  //     $(this).addClass('on1');
  //     let str = $(this).children('.date_price').html().split(',');
  //     strrr2 = '';
  //     for (let i = 0; i < str.length; i++) {
  //       strrr2 = strrr2 + str[i];
  //     }
  //
  //     // 확인점3
  //     // 구간 1 + 구간 2 = 항공운임
  //     let totprice = Number(strrr1) + Number(strrr2);
  //     // 구간1 (,) 넣어주고 자세히보기에 출력
  //     if (strrr1.length == 5) {
  //       $('.strrr1').html(`${strrr1.substr(-5, 2)},${strrr1.substr(-3, 3)}`);
  //     } else if (strrr1.length == 6) {
  //       $('.strrr1').html(`${strrr1.substr(-6, 3)},${strrr1.substr(-3, 3)}`);
  //     }
  //     // 구간2 (,) 넣어주고 자세히보기에 출력
  //     if (strrr2.length == 5) {
  //       $('.strrr2').html(`${strrr2.substr(-5, 2)},${strrr2.substr(-3, 3)}`);
  //     } else if (strrr2.length == 6) {
  //       $('.strrr2').html(`${strrr2.substr(-6, 3)},${strrr2.substr(-3, 3)}`);
  //     }
  //
  //     // 항공운인 (,) 처리
  //     let totpricecom = '';
  //     if (String(totprice).length == 5) {
  //       totpricecom = `${String(totprice).substr(-5, 2)},${String(totprice).substr(-3, 3)}`;
  //     } else if (String(totprice).length == 6) {
  //       totpricecom = `${String(totprice).substr(-6, 3)},${String(totprice).substr(-3, 3)}`;
  //     }
  //
  //     $('.tot_price_wrap').find('.tot_price1').html(totpricecom); // 항공운임에 출력
  //     $('.tot_price11').html(totpricecom); // 자세히보기에 항공운임 출력
  //
  //     let taxprice = totprice * 0.01; // 세금 계산
  //     if (String(taxprice).length > 3) { // 세금이 4자리수 넘어갈 때
  //       let backtaxpricecom = '';
  //
  //       if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 3) {
  //         // 뒷 3자리 처리
  //         backtaxpricecom = `,${Math.floor(String(taxprice).substr(-3, 3))}`;
  //       } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 2) {
  //         if (Math.floor(String(taxprice).substr(-3, 3)) % 10 == 0) {
  //           backtaxpricecom = `,${String(Math.floor(String(taxprice).substr(-3, 3)))}0`;
  //         } else {
  //           backtaxpricecom = `,0${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
  //         }
  //       } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 1) {
  //         backtaxpricecom = `,00${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
  //       }
  //       // 앞자리 처리
  //       let forwardtaxpricecom = ''
  //       if (String(taxprice).length == 4) {
  //         forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-4, 1)));
  //       } else if (String(taxprice).length == 5) {
  //         forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-5, 2)));
  //       }
  //
  //       // 앞 뒷자리 결합
  //       let taxpricecom = forwardtaxpricecom + backtaxpricecom;
  //       $('.tot_price_wrap').find('.tot_price3').html(taxpricecom); // 세금 출력
  //       $('.tot_price33').html(taxpricecom); // 자세히보기 1 출력
  //       $('.taxpriceprint').html(taxpricecom); // 자세히보기 2 출력
  //     } else { // 세금이 3자리수 이하일때
  //       $('.tot_price_wrap').find('.tot_price3').html(taxprice);  // 세금 출력
  //       $('.tot_price33').html(taxprice); // 자세히보기 1 출력
  //       $('.taxpriceprint').html(taxprice); // 자세히보기 2 출력
  //     }
  //
  //     // 총액
  //     let totalprice = totprice + 10000 + totprice * 0.01;
  //     let finaltotalprice = '';
  //     if (String(totalprice).length == 5) {
  //       finaltotalprice = `${String(totalprice).substr(-5, 2)},${String(totalprice).substr(-3, 3)}`;
  //     } else if (String(totalprice).length == 6) {
  //       finaltotalprice = `${String(totalprice).substr(-6, 3)},${String(totalprice).substr(-3, 3)}`;
  //     }
  //
  //     $('.total_price_wrap').find('.total_price').html(finaltotalprice);
  //     $('.finaltotalprice').html(finaltotalprice);
  //     $('.finaltotalpricee').html(finaltotalprice);
  //   })
  //
  // })


})


export default {
  mounted() {
    $('.price_wrap').click(function() {
      alert('hi');
    });
  }
}
// let strrr1 = 0;
// let strrr2 = 0;
//
// function price_wrapclick(){
//   console.log(1123)
// }
//
// const price_wrap = document.getElementsByClassName("price_wrap");
// price_wrap.addEventListener('click', price_wrapclick);

// $('.price_wrap').on('click' ,function(){
//
//   $('.price_wrap').removeClass('on');
//   $(this).addClass('on');
//
//   // 위치 움직이기
//   window.scrollTo({
//     top: $('.air_list2_wrap').offset().top - 90,
//     behavior: 'smooth'
//   });
//
//   let str = $(this).children('.date_price').html().split(',');
//   strrr1 = '';
//   for (let i = 0; i < str.length; i++) {
//     strrr1 = strrr1 + str[i];
//   }
//   // 확인점1
//   // 구간 1 + 구간 2 = 항공운임
//   let totprice = Number(strrr1) + Number(strrr2);
//   // 구간1 (,) 넣어주고 자세히보기에 출력
//   if (strrr1.length == 5) {
//     $('.strrr1').html(`${strrr1.substr(-5, 2)},${strrr1.substr(-3, 3)}`);
//   } else if (strrr1.length == 6) {
//     $('.strrr1').html(`${strrr1.substr(-6, 3)},${strrr1.substr(-3, 3)}`);
//   }
//   // 구간2 (,) 넣어주고 자세히보기에 출력
//   if (strrr2.length == 5) {
//     $('.strrr2').html(`${strrr2.substr(-5, 2)},${strrr2.substr(-3, 3)}`);
//   } else if (strrr2.length == 6) {
//     $('.strrr2').html(`${strrr2.substr(-6, 3)},${strrr2.substr(-3, 3)}`);
//   }
//
//   // 항공운인 (,) 처리
//   let totpricecom = '';
//   if (String(totprice).length == 5) {
//     totpricecom = `${String(totprice).substr(-5, 2)},${String(totprice).substr(-3, 3)}`;
//   } else if (String(totprice).length == 6) {
//     totpricecom = `${String(totprice).substr(-6, 3)},${String(totprice).substr(-3, 3)}`;
//   }
//
//   $('.tot_price_wrap').find('.tot_price1').html(totpricecom); // 항공운임에 출력
//   $('.tot_price11').html(totpricecom); // 자세히보기에 항공운임 출력
//
//   let taxprice = totprice * 0.01; // 세금 계산
//   if (String(taxprice).length > 3) { // 세금이 4자리수 넘어갈 때
//     let backtaxpricecom = '';
//
//     if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 3) {
//       // 뒷 3자리 처리
//       backtaxpricecom = `,${Math.floor(String(taxprice).substr(-3, 3))}`;
//     } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 2) {
//       if (Math.floor(String(taxprice).substr(-3, 3)) % 10 == 0) {
//         backtaxpricecom = `,${String(Math.floor(String(taxprice).substr(-3, 3)))}0`;
//       } else {
//         backtaxpricecom = `,0${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
//       }
//     } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 1) {
//       backtaxpricecom = `,00${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
//     }
//     // 앞자리 처리
//     let forwardtaxpricecom = ''
//     if (String(taxprice).length == 4) {
//       forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-4, 1)));
//     } else if (String(taxprice).length == 5) {
//       forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-5, 2)));
//     }
//
//     // 앞 뒷자리 결합
//     let taxpricecom = forwardtaxpricecom + backtaxpricecom;
//     $('.tot_price_wrap').find('.tot_price3').html(taxpricecom); // 세금 출력
//     $('.tot_price33').html(taxpricecom); // 자세히보기 1 출력
//     $('.taxpriceprint').html(taxpricecom); // 자세히보기 2 출력
//   } else { // 세금이 3자리수 이하일때
//     $('.tot_price_wrap').find('.tot_price3').html(taxprice);  // 세금 출력
//     $('.tot_price33').html(taxprice); // 자세히보기 1 출력
//     $('.taxpriceprint').html(taxprice); // 자세히보기 2 출력
//   }
//
//   // 총액
//   let totalprice = totprice + 10000 + totprice * 0.01;
//   let finaltotalprice = '';
//   if (String(totalprice).length == 5) {
//     finaltotalprice = `${String(totalprice).substr(-5, 2)},${String(totalprice).substr(-3, 3)}`;
//   } else if (String(totalprice).length == 6) {
//     finaltotalprice = `${String(totalprice).substr(-6, 3)},${String(totalprice).substr(-3, 3)}`;
//   }
//
//   $('.total_price_wrap').find('.total_price').html(finaltotalprice);
//   $('.finaltotalprice').html(finaltotalprice);
//   $('.finaltotalpricee').html(finaltotalprice);
//
//   // 확인점2
//   $('.price_wrap1').on('click', function () {
//     $('.price_wrap1').removeClass('on1');
//     // 위치 움직이기
//     window.scrollTo({
//       top: $('.fare_wrap').offset().top - 120,
//       behavior: 'smooth'
//     });
//
//     $(this).addClass('on1');
//     let str = $(this).children('.date_price').html().split(',');
//     strrr2 = '';
//     for (let i = 0; i < str.length; i++) {
//       strrr2 = strrr2 + str[i];
//     }
//
//     // 확인점3
//     // 구간 1 + 구간 2 = 항공운임
//     let totprice = Number(strrr1) + Number(strrr2);
//     // 구간1 (,) 넣어주고 자세히보기에 출력
//     if (strrr1.length == 5) {
//       $('.strrr1').html(`${strrr1.substr(-5, 2)},${strrr1.substr(-3, 3)}`);
//     } else if (strrr1.length == 6) {
//       $('.strrr1').html(`${strrr1.substr(-6, 3)},${strrr1.substr(-3, 3)}`);
//     }
//     // 구간2 (,) 넣어주고 자세히보기에 출력
//     if (strrr2.length == 5) {
//       $('.strrr2').html(`${strrr2.substr(-5, 2)},${strrr2.substr(-3, 3)}`);
//     } else if (strrr2.length == 6) {
//       $('.strrr2').html(`${strrr2.substr(-6, 3)},${strrr2.substr(-3, 3)}`);
//     }
//
//     // 항공운인 (,) 처리
//     let totpricecom = '';
//     if (String(totprice).length == 5) {
//       totpricecom = `${String(totprice).substr(-5, 2)},${String(totprice).substr(-3, 3)}`;
//     } else if (String(totprice).length == 6) {
//       totpricecom = `${String(totprice).substr(-6, 3)},${String(totprice).substr(-3, 3)}`;
//     }
//
//     $('.tot_price_wrap').find('.tot_price1').html(totpricecom); // 항공운임에 출력
//     $('.tot_price11').html(totpricecom); // 자세히보기에 항공운임 출력
//
//     let taxprice = totprice * 0.01; // 세금 계산
//     if (String(taxprice).length > 3) { // 세금이 4자리수 넘어갈 때
//       let backtaxpricecom = '';
//
//       if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 3) {
//         // 뒷 3자리 처리
//         backtaxpricecom = `,${Math.floor(String(taxprice).substr(-3, 3))}`;
//       } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 2) {
//         if (Math.floor(String(taxprice).substr(-3, 3)) % 10 == 0) {
//           backtaxpricecom = `,${String(Math.floor(String(taxprice).substr(-3, 3)))}0`;
//         } else {
//           backtaxpricecom = `,0${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
//         }
//       } else if (String(Math.floor(String(taxprice).substr(-3, 3))).length == 1) {
//         backtaxpricecom = `,00${String(Math.floor(String(taxprice).substr(-3, 3)))}`;
//       }
//       // 앞자리 처리
//       let forwardtaxpricecom = ''
//       if (String(taxprice).length == 4) {
//         forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-4, 1)));
//       } else if (String(taxprice).length == 5) {
//         forwardtaxpricecom = String(Math.floor(String(taxprice).substr(-5, 2)));
//       }
//
//       // 앞 뒷자리 결합
//       let taxpricecom = forwardtaxpricecom + backtaxpricecom;
//       $('.tot_price_wrap').find('.tot_price3').html(taxpricecom); // 세금 출력
//       $('.tot_price33').html(taxpricecom); // 자세히보기 1 출력
//       $('.taxpriceprint').html(taxpricecom); // 자세히보기 2 출력
//     } else { // 세금이 3자리수 이하일때
//       $('.tot_price_wrap').find('.tot_price3').html(taxprice);  // 세금 출력
//       $('.tot_price33').html(taxprice); // 자세히보기 1 출력
//       $('.taxpriceprint').html(taxprice); // 자세히보기 2 출력
//     }
//
//     // 총액
//     let totalprice = totprice + 10000 + totprice * 0.01;
//     let finaltotalprice = '';
//     if (String(totalprice).length == 5) {
//       finaltotalprice = `${String(totalprice).substr(-5, 2)},${String(totalprice).substr(-3, 3)}`;
//     } else if (String(totalprice).length == 6) {
//       finaltotalprice = `${String(totalprice).substr(-6, 3)},${String(totalprice).substr(-3, 3)}`;
//     }
//
//     $('.total_price_wrap').find('.total_price').html(finaltotalprice);
//     $('.finaltotalprice').html(finaltotalprice);
//     $('.finaltotalpricee').html(finaltotalprice);
//   })
//
// })



// 운임 규정
$(() => {
  // 모달 닫기
  $(".close_crr").on("click", function () {
    $(".crr_modal").fadeOut(200);
    $("body").css("overflow", "");
  });
  // 운임 종류
  $(".kind_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
    $(".superlow_btn, .flex_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_index").css("display", "block");
    $(".kind_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "660px",
    });
    $(".crr_contents").css({
      height: "550px",
    });
  });

  // 슈퍼로우
  $(".superlow_btn").on("click", function () {
    $(".crr_index, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
    $(".kind_btn, .flex_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_superlow").css({
      display: "block",
    });
    $(".superlow_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 플렉스
  $(".flex_btn").on("click", function () {
    $(".crr_superlow, .crr_index, .crr_jini, .crr_biz").css("display", "none");
    $(".superlow_btn, .kind_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_flex").css("display", "block");
    $(".flex_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 지니
  $(".jini_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_index, .crr_biz").css("display", "none");
    $(".superlow_btn, .flex_btn, .kind_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_jini").css("display", "block");
    $(".jini_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 지니비즈
  $(".biz_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_jini, .crr_index").css("display", "none");
    $(".superlow_btn, .flex_btn, .jini_btn, .kind_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_biz").css("display", "block");
    $(".biz_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });
});

// 수정 모달 창 ***********************
$(() => {
  $(".trip_edit_butt").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "block");
    $("body").css("overflow", "hidden");
  });
  $(".modal_edit_close_btn").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "none");
    $("body").css("overflow", "");
  });
});

$(() => {
  $("#round").on("click", function () {
    $(".round_wrap").css("display", "block");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#oneway").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "block");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#multi").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "block");
    $(".edit_jour_wrap").css("height", "520px");
  });
});

//person-layer
$(() => {
  $(".person_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".person_down_img").css({ display: "none" });
    $(".person_up_img").css({ display: "inline-block" });
    $(".person_pop_layer").slideDown("fast");

    // 예약 관련 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img").css({ display: "inline-block" });
    $(".go_up_img").css({ display: "none" });
    $(".go_layer").slideUp(50);

    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img2").css({ display: "inline-block" });
    $(".go_up_img2").css({ display: "none" });
    $(".go_layer2").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_up_img").css({ display: "none" });
    $(".arrive_layer").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img2").css({ display: "inline-block" });
    $(".arrive_up_img2").css({ display: "none" });
    $(".arrive_layer2").slideUp(50);
  });
});

// go-layer
$(() => {
  // 옵션1
  $(".go_layerbtn").on("click", function (e) {
    e.stopPropagation();

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지1 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".go_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt2").addClass("on");
    $(".go_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지2 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);

    // 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
});

// arrive-layer
$(() => {
  // 옵션 1
  $(".arrive_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt").addClass("on");
    $(".arrive_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지1 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".arrive_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt2").addClass("on");
    $(".arrive_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지2 레이어 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    // 다구간 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
  $(".person_pop_layer").on("click", function (e) {
    e.stopPropagation();
  });
});

// 화면 클릭
$(() => {
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 사람 수 선택 닫기
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });
});

function fnSetPaxCountDown(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  switch (strPaxType) {
    case "ADULT":
      --iAdultCount;
      if (iAdultCount >= 0) {
        --iPaxCount;
      }

      if (iInfantCount > iAdultCount) {
        iInfantCount = iAdultCount;
      }

      if (iAdultCount <= 0) {
        iAdultCount = 0;
        iInfantCount = 0;
      }
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
    case "CHILD":
      --iChildCount;
      if (iChildCount >= 0) {
        --iPaxCount;
      }
      if (iChildCount <= 0) {
        iChildCount = 0;
      }

      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      --iInfantCount;
      if (iInfantCount <= 0) {
        iInfantCount = 0;
      }

      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function fnSetPaxCountUp(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  // Count 증감
  switch (strPaxType) {
    case "ADULT":
      ++iAdultCount;
      ++iPaxCount;
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      break;
    case "CHILD":
      ++iChildCount;
      ++iPaxCount;
      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      ++iInfantCount;
      if (iInfantCount > iAdultCount) {
        alert("소아는 성인을 넘을 수 없음");
        break;
      }
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function submit() {
  console.log("작동");
  var iAdultCount = parseInt(
    $(".person_pop_layer").find("strong[name=adultPaxCnt]").text()
  ),
    iChildCount = parseInt(
      $(".person_pop_layer").find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(".person_pop_layer").find("strong[name=infantPaxCnt]").text()
    );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 소아 " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 소아 " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("성인 " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("소아 " + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

$(function () {
  $(".infant_modal").hide();
  $(".baby_info_btn").click(function () {
    $(".child_modal").hide();
    $(".infant_modal").fadeIn(200);
    $(".infant_modal").click(function () {
      $(".infant_modal").fadeOut(200);
    });
  });

  $(".child_modal").hide();
  $(".infant_modal").hide();
  $(".child_info_btn").click(function () {
    $(".child_modal").fadeIn(200);
    $(".child_modal").click(function () {
      $(".child_modal").fadeOut(200);
    });
  });
});

function comewhatday() {
  $(".whatday").html("오는날");
}
function gowhatday() {
  $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
  $(".modal_container").fadeIn(200);
  $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
  $(".cal").css({ display: "none" });
  $(".cal2").css({ display: "none" });
  $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
  // 왕복, 편도 출발지 지정
  $(".go_layer")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt").val(str);
      $(".go_layer").slideUp(50);
      $(".arrive_layer").slideDown(100);
      $(".go_select_opt").removeClass("on");
      $(".arrive_select_opt").addClass("on");
      bbb = "y";
    });
  // 왕복, 편도 도착지 지정
  $(".arrive_layer")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt").val(str);
      ccc = "y";
    });
  // 왕복 달력 모달
  $(".go_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("가는날");
    d;
  });
  $(".come_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("오는날");
  });

  // 편도 달력 모달
  $(".go_date2").on("click", function () {
    $(".cal2").css({ display: "flex" });
    $(".whatday").html("가는날");
  });

  // 다구간 출발지 지정
  $(".go_layer2")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt2").val(str);
      $(".go_layer2").slideUp(50);
      $(".arrive_layer2").slideDown(100);
      $(".go_select_opt2").removeClass("on");
      $(".arrive_select_opt2").addClass("on");
      bbb = "y";
    });
  // 다구간 도착지 지정
  $(".arrive_layer2")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt2").val(str);
      ccc = "y";
    });
  // 다구간1 달력 모달
  $(".go_date3").on("click", function () {
    if (bbb == "n" && ccc == "n") {
      departure();
      $(".cal3").css({ display: "none" });
    } else if (bbb == "y" && ccc == "n") {
      arrive();
    } else {
      $(".cal3").css({ display: "flex" });
      $(".whatday").html("가는날");
    }
  });

  // 달력 X 버튼
  $(".x_box").on("click", function () {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
  });

  // 모달모음 확인 버튼
  $(".btn_cancel").on("click", function () {
    $(".modal_container").fadeOut(200);
  });
});

function updateTrip() {
  let person = $("#person_cnt").text();
  let go1 = $("#go_area1").text();
  let arr1 = $("#arr_area1").text();
  let godate = $("#godate").text();

  console.log(person, go1, arr1, godate);
  $(".person_num").text(person);
  $(".go_default").attr("value", go1);
  $(".arrive_default").attr("value", arr1);
  $(".go_date_default").attr("value", godate);
}
