let game = true;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const cities = [
  'osaka',
  'tokyo',
  'berlin',
  'hamburg',
  'nantes',
  'prague',
  'beijing',
  'cairo',
  'rome',
  'sydney',
  'warsaw',
  'quebec',
  'los angeles',
  'new mexico',
  'orlando',
  'detroit',
  'london',
  'beirut',
  'capetown',
  'odessa',
  'new york',
  'moscow',
  'paris',
  'bristol'
];


//GENERATING A NEW CITY
let word = cities[Math.floor(Math.random()*cities.length)];
let hiddenWord = [];
for (i=0;i<word.length;i++){
  if (word[i]!=' '){
    hiddenWord.push('_');
  }
  else{
    hiddenWord.push(' ');
  }
}
let maskedWord = document.querySelector('.masked-word');
maskedWord.textContent = hiddenWord.join('');

// HERE WE START GUESSING LETTERS
var wrongGuesses = 0;
var gallowsImg = document.querySelector('.gallows-image');
var statusMsg = document.querySelector('.status');
var newGame = document.querySelector('.refresh');

newGame.style.display = 'block';

function guessHandle(lttr){
  if (word.indexOf(lttr)!=-1){
    indexesList = [];
    for (i=0;i<word.length;i++){
      if (word[i]==lttr){
        indexesList.push(i);
      }
    }
    for (i=0;i<indexesList.length;i++){
      hiddenWord[indexesList[i]] = lttr;
    }
    maskedWord.textContent = hiddenWord.join('');
    if (hiddenWord.join('') == word){
      statusMsg.style.display = 'block';
      statusMsg.textContent = 'you win';
      game = false;

      }
  }
  else{
    if (wrongGuesses < 6){
      wrongGuesses+=1;
      gallowsImg.style.backgroundImage = 'url(images/' + wrongGuesses + '.png';
      }
    else{
      gallowsImg.style.backgroundImage = 'url(images/7.png';
      maskedWord.textContent = word;
      statusMsg.style.display = 'block';
      game = false;

      }
    }
    guessList[alphabet.indexOf(lttr)].style.display = 'none';

}

var guessList = document.querySelectorAll('.guess-letter');

guessList.forEach(element => element.addEventListener('click', function(){
console.log(game);
if (game==true){
  guessHandle(this.textContent)
}

}));

newGame.addEventListener('click',function(){
  location.reload();
  game = true;
})
