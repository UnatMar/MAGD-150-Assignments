var radius = 50;

var circleFill = 255;
var rectFill = 255;

var tvFillR = 255;
var tvFillG = 255;
var tvFillB = 255;

var x = 200;

var count = 1;

function setup() 
{
  // Main canvas drawn on startup
    createCanvas(600,600);
    background(60);
	ellipseMode(RADIUS);
	
  
}

function draw() 
{
	// TV Draw
	line(300, 150, 400, 50);
	line(300, 150, 200, 50);
	push();
	fill(0);
	rect(155, 115, 310, 310);
	pop();
	push();
	fill(tvFillR, tvFillG, tvFillB);
	rect(165, 125, 290, 290);
	pop();
	
	// Rect Button
	push();
	rectMode(CORNERS);
	fill(0, rectFill, 0);
	rect(50, 450, 150, 550);
	pop();
	
	// Rect Text
	push();
	strokeWeight(2);
	stroke(0);
	fill(255);
	textSize(20);
	text('Click Me', 60, 505);
	pop();
	
	// Ellipse Button
	push();
	stroke(0);
	fill(circleFill, 0, 0);
	ellipse(500, 500, radius, radius);
	pop();
	
	// Ellipse Text
	push();
	strokeWeight(2);
	stroke(0);
	fill(255);
	textSize(20);
	text('Click Me', 460, 505);
	pop();
	
	// Moving Circle
	x += count;
	push();
	fill(255);
	ellipse(x, 300, 20, 20);
	pop();
	
	if(x > 400 || x < 200)
	{
		count = count * -1;
	}
	
	if(dist(mouseX, mouseY, 500, 500) < radius)
	{
		circleFill = 0;
	}
	else
	{
		circleFill = 255;
	}
	if(mouseX > 50 && mouseX < 150 && mouseY > 450 && mouseY < 550)
	{
		rectFill = 0;
	}
	else
	{
		rectFill = 255;
	}
	
	print(count);
	
	
}

function mouseClicked() 
{
	if(dist(mouseX, mouseY, 500, 500) < radius)
	{
		tvFillR = 255;
		tvFillG = 0;
		tvFillB = 0;
	}
	
	if(mouseX > 50 && mouseX < 150 && mouseY > 450 && mouseY < 550)
	{
		tvFillR = 0;
		tvFillG = 255;
		tvFillB = 0;
	}
	return false;
	
	
}

function keyPressed() {
  
}
