var randomNumber;
var buttonColors = ["green", "red", "yellow", "blue"];
var randomColor;
var userColor;
var gamePattern = [];
var userPattern = [];
var started = false ;
var  level = 0;


$(document).keydown(()=>
{ if (!started) {
    setTimeout(function () {
        $("body").removeClass("pressed");
    }, 100);
    gamePattern = [];
    nextSequence();
    started = true;
    level = 0;
     $("h1").text("LEVEL " + level);
    
}
});
        

    $(".btn").on("mousedown", (event) => {
        
        userColor = event.target.id;
        userPattern.push(userColor);
        buttonAnimation(userColor);
    
        for(var i =0;i < userPattern.length;i++)
        {
            if(gamePattern[i] !== userPattern[i])
            {
                var audio1 = new Audio("sounds/wrong.mp3");
                audio1.play();
                $("body").addClass("pressed");
                started = false;
                $("h1").text("Better luck next time! Press any key to restart");
                level = 0;
                break;
            }
        }
        if (userPattern.length == gamePattern.length) {
            setTimeout(function () {
                nextSequence();
                
            }, 1500);
        }
        
    
    });
    
    
    function nextSequence() {
        randomNumber = Math.floor(Math.random() * 4);
        randomColor = buttonColors[randomNumber];
        gamePattern.push(randomColor);
        buttonAnimation(randomColor);
        userPattern = [];
        level += 1;
        $("h1").text("LEVEL " + eval(level));
    
    };
    
    function buttonAnimation(key) {
    
        $("#" + key).fadeOut(100).fadeIn(100);
        var audio1 = new Audio("sounds/" + key + ".mp3");
        audio1.play();
    
    }



