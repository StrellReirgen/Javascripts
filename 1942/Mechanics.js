var hero = {
	x: 65, 
	y: 53
}

var enemies = [{x:300, y:10},{x:20, y:10},{x:30, y:10},{x:50, y:10},{x:50, y:10},{x:50, y:10},{x:50, y:10}];

function displayHero(){
	document.getElementById("hero").style["top"] = hero.y*10+ "px";
	document.getElementById("hero").style["left"] = hero.x*10 + "px";
}
function displayEnemies(){
	var output = "";
	for (var i = 0; i < enemies.length; i++) {
		output += "<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
	}
	document.getElementById("enemies").innerHTML = output;
}
displayHero();
displayEnemies();
document.onkeydown = function(e){
	if(e.keyCode == 65) {
		hero.x--;
	}
	else if(e.keyCode == 68) {
		hero.x++;
	}
	else if(e.keyCode == 87) {
		hero.y--;
	}
	else if(e.keyCode == 83) {
		hero.y++;
	}
	displayHero();
}