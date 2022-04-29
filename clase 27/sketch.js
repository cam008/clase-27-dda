const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var piso, caja1;
var caja2;
var log1
var caja3
var caja4
var log2
var caja5
var log3
var log4
var enemy1
var bird1
var enemy2
var plataforma
var resortera1
var bg = "imagenes/bg.png"
var imagendefondo

function preload(){
    fondoCambios()

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    piso = new Ground(600,390,1200,10);
    caja1 = new Box(700,320,70,70);
    caja2 = new Box(920,320,70,70);
    log1 = new Log(810,260,300,PI/2)
    caja3 = new Box(700,220,70,70);
    caja4 = new Box(920,220,70,70);
    log2 = new Log(810,190,300,PI/2);
    caja5 = new Box(810,150,70,70);
    log3 = new Log(760,120,145,PI/7);
    log4 = new Log(870,120,145,-PI/7);
    enemy1 = new Pig(810,320,50,50);
    bird1 = new Birds(100,320,50,50);
    enemy2 = new Pig(810,200,50,50);
    plataforma = new Ground(100,360,300,300);
    resortera1 = new Resortera(bird1.body, {x: 200, y: 50});
}

function draw(){
    if (imagendefondo)
    background(imagendefondo);
    Engine.update(engine);
    rectMode(CENTER);
    piso.display();
    caja1.display();
    caja2.display();
    log1.display();
    caja3.display();
    caja4.display();
    log2.display();
    caja5.display();
    log3.display();
    log4.display();
    enemy1.display();
    bird1.display();
    enemy2.display();
    plataforma.display();
    resortera1.display();
}

function mouseDragged(){
Matter.Body.setPosition(bird1.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    resortera1.fly()
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(bird1.body, {x: 200, y: 50})
        resortera1.attach(bird1.body)
    }

}


async function fondoCambios(){
var respuesta = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City")
var respuestaJSON = await respuesta.json()
var fechayhora = respuestaJSON.datetime
var hora = fechayhora.slice(11,13)

if (hora>= 06 && hora<= 17){
    bg = "imagenes/bg.png"
}
else{bg = "imagenes/bg2.jpeg"}

imagendefondo = loadImage(bg)
}

