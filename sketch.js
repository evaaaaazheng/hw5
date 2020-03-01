let bin;
let trash;
var trashx;
var trashY;
var binX = 380;
var binY = 280;
var isDragging = 0;
var sound


function preload() {
  trash = loadImage("trash.png");
  bin = loadImage("bin.png");

  s1 = loadSound("1.wav");
  s2 = loadSound("2.wav");
  s3 = loadSound("3.wav");

  s4 = loadSound("5.wav");
  s5 = loadSound("6.wav");
  s6 = loadSound("7.wav");
}


function setup() {
  createCanvas(600, 600);
  trashX = random(20, 580);
  trashY = random(450, 550);
}

function draw() {
  background(200);
  image(bin, binX, binY, 100, 150);
  image(trash, trashX, trashY, 40, 60);

  //background wall
  strokeWeight(4);
  line(400, 0, 400, 350);
  line(400, 350, 0, 400);
  line(400, 350, 600, 450);

  if (isDragging == 1) {
    trashX = mouseX;
    trashY = mouseY;
  }
  if (sound == 1) {
    s1.play();
  }
  if (sound == 2) {
    s2.play();
  }
  if (sound == 3) {
    s3.play();
  }
  if (sound == 4) {
    s4.play();
  }
  if (sound == 5) {
    s5.play();
  }
  if (sound == 6) {
    s6.play();
  }

  if (dist(trashX, trashY, binX, binY) > 100) {
    sound = 0
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, trashX, trashY) < 50) {
    isDragging = 1;
  }
}

function mouseReleased() {
  isDragging = 0;

  if (dist(trashX, trashY, binX, binY) < 100) {
    trashX = random(20, 580);
    trashY = random(450, 550);
    sound = round(random(1, 6))
  }
}
