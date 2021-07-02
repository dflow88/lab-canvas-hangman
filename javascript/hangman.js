class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10

  }

  pickWord() {
    // ... your code goes here
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90){
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
      return this.guessedLetters = this.guessedLetters + letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
      if (this.letters.includes(letter) == false) {
        this.guessedLetters = this.guessedLetters + letter
      }
      return this.errorsLeft = this.errorsLeft - 1
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    if (this.guessedLetters.split('').sort().join('') == this.secretWord.split('').sort().join('')) {
      return true
    } else {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    window.scrollBy(0, 500)
    // ... your code goes here
    hangmanCanvas.createBoard()
    hangmanCanvas.drawHangman()
  });
}


document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key) === false) {
      return window.alert("ya jugaste esta letra")
    } else {
      hangman.letters.push(event.key)
      if (hangman.secretWord.includes(event.key)){
        hangman.addCorrectLetter(event.key)
        console.log(event.key)
        console.log(hangman.guessedLetters)
        console.log(hangman.letters)
        //llamar a pintar estas letras
      } else {
        console.log(hangman.errorsLeft)
        hangman.addWrongLetter(event.key)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        console.log(hangman.errorsLeft)
        console.log(event.key)
        console.log(hangman.guessedLetters)
        console.log(hangman.letters)
      }
    }
      // if (true) {
      //   return addCorrectLeter(event)
      // } 
      // AQUI IRA EL CODIGO DE PINTAR LA LETRA
  } else {
    return window.alert("no es una letra")
  }
  

});
