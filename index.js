$(document).ready(function () {

    $(".container").mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        $("img").css("transform-origin", x + "px" + " " + y + "px");
        $("img").css("transform", "scale(2)");
    });

    $(".container").mouseleave(function () { 
        $("img").css("transform-origin", "center center");
        $("img").css("transform", "scale(1)");
    });
    
});