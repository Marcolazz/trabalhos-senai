//Movimento Carro
function movimentoCarro() {
  
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
    //Carros para esquerda
      xCarro[i] -= velocidadeCarro[i]
       
      if(xCarro[i] < -50){
        xCarro[i] = 650;
        velocidadeCarro[i] = ceil(random(2,8));
      }
      
    }else{
    //Carros para a direita
      xCarro[i] += velocidadeCarro[i]
      
      if(xCarro[i] > 650){
        xCarro[i] = -350;
        velocidadeCarro[i] = ceil(random(2,8));
      } 
    }
  }
}


//Mostra Carro
function mostraCarro(){
  for(let i=0; i < imgCarro.length; i++)
    image(imgCarro[i], xCarro[i], yCarro[i], larguraCarro, 30);
}