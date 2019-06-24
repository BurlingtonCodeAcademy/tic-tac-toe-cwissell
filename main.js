var players = [];
var markers = ["X", "O"];
var gameOver = false;
var scores = [0, 0];
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var cellsArray = [
  { id: "cell-0", winValue: 1 },
  { id: "cell-1", winValue: 2 },
  { id: "cell-2", winValue: 4 },
  { id: "cell-3", winValue: 8 },
  { id: "cell-4", winValue: 16 },
  { id: "cell-5", winValue: 32 },
  { id: "cell-6", winValue: 64 },
  { id: "cell-7", winValue: 128 },
  { id: "cell-8", winValue: 256 }
];
players[0] = "X";
players[1] = "O";
var playersTurn = 0;

function handler() {
  for (let cell of cellsArray) {
    document
      .getElementById(cell.id)
      .addEventListener("click", function(clickedDiv, divValue) {
        if (!gameOver) {
          scores[playersTurn] += cell.winValue;

          document.getElementById(cell.id).onclick = "";
        if (event.target.innerHTML == ""){
          document.getElementById(cell.id).innerHTML =
            "<span>" + markers[playersTurn] + "</span>";
          }
          winChecker();
          if (!gameOver) {
            changePlayer();
          }
        }
      });
  }
}

//winChecker
function winChecker() {
  for (var i = 0; i < winValues.length; i++) {
    if ((scores[playersTurn] & winValues[i]) == winValues[i]) {
      document.getElementById("name-display").innerText =
        players[playersTurn] + " Wins!";
      gameOver = true;
    }
  }
  if (scores[0] + scores[1] == 511 && !gameOver) {
    document.getElementById("name-display").innerText = "Stalemate";
    gameOver = true;
  }
}

//Player function
function changePlayer() {
  if (playersTurn == 0) playersTurn = 1;
  else playersTurn = 0;

  document.getElementById("name=display").innerText = [playersTurn] + "'s Turn";
}

document.getElementById("start").addEventListener("click", handler);
