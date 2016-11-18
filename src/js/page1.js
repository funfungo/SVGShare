/**
 * Created by nikkifang on 16/11/16.
 */
var paper1 = util.svgInit(1,false);
var textBlueMain = {
    "text-anchor":"middle",
    "font-size": "100px",
//        fill: "#0e4cac",
    fill: COLOR_BLUE,
//        fill: "#1BD3E3",
    "font-family": "Impact,sans-serif",
    "class": "blend_darken"
};
var textRedMain = {
    "text-anchor":"middle",
    "font-size": "100px",
    fill: COLOR_RED,
//        fill: "#F41D07",
    "font-family": "Impact,sans-serif",
    "class": "blend_darken"
};
var paper1_t1 = paper1.text(SECTION_HW+60,SECTION_HH-30,"MORE THAN");
var paper1_t2 = paper1.text(SECTION_HW-180,SECTION_HH+50,"VECTORS");

paper1_t1.attr(textBlueMain);
paper1_t2.attr(textBlueMain);

var paper1_t3 = paper1.text(SECTION_HW-50,SECTION_HH-30, "THE POSSIBILITY OF");
var paper1_t4 = paper1.text(SECTION_HW+100,SECTION_HH+50, "SVG ANIMATION");
paper1_t3.attr(textRedMain);
paper1_t4.attr(textRedMain);

var paper1_p1 = paper1.path("M63,53.3C115.6,5.8,171.6,37,181.6,99.1c6.4,40-10,114.8-39.3,124.4c-28.4,9.3-38.1-26-67.4-43.1C33.3,156.2,23.7,88.9,63,53.3z")
var paper1_p2 = paper1.path("M758.2,488.3C774.1,370.9,874,460,898.6,532c15.3,44.9,39.4,118.3-0.9,129.5c-38.9,10.8-105.3-14.7-145.6-34.6C695.1,598.6,750,548.5,758.2,488.3z")
paper1_p1.attr({
    "id":"js_svg1_p1",
    "class": "blend_darken",
    fill: COLOR_RED
});
paper1_p2.attr({
    "id":"js_svg1_p2",
    "class": "blend_darken",
    fill: COLOR_BLUE
});


var paper2 = Snap("#svg_2");
