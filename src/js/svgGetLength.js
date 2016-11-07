

/**
 *
 * @class SvgLineDrawing
 *
 * @param {Object} depoly
 * @param {Object} deploy.svgElement: SVG对象,tag标签为svg
 * @param {number} deploy.duration: 动画持续时间
 * @param {string} deploy.timingFunction: 动画缓动函数
 *
 */
var SvgLineDrawing = function (depoly) {
    var paths;
    this.ele = depoly.svgElement;
    this.actionTime = depoly.duration || 2;
    this.timingFunction = depoly.timingFunction || "ease-in-out";
    this.init();
};
/**
 * @public
 * 初始化动画
 */
SvgLineDrawing.prototype.init = function () {
    if (/svg/.test(this.ele[0].tagName)) {
        paths = this.ele.find("path,rect,polygon,ellipse,circle,polyline,line");
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var length = SvgLineDrawing.getLength(path);
            $(path).css("transition", "none")
                .attr("data-length", length)
                .css("stroke-dasharray", length)
                .css("stroke-dashoffset", length);
        }
    }
};
/**
 * @public
 * 开始动画
 */
SvgLineDrawing.prototype.action = function () {
    for (var i = 0; i < paths.length; i++) {
        var path = $(paths[i]);
        var length = path.attr("data-length");
        path.css("stroke-dashoffset", "0")
            .css("transition", "stroke-dashoffset " + this.actionTime + "s ease-in-out");
    }
};
// getCircleLength - return the length of the circle
SvgLineDrawing.getCircleLength = function (el) {
    var r = el.getAttribute('r');
    return 2 * Math.PI * r;
};
// getEllipseLength - returns the length of an ellipse
SvgLineDrawing.getEllipseLength = function (el) {
    var rx = el.getAttribute('rx'), ry = el.getAttribute('ry'),
        len = 2 * rx, wid = 2 * ry;
    return ((Math.sqrt(.5 * ((len * len) + (wid * wid)))) * (Math.PI * 2)) / 2;
};
SvgLineDrawing.getLineLength = function (el) { // getLineLength - return the length of the line
    var x1 = el.getAttribute('x1');
    var x2 = el.getAttribute('x2');
    var y1 = el.getAttribute('y1');
    var y2 = el.getAttribute('y2');
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
SvgLineDrawing.getRectLength = function (el) { // getRectLength - return the length of a Rect
    var w = el.getAttribute('width');
    var h = el.getAttribute('height');
    return (w * 2) + (h * 2);
};
SvgLineDrawing.getPolyLength = function (el) { // getPolygonLength / getPolylineLength - return the length of the Polygon / Polyline
    var points = el.getAttribute('points').split(' '), len = 0;
    for(var i=points.length-1; i>=0; i--){
        if(points[i].length === 0){
            points.splice(i,1);
        }
    }
    if (points.length > 1) {
        var coord = function (p) {
            var c = p.split(',');
            if (c.length != 2) {
                return;
            } // return undefined
            if (isNaN(c[0]) || isNaN(c[1])) {
                return;
            }
            return [parseFloat(c[0]), parseFloat(c[1])];
        };

        var dist = function (c1, c2) {
            if (c1 != undefined && c2 != undefined) {
                return Math.sqrt(Math.pow((c2[0] - c1[0]), 2) + Math.pow((c2[1] - c1[1]), 2));
            }
            return 0;
        };

        if (points.length > 2) {
            for (var i = 0; i < points.length - 1; i++) {
                len += dist(coord(points[i]), coord(points[i + 1]));
            }
        }
        len += dist(coord(points[0]), coord(points[points.length - 1]));
    }
    return len;
};
SvgLineDrawing.getLength = function (el) { // getLength - returns the result of any of the below functions
    if (/rect/.test(el.tagName)) {
        return SvgLineDrawing.getRectLength(el);
    } else if (/circle/.test(el.tagName)) {
        return SvgLineDrawing.getCircleLength(el);
    } else if (/ellipse/.test(el.tagName)) {
        return SvgLineDrawing.getEllipseLength(el);
    } else if (/polygon|polyline/.test(el.tagName)) {
        return SvgLineDrawing.getPolyLength(el);
    } else if (/line/.test(el.tagName)) {
        return SvgLineDrawing.getLineLength(el);
    } else if (/path/.test(el.tagName)){
        return el.getTotalLength()
    }
};
