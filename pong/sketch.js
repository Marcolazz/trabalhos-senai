let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

//Dimesões da Tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela / 2;

//Altura Largura das Raquetes
let alturaR = 110;
let larguraR = 10;

//Variáveis em Javascript
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadeX = 5;
let velocidadeY = 5;
let raio = diametro / 2;

//Variaveis da sua raquete
let MraqueteY = alturaTela / 2 - alturaR / 2;
let MraqueteX = larguraTela - larguraR;

//Variaveis da raquete inimiga
let IraqueteY = alturaTela / 2 - alturaR / 2;
let IraqueteX = 0;
//Movimento Raquete
let movimentoCima = -10;
let movimentoBaixo = 10;
//Pontos
let pontosI = 0;
let pontosM = 0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura =" +largura);
  console.log("Altura =" +altura);
}

//Um looping sempre, desenha oque tem dentro
function draw() {
  background('Black');
  if(frameCount < 400)
    telaInicial();
  else
    jogar();
     
}//Fim da função draw

function telaInicial(){
 fill('white');
 rect(larguraTela / 4, 0, metadeTela, alturaTela);
 textAlign(CENTER);
 textSize(20);
 fill('gray');
 text('Ping Pong do Programador',metadeTela, alturaTela / 2);
}

function jogar(){
  if(pontosI < 5 && pontosM < 5){
  mostraBolinha();
  movimentaBolinha();
  detectaColisao();
  mostraRaquetes();
  movimentoRaqueteOponente();
  movimentoMinhaRaquete();
  linha();
  colisaoB();
  pontos();
  placar();
  }else{
    if(pontosI > 4){
      textSize(41);
      text('Jogador da Esquerda Ganhou', metadeTela, alturaTela / 2);
    }
    if(pontosM > 4){
      textSize(45);
      text('Jogador da Direita Ganhou', metadeTela, alturaTela / 2);
   }
    
  }
}

//Colisão com a minha raquete
function colisaoB(){
  tocouMinhaRaquete = collideRectCircle(MraqueteX, MraqueteY,larguraR, alturaR,xBolinha, yBolinha, diametro);
  
/*  
  if(xBolinha + raio >= MraqueteX && 
     xBolinha - raio <= MraqueteX + larguraR && 
     yBolinha - raio >= MraqueteY && 
     yBolinha + raio <= MraqueteY + alturaR){
*/
  
  if(tocouMinhaRaquete){
    //Impede gol contra
   if(xBolinha > metadeTela && velocidadeX > 0)
     velocidadeX *= -1; 
    somRaquetada.play();
  }
  //Colisão com a raquete inimiga
  tocouRaqueteOponente = collideRectCircle(IraqueteX, IraqueteY, larguraR, alturaR, xBolinha, yBolinha, diametro);
  
/*
  if(xBolinha - raio <= IraqueteX  + larguraR && 
     xBolinha - raio >= IraqueteX && 
     yBolinha - raio >= IraqueteY && 
     yBolinha + raio <= IraqueteY + alturaR){
*/
  if(tocouRaqueteOponente){
    //Impede gol contra
   if(xBolinha < metadeTela && velocidadeX < 0)
     velocidadeX *= -1; 
    somRaquetada.play();
  }
}

//Placar
function placar(){
  fill("white")
  textSize(30);
  text(pontosM, 3/4 * larguraTela, 30);
  text(pontosI, larguraTela / 4, 30);
}

//Placar de Pontos
function pontos(){
  //console.log("Pontos Inimigo =" + pontosI);
  //console.log("Meus Pontos =" + pontosM);
  if(xBolinha + raio > (larguraTela - 1)){
    pontosI += 1;
    somPonto.play();
    velocidadeX -= 2;
    velocidadeY -= 2;
  }
    if(xBolinha - raio < 1){
    pontosM += 1;
      somPonto.play();
      velocidadeX += 2;
     velocidadeY += 2;
  }
}

function mostraBolinha(){
  fill('White');
  noStroke();
  circle(xBolinha, yBolinha, diametro);
}//Fim mostraBolinha

function movimentaBolinha(){
  //Incremento de Velocidade
  yBolinha += velocidadeY;
  xBolinha += velocidadeX;
}//Fim movimentaBolinha

function detectaColisao(){
  //Colisão com as bordas laterais
  //Lado direito e esquerdo
   if (xBolinha + raio >= largura || xBolinha - raio <= 0){
     velocidadeX *= -1;
   } 
  
  //Colisão com as Bordas Superiores
  //Lado de cima e de baixo
  if(yBolinha + raio >= altura || yBolinha - raio <= 0){
    velocidadeY *= -1;
  }
}//Fim detectaColisão

//Sua Raquete
function mostraRaquetes(){
  fill('white');
  rect(MraqueteX, MraqueteY, larguraR, alturaR);
  fill('white');
  rect(IraqueteX, IraqueteY, larguraR, alturaR);
}

function movimentoMinhaRaquete(){
  //console.log("y: " + MraqueteY);
  //console.log("x: " + MraqueteX);
      if (keyIsDown(UP_ARROW)) {
        //teto
        if(MraqueteY > 0)
    MraqueteY += movimentoCima;
  }
    if (keyIsDown(DOWN_ARROW)) {
      //chão
      if(MraqueteY < (alturaTela - alturaR))
      MraqueteY += movimentoBaixo;
  }
    if (keyIsDown(LEFT_ARROW)) {
      if(MraqueteX > metadeTela)
      MraqueteX += movimentoCima;
  }
    if (keyIsDown(RIGHT_ARROW)) {
      if(MraqueteX < (larguraTela - larguraR))
      MraqueteX += movimentoBaixo;
  }
}

function movimentoRaqueteOponente(){
  //console.log("y: " + IraqueteY);
  //console.log("x: " + IraqueteX);
      if (keyIsDown(87)) {
      if(IraqueteY > 0)
      IraqueteY += movimentoCima;
  }
    if (keyIsDown(83)) {
      if(IraqueteY < (alturaTela - alturaR))
      IraqueteY += movimentoBaixo;
  }
    if (keyIsDown(65)) {
      if(IraqueteX > 0)
      IraqueteX += movimentoCima;
  }
      if (keyIsDown(68)) {
        if(IraqueteX < metadeTela - larguraR)
      IraqueteX += movimentoBaixo;
  }
}

function linha(){ 
  stroke(255);
  strokeWeight(5);
  line(metadeTela,0,metadeTela,alturaTela);
}
