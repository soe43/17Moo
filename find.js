var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    /* YOUR IMPLEMENTATION */
    return Math.sqrt(((x0 - x1) ** 2) + ((y0 - y1) ** 2));
};


var findIt = function(e) {
    /* YOUR IMPLEMENTATION */
    var red = 0;
    var blue = 0;
    var green = 0;
    var box = document.getElementById("box");
    
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

