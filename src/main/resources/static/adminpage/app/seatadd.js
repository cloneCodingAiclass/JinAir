$(function () {
    // saveAll 용
    $('.select_comp').on('click', function () {
        let arr = new Array();
        let su = $('input:checkbox[class="SSC"]:checked').length;
        console.log(su);
        $('input:checkbox[class="SSC"]:checked').each(function () {
            let arrData = new Object();
            arrData.sdId = $(this).val();
            console.log($(this).val());
            arrData.sdPrice = "50000";
            arrData.sdStatus = "JiniPl";
            arrData.sdSeatcnt = su;
            console.dir(arrData);
            arr.push(arrData);
        });
        console.dir(arr);
        $.post({
            url: '/api/seatDetail/list',
            dataType: "json",
            data: JSON.stringify(arr),
            contentType: "application/json",
            success(arr) {
                alert("통신은 완료")
            },
            error(error) {
                alert("통신도 불가")
            }
        });
    });
});
    // })
    //  register();
    //  let arrData = new Object();
    //      arrData.sdId = Id;
    //      arrData.sdPrice = Price;
    //      arrData.sdStatus = Status;
    //  arr.push(arrData);
    // }
    // console.dir(arr);