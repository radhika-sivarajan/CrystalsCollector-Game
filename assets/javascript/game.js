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
		var scores = comment + "<br>Win : " + winCount + "<br>Loss : " + lossCount ;
		$("#score").html(scores);
	}

	//Start game
	function startGame(){
		randomNumber = Math.floor(Math.random() * 102) + 19;
		$("#random").html(randomNumber);

		totalScore=0;
		$("#total-score").html(totalScore);

		amberCrystalNum = Math.floor(Math.random() * 12) + 1;
		blueCrystalNum = Math.floor(Math.random() * 12) + 1;
		greenCrystalNum = Math.floor(Math.random() * 12) + 1;
		redCrystalNum = Math.floor(Math.random() * 12) + 1;

		$("#amberCrystal").attr("value", amberCrystalNum);
	    $("#blueCrystal").attr("value", blueCrystalNum);
	    $("#greenCrystal").attr("value", greenCrystalNum);
	    $("#redCrystal").attr("value", redCrystalNum);
	}

    startGame();

    //On clicking crystals
    $(".crystal").on("click", function(){  	

    	//Adding crystal values to reach random value by computer
    	totalScore = totalScore + parseInt($(this).attr("value"));
    	$("#total-score").html(totalScore);

    	//If total score equal random number
    	if(totalScore === randomNumber){
    		win++;
    		message = "You won !!";
    		updateScore(win, loss, message);
    		alert("WON !!");
    		startGame();
    	}

    	//If total score is greater than random number
    	if(totalScore > randomNumber){
    		loss++;
    		message = "You lost !!";
    		updateScore(win, loss, message);
    		alert("LOST !!");
    		startGame();
    	}
    });

});