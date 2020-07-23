class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
  
    Matter.Body.setAngle(this.body, angle);
  }


    display() {
    
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    


  }

  

  }
