
function pontosE(){
  if(yVaca2 <= 4){
    pontoD += 1;
    yVaca2 = 368;
    ponto.play();
  }
}

function pontosD(){
  if(yVaca <= 4){
    pontoE += 1;
    yVaca = 368;
    ponto.play();
  }
}

function placar(){
  fill("white")
  textSize(30);
  text(pontoE, larguraTela / 3.85, 30);
  text(pontoD, larguraTela - 145, 30); 
}