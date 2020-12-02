size(420, 420);
background(32);

// stroke(color);
// color is a range from 0 (black to 255 (white).
stroke(255);
// fill(color);
// color is a range from 0 (black) to 255 (white)
fill(204);
// ellipse(centerX, centerY, width, height);
ellipse(210, 210, 300, 200);

stroke(200);
fill(80);
// Make the width and height the same to draw a circle.
ellipse(230, 230, 120, 120);

stroke(225);
fill(0);
ellipse(230, 230, 100, 100);

// Notice that the first circle typed in to the sketch
// is drawn on the bottom while the last one is stacked
// on the top.
strokeWeight(1);
stroke(255);
// Circles with just strokes, no fill:
noFill();
ellipse(230, 230, 10, 20);
ellipse(240, 220, 5, 10);
ellipse(250, 210, 2, 3);



// ellipseMode(SPECIALMODE); CENTER (default), CORNER, CORNERS, RADIUS
// changes how the numbers you enter into ellipse() are interpreted
// when drawing the ellipse.
ellipseMode(CORNERS);
strokeWeight(0);
fill(204);
// ellipse(topLeftCornerX, topLeftCornerY, bottomRightCornerX, bottomRightCornerY);
ellipse(380, 380, 420, 420);



ellipseMode(CORNER);
// A circle which is just fill with no stroke:
noStroke();
fill(160);
ellipse(0, 380, 40, 40);



ellipseMode(RADIUS);
fill(120);
// ellipse(centerX, centerY, horizontalRadius, verticalRadius);
// recall that radius = diameter / 2
ellipse(20, 20, 20, 20);



ellipseMode(CENTER); // Default.
// ellipse(centerX, centerY, horizontalDiameter, verticalDiameter);
ellipse(400, 20, 40, 40);