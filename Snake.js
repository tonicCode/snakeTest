export class Snake{




constructor(deplacement){

 this.style="green"; 
 this.queueStyle="blue";  
 this.headStyle="red";
 this.partOfBodyStyle="orange";
 this.headPos={x:0,y:0};
 this.queuePos={x:0,y:0};
 this.partOfBody=0;
 
 
this.snakeWidth=20;
this.snakeHeight=20;
this.snakePosX=0;
this.snakePosY=0;


this.snakeBody=[{x:60,y:40} ,{x:40,y:40},{x:20,y:40}];
//this.snakeHead={x:0,y:0};




this.snakeMoltPosX=60;
this.snakeMoltPosY=40;

//this.growHorizon=true;
this.snakeIsGrowing=false;
this.queueSizeH=0;
this.queueSizeV=0;
this.snakeSizeH=0;
this.snakeSizeV=0;

this.deplacement=deplacement;
this.intervalId;


}


drawSnake(contextGraphique,cnv){
contextGraphique.clearRect(0,0,cnv.width,cnv.height);

//draw the head 
contextGraphique.fillStyle=this.style;

this.snakeBody.forEach(obj =>{

contextGraphique.fillRect(obj.x,obj.y,this.snakeWidth,this.snakeHeight);






 
 
});


  //draw the queue and head color
let nbr=this.snakeBody.length
//console.log("nb :", this.snakeBody);

this.queuePos={x:this.snakeBody[nbr-1].x ,y:this.snakeBody[nbr-1].y};

this.headPos={x:this.snakeBody[nbr-nbr].x,y:this.snakeBody[nbr-nbr].y};

this.partOfBody={x:this.snakeBody[nbr-3].x ,y:this.snakeBody[nbr-3].y}



//head style
contextGraphique.save();
contextGraphique.fillStyle=this.headStyle;
//contextGraphique.globalAlpha=0.3;
contextGraphique.fillRect(this.headPos.x,this.headPos.y,20,20);
contextGraphique.restore();


//queue style
contextGraphique.save();
contextGraphique.fillStyle = this.queueStyle;
//contextGraphique.globalAlpha=0.3;
contextGraphique.fillRect(this.queuePos.x, this.queuePos.y, 20, 20);
contextGraphique.restore();


//body style
contextGraphique.save();
contextGraphique.fillStyle = this.partOfBodyStyle;
//contextGraphique.globalAlpha=0.3;
contextGraphique.fillRect(this.partOfBody, this.partOfBody, 20, 20);
contextGraphique.restore();



contextGraphique.fill();



}









getLocalise(){
 
 this.snakePosX=this.deplacement.posX;
 this.snakePosY=this.deplacement.posY;
//console.log("gps :" , this.snakePosX);

 return `le snake ce trouve ${this.snakePosX} en x et ${this.snakePosY} en Y  `
}



// grandir snake 

toGrow(grow){

if(grow){
// this.snakeIsGrowing=true;
  this.snakeIsGrowing=true;

}else{
  this.snakeIsGrowing=false;
 
}




}









}









