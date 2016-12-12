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

            if(flag_morphing) getD();

        },100);
    };
    $("#morphing").on("click",function () {
        getD();
    })
}
$("#js-svg-morpheus").on("click",function () {
    var morpheusTest = new SVGMorpheus("#js-svg-morpheus",{
        rotation: "none"
    });
    morpheusTest.to("dog");
});

(function () {
    var paper_menu = new Snap("#menu");
    var menu_path = paper_menu.select("#js-svg-menu-path");
    var is_open = false;
    var pathDataOpen = "M158.5,0H0v53.1c0,0,19.6-4.6,66-0.2s60.5-3.8,92.5-0.1V0z";
    var pathDataTrans = "M158.5,0H0v53.1c0,0,35.4,15.4,82,13.8s76.5-14.1,76.5-14.1V0z";
    var pathDataClose = "M158.5,0H0v55.6c20.9-12.8,38.5,19.5,73.5-1.9s73.2-7.2,85,0V0z";
    $("#js-menu").on("click",function () {
        if(!is_open){
            menu_path.stop().animate({d: pathDataTrans},320,mina.easeinout,function () {
                menu_path.stop().animate({d: pathDataOpen},2500,mina.elastic);
            });
            is_open = !is_open;
        }else {
            menu_path.stop().animate({d: pathDataClose},3000,mina.elastic);
            is_open = !is_open;
        }
        $("#menu").toggleClass("menu--open");
    });
})();


startMorph();

