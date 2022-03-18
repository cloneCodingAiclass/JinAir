$(function () {
    /*운임 규정 안내 모달창 */
    $(() => {
        $("#modal_fare_rules").hide();
        $("#modal_fare_rules .modal_conf_ok_wrap").hide();

        /* 운송제한품목 체크 후 결제 이동*/

        $(".butt_pay").on("click", () => {
            let checkbox_wrap = $('#modal_checkbox').is(':checked');

            if (checkbox_wrap) {
                $("#modal_fare_rules").css('display', 'flex');
                $("#modal_fare_rules").fadeIn();
                $("body").css("overflow", "hidden");
            } else {
                $('.false_modal').css('display', 'flex');
                $('.false_modal').fadeIn(200);
                $("body").css("overflow", "hidden");
            }
        });
        $("#modal_fare_rules").on("click", () => {
        })

        $('.confirm_btn').click(function () {
            $('.false_modal').hide();
            $("body").css("overflow", "");

        })
        $("#modal_fare_rules .butt_canc, #modal_fare_rules .close").on(
            "click",
            () => {
                $("#modal_fare_rules").fadeOut();
                $("body").css("overflow", "scroll");
            }
        );

        $("#modal_fare_rules .butt_ok").on("click", () => {
            if ($("#modal_fare_rules #checkBox").is(":checked")) {
                alert("클릭 됐어유");
                let item_name = "초코파이";
                let quantity = 2;
                let total_amount = 2200;
                let vat_amount = 200;
                let tax_free_amount = 0;

                let arr = new Array();
                for (i = 0; i < quantity; i++) {
                    let data = new Object();
                    data.reTotal = 100000;
                    arr.push(data);
                }
                $.post({
                    url: "/api/kakao/create",
                    data: JSON.stringify(arr),
                    async: false,
                    success: function(arr) {
                        window.open(arr, 'width=500, height=700');
                    },
                    error: function (error) {
                        console.log('error')
                        console.dir(error)
                    }
                })
                // $(location).attr("href", "/pages/complete");
                $("#modal_fare_rules").fadeOut();
                $("body").css("overflow", "scroll");
            } else {
                $("#modal_fare_rules > .modal_conf_ok_wrap").fadeIn();
            }
        });
        $(".modal_conf_ok_wrap .butt_conf").on("click", () => {
            $("#modal_fare_rules .modal_conf_ok_wrap").fadeOut();
        });
    });

    /*운임 규정 안내 모달창 끝 */
    $('#modal_fare_rules #checkBox').on('click', function () {
    });
});