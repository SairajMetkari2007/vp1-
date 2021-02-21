//Create variables here 
var  dog, happyDog;

var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}


function draw() {  
  background("lightblue");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  strokeWeight(4)
  stroke("pink");

  text("Food Remaining:" + foodS, 250,80);
 // fontColor("pink") 
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}

