class Birds extends ClaseBase{
    constructor(x,y,width,height){
        super(x, y, width,height)
        this.image = loadImage("imagenes/bird.png")
        this.image2 = loadImage("imagenes/smoke.png")
        this.trayectoria = []

    }
    display(){
       // this.body.position.x= mouseX
        //this.body.position.y= mouseY
        super.display()
        if (this.body.velocity.x > 20 && this.body.velocity.x > 200){
            var position = [this.body.position.x, this.body.position.y]
            this.trayectoria.push(position)
        }
        for(var red = 0; red < this.trayectoria.length; red++){
            image(this.image2 , this.trayectoria[red][0] , this.trayectoria[red][1])
        }
    }
}