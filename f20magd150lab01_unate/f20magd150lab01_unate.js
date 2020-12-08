function setup() 
{
  // put setup code here
  createCanvas(600,600);
  background(32);
}

function draw() 
{
    
    // Bulding Poll
    stroke(0);
    strokeWeight(6);
    strokeCap(ROUND);
    line(250, 50, 250, 150);
	
    // -------------------------------------------------

    // Building Base Rectange
	rectMode(CORNER);
 	strokeWeight(4);
 	strokeJoin(BEVEL);
 	fill(64);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(100, 100, 200, 10000);

 	// Building Window Left 1
 	rectMode(CORNERS);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY,
 	// bottomRightCornerX, bottomRightCornerY);
 	rect(120, 120, 170, 170);

 	// Building Window Right 1
 	rectMode(CORNERS);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY,
 	// bottomRightCornerX, bottomRightCornerY);
 	rect(225, 120, 275, 170);

 	// Building Window 2 Left
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(120, 220, 50, 50);

 	// Building Window 2 Right
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(225, 220, 50, 50);

 	// Building Window 3 Left
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(120, 320, 50, 50);

 	// Building Window 3 Right
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(225, 320, 50, 50);

 	// Building Window 4 Left
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(120, 420, 50, 50);

 	// Building Window 3 Right
 	rectMode(CORNER);
 	noStroke();
 	fill(255);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(225, 420, 50, 50);

    // -------------------------------------------------------------------------------------

 	// Door
 	rectMode(CORNER);
 	stroke(255);
 	fill(20);
 	strokeWeight(1);
 	// rect(topLeftCornerX, topLeftCornerY, width, height);
 	rect(177, 520, 40, 10100);

 	// "Door handle"
	stroke(70);
 	strokeWeight(5);
 	point(185, 560);

 	stroke(255);
 	strokeWeight(3);
 	point(185, 560);

 	// ----------------------------------------------------------------------------------

 	// "Tree"

 	stroke(100);
 	strokeWeight(30);
 	strokeCap(SQUARE);
 	line(450, 500, 450, 600);

 	stroke(255);
 	strokeWeight(2);
 	ellipse(450, 500, 100, 100);
}
