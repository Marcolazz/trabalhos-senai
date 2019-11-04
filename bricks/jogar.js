function jogar(){
  if(vidas <= 3 && vidas > 0){
    if(pontos < 64){
      background("black");
      barra();
      movimentoBarra();
      bolinha();
      movimentoBolinha();
      detectaColisao();
      quadrado();
      colisaoQuadrado();
      colisaoRaquete();
      diminuiVidas();
      mostraCoracoes();
      diminuiCoracao();
      musicaPausada();
    }
  }
}