var canvas;
var backgroundImg;
var greetings = 1;
var play = 0;
var battle_backgroundImg;
var gameState="greetings";


function preload(){
    backgroundImg = loadImage("background.webp");
    battle_backgroundImg = loadImage("battle_background.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    // var gameState = "greetings";
}

function draw() {
    background(225);

    if(gameState=="greetings"){

        background(backgroundImg);

        fill("red");
        textSize(90);
        text("BATTLE ROYALE",450,180)

        fill("black");
        textSize(25);
        text("Hello Everyone! Welcome to BATTLE ROYALE!",450,300);
        text("You are an astronaut that has a job of protecting the baby aleins from the monsters.",450,350);
        text("Do your best to save them from the evil mosters!",450,400);
        text("If the evil aleins touched the baby aleins then the game will be over!",450,450);
        text("So player carefully! All the best!",450,500);

        fill("pink");
        textSize(30);
        text("Press Space Key to play!",450,600);
      drawsprites();

        /* if(keyDown("space")){
            gameState = "play";
        } */
    }

//     if(gameState=="play"){
//         background(battle_backgroundImg);
//    }

   
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
