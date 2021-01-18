class Form{
    constructor(){
        this.input= createInput("name");
        this.button= createButton("play");
        this.greeting= createElement("h3");
        this.title= createElement("h2");
        this.restart=createButton("reset");
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50, 0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);   
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.restart.position(displayWidth-100,20);
        
        this.button.mousePressed(
            ()=>{  
                this.input.hide();
                this.button.hide();
                player.name= this.input.value();
                pc= pc+1;
                player.index=pc;
                player.update();
                player.updateCount(pc);
                this.greeting.html("hello "+ player.name)
                this.greeting.position(displayWidth/2-70,displayHeight/4);
        
            }
        );
        this.restart.mousePressed(
            ()=>{
                game.update(0);
                player.updateCount(0);
                db.ref("/").child("players").remove();
                Player.updateCarsOver(0);

            }
        );

    }
    hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();

    }
}

/*
ARROW FUNCTION [syntax: ()=>{}]
 - binds the "this" keyword to the original object that calls the function
*/