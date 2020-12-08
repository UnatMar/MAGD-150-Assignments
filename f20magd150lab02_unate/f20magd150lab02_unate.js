function setup() 
{
  // put setup code here
  createCanvas(600,600);
  background(11, 21, 46);
}

function draw() 
{
    colorMode(RGB, 255);
	// Ship Legs
	push();
	strokeWeight(5);
	line(200, 580, 220, 500);
	pop();

	push();
	strokeWeight(5);
	line(400, 580, 380, 500);
	pop();

	// Ship Base
	push();
	strokeWeight(2);
	colorMode(RGB, 255);
	fill('#21a3db');
	quad(220, 500, 380, 500, 370, 200, 230, 200);
	pop();

	// Ship Top
	push();
	fill(20);
	triangle(220, 200, 380, 200, 300, 100);
	pop();

	// Ramp
	push();
	fill(171, 36, 21);
	quad(320, 500, 330, 600, 270, 600, 280, 500);
	pop();

	// Door
	push();
	fill(255);
	rect(280, 420, 40, 80);
	pop();

	// Moon Ground
    fill(180);
	arc(300, 620, 800, 100, PI, 0, OPEN);

	// Planet
	push();
	colorMode(HSB, 100);
	fill(0, 50, 50);
	stroke(0);
	ellipse(500, 70, 50, 50);
	pop();

}
