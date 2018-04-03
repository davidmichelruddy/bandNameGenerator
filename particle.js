var Particle = function() {
  this.sizeX = floor(random(400));
  this.sizeY = floor(random(400));
  this.x = floor(random(-width/2,width/2));
  this.y = floor(random(-height/2,height/2));
  this.sw = floor(random(12));
  this.col = [random(255),random(255),random(255),random(255)];
  this.angle = floor(random(360));
};

Particle.prototype.display = function() {
  push();
  strokeWeight(this.sw);
  stroke(...this.col);
  translate((width/2), (height/2));
  rotate(this.angle);
  ellipse(this.x,this.y, this.sizeX,this.sizeY);
  pop();
};

Particle.prototype.update = function() {
  this.x += random(-5,5);
  this.y += random(-5,5);
  this.size -= 1;
  if (this.sizeX === -400) {
    this.sizeX = 400;
  }
  if (this.sizeY === -400) {
    this.sizeY = 400;
  }
  if (frameCount%this.sizeX === 0) {
    this.angle += random(-50,50);
    this.sw -= 1;
  }
  if (this.sw === 0) {
    this.sw = floor(random(12));
  }
}