$(function () {
    $('#kakaopay').on('click', function () {
        alert("클릭 됐어유");
        let cid = "TC0ONETIME";
        let partner_order_id = "partner_order_id";
        let partner_user_id = "partner_user_id";
        let item_name = "초코파이";
        let quantity = 2;
        let total_amount = 2200;
        let vat_amount = 200;
        let tax_free_amount = 0;
        let approval_url = "http://localhost:8080";
        let fail_url = "https://localhost:8080";
        let cancel_url = "https://localhost:8080";

        let arr = new Array();
        for(i = 0; i < quantity; i++){
            let data = new Object();
            data.reTotal = 100000;
            arr.push(data);

        }
                // cid : cid,
                // partner_order_id : partner_order_id,
                // partner_user_id : partner_user_id,
                // item_name : item_name,
                // quantity : quantity,
                // rTotal : total_amount
                // vat_amount : vat_amount,
                // tax_free_amount : tax_free_amount,
                // approval_url : approval_url,
                    // fail_url : fail_url,
                // cancel_url : cancel_url
        console.dir(arr);
        $.post({
            url: "/api/kakao/create",
            // data : JSON.stringify(arr),
            // async: false,
            dataType : 'json',
            success: function (data){
                alert(data.tid)
            },
            error: function (error){
                // alert('통신 실패')
            }
        })
    });
});