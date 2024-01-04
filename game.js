var buttonColours=["red","blue","green","yellow"];
gamepattern=[];
userClickedPattern=[];
var level=0;
var started=false;
function newSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomVariable=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomVariable];
    gamepattern.push(randomChosenColour);
    

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);  
    sounds(randomChosenColour);
}


$("div.btn").click(function(event){
    var userChosenColour=event.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    sounds(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})  

$(document).keydown(function(){
    if(!started){
    $("#level-title").text("Level "+level);
    newSequence();
    started=true;
    }
})




function startOver(){
    level=0;
    gamepattern=[];
    started=false;
}




function checkAnswer(currentLevel){
if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("sucess");
    if(gamepattern.length===userClickedPattern.length){
        setTimeout(function(){
            newSequence();
        }, 1000);
    }
}
else{
    console.log("failed");
    var wrong=new Audio("./sounds/wrong.mp3");
    wrong.play();
    $("h1").text("Game Over,Press any Key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
        startOver();
    }, 200);

}
}


function animatePress(currentColor){
   
        $("#"+currentColor).addClass("pressed");
        setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
       }, 100);
    }

function sounds(a){
   switch (a) {
       case "green":
           var green=new Audio("./sounds/green.mp3");
           green.play();
           break;
       case "blue":
           var blue=new Audio("./sounds/blue.mp3");
           blue.play();
           break;
       case "red":
           var red=new Audio("./sounds/red.mp3");
           red.play();
       case "yellow":
           var yellow=new Audio("./sounds/blue.mp3");
           yellow.play();
       default:
           break;
   }
}