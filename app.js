const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let winningScore = 5;

p1Button.addEventListener('click', function () {
  if (p1Score !== winningScore) {
      p1Score += 1;
      p1Display.textContent = p1Score;
    }
})




