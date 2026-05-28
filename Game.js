

export class Game{


    constructor(getPosSnake ,getPosFood){

        this.getPosSnake=getPosSnake;
        this.getPosFood=getPosFood;
        this.collisions=false;
        this.pointReachesAtTen=false;
        this.point=0;
        this.grow=false;
this.interval=0;
    this.btnReplay=document.getElementById("btnReplay");



    }



 toCountPoints(collis , specCollis){



if(collis){

this.point+=10;

}else if(specCollis){
    this.point+=50;
}


 

// }


//this.thereIsFoodColision=true;

return `vous avez ${this.point} : points`;
}



selfCollisions(head,queue,bodySn,loop){

// compare body snake avec la tete qui est le dernier ele du tableau


let rslt=bodySn.some((n,i) =>{ 

  /*  console.log(
        i,"le x",
        n.x, "le y",
        n.y,"hd x",
        head.x,
        head.y,
         n.x === head.x && n.y === head.y
        
    );*/




return i !== 0 && n.x === bodySn[0].x&& n.y === bodySn[0].y
    
    
   /* console.log("where? : ",i,"elemen x: ",n.x,"hd tab x: ",bodySn[bodySn.length-1].x,"elemen y: ",n.y,"hd tab y: ",bodySn[bodySn.length-1].y);
    console.log("tab Complet :",bodySn)*/
    






});
 console.log("rslt",rslt);
  
// if true there is a body snake equal to head and game over
if(rslt){
    console.log(bodySn);

this.gameIsOver(loop);


}


  if(head.x === queue.x && head.y === queue.y){
    

  this.gameIsOver(loop);
    
    
    
    


  

    



  







}
}

    gameIsOver(loop){

   clearInterval(loop);
    this.btnReplay.innerText="GAME-OVER do you want to replay?"

    let btn=document.createElement("button");
    this.btnReplay.appendChild(btn);
   

    btn.innerHTML="continue";
   
    btn.addEventListener("click", () =>{
       
     document.location.reload();
   
        
    })



    }





}

