var element_user = document.getElementById('user');
var element_enemy = document.getElementById('enemy');
var winner_element = document.getElementById('winner');

function user(x) {
  return element_user.innerHTML = x;
}

function enemy() {
  random_number = Math.ceil(Math.random() * 3);

  if (random_number == 1) {
    random_number = "Stone";
  } else if (random_number == 2) {
    random_number = "Scissor";
  } else {
    random_number = "Paper";
  }
  return element_enemy.innerHTML = random_number;
}    

function checkWinner(user, enemy){
  if (user === enemy) {
    return "Its a tie";
  }

  if(user === "Stone"){
      if(enemy === "Paper"){
        return "Enemy wins";
      }
      return "User wins";
  }

  if(user === "Paper"){
      if(enemy === "Stone"){
          return "User wins";
      }
      return "Enemy wins";
  }

  if(user === "Scissor"){
     if(enemy === "Stone"){
        return "Enemy wins";
     }

     return "User wins";
  }
}

function winner() {
  var user = element_user.innerHTML;
  var enemy = element_enemy.innerHTML;
  winner_element.innerHTML = checkWinner(user, enemy);
}