
(function () {

    function anim1() {
        this.animate({d:path.circ, fill: color[0]}, animSpeed, mina.bounce , anim2);
    }

    function anim2() {
        this.animate({d:path.rect, fill: color[1]},animSpeed, mina.bounce , anim3);
    }

    function anim3() {
        this.animate({d:path.tri, fill: color[2]},animSpeed, mina.bounce , anim1);
    }

    var animSpeed = 1500;
    var path = {
        circ: "M 10,50 A 10,10 0 1 1 90,50 A 10,10 0 1 1 10,50 z",
        rect: "M10,10h80v80h-80z",
        tri: "M10,10h80l-40,60z"
    };
    var color = ["#D5BE2F", "#B54F4B", "#5289C8"];

    var paper = Snap("#js-svg-pattern-morphing");
    var ptn = paper.path()
        .attr({d:path.circ, fill: color[0]})
        .animate({d:path.rect}, animSpeed, mina.bounce , anim3)
        .pattern(0,0,200,200).attr({patternTransform:"rotate(45)"});

    paper.rect(0,0,"100%","100%").attr({fill: ptn});
})();


