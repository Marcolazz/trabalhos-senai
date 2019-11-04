//preload
let coracao;
let logo
let somRaquete;
let somPonto;
let somDano;
let tocaUmaVez = false;
let tocaUmaVez2 = false;
let tocaMusica = false;
let musicaFundo = false;
let somFundo;
let vitoria = false;

//Variaveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadeX = 3;
let velocidadeY = 3;

//Variáveis do Coração
let xCoracao1 = 10;
let xCoracao2 = 60;
let xCoracao3 = 110;
let yCoracao = 360;
let larguraCoracao = 35;
let alturaCoracao = 35;

//Variáveis Barra
let larguraBarra = 100;
let alturaBarra = 10;
let metadeLarguraBarra = 100 / 2;
let xBarra = 270;
let yBarra = 370;

//Quadrados, Laço
let quadradoX = [[1, 38, 75, 112, 149, 186, 223, 260, 297, 334, 371, 408, 445, 482, 519, 556],[1, 38, 75, 112, 149, 186, 223, 260, 297, 334, 371, 408, 445, 482, 519, 556],[1, 38, 75, 112, 149, 186, 223, 260, 297, 334, 371, 408, 445, 482, 519, 556],[1, 38, 75, 112, 149, 186, 223, 260, 297, 334, 371, 408, 445, 482, 519, 556]];
let quadradoY = [5, 42, 79, 116];

//Altura e Largura da Tela
let alturaTela = 400;
let larguraTela = 600;

//Vidas
let vidas = 3;

//Pontos
let pontos = 0;

let toco = 0;