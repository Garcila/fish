var fishArr = [];
var allFish = [];

function preload () {
  // load png image with fishes
  img = loadImage('fishLine.png');
}

function setup () {
  createCanvas(600, 400);
  img.loadPixels();
  
  // cut the png images into individual fish and 
  // push each image to the allFish array
  for (var i = 0; i < 21 * 206; i += 206) {
    var oneFish = img.get(i, 2, 203, 202);
    fishArr.push(oneFish);
  }
  allFish.push(new Fish(200, 200, 1, 50));
 
}

var Fish = function (x, y,speed,fSize) {
  this.index = 0,
  this.x = x,
  this.y = y,
  this.speed = speed,
  this.fSize = fSize,
  this.images = fishArr,
  this.angle = 0


  this.update = function() {
    // loop over each of the items in the array
    this.index < 20 ? this.index++ : (this.index = 0);
  }

  this.followMouse = function() {
    if (dist(mouseX,mouseY,this.x,this.y) > 10) {
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
        this.x += cos(this.angle) * this.speed;
        this.y += sin(this.angle) * this.speed;
    }
  };
};

// add a new fish with the click of the mouse
function mouseClicked() {
  allFish.push(new Fish(mouseX, mouseY,random(2),random(5,80)));
};

function draw () {
  for(var i = 0; i < height; i++){
    stroke(10,30,220-i/2);
    line(0,i, width,i);
  }
  // background(0, 150, 200);
  allFish.forEach(fish => {
      var direction = fish.x < mouseX ? 1 : -1;
      push();
      scale(direction*1.0, 1.0);
      image(fish.images[fish.index], direction * fish.x, fish.y, fish.fSize, fish.fSize);
      pop();
      fish.update();
      fish.followMouse();
    }
  );
};
