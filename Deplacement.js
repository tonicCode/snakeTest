
export class Deplacement{
  
  
  constructor(){
    
    this.dx=20;
    this.dy=0;
    this.posX=0;
    this.posY=0;
    
    this.btnDown=document.getElementById("idown");
    this.btnUp=document.getElementById("ihigh");
    this.btnLeft=document.getElementById("ileft");
    this.btnRight=document.getElementById("iright");
    this.mobileControl();
    
    
    this.snakeIsRunning=false;
    this.snakeMoveForwardVertically=false;
    this.snakeMoveBackVertically=false;
    
    
    this.snakeMoveForwardHorizontally=true;
    this.snakeMoveBackHorizontally=false;
    
    this.direction="right";
    
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
    this.keyLeftIsPushed=false;
    this.keyRightIsPushed=false;
    this.pcControlEvent();
    this.autorisation;

    this.headRight=false;
    this.headLeft=false;
    this.headUp=false;
    this.headDown=false;
    
  //this.eraseQueue;
   
  //  this.interval=setInterval(() =>{
     
  //    this.toMove();
     


   
   
     
  //  },100);
   
    
    
  }
  
  
  
  toMove(snakebody,snakeGrow){
    
    let head=snakebody[0];
    this.direction="right";
    
    const newHead={x:head.x+this.dx,y:head.y+this.dy}

    


// down direction


/*if(this.keyDownIsPushed){
//if(this.posY<380){
//this.headDown=true;
this.dx=0;
this.dy=20;
//this.posY+=this.dy;


//}else{

// this.posY=0;
  
  
//}


}else{
 //  this.headDown=false;
}

if(this.keyUpIsPushed){
  
  
  //if(this.posY>=0){
  //  this.headUp=true;
  this.dx=0;
  this.dy=-20;
//  this.posY+=this.dy;
//}else{


  //this.posY=400;
//}
}else{
   //this.headUp=false;
  
}





if(this.keyRightIsPushed){

  
  this.dy=0;
  this.dx=20;
//this.posX++;

}else{
//this.headRight=false;
}



if(this.keyLeftIsPushed){

  //this.headLeft=true;
this.dy=0;
this.dx=-20;
  //this.dx=-this.dx;
 // this.posX+=this.dx;




}else{
// this.headLeft=false;
}*/





//wrap snake

newHead.x>380?newHead.x=0:null;
newHead.x<0?newHead.x=380:null;
newHead.y<0?newHead.y=380:null;
newHead.y>380?newHead.y=0:null;

this.posX=newHead.x;
this.posY=newHead.y;




//  })

snakebody.unshift(newHead);

if(snakeGrow === false){
 snakebody.pop();

  
}

  }
  
  
  
  
//controle mobile 
mobileControl(){

this.btnDown.addEventListener("touchstart",()=>{
  
//  this.toPush("on","down","up");
  if(this.dy!==-20){
  this.dx=0;
  this.dy=20;
  }
  
  
});


this.btnDown.addEventListener("touchend",()=>{
  
 // this.toPush("off","down");
  
});


this.btnLeft.addEventListener("touchstart", () => {
  
//  this.toPush("on","left","right");

if(this.dx!==20){
  this.dx=-20;
  this.dy=0;
}
  
  
  
  
});


this.btnLeft.addEventListener("touchend", () => {
  
 // this.toPush("off","left");
  
});




this.btnRight.addEventListener("touchstart", () => {
  
  //this.toPush("on","right","left");
  if(this.dx!==-20){
  this.dx=20;
  this.dy=0;
  }
  
  
});


this.btnRight.addEventListener("touchend", () => {
  
  //this.toPush("off","right");
  
});



this.btnUp.addEventListener("touchstart", () => {
  
  //this.toPush("on","up","down");
  if(this.dy!==20){
  this.dx=0;
  this.dy=-20;
  }
  
  
});


this.btnUp.addEventListener("touchend", () => {
  
  //this.toPush("off","up");
  
});












}


/*toPush(togle,bName,nonAutoriser){
 // console.log(bName);
  
  if(bName === "down"&&this.dy!==-20){
  
  switch(togle){
    

    
    
    case "on":this.keyDownIsPushed=true;
//  this.direction=bName;
//  this.keyLeftIsPushed=false;
  
  
  

    
     break;
    
    case "off": 
      
  
  
  
    break;
    
  }
    
    
  }else if(bName === "left"&&this.dx!==20 ){
    
    switch (togle) {
  
  
  case "on":
    this.keyLeftIsPushed=true;
   // this.keyDownIsPushed=false;
    //this.keyUpIsPushed=false;
  //  this.direction=bName;
   
    
    break;
  case "off":
  
  
  
  
    break;
    
    
  }
  
  
  } else if(bName === "right"&&this.dx!==-20){
    
    switch (togle) {
  
  
  case "on":
    
    this.keyRightIsPushed=true;
   // this.direction=bName;
   // this.keyDownIsPushed=false;
   // this.keyUpIsPushed=false;
  
    
    
    break;
  case "off":
 
 
    break;
    }
    
  }else if(bName==="up" &&this.dy!==20){
    
    switch (togle) {
  
  
  case "on":
   this.keyUpIsPushed=true;
  // this.direction=bName;
   //this.keyLeftIsPushed=false;
   
   o
  
    
    break;
  case "off":
 
  
    break;
    
    
  }
  
   
  }
    
  
  
}*/





  // controle pc 
  pcControlEvent(){

  window.addEventListener("keydown", (e,nonAutoriser) => {

    e.key == "ArrowDown"?nonAutoriser='up':e.key=="ArrowLeft"?nonAutoriser='right':e.key=="ArrowRight"?nonAutoriser="left":e.key=="ArrowUp"?nonAutoriser="down":"";

this.toPushdown(e,nonAutoriser);

});



window.addEventListener('keyup', (e) => {

this.toPushUp(e);


});


  
}


toPushdown(e,nonAutoriser){  
  

switch(e.key){

  

case 'ArrowDown': 

 


if(nonAutoriser!==this.direction){
this.direction="down";
this.keyDownIsPushed=true;
 // this.direction=bName;
  this.keyLeftIsPushed=false;
//  this.headRight=false;
}

  break;
  
  case 'ArrowLeft': 


  
  if(nonAutoriser!==this.direction){
    this.direction="left";
  this.keyLeftIsPushed=true;

  
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
  


  }
  break;
  case 'ArrowUp': 



if(nonAutoriser!==this.direction){
  this.direction="up";
  this.keyUpIsPushed=true;

   this.keyLeftIsPushed=false;
  // this.headRight=false;
   


}
  break;
case 'ArrowRight': 

this.headRight=true;

if(nonAutoriser!==this.direction){
this.direction="right";

  this.keyRightIsPushed=true;
    
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
  
}
  break;

}


  
}



toPushUp(e){

  

switch(e.key){

case 'ArrowDown'://this.keyUpIsPushed=false;
break;
 case 'ArrowLeft':// this.keyLeftIsPushed=false;
  break;
  case 'ArrowUp': //this.keyDownIsPushed=false;
  break;
case 'ArrowRight':  //this.headRight=true;
  // this.keyLeftIsPushed=false;
  break;


}


}


toGetPosX(){
  
  
  return this.posX;
}



}






