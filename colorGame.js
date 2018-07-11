var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square"); //passa todos os elementos com a class square para uma variavel chamada squares
var colorDisplay = document.getElementById("colorDisplay"); //o element com o id colorDisplay é passado para a var colorDisplay
var messageDisplay = document.querySelector("#message"); //elemento com a id message, passa para a var messagedisplay
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) { 
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedcolor
			if(clickedColor == pickedColor) {
				messageDisplay.textContent = "Congratulations";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	generateNewColor(numberOfSquares);
	changeColors();
	updateSquareColor();
}

resetBtn.addEventListener("click", function(){
	reset();
});

function changeColors(color){
 	//loop through all squares
 	for (var i = 0; i < squares.length; i++) { 
	 	//change each color to match given color
	 	squares[i].style.backgroundColor = color;
 	}
}

function updateSquareColor() {
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function generateNewColor(num) {
	//gen new colors
	colors = generateRandomColors(num);
	//1 color of those to update
	pickedColor = pickColor();
	//update text
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
}

function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
}

function randomColor() {
 	//pick a "red" , green and blue from 0 -255
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);

 	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
 	var arr = [];

 	for (var i = 0; i < num; i++) {
 		arr.push(randomColor());
 	}
 	return arr;
}