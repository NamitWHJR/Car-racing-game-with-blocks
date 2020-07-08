var database, gameState = 0,playerCount = 0
var form,player,game,allPlayers
var car1,car2,car3,car4
var cars = [];

function setup(){
    createCanvas(displayWidth - 60,displayHeight - 100);
    
    database = firebase.database()

    game = new Game()
    game.getState()
    game.start()

    console.log(displayWidth,displayHeight)


    
}

function draw(){
    
background("white")
 
if(playerCount == 4){
    game.update(1)
}

if(gameState == 1){
    game.play();
}

}


