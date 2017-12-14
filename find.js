var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

//console.log( "box height: " + boxHeight );
//console.log( "box width: " + boxWidth );
//console.log( "target x: " + targetX );
//console.log( "target y: " + targetY );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt(((x0 - x1) ** 2) + ((y0 - y1) ** 2));
};

//method for finding cow: background color starts out blue and gets lighter if you get closer to the target
var findIt = function(e) {
    var maxDist = maxDistance(); //find which corner the cow is farthest from
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    var l = 100 - Math.floor((distance(mouseX, mouseY, targetX, targetY) / maxDist) * 100); //determine lightness for the shades of blue depending on how close the mouse is to the target
    if(l > 90){
	l = 90;
    }
    box.style.backgroundColor = "hsl(182,62%,"+l+"%)";
    if(isCloseEnough(mouseX,mouseY)){
	//outcome when you reach the target
	box.style.backgroundColor = "rgb(106,90,205)";
	box.textContent = "Ha You Got Me";
	box.style.textAlign = "center";
	box.style.color = "white";
	box.style.fontSize = "250px";
    }
    else{
	box.textContent = "";
    }
};

//find the farthest distance (within the box) from the cow 
var maxDistance = function(){
    dist1 = distance(targetX, targetY, boxWidth, boxHeight);
    dist2 = distance(targetX, targetY, 0, boxHeight);
    dist3 = distance(targetX, targetY, boxWidth, 0);
    dist4 = distance(targetX, targetY, 0, 0);
    return Math.max(dist1, dist2, dist3, dist4);
};

//determine if the mouse is close enough to the target
var isCloseEnough = function(x1, y1){
    if(distance(x1, y1, targetX, targetY) < 35){
	return true;
    }
    else{
	return false;
    }
}

//console.log(maxDistance());

box.addEventListener("mousemove", findIt);

