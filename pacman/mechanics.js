function createWorld(){
	var num = Math.floor(Math.random()*3)
	row = 16;
	column = 36;
	world = [];
	for (var i = 0; i <= row; i++) {
		world.push([]);
		if (i == 0 | i == row) {
			for (var j = 0; j <= column; j++) {
				world[i][j] = 2;
			}
		} else {
			for (var e = 0; e <= column; e++) {
				if (e == 0 | e == column) {
					world[i][e] = 2;
				} else {
					if (world[i][e-1] == 2 && world[i-1][e+1] == 2 && world[i-1][e-1] == 2 && world[i-1][e] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					}
					else if (world[i][e-1] == 2 && world[i-1][e-1] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					}
					else if (world[i][e-1] == 2 && world[i-1][e-1] == 2 && world[i-1][e] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					}
					else if (world[i-1][e+1] == 2 && world[i-1][e-1] == 2 && world[i-1][e] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					}
					else if (world[i-1][e+1] == 2 && world[i-1][e-1] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					}
					else if (world[i-1][e] == 2 && world[i-1][e+1] == 2) {
						world[i][e] = Math.floor(Math.random()*2);
					} else {
						world[i][e] = Math.floor(Math.random()*3);
						if (world[i][e] == 2 && world[i-2][e] == 2 && world[i-1][e-1] == 2){
							world[i-1][e-1] = world[i][e] = Math.floor(Math.random()*2);
						}
						else if (world[i][e] == 2 && world[i][e-2] == 2 && world[i-1][e-1] == 2){
							world[i-1][e-1] = world[i][e] = Math.floor(Math.random()*2);
						}
					}
				}
			}
		}
	}
	console.log(world);
	return world
}
var world = createWorld();
var score = 0;
var score2 = 0;
var pukman = {
	x: 1,
	y: 1 
};
var pukman2 = {
	x: 1,
	y: 9 
};
var enemy = {
	x: 25,
	y: 1 
};
var generador = {
	x: 15,
	y: 1 
};
var life = 10;
function displayWorld(){
	var output = "";
	for (var i = 0; i < world.length; i++) {
		output += "\n<div class='row'>\n";
		for (var j = 0; j < world[i].length; j++) {
			if (world[i][j] == 2) {
				output += "<div class='block'></div>";
			} else if (world[i][j] == 3) {
				output += "<div class='nucleo'></div>";
			} else if (world[i][j] == 1) {
				output += "<div class='uranium'></div>";
			} else if (world[i][j] == 0) {
				output += "<div class='empty'></div>";
			}
		}
		output += "\n</div>";
	}
	console.log(output);
	document.getElementById("world").innerHTML = output;
}
function displayPukman(){
	document.getElementById("pukman").style.top = pukman.y*32+"px";
	document.getElementById("pukman").style.left = pukman.x*32+"px";
}

function displayPukman2(){
	document.getElementById("pukman2").style.top = pukman2.y*32+"px";
	document.getElementById("pukman2").style.left = pukman2.x*32+"px";
}

function displayEnemy(){
	document.getElementById("enemy").style.top = enemy.y*32+"px";
	document.getElementById("enemy").style.left = enemy.x*32+"px";
}
function displayGenerador(){
	document.getElementById("generador").style.top = generador.y*32+"px";
	document.getElementById("generador").style.left = generador.x*32+"px";
}

function displayScore(){
	document.getElementById("score").innerHTML = score;
}
function displayScore2(){
	document.getElementById("score2").innerHTML = score2;
}
function displayLife(){
	document.getElementById("life").innerHTML = life;
}

displayWorld();
displayPukman();
displayPukman2();
displayEnemy();
displayGenerador()
displayScore();
displayScore2();
displayLife()

document.onkeydown = function(e){
	if(e.keyCode == 65 && world[pukman.y][pukman.x -1] != 2) {
		pukman.x--;
		document.getElementById("pukman").style.backgroundImage = "url('pukmanleft.gif')";
	}
	else if(e.keyCode == 68 && world[pukman.y][pukman.x +1] != 2) {
		pukman.x++;
		document.getElementById("pukman").style.backgroundImage = "url('pukmanright.gif')";
	}
	else if(e.keyCode == 87 && world[pukman.y -1][pukman.x] != 2) {
		pukman.y--;
		document.getElementById("pukman").style.backgroundImage = "url('pukmantop.gif')";
	}
	else if(e.keyCode == 83 && world[pukman.y +1][pukman.x] != 2) {
		pukman.y++;
		document.getElementById("pukman").style.backgroundImage = "url('pukmandown.gif')";

	}
	if(e.keyCode == 37 && world[pukman2.y][pukman2.x -1] != 2) {
		pukman2.x--;
		document.getElementById("pukman2").style.backgroundImage = "url('pukman2left.gif')";
	}
	else if(e.keyCode == 39 && world[pukman2.y][pukman2.x +1] != 2) {
		pukman2.x++;
		document.getElementById("pukman2").style.backgroundImage = "url('pukman2right.gif')";
	}
	else if(e.keyCode == 38 && world[pukman2.y -1][pukman2.x] != 2) {
		pukman2.y--;
		document.getElementById("pukman2").style.backgroundImage = "url('pukman2top.gif')";
	}
	else if(e.keyCode == 40 && world[pukman2.y +1][pukman2.x] != 2) {
		pukman2.y++;
		document.getElementById("pukman2").style.backgroundImage = "url('pukman2down.gif')";

	}
	if (world[pukman.y][pukman.x] == 1){
		world[pukman.y][pukman.x] = 0;
		score += 10;
		displayScore();
		displayWorld();
	} else if (world[pukman.y][pukman.x] == 3){
		world[pukman.y][pukman.x] = 0;
		score += 50;
		displayScore();
		displayWorld();
	} else if (pukman.x == enemy.x && pukman.y == enemy.y){
		life -= 1;
		displayLife();
	} else if (world[pukman2.y][pukman2.x] == 1){
		world[pukman2.y][pukman2.x] = 0;
		score2 += 10;
		displayScore2();
		displayWorld();
	} else if (world[pukman2.y][pukman2.x] == 3){
		world[pukman2.y][pukman2.x] = 0;
		score2 += 50;
		displayScore2();
		displayWorld();
	} else if (pukman2.x == enemy.x && pukman2.y == enemy.y){
		life -= 1;
		displayLife();
	}
	displayPukman()
	displayPukman2()
}

function hunting(){
	direction = Math.floor(Math.random()*4);
	if(direction == 0 && world[enemy.y][enemy.x -1] != 2) {
		enemy.x--;
	}
	else if(direction== 1 && world[enemy.y][enemy.x +1] != 2) {
		enemy.x++;
	}
	else if(direction == 2 && world[enemy.y -1][enemy.x] != 2) {
		enemy.y--;
	}
	else if(direction == 3 && world[enemy.y +1][enemy.x] != 2) {
		enemy.y++;
	}
	displayEnemy();
}
function generadorZ(){
	direction = Math.floor(Math.random()*4);
	if(direction == 0 && world[generador.y][generador.x -1] != 2) {
		generador.x--;
	}
	else if(direction== 1 && world[generador.y][generador.x +1] != 2) {
		generador.x++;
	}
	else if(direction == 2 && world[generador.y -1][generador.x] != 2) {
		generador.y--;
	}
	else if(direction == 3 && world[generador.y +1][generador.x] != 2) {
		generador.y++;
	}
	displayGenerador();
	if (world[generador.y][generador.x] == 0) {
		world[generador.y][generador.x] = 3
		displayWorld();
	}
}
setInterval(hunting, 100);
setInterval(generadorZ, 100);
