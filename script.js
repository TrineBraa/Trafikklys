let timer;

function makeRed () {
    removeLight();
    document.getElementById('redLight').style.backgroundColor = 'red';
    timer = setTimeout(makeYellow, 2000)
}

function makeYellow () {
    removeLight();
    document.getElementById('yellowLight').style.backgroundColor = 'yellow';
    timer = setTimeout(makeGreen,3000)
}

function makeGreen () {
    removeLight();
    document.getElementById('greenLight').style.backgroundColor = 'green';
    timer = setTimeout(makeRed, 3000);
}

function activateLight (){
    makeRed();
}

function stopLight(){
    clearTimeout(timer)
}

function removeLight(){
    document.getElementById('redLight').style.backgroundColor =  "";
    document.getElementById('yellowLight').style.backgroundColor =  "";
    document.getElementById('greenLight').style.backgroundColor =  "";
}