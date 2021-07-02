class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    
    // ... your code goes here
    this.secretWord = hangman.secretWord
  }

  

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    const cxt= this.context
    for (let i = 0; i < this.secretWord.length; i++) {
    cxt.beginPath()
    cxt.lineWidth = 2
    cxt.strokeStyle = "black"
    cxt.moveTo(300 +i *60, 350)
    cxt.lineTo(350 +i *60, 350)
    cxt.stroke()
    }
  }


  // writeCorrectLetter(index) {
  //   // ... your code goes here
    
  // }

  // writeWrongLetter(letter, errorsLeft) {
  //   // ... your code goes here
  // }

  drawHangman(errorsLeft) {
    // ... your code goes here
    const cxt= this.context
    if (hangman.errorsLeft==10) {
      cxt.beginPath()
      cxt.lineWidth = 2
      cxt.strokeStyle = "black"
      cxt.moveTo(100, 400)
      cxt.lineTo(60, 440)
      cxt.lineTo(140, 440)
      cxt.lineTo(100, 400)
      cxt.stroke()
      cxt.closePath()
    }
    if(hangman.errorsLeft==9) {
      cxt.beginPath()
      cxt.moveTo(100, 400)
      cxt.lineTo(100, 100)
      cxt.stroke()
    }
    if(hangman.errorsLeft==8) {
      cxt.lineTo(250, 100)
      cxt.stroke()
    }
    if(hangman.errorsLeft == 7){
      cxt.lineTo(250, 130)
      cxt.stroke()
      closePath()
    }
    if(hangman.errorsLeft == 6){
      cxt.beginPath()
      cxt.arc(250,150,20,0,Math.PI*2)
      cxt.stroke()
    }
    if(hangman.errorsLeft == 5){
      cxt.moveTo(250, 170)
      cxt.lineTo(250, 240)
      cxt.stroke()
    }
    if(hangman.errorsLeft == 4){
      cxt.lineTo(270, 280)
      cxt.stroke()
    }
    if(hangman.errorsLeft == 3){
      cxt.moveTo(250, 240)
      cxt.lineTo(230, 280)
      cxt.stroke()
    }

  }

  // gameOver() {
  //   // ... your code goes here
  // }

  // winner() {
  //   // ... your code goes here
  // }
}

new HangmanCanvas