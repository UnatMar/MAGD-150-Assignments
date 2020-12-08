var pdf;
var lines = [];

var photo1, photo2;

function preload()
{
    // Pre Load Fonts and Images
    font = loadFont("1.ttf");
    font2 = loadFont("2.ttf");
    lines = loadStrings("list.txt");
    photo1 = loadImage("photo1.png");
    photo2 = loadImage("photo2.png");
}

function setup() 
{
    font = loadFont("1.ttf");
    font2 = loadFont("2.ttf");
    createCanvas(600, 600, P2D);
    pdf = createPDF();
    pdf.beginRecord();
    
    
    
    var num = lines.length;
}

function draw() 
{
    background(255);
    
    // Load Both Photos
    push();
    tint(255, 200, 00);
    image(photo1, 0 , 0, 600, 600);
    pop();
    
    push();
    photo2.filter(GRAY);
    image(photo2, 210, 100, 150, 30);
    pop();
    
    fill(255);
    
    textAlign(CENTER);
    
    textFont(font, 70);
    stroke(0);
    strokeWeight(2);
    text("Insert Movie Name", 300, 500);
    
    textFont(font2, 32);
    text("Click To Save", mouseX, mouseY);
    
    
    // To be honest I have no idea how this is not working?
    
    //for (var i =0; i < num; i++)
    //{
        print(lines[1]);
    //}
  
}

function mousePressed()
{
          pdf.save();
  
}
