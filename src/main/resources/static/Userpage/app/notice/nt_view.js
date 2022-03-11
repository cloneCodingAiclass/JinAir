(function ($){
    let idx = $(location).attr('href').split('/')[6];
    console.log(idx);
    let notiView = new Vue({
        el : '#notiView',
        data : {
            notiView : {}
        }
    })

    let notiPriv = new Vue({
        el : '#notiPriv',
        data : {
            notiPriv : {}
        }
    })

    let notiNext = new Vue({
        el : '#notiNext',
        data : {
            notiNext : {}
        }
    })

    search(idx);

    function search(idx){
        console.log("index : " + idx);
        let id  = idx;
        $.get("/api/notify/"+idx, function (response){
            console.dir(response);
            console.log("idx " + idx);
            notiView.notiView = response.data;
        })
        let prev = Number(id)-1;
        $.get("/api/notify/"+prev, function (response){
            console.dir(response);
            console.log("idx1 " + (prev));
            notiPriv.notiPriv = response.data;
        })
        let next = Number(id)+1;
        $.get("/api/notify/"+next, function (response){
            console.dir(response);
            console.log("idx2 " + (next));
            notiNext.notiNext = response.data;
        })
    }


})(jQuery)