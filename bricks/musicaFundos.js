
function musicaPausada(){
  if(vidas < 4 && vidas > 0 && toco == 0 && !musicaFundo){
    somFundo.setVolume(0.3);
    somFundo.loop();
    musicaFundo = true;
  }
}