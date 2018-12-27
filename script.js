var active_player, random, diceDom, player;
current = [0, 0];
score = [0, 0];
active_player = 0;
gamePlay = true;
  
document.getElementById('roll-dice').addEventListener('click', function() {
  if (gamePlay) {
    random = Math.floor(Math.random() * 6) + 1;
    diceDom = document.getElementById('dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-' + random + '.png';
  
    if (random !== 1) {
      current[active_player] += random;
      document.getElementById('current-' + active_player).textContent = current[active_player];    
    } else {
      nextPlayer();
    }  
  }  
});

document.getElementById('hold').addEventListener('click', function() {
  if (gamePlay) {
    score[active_player] += current[active_player];
    document.getElementById('score-' + active_player).textContent = score[active_player];   
    
    if (score[active_player] >= 20) {
      player = document.getElementById('player-title-' + active_player);
      player.style.color = '#EB4D4D';
      player.textContent = 'Winner!';
      // document.getElementById('player-' + active_player).classList.toggle('active');
      diceDom.style.display = 'none';
      gamePlay = false;
    } else {
      nextPlayer();
    }
  }


});

function nextPlayer() {
  current[active_player] = null;
  // diceDom.style.display = 'none';
  document.getElementById('current-' + active_player).textContent = 0;
  document.getElementById('player-' + active_player).classList.toggle('active');
  active_player === 0 ? active_player = 1 : active_player = 0;
  document.getElementById('player-' + active_player).classList.toggle('active');
};

document.getElementById('new-game').addEventListener('click', function() {
  window.location.reload();
});