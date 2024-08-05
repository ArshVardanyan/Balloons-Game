// function f(a){
	// console.log(a.value)
	// a.style = `
	// 	background: yellow;
	// `
	// alert(a.value)
// }



// var b = document.querySelector(".p")
// function f(a){
// 	b.innerHTML = a.value
// }






// function f(c){
// 	var r = Math.floor(Math.random()*255)
// 	var g = Math.floor(Math.random()*255)
// 	var b = Math.floor(Math.random()*255)
// 	if(c){
// 		c.style = `
// 			background: rgb(${r}, ${g}, ${b});
// 		`
// 	}
// }





// function f(a){
// 	if(a){
// 		a.style = `
// 			color: green;
// 		`
// 	}
// }



// function l(b){
// 	if(b){
// 		function f(a){
// 			if(a.value == ""){
// 				a.style = `
// 					background: red;
// 				`
// 			} else {
// 				a.style = `
// 					background: none;
// 				`
// 			}
// 		}
// 	}
// }


var balloonShooter;
var my_and_pc_scores = document.querySelectorAll(".scoreArea h1 span");
var myscore = 0, pcscore = 0;
var gameLevel = 10;
var game_ended = 50; 
var a = document.querySelector(".block")
function f(){
	var o = document.createElement("div")
	o.setAttribute("onclick","boom(this)")
	var r = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var u = Math.round(Math.random()*95)
		o.style = `
 			background: rgb(${r}, ${g}, ${b});
 			left: ${u}%;
			animation-duration: ${gameLevel}s;
 		`
	a.append(o)

	var usedBallons = document.querySelectorAll(".block div");
	for (var i = 0; i < usedBallons.length; i++) {
		var pos = usedBallons[i].getBoundingClientRect().y;
		if(pos < 0){
			usedBallons[i].remove();
			pcscore++;
		}
	}
	my_and_pc_scores[1].innerHTML = pcscore
	if(myscore == game_ended || pcscore == game_ended){
		clearInterval(balloonShooter);
		result(myscore,pcscore)
	}
}


function result(a,b){
	if(a > b){
		alert("You win")
	} else {
		alert("You Lose")
	}
	window.location.reload();
}

function boom(a){
	myscore++;
	a.removeAttribute("onclick")
	a.classList.add("boom")
	setTimeout(()=>{
		a.remove()
	},1000)
	my_and_pc_scores[0].innerHTML = myscore
	if(myscore > 10 && myscore < 20){
		gameLevel = 6;
	}else if(myscore > 20){
		gameLevel = 3;
		console.log("ok")
	}
}




function startGame(a){
	balloonShooter = setInterval(f, 1000);
	a.classList.add("d-noner");
	document.querySelector(".scoreArea").classList.remove("d-noner")
}