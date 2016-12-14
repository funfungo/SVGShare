/**
 * Created by nikkifang on 16/11/16.
 */
var paperCover = util.svgInit("#js-svg-cover",false);
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
var paperCoverT1 = paperCover.text(SECTION_HW+60,SECTION_HH-30,"MORE THAN");
var paperCoverT2 = paperCover.text(SECTION_HW-180,SECTION_HH+50,"VECTORS");

paperCoverT1.attr(textBlueMain);
paperCoverT2.attr(textBlueMain);

var paperCoverT3 = paperCover.text(SECTION_HW-10,SECTION_HH-30, "THE POSSIBILITIES OF");
var paperCoverT4 = paperCover.text(SECTION_HW+100,SECTION_HH+50, "SVG ANIMATION");
paperCoverT3.attr(textRedMain);
paperCoverT4.attr(textRedMain);

var paperCoverP1 = paperCover.path("M63,53.3C115.6,5.8,171.6,37,181.6,99.1c6.4,40-10,114.8-39.3,124.4c-28.4,9.3-38.1-26-67.4-43.1C33.3,156.2,23.7,88.9,63,53.3z")
var paperCoverP2 = paperCover.path("M758.2,488.3C774.1,370.9,874,460,898.6,532c15.3,44.9,39.4,118.3-0.9,129.5c-38.9,10.8-105.3-14.7-145.6-34.6C695.1,598.6,750,548.5,758.2,488.3z")
paperCoverP1.attr({
    "id":"js_svg1_p1",
    "class": "blend_darken",
    fill: COLOR_RED
});
paperCoverP2.attr({
    "id":"js_svg1_p2",
    "class": "blend_darken",
    fill: COLOR_BLUE
});

