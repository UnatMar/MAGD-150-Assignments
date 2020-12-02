var r = 0;
var g = 0;
var b = 0;

var widthVar = 0; 
var heightVar = 0;

var count = 0;

var fp1 = 130.5;
var fp2 = 50.5;

function setup() 
{
  // put setup code here
  createCanvas(600,600);
  background(32);
}

function draw() 
{
	//background(32);
	fill(r, g, b); // Change fill of drawn circles every frame
	stroke(0);

    r = (r + 1) % 256; // red var
    r = round(r, 0);

    g = (g + 2) % 256; // green var
    g = abs(g);
    g = round(g, 0);

    b = (b + 3) % 256; // blue var
    b = round(b, 0);

    widthVar = (widthVar + .5) % (height / 8);
    heightVar = (heightVar + .5) % (height / 8);
    
    ellipse(60, 40, widthVar, heightVar);
    ellipse(520, 40, widthVar, heightVar);
    

    push();
    fill(255);
    stroke(0);
    textSize(32);
    text('Click to make bubbles', fp1, fp2); // Instruction text
    pop();

    if(count == 60)
    {
    	print("r = " + r);
    	print("g = " + g);
    	print("b = " + b);
    	count = 0;
    }
    else if(count == 16)
    {
    	print("The square root of 16 is: " + sqrt(count)); // Display squard root of 16 every time the count hits 16
    }
    count++;
}

function mouseClicked() 
{
	stroke(0);
	fill(r, g, b);
	ellipse(mouseX, mouseY, 50, 50); // Makes a new circle at the plave the user clicked with the same colors
	return false;
}
