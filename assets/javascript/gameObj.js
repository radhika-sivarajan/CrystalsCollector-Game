
var game = {

	win: 0,
	loss: 0,
	randomNumber: null,
	randomCrystal: null,
	totalScore: null,
	crystalValues: [],
	message: null,

	// Game start/restart. 
	// Generating random number and setting total score.
	startGame: function(){
		this.totalScore = 0;
		this.randomNumber = Math.floor(Math.random() * 102) + 19;
		this.setCrystalValues();

		//Displaying random number generated and total score on screen
		$("#random").html(this.randomNumber);
		$("#total-score").html(this.totalScore);
	},

	// Generating unique values for each crystal.
	setCrystalValues: function(){

		for(var i=0; this.crystalValues.length<4; i++){
			this.randomCrystal = Math.floor(Math.random() * 12) + 1;

			//Avoid duplicate values of crystals.
			if(this.crystalValues.indexOf(this.randomCrystal) > -1) 
				continue;
			
			this.crystalValues[this.crystalValues.length] = this.randomCrystal;
		}

		//Setting values to each crystals.
		$("#amberCrystal").attr("value", this.crystalValues[0]);
		$("#blueCrystal").attr("value", this.crystalValues[1]);
		$("#greenCrystal").attr("value", this.crystalValues[2]);
		$("#redCrystal").attr("value", this.crystalValues[3]);

		//Clearing the array of crystal values
		this.crystalValues.splice(0,this.crystalValues.length);

	},

	// Updating score board with win/loss message, win count and loss count.
	updateScore: function(){

		var newElement = $("<span>" + this.message + "</span>");
		var scores = "<br><br>Win : " + this.win + "<br>Loss : " + this.loss ;

		newElement.css({
			color : "#63350f", 
			fontFamily: "Impact, Charcoal, sans-serif", 
			fontSize : "20px", 
			textShadow : "none",
			padding : "7px",
			background : "url(assets/images/glitter2.gif)",
			backgroundSize: "cover",
			borderRadius: "30px",
			boxShadow: "0 0 19px 4px #deb02c"
		});
		
		$("#score").html(scores);	
		$("#score").prepend(newElement);	
	},

	//Check if user won or lose by comparing total score to random generated number and set values accordingly.
	setScore: function(){

		//If user total score equal random number - "WON"
		if(this.totalScore === this.randomNumber){
			this.win++;
			this.message = "You won !";
			this.updateScore();
			alert("WON !!");
			this.startGame();
		}

		//If user total score is greater than random number - "LOST"
		if(this.totalScore > this.randomNumber){
			this.loss++;
			this.message = "You lost !";
			this.updateScore();
			alert("LOST !!");
			this.startGame();
		}
	}	
};

$(document).ready(function() {

	// Playing the game.
    game.startGame();

    //On clicking crystals.
    $(".crystal").on("click", function(){  	

    	//Adding crystal values to reach total score to random value generatedby computer
    	game.totalScore = game.totalScore + parseInt($(this).attr("value"));
    	$("#total-score").html(game.totalScore);

    	game.setScore();    	
    });
});