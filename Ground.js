class Ground{
constructor(x,y,width,height){
var options = {
    isStatic:true
}
 
this.body =Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

World.add(world,this.body);
}
display(){

var position = this.body.position;
rectMode(CENTER);
fill("Brown");
rect(position.x,position.y,this.width,this.height);
}

}

// class Box {
//     constructor(x, y, width, height) {
//       var options = {
//           'restitution':0.8,
//           'friction':0.3,
//           'density':1.0
//       }
//       this.body = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
      
//       World.add(world, this.body);
//     }
//     display(){
//       var pos =this.body.position;
//       rectMode(CENTER);
//       fill(255);
//       rect(pos.x, pos.y, this.width, this.height);
//       pop();
//     }
//   };
  