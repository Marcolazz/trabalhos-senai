function detectaGanhar(){
  background("green")
  fill("white"); 
  textSize(64);
  text("Você Ganhou", 120, 220);
  toco += 1;
  if(toco == 1){
    somFundo.pause();
    vitoria.play();
    toco += 1;
  }
}
