// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    //start
});

document.addEventListener('onEventReceived', function (obj) {
    //on new chat
    console.log(obj.detail.body);
    var BGindex = obj.detail.body.indexof("!背景顏色:");
    if (BGindex > -1) {
        $('div[data-from="' + obj.detail.from + '"]').attr("style", "background-color: rgba(50%,0%,0%,0.5)");
    }
});