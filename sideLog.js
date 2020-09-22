class SideLog{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.sideLog = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.sideLog);
    }
    display(){
        var pos = this.sideLog.position;
        rectMode(CENTER);
        
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
};