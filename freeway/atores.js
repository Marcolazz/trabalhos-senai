//Mostra Vaca
function mostraVaca(){
  image(imgVaca, xVaca2, yVaca2, 28, 28);
  image(imgVaca, xVaca, yVaca, 28, 28);
  
}

//Movimento Vaca
function movimentoVaca(){
  if (keyIsDown(87)) {
    if(yVaca > 5){
      yVaca -= aceleracaoVaca;
    }
  }
    if (keyIsDown(83)) {
        if(yVaca < 366){
          yVaca += aceleracaoVaca;
        }
  }
}

function movimentoVaca2(){
      if (keyIsDown(UP_ARROW)) {
    if(yVaca2 > 5){
      yVaca2 -= aceleracaoVaca;
    }
  }
    if (keyIsDown(DOWN_ARROW)) {
        if(yVaca2 < 366){
          yVaca2 += aceleracaoVaca;
        }
  }
}