class Player{
    constructor(){
        this.name= null;
        this.distance=0;
        this.index=null;
        this.rank=null;
    }

    //To read playercount from db
    getCount(){
        var pcRef= db.ref("playerCount");
        pcRef.on("value", (data)=>{
            pc=data.val();
        })
    }


    //To update playercount in db 
    updateCount(count){
        db.ref("/").update({
            playerCount : count
        })
    }

    //To update the info of the players
    update(){
        db.ref("players/player"+this.index).set({
            name: this.name,
            distance: this.distance
        })
    
    }

    //To get info into the allplayers variable
    static getPlayerInfo(){
        var piRef= db.ref("players");
        piRef.on("value", (data)=>{
            allplayers= data.val()
        });        
    }
    getCarsOver(){
        db.ref("carsOver").on("value",(data)=>{
            this.rank=data.val();
        });

    }

    static updateCarsOver(rank){
        db.ref("/").update({
            carsOver:rank
        })
    }
}

/*
static functions 
    - Belong to the entire class and not to a specific object
    - Common function
    - Called by the class & not by the objects
*/