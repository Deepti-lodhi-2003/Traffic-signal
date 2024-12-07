document.getElementById("stop").onclick = Red;
document.getElementById("slow").onclick = Yellow;
document.getElementById("go").onclick = Green;

function Red() {
    clearLights();
    document.getElementById('stoplight').style.backgroundColor = "red";
}

function Yellow() {
    clearLights();
    document.getElementById('slowlight').style.backgroundColor = "yellow";
}

function Green() {
    clearLights();
    document.getElementById('golight').style.backgroundColor = "green";
}


function clearLights() {

    document.getElementById('stoplight').style.backgroundColor = "black";

    document.getElementById('slowlight').style.backgroundColor = "black";

    document.getElementById('golight').style.backgroundColor = "black";
}

