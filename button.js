//just some js to simulate fake loading time

function removeClass() {
    myButton.className = myButton.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}

var myButton = document.getElementById('myButton');


myButton.addEventListener("click", function () {
    myButton.className = myButton.className + ' loading';
    setTimeout(removeClass, 2000);
}, false);