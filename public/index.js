var divOne = document.getElementById('one');
var divTwo = document.getElementById('two');
var divThree = document.getElementById('three');
var divFour = document.getElementById('four');
var divFive = document.getElementById('five');
var divSix = document.getElementById('six');
var divSeven = document.getElementById('seven');
var divEight = document.getElementById('eight');
var divNine = document.getElementById('nine');


var o = document.createTextNode('O');
var x = document.createTextNode('X')

function addO(d) {
  if (d) {
    d.className += d.className ? ' o' : 'o';
    d.appendChild(o);
  }
};

function abc() {
  alert("wahoo")
}

divOne.onclick = addO(divOne);
