var db;
var gs=0;
var pc;
var player, form, game;
var allplayers;
var car1,car2,car3,car4;
var cars;
var img_track, c1img,c2img,c3img,c4img;
function preload(){
    c1img=loadImage("imgs/car1.png")
    c2img=loadImage("imgs/car2.png")
    c3img=loadImage("imgs/car3.png")
    c4img=loadImage("imgs/car4.png")
    img_track=loadImage("imgs/track.jpg")

}
function setup(){
    createCanvas(displayWidth - 20,displayHeight-30);

    db = firebase.database();
    
    game= new Game();
    game.getState(); //gamestate
    game.start();

    
    
}

function draw(){
    if(pc===4){
        game.update(1)
    
    }
    if(gs===1){
        clear();
        game.play();
    }
    if(gs===2){
        game.end();
    }

}

/*
OOP

3 objects:
    1. Form 
        - Input box for name
        - Play button
        - Name --> database
    2. Player
        - Information : name, rank, distance
        - Playercount ---> database
    3. Game
        - Game states : WAIT, PLAY, END
            0, 1, 2
        - In the database & the code
*/