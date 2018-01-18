
var fishes = [];
var creatures = [];

var fish;
var index = 0;
var fishX = 0;
var fishY = 300;
var fishSpeed = 2;
var img;
var fishSize = Math.random() * 200;

function preload() {
  img = loadImage("fishLine.png");
}

function setup() {
  createCanvas(600, 400);
  img.loadPixels();
  for(var i = 0; i < 21*206; i+=206) {
    var oneFish = img.get(i, 2, 203, 202);
    fishes.push(oneFish);
  }
  creatures.push(new Fish(0, 200));
}

function mousePressed() {
  creatures.push(new Fish(mouseX, mouseY));
}

var Fish = function(x, y) {
  this.index = 0;
  this.x = x,
  this.y = y,
  this.speed = 2;
  this.fSize = random(50, 150),
  this.images = fishes;

  this.update = function() {
    this.x =+ random(-5, 5);
    this.y =+ random(-5, 5);
  }

  this.show = function() {
    image(fishes[index], 0+fishX, fishY,fishSize,fishSize);
  }
}


function draw() {
  background(0,100,200);
  // console.log('creatures ', creatures[0].images);
  creatures.forEach(c => image(c.images[index],100+index,100));

  // image(fishes[index], 0+fishX, fishY,fishSize,fishSize);
  
  index < 20 ? index++ :index=0;
  // if(fishX > 600) {
  //   fishX = random(-200);
  //   fishY = random(300);
  // } else {
  //   fishX += fishSpeed;
  // }
}
