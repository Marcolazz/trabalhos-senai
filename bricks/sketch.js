function setup() {
  createCanvas(larguraTela, alturaTela);
  }



function draw() {
  if(frameCount < 400){
    telaInicial();
  }else{
    jogar();
  }
  if(vidas == 0){
    detectaPerder();
  } 
  if(pontos == 64){
    detectaGanhar();
  } 
}