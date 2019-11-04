function barra(){
  fill ("white");
  rect(xBarra, yBarra, larguraBarra, alturaBarra);
}

function quadrado(){
  for(let y=0; y < quadradoY.length; y++){
    for(let x=0; x < quadradoX[y].length; x++){ 
      rect(quadradoX[y][x], quadradoY[y], 38, 38);
    }
  }
}

function bolinha(){
  circle(xBolinha, yBolinha, diametro);
}