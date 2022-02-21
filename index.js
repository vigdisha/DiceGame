var state = history.state || {};

var reloadCount = state.reloadCount || 0;

if (performance.navigation.type === 1) { // Reload

  state.reloadCount = ++reloadCount;

  history.replaceState(state, null, document.URL);

} else if (reloadCount) {

  delete state.reloadCount;

  reloadCount = 0;

  history.replaceState(state, null, document.URL);

}

if (reloadCount > 0){winner();}
 function winner(){
     var rnum1= Math.random()*6;
   rnum1 = Math.floor(rnum1)+1;
     

     var rnum2= Math.random()*6;
     rnum2 = Math.floor(rnum2)+1;

    
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + rnum1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + rnum2  + ".png");


if(rnum1>rnum2){
  document.querySelector("h1").innerHTML = "Player1 Wins 🚩";
 }
else if(rnum1<rnum2){
    
     document.querySelector("h1").textContent="player2 Wins 🚩";
}
  
else{
           document.querySelector("h1").textContent= "draw";
     }
 }


