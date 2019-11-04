function colisaoQuadrado(){
  
    for(let y=0; y < quadradoY.length; y++){
      for(let x=0; x < quadradoX[y].length; x++){
        if(velocidadeY < 0){
         if(collideRectCircle(quadradoX[y][x], quadradoY[y], 38, 38, xBolinha, yBolinha, diametro)){
           velocidadeY *= -1;
           quadradoX[y][x] = -100;
           pontos += 1;
           somPonto.play();
           } 
        }
      }
    }
}

function colisaoRaquete(){
  if(velocidadeY > 0){ 
      if(collideRectCircle(xBarra, yBarra, 100, 10, xBolinha, yBolinha, diametro)){
      if(collideRectCircle(xBarra, yBarra, metadeLarguraBarra, alturaBarra, xBolinha, yBolinha, diametro)){
        velocidadeY *= -1;
        velocidadeX *= -1;
        somRaquete.play();
      }else{
        velocidadeY *= -1; 
        somRaquete.play();
      }
    }
  }
}

function detectaColisao(){
     if (xBolinha + raio >= larguraTela || xBolinha - raio <= 0){
       velocidadeX *= -1;
     }
  
    if(yBolinha - raio <= 0){
      velocidadeY *= -1;
    }
}