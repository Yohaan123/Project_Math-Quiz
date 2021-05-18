function addUser(){
   var player1name = document.getElementById("player1_name_input").value;
   var player2name = document.getElementById("player2_name_input").value;
   
   localStorage.setItem("player1name",player1name);
   localStorage.setItem("player2name",player2name);

   window.location = "quiz_game.html";
}