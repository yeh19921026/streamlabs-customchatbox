// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    //start
});

document.addEventListener('onEventReceived', function (obj) {
    //on new chat
    var BGindex = obj.detail.body.indexOf("#!");
    var span = $('span:contains(' + obj.detail.body + ')')
    var div = span.parent();
    if (BGindex === 0) {
        ChangeBG(obj.detail.name, obj.detail.body);
    }
    if (obj.detail.name in BGcolorList) {
        div.attr("style", "background-color: " + BGcolorList[obj.detail.name]);
    }
});

var BGcolorList = {}
function ChangeBG(name, content) {
    var BGcolorindex = content.indexOf("背景顏色:");
    if (BGcolorindex > -1) {
        var BGcolorstring = content.substring(BGcolorindex + 5, BGcolorindex + 7)
        switch (BGcolorstring) {
            case "原始":
                BGcolorList[name] = "rgba(29%,21%,48%,0.5);"
                break;
            case "紅色":
                BGcolorList[name] = "rgba(50%,0%,0%,0.5);"
                break;
            case "綠色":
                BGcolorList[name] = "rgba(0%,50%,0%,0.5);"
                break;
            case "藍色":
                BGcolorList[name] = "rgba(0%,0%,50%,0.5);"
                break;
            case "白色":
                BGcolorList[name] = "rgba(100%,100%,100%,0.5);"
                break;
            case "灰色":
                BGcolorList[name] = "rgba(50%,50%,50%,0.5);"
                break;
            case "黑色":
                BGcolorList[name] = "rgba(0%,0%,0%,0.5);"
                break;
        }
    }
}