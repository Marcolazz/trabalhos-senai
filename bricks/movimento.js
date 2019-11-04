function movimentoBolinha(){
  yBolinha += velocidadeY;
  xBolinha += velocidadeX;
}

function movimentoBarra(){
  if (keyIsDown(LEFT_ARROW)) {
    if(xBarra > 0)
      xBarra -= 4;
  }
    if (keyIsDown(RIGHT_ARROW)) {
      if(xBarra < 500)
        xBarra += 4;
  }
}