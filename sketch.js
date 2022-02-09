var trex, trex_running, edges;
var groundSprite;
var groundImage;
var solo_invisivel

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,171,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  groundSprite = createSprite(300,190, 400, 10)
  groundSprite.addImage(groundImage)
  solo_invisivel = createSprite(50,191, 30, 1)
  solo_invisivel.visible = false
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")&& trex.y > 167){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;

  groundSprite.velocityX = -7

  if(groundSprite.x < 0){
    groundSprite.x = groundSprite.width / 2
  }
  
 //impedir que o trex caia
  trex.collide(solo_invisivel)
  drawSprites();
}