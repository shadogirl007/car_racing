class Game{
    constructor(){}
    //to read gameState value from the database
    getState(){
        var gsRef = db.ref("gameState");
        gsRef.on("value", function(data){
            gs = data.val();
        });
    }

    //to update gameStates into the database
    update(state){
        db.ref("/").update({
            gameState: state
        });
    }


    //WAIT
    async start(){
        if(gs === 0){
            //New player object
            player= new Player();
            //Playercount - read from db
            var PCref= await db.ref("playerCount").once("value");
            if(PCref.exists()){
                pc=PCref.val();
                player.getCount();
            }

            //New form object
            form= new Form();
            //Display the form
            form.display();
    
        }
        
        car1= createSprite(100,200);
        car1.addImage(c1img)
        car2= createSprite(300,200);
        car2.addImage(c2img)
        car3= createSprite(500,200);
        car3.addImage(c3img)
        car4= createSprite(700,200);
        car4.addImage(c4img)
        cars=[car1,car2,car3,car4]
    }

    play(){
        form.hide()
        textSize(30);
        text("Game start", 120,100);
        Player.getPlayerInfo();     //Static - called by the class
        

        player.getCarsOver();
        //GAME STARTS
        if(allplayers!==undefined){
            background("brown");
            image(img_track,0,-displayHeight*5,displayWidth, displayHeight*6);
            var car_index= 0;
            var y;
            var x=175;
            for(var i in allplayers){   //initialization(index number); condition (controls the loop); incrementation (no. of times) 
                car_index++;
                y= displayHeight-allplayers[i].distance;
                x=x+220;
                cars[car_index-1].y=y;
                cars[car_index-1].x=x;
                
                //identifying the currently active player
                if(car_index=== player.index){
                    fill("red");
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y= cars[car_index-1].y;
                }              
            }

        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }
        if(player.distance>5150){
            gs=2;
            player.rank= player.rank+1;
            Player.updateCarsOver(player.rank);
        }
        drawSprites();

    }

    end(){
        console.log("game ended");
        console.log(player.rank);

    }
}

/*
for(var i = 0; i<4; i++){}

for/in loop - works for arrays as well as objects(properties)
for(var i in array){}
*/

