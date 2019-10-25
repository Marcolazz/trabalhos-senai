function jogar(){
  background(imgEstrada);
  movimentoCarro();
  movimentoVaca();
  mostraVaca();
  mostraCarro();
  pontosD();
  pontosE();
  placar();
  movimentoVaca2();
  atropelamento();
}

function telaInicial(){
  background("gray");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(48);
  text("Jogo da Av. 1º de Maio", meioLargura, meioAltura);
  textSize(24);
  text("Desenvolvido por Marcos Justen", meioLargura, meioAltura + 40);
}