//Create variables here
var dog, dog1, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}


function setup() {

  database = firebase.database();
 
	createCanvas(500, 500);
 
  dog = createSprite(width/2,250,50,50);
  dog.addImage(dog1);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}
function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(19);
  fill("black")
  text("press UP_ARROW key to feed doggo",150,50);

  text("foodStock:"+ foodS,20,450);
 
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

