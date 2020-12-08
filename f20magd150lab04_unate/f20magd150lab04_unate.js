var r = 0;
var g = 0;
var b = 0;

var x = 1;

var count = 1;

function setup() 
{
  // Main canvas drawn on startup
  createCanvas(600,600);
  background(32);

  push();
  fill(255);
  stroke(0);
  textSize(18);
  text('-Click to add toppings', 210, 30); 
  text('-Click left and right arrows to change topping', 130, 50); 
  text('-Click -a- to reset pizza', 200, 70); 
  pop();

  push();
  stroke(0);
  fill(191, 144, 122);
  ellipse(300, 300, 400, 400);
  fill(200, 10, 10);
  ellipse(300, 300, 380, 380);
  fill(227, 230, 154);
  ellipse(300, 300, 370, 370);
  pop();

  strokeWeight(3);
  line(300, 100, 300, 500);
  line(100, 300, 500, 300);
}

function draw() 
{
	
	// Determines the color of the topping
	if(count == 1)
	{
		r = 207;
		g = 29;
		b = 23;
	}
	else if(count == 2)
	{
		r = 46;
		g = 161;
		b = 31;
	}
	else
	{
		r = 0;
		g = 0;
		b = 0;
	}

    while(x != 50) // I count find a use for a while loop in the program so I am a loop to count to 50 over and over
    {
    	x++;
    	print(x);
    }
    x = 0;


	
}

function mouseClicked() 
{
	strokeWeight(1);
	stroke(0);
	fill(r, g, b);
	ellipse(mouseX, mouseY, 30, 30); // Makes a new circle at the plave the user clicked with the same colors
	return false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) 
  {
    if(count == 1)
    {
    	count = 3;
    }
    else
    {
    	count--;
    }
  } 
  else if (keyCode === RIGHT_ARROW) 
  {
    if(count == 3)
    {
    	count = 1;
    }
    else
    {
    	count++;
    }
  }
}

function keyTyped()
{
	if (key == 'a')
	{
		// Code to reset drawing

		background(32);

		push();
    	fill(255);
    	stroke(0);
    	textSize(18);
   		text('-Click to add toppings', 210, 30); 
  		text('-Click left and right arrows to change topping', 130, 50); 
  		text('-Click -a- to reset pizza', 200, 70);  
    	pop();

		push();
  		stroke(0);
  		fill(191, 144, 122);
  		ellipse(300, 300, 400, 400);
  		fill(200, 10, 10);
  		ellipse(300, 300, 380, 380);
  		fill(227, 230, 154);
  		ellipse(300, 300, 370, 370);
  		pop();

  		strokeWeight(3);
  		line(300, 100, 300, 500);
  		line(100, 300, 500, 300);
	}
	else
	{
		return false;
	}
}
