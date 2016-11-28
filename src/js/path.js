var followPath = {};

var textPath = {};
textPath.paperTextPath = new Snap("#js-svg-text-path");
textPath.text = textPath.paperTextPath.select(".svg__text-path");
textPath.path = textPath.paperTextPath.select("#text-p1");
textPath.pathAni = function () {
    textPath.text.attr("startOffset", 0);
    Snap.animate(-400, 588, function (val) {
        textPath.text.attr("startOffset", val);
        $("#js-path-startOffset").text(val);
    },4500,mina.easeinout);
};
followPath.length = textPath.path.getTotalLength();

var objectPath = {};
objectPath.paperObjectPath1 = new Snap("#js-svg-object-path-a");
if($("#js-svg-object-path-a").length > 0){
    objectPath.path1 = objectPath.paperObjectPath1.select(".svg__object-path");
    objectPath.cicle = objectPath.paperObjectPath1.select(".svb__object-cicle");
    objectPath.pathAni1 = function () {
        objectPath.cicle.attr({
            cx: 62.9,
            cy: 14.9
        });
        Snap.animate(0, followPath.length, function (val) {
            var movePoint = objectPath.path1.getPointAtLength(val);
            objectPath.cicle.attr({
                cx: movePoint.x,
                cy: movePoint.y
            });
        },4500,mina.easeinout,function () {

        });
    };
    $("#js-svg-object-path-a").on("click",objectPath.pathAni1);
}

objectPath.paperObjectPath2 = new Snap("#js-svg-object-path-b");
objectPath.path2 = objectPath.paperObjectPath2.select(".svg__object-path");
objectPath.plane = objectPath.paperObjectPath2.select(".svg__object-plane");
objectPath.pathAni2 = function () {
    Snap.animate(0, followPath.length, function (val) {
        var movePoint = objectPath.path2.getPointAtLength(val);
        objectPath.plane.transform( 't' + (movePoint.x - 10) + ',' + (movePoint.y - 10) + 'r' + (movePoint.alpha - 90));
    },4500,mina.easeinout,function () {

    });
};
$("#js-svg-object-path-b").on("click",objectPath.pathAni2);
$("#js-svg-text-path").on("click",textPath.pathAni);
