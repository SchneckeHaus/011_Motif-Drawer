const CANVAS_SIZE = 600
const CANVAS_BG = "#F4F0E6"
const GRID_DIMENSION = 10
const CELL_SIZE = CANVAS_SIZE/GRID_DIMENSION
const MOTIF_SIZE = CELL_SIZE - 20
const NOISE_AMOUNT = 0.3
const inks = {
  black: "#1E1E1E",
  pink: "#FF48B0",
};

// Draws an X centred on the current origin — translate() to the cell centre before calling
// we are not adding a fill here as we want the ink picker to RETURN a colour, so fill doesnt need to belong here
// this is know as Separation of concerns, everything should live in its own place and not meddle
function crossMotif(size) {
  push();
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);

  const thickness = size / 4;

  push();
  rotate(45);
  rect(0, 0, size, thickness);
  pop();

  push();
  rotate(-45);
  rect(0, 0, size, thickness);
  pop();

  pop();
}

// Draws a dot centred on the current origin — translate() to the cell centre before calling
function dotMotif(size) {
  push();
  noStroke();
  ellipseMode(CENTER);
  circle(0, 0, size);
  pop();
}

//col, row are the input here, the loop exists in draw grid
function pickMotif(col,row){
    let col_noise = col * NOISE_AMOUNT
    let row_noise = row * NOISE_AMOUNT
    let n = noise(col_noise,row_noise)
    let n_mapped = constrain(floor(map(n, 0.25, 0.75, 0, 4)), 0, 3)
    return n_mapped

}

function pickColour(col,row){
    let inkColour = col + row 
    if (inkColour % 3 == 0) {
        return inks.pink;
    }
    else {
        return inks.black;
    }
}



function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  noLoop();
}

function draw() {
  background(CANVAS_BG);
  noLoop();
}