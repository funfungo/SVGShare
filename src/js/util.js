/**
 * Created by nikkifang on 16/11/16.
 */
var util = {
    svgInit: function (index,fullpage) {
        var paper = Snap("#svg_" + index);
        if(fullpage){
            paper.attr({
                width : WIDTH,
                height : HEIGHT
            });
        }else {
            paper.attr({
                width : SECTION_W,
                height : SECTION_H
            });
        }
        return paper;
    }
};
