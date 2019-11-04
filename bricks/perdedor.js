function diminuiCoracao(){
  if(vidas == 2){
    xCoracao3 = 1000;
    if(!tocaUmaVez){
      somDano.play();
      tocaUmaVez = true;
    }
  }
  if(vidas == 1){
    xCoracao2 = 1000;
    if(!tocaUmaVez2){
      somDano.play();
      tocaUmaVez2 = true;
    }
  }
  if(vidas < 1){
    xCoracao = 1000;
    toco += 1;
    if(toco == 1){
      somFundo.pause();
      tocaMusica.play();
      toco += 1;    
    }
  }
}

function diminuiVidas(){
  if(yBolinha > 400){
    vidas -= 1;
    xBolinha = 300;
    yBolinha = 200;
  }
}

function detectaPerder(){
    background("red");
    fill("white");
    textSize(64);
    text("Você perdeu", 120, 220);
}