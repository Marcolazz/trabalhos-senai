function verificaVencedor(){
  if(pontoE >= 5)
    vacaVencedora();
  else
    vaca2Vencedora();
}

function vacaVencedora(){
  background("green");
  fill("blue");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(48);
  text("Vaca Da Esquerda Venceu", meioLargura, meioAltura);
  image(imgVaca, meioLargura - 25, meioAltura + 40, 100, 100);
  vitoria.play();
}

function vaca2Vencedora(){
  background("green");
  fill("red");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(48);
  text("Vaca Da Direita Venceu", meioLargura, meioAltura);
  image(imgVaca, meioLargura - 25, meioAltura + 40, 100, 100);
  vitoria.play();
}