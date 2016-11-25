var flag_morphing;
function startMorph() {
    var shape = [
        "M 0 0 C 50 0 50 0 100 0 C 100 50 100 50 100 100 C 50 100 50 100 0 100 C 0 50 0 50 0 0 Z",
        "M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z",
        "M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50  0,22.4, 22.4,0, 50,0  Z"
    ];

    var paper_morphing = new Snap("#js-svg-morphing");
    paper_morphing.attr({
        fill: COLOR_RED,
        "stroke-opacity": 0
    });
    flag_morphing = true;
    var morphing_path = paper_morphing.path(shape[0]);
    morphing_path.attr({
        id: "js-morphing-path"
    });
    var morphing_animation = function () {
        if(flag_morphing === true){
            morphing_path.animate({
                d: shape[1]
            },1000,function () {
                morphing_path.animate({
                    d: shape[2]
                },1000,function () {
                    morphing_path.animate({
                        d: shape[0]
                    },1000,function () {
                        morphing_animation();
                    });
                });
            });
        }
    };
    morphing_animation();

    var getD = function () {
        setTimeout(function () {
            var d = $("#js-morphing-path").attr("d");
            var stringD = d.replace(/\.\d+/gi,'');
            $("#js-morphing-code").text(stringD.replace(/(.{70})/gi,'$1\n'));
            getD();
        },100);
    };
    getD();
}

startMorph();

