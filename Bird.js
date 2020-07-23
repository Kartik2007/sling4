class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

  }

  display() {
    
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

  

