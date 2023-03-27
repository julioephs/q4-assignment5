//variables
let smallestSize = 10;
let biggestSize = 20;
let smallestCoordinate =100;
let biggestCoordinate = 300;

function setup() {
  createCanvas(400, 400);
}

// returns a random coordinate from the smallest and biggest coordinate 
function getRandomCoordinate() {
  return Math.round(random(smallestCoordinate, biggestCoordinate));
}

//returns a random Size from the smallest size to the biggest
function getRandomSize() {
  return Math.round(random(smallestSize, biggestSize));
}

//gets a random number and chooses a color based off of the number
function getRandomColor() {
  let randomColorNumber = Math.round(random(1,4));

  if(randomColorNumber === 1) {
    return 'blue';
  }
  if (randomColorNumber === 2) {
    return 'red';
  }

  return 'white';
}

function drawRandomShape() {
  let randomShapeNumber = Math.round( random(1, 4));

  fill( getRandomColor() );

  if(randomShapeNumber === 1) {
    triangle(getRandomCoordinate(), getRandomCoordinate(), getRandomCoordinate(), getRandomCoordinate(), getRandomCoordinate(), getRandomCoordinate() );
  } else {
    ellipse(getRandomCoordinate(), getRandomCoordinate(), getRandomSize(), getRandomSize() );
  } 
}

function draw() {
  background(220);

  let maxShapes = 2;
  let drawnShapes = 0;
  while (drawnShapes < maxShapes)  {
    drawRandomShape();
    drawnShapes++;
  }

  //Try commenting out the noLoop() funciton and see what it does!
  noLoop();
}
