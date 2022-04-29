class Resortera{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('imagenes/sling1.png');
        this.sling2 = loadImage('imagenes/sling2.png');
        this.sling3 = loadImage('imagenes/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        //this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}


/*class Resortera {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 7,
            //length: 0.05
        
        }
//    this.resortera1 = loadImage("imagenes/sling1.png")
 //   this.resortera2 = loadImage("imagenes/sling2.png")
 //   this.resortera3 = loadImage("imagenes/sling3.png")
    this.pointB = pointB
    this.resortera = Constraint.create(options)
    World.add(world, this.resortera)
    //construcción cuerpo restringido
    }
    
   // fly(){
   //     this.resortera.bodyA = null
   // }
    
    display(){
    //    image(this.resortera1,200,40)
    //    image(this.resortera2,170,40)
        
        if(this.resortera.bodyA){
            var pointA = this.resortera.bodyA.position
            var pointB = this.pointB

           push()
    //        strokeWeight(4)
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y)
            //line(pointA.x + 25,pointA.y, pointB.x + 30, pointB.y - 3)
            //image(this.resortera3, pointA.x + 25, pointA.y - 10, 15, 30)
            pop()
       }
    }
    
}*/