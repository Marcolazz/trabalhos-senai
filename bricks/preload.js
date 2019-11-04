function mostraCoracoes(){
  image(coracao, xCoracao1, yCoracao, larguraCoracao, alturaCoracao);
    image(coracao, xCoracao2, yCoracao, larguraCoracao, alturaCoracao);
    image(coracao, xCoracao3, yCoracao, larguraCoracao, alturaCoracao);
}

function preload(){
  coracao = loadImage('imagens/coracao_vida.png');
  logo = loadImage('imagens/senai_logo.png');
  somRaquete = loadSound('sons/raquetada.mp3');
  somPonto = loadSound('sons/ponto.mp3');
  somDano = loadSound('sons/dano.mp3');
  tocaMusica = loadSound('sons/morte.mp3');
  somFundo = loadSound('sons/musicaFundo.mp3');
  vitoria = loadSound('sons/vitoria.mp3');
}