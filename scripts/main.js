/* var myHeading = document.querySelector('h1');
// Присваиваем значение
myHeading.textContent = 'Hello world!';
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ego-graph.png') {
        myImage.setAttribute('src', 'images/vs.png');
    } else {
        myImage.setAttribute('src', 'images/ego-graph.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите Ваше имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Приветствую, о ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветствую, о ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

