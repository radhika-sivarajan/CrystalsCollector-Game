$(document).ready(function() {

	var win = 0;
	var loss = 0;
	var randomNumber;
	var totalScore;
	var amberCrystalNum;
	var blueCrystalNum;
	var greenCrystalNum;
	var redCrystalNum;

	//Updating score board with win, loss count
	function updateScore(winCount, lossCount, comment){

		var newElement = $("<span>" + comment + "</span>");
		var scores = "<br><br>Win : " + winCount + "<br>Loss : " + lossCount ;

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
	}

	//Start game
	function startGame(){

		//Generating random number between 19 and 120 and displaying
		randomNumber = Math.floor(Math.random() * 102) + 19;
		$("#random").html(randomNumber);

		//Setting user score to to zero
		totalScore=0;
		$("#total-score").html(totalScore);

		//Generating unique values for each crystal between 1 and 12 and assigning to it
		var crystalValues = [];
		while(crystalValues.length<4){
			var random = Math.floor(Math.random() * 12) + 1;

			//Avoid duplicate value for crystals
			if(crystalValues.indexOf(random) > -1) 
				continue;

    		crystalValues[crystalValues.length] = random;
		}
		$("#amberCrystal").attr("value", crystalValues[0]);
	    $("#blueCrystal").attr("value", crystalValues[1]);
	    $("#greenCrystal").attr("value", crystalValues[2]);
	    $("#redCrystal").attr("value", crystalValues[3]);
	}

    startGame();

    //On clicking crystals
    $(".crystal").on("click", function(){  	

    	//Adding crystal values to reach random value by computer
    	totalScore = totalScore + parseInt($(this).attr("value"));
    	$("#total-score").html(totalScore);

    	//If user total score equal random number - "WON"
    	if(totalScore === randomNumber){
    		win++;
    		message = "You won !";
    		updateScore(win, loss, message);
    		alert("WON !!");
    		startGame();
    	}

    	//If tuser otal score is greater than random number - "LOST"
    	if(totalScore > randomNumber){
    		loss++;
    		message = "You lost !";
    		updateScore(win, loss, message);
    		alert("LOST !!");
    		startGame();
    	}
    });

});