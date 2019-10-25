function setup() {
  createCanvas(larguraTela, alturaTela);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){
    if(pontoE < 5 && pontoD < 5)
      jogar();
    else
      verificaVencedor();
    
  }else{
    telaInicial();
  }
}
