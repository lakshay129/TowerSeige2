class Box{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.4,
            friction:0.8,
            density:1,
            isStatic:false
        }
        this.visibility=155;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      
        World.add (world,this.body);


    }
    display(){
        if(this.body.speed<4.5){
            var angle=this.body.angle;
            var pos=this.body.position;
            push ();
            translate(pos.x,pos.y);
            rotate(angle);
            fill ("blue")
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ();
        }
        else{  
        World.remove(world,this.body);
    
        }
    }

}
