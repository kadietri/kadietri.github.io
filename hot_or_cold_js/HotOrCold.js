$(document).ready(function(){
	var answer = Math.floor(Math.random()*100);
	console.log(answer);
	var t = null;
	var prev_distance = null;
		$("#submit").click(submit);
		$("#guess").keydown(function(e){
			if (e.keyCode == 13) {
				submit();
			}
		});
	function submit(){
		var guess = $("#guess").val();
		console.log(guess);
		validate(guess);
	}
	function validate(guess){
		if (guess == ""){
			$("#answer").html("Please select a value");
			return;
		}
		else if (guess > 100 || guess != Math.floor(guess) || guess < 1){
			$("#answer").html("Error: Must be between 1 and 100").css({"color":"red"});
			return;
		}
		distance = Math.abs(guess - answer);

		if (guess == answer){
			console.log("You have won the match! Great Job!");
			$("#answer").html("You have won the match! Great Job!").css({"color":"#000", "font-weight":"bold"});
		}
		else if (prev_distance == null){
			firstGuess(guess, answer);
		}
		else {
			hotOrCold(prev_distance, distance);
		}
		prev_distance = distance;
	}
	function firstGuess (guess, answer){
		if (guess < answer){
			console.log("Your guess is too low!");
			$("#answer").html("Your guess is too low!").css({"color":"#ffff00"}).effect("pulsate", {times:2}, 200);
		}
		else if (guess > answer){
			console.log("Your guess is too high!");
			$("#answer").html("Your guess is too high!").css({"color":"ffff00"}).effect("pulsate", {times:2}, 200);
		}
	}
	function hotOrCold (prev_distance, distance){
		if (prev_distance > distance){
			$("#answer").html("You are getting warmer!").css({"color":"#b22222"}).effect("pulsate", {times:2}, 200);
		}
		else if (prev_distance < distance){
			$("#answer").html("Brrrr! You are getting colder!").css({"color":"#0000ff"}).effect("pulsate", {times:2}, 200);
		}
	}
	$("#new_game").click(function(e){
		e.preventDefault();
		answer = Math.floor(Math.random()*100);
		console.log(answer);
		$("#answer").html("");
	});
	$("#cheat").click(function(e){
		e.preventDefault();
		alert(answer);
	});
});










	/*function IsNumeric(input) {
		if (input >=1 && input <= 100) {
			return true;
		}
   
	/*function checkinput(input) = {
		if ( input.match(num_regex) ) {
		ok = true;	
		}
		else {
			alert("Please enter a number between 1 and 100.");
		}
	}
	if ( input.match(/d/g) == null ) {
	 ok = false;
	} 
	else if ( input.match(/d/g).length >= 3 )  {
	 ok = false;	
	} 
	else {
	 ok = true;	
	}
	*/

