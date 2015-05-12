var divOne = document.getElementById('one');
var divTwo = document.getElementById('two');
var divThree = document.getElementById('three');
var divFour = document.getElementById('four');
var divFive = document.getElementById('five');
var divSix = document.getElementById('six');
var divSeven = document.getElementById('seven');
var divEight = document.getElementById('eight');
var divNine = document.getElementById('nine');

function addX(){
  if (this) {
    this.className += this.className ? ' x' : 'x'
    this.appendChild(document.createTextNode('X'))
  }
}

function addO(){
  if (this) {
    this.className += this.className ? ' o' : 'o'
    this.appendChild(document.createTextNode('O'));
  }
};

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function checkWin(elem1, elem2, elem3) {
  if (hasClass(elem1, 'o') && hasClass(elem2, 'o') && hasClass(elem3, 'o')) {
    alert("O Wins!");
    return true;
  } else if (hasClass(elem1, 'x') && hasClass(elem2, 'x') && hasClass(elem3, 'x')) {
    alert("X Wins!");
    return true;
  } else {
    return false;
  }
}



function game() {
  var count = 0;
  var turn = true
  while (count < 9){
    if (turn == true) {
      
    }
  }
}
