/**
 * Created by nikkifang on 16/11/16.
 */
var util = {
    svgInit: function (ele,fullpage) {
        var paper = Snap(ele);
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
