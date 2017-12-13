var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
console.log( "target x: " + targetX );
console.log( "target y: " + targetY );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    /* YOUR IMPLEMENTATION */
    return Math.sqrt(((x0 - x1) ** 2) + ((y0 - y1) ** 2));
};

var findIt = function(e) {
    /* YOUR IMPLEMENTATION */
    var maxDist = maxDistance();
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    var l = 100 - Math.floor((distance(mouseX, mouseY, targetX, targetY) / maxDist) * 100);
    if(l > 90){
	l = 90;
    }
    box.style.backgroundColor = "hsl(182,62%,"+l+"%)";
    if(isCloseEnough(mouseX,mouseY)){
	box.style.backgroundColor = "black";
	box.textContent = "Ha You Got Me";
	box.style.textAlign = "center";
	box.style.color = "white";
	box.style.fontSize = "250px";
    }
    else{
	box.textContent = "";
    }
};

/*
your OTHER FXNS

*/

var maxDistance = function(){
    dist1 = distance(targetX, targetY, boxWidth, (-1 * boxHeight));
    dist2 = distance(targetX, targetY, 0,(-1 * boxHeight));
    dist3 = distance(targetX, targetY, boxWidth, 0);
    dist4 = distance(targetX, targetY, 0, 0);
    return Math.max(dist1, dist2, dist3, dist4);
};

var isCloseEnough = function(x1, y1){
    if(distance(x1, y1, targetX, targetY) < 35){
	return true;
    }
    else{
	return false;
    }
}

console.log(maxDistance());

box.addEventListener("mousemove", findIt);

