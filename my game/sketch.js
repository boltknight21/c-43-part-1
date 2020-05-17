var score = 0;

var space = createSprite(0, 0 ,400, 400);
space.scale = 2.5;
space.y = space.height/2;



var player = createSprite(190, 375,20,20);

var galaxianGroup = createGroup();
var galaxian1Group = createGroup();
var galaxian2Group = createGroup();
var galaxian3Group = createGroup();
var bulletGroup = createGroup();

textSize(14);
textFont("Georgia");
stroke("red");
fill("white");

function draw() {    
  // background(10);
  
  // space.setAnimation("space");
  player.x = World.mouseX;
  createEdgeSprites();
  player.collide(bottomEdge);
  
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) {
    createBullet(player.x);
  }
  
  if (bulletGroup.isTouching(galaxianGroup)) {
    galaxianGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
    playSound("sound://category_explosion/8bit_explosion.mp3");
  } else if (bulletGroup.isTouching(galaxian1Group)) {
    galaxian1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 4;
    playSound("sound://category_explosion/8bit_explosion.mp3");
  } else if (bulletGroup.isTouching(galaxian2Group)) {
    galaxian2Group.destroyEach();
    bulletGroup.destroyEach(); 
    score = score + 6;
    playSound("sound://category_explosion/8bit_explosion.mp3");
  } else if (bulletGroup.isTouching(galaxian3Group)) {
    galaxian3Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 8;
    playSound("sound://category_explosion/8bit_explosion.mp3");
  }
  
  if (galaxianGroup.isTouching(bottomEdge)) {
    score = score - 2;
  }
  
  var select_enemy = randomNumber(0,3);
  
  if (World.frameCount % 100 == 0) {
    if (select_enemy == 0) {
      createGalaxian();
    } else if (select_enemy == 1) {
      createGalaxian1();
    } else if (select_enemy == 2) {
      createGalaxian2();
    } else {
      createGalaxian3();
    }
    
  }
  
  drawSprites();
  text("PLAYER SCORE: "+ score, 10, 20);
}


function createGalaxian() {
  var galaxian = createSprite(randomNumber(0, 400), 0, 10, 10);
  galaxian.velocityY = 3;
  galaxian.lifetime = 1000;
  galaxianGroup.add(galaxian);
}

function createGalaxian1() {
  var galaxian1 = createSprite(randomNumber(0, 400), 0, 10, 10);
  //galaxian1.setAnimation("galaxian1");
  galaxian1.velocityY = 4;
  galaxian1.lifetime = 1000;
  galaxian1Group.add(galaxian1);
}

function createGalaxian2() {
  var galaxian2 = createSprite(randomNumber(0, 400), 0, 10, 10);
  //galaxian2.setAnimation("galaxian2");
  galaxian2.velocityY = 4;
  galaxian2.lifetime = 1000;
  galaxian2Group.add(galaxian2);
}

function createGalaxian3() {
  var galaxian3 = createSprite(randomNumber(0, 400), 0, 10, 10);
  //galaxian3.setAnimation("galaxian3")        ;
  galaxian3.velocityY = 5;
  galaxian3.lifetime = 1000;
  galaxian3Group.add(galaxian3);
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 360;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -40;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
  playSound("sound://category_hits/8bit_splat.mp3")
}
