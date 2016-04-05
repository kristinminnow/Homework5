// Score Keeper
// We will be creating a simple score keeper application using JavaScript.
// The HTML and CSS has already been done for you.
// Here are the steps you should take:
// Step 1: Add a link to your own custom JS file.
// Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
// Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box.
// Bonus: Create a check in your code to make sure the score will not go negative.
// Super Bonus: Create a function to make the changes to the score display rather than having to write your logic over and over.

document.addEventListener("DOMContentLoaded", function(){

//input.value
//textContent

//var score = parseInt(document.getElementById("score").textContent.replace(" Points", ""));
var score = parseInt(document
					.getElementById("score")
					.textContent
					.replace(" Points", ""));
var customScore = document.getElementById("custom-score").value;

function displayScore() {
		if(score >= 0){
			document
					.getElementById("score")
					.innerHTML = score + " Points";
		}else{
			score = 0;
			document
					.getElementById("score")
					.innerHTML = "0 Points";
		}
}

document
	.getElementById("increase-5")
	.addEventListener("click", function(){
		score += 5;
		displayScore();
	});


document
	.getElementById("decrease-5")
	.addEventListener("click", function(){
		score -= 5;
		displayScore();

	});


document
	.getElementById("submit-custom-score")
	.addEventListener("click", function()
	{
		score = parseInt(document.getElementById("custom-score").value);
		displayScore();
	});

});