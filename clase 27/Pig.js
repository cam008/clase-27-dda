class Pig extends ClaseBase{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image = loadImage("imagenes/enemy.png")
        this.width = width
        this.height = height
        this.visibilidad = 255
    }
    display(){
        if(this.body.speed < 10){
            super.display()
console.log (" velocidad activada")
        }
        else{
            console.log("velocidad desactivada")
            World.remove(world, this.body)
            push()
            this.visibilidad = this.visibilidad -5
        tint(255, this.visibilidad)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)

           pop()
        }
    }
}