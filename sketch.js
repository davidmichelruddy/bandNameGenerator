// An old silent pond...
// A frog jumps into the pond,
// splash! Silence again.

//'#adj# #noun#', 'the #noun#', 'the #adj#', '#noun# #noun#',

var n = 200;
var circles = [];
var expansion1;

var line1 = {
  "start": ['#noun# #verb#', '#adj# #noun#', 'the #noun#','the #noun.s#', 'the #adj.s#', '#noun# #noun#', 'the #verb#', 'the #firework#', 'the #adj# #firework#'],
  "prep": prepositions.prepositions,
  "noun": nouns,
  "adj": adjs,
  "verb": verbs,
  "pnoun": pn.personalNouns,
  "firework": fw.effects
};


function setup() {
createCanvas(windowWidth, windowHeight);

  pixelDensity(2);
  angleMode(DEGREES);
  noFill();
  for (var i = 0; i < n; i++) {
    var c = new Particle();
    circles.push(c);
  }
  textAlign(CENTER, CENTER);

  textFont('Frijole');
  var sentence1 = tracery.createGrammar(line1);
  expansion1 = sentence1.flatten('#start#');
}

function draw() {
  if(frameCount < 90) {
    circles.forEach(c =>
      c.update()
    );
    circles.forEach(c =>
      c.display()
    );
  } else  if(frameCount === 91){
    push();
    background(255, 130);
    fill(0);
    textSize(90);
    text(expansion1, windowWidth/2, windowHeight/2);
    pop();
  }


}