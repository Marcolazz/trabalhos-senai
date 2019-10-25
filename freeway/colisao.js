let atropelaVaca = false;
let atropelaVaca2 = false;

function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], larguraCarro, 30);
    
    if(atropelaVaca){
     //Vaca atropelada
      yVaca = 368;
      
      if(pontoE > 0)
        pontoE -= 1;
      atropelou.play();
    }
    
    atropelaVaca2 = collideRectRect(xVaca2, yVaca2, 28, 28, xCarro[i], yCarro[i], larguraCarro, 30);
    
    if(atropelaVaca2){
      //Vaca 2 atropelada
      yVaca2 = 368;
      
      if(pontoD > 0)
        pontoD -= 1;
      atropelou.play();
      
    }
  }
}