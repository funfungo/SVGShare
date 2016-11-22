/**
 * Created by nikkifang on 16/11/22.
 */
var lineControl = {
    svgPath: $("#js-svg-line-control path"),
    dashArray: $("#js-line-control-dasharray .line-control__value"),
    inputDashArray : $("#js-line-control-dasharray input"),
    dashOffset: $("#js-line-control-dashoffset .line-control__value"),
    inputDashOffset: $("#js-line-control-dashoffset input")
};
lineControl.svgPathLength = lineControl.svgPath[0].getTotalLength();
lineControl.inputDashArray.on("input",function () {
    var value = Math.floor(lineControl.svgPathLength * $(this).val());
    lineControl.dashArray.text(value);
    lineControl.svgPath.css("stroke-dasharray",value);
});
lineControl.inputDashOffset.on("input",function () {
    var value = Math.floor(lineControl.svgPathLength * $(this).val());
    lineControl.dashOffset.text(value);
    lineControl.svgPath.css("stroke-dashoffset",value);
});
