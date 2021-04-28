console.log("page loaded...");

var count = 2
var yourConnections = 418

function editProfile(){
    let myElement = document.querySelector("#name");
    myElement.innerText = "Jeremi Short";
}


function accept(){
    let element = document.querySelector("#todd");
    element.remove();
    count--;
    yourConnections++;
    let element2 = document.querySelector("#yourConnectionsNumber");
    element2.innerText = yourConnections
}

function reject(){
    let element = document.querySelector("#todd");
    element.remove();
    count--;
    yourConnections++;
    let element2 = document.querySelector("#yourConnectionsNumber");
    element2.innerText = yourConnections
}

function accept1(){
    let element = document.querySelector("#phil");
    element.remove();
    count--;
    yourConnections++;
    let element2 = document.querySelector("#yourConnectionsNumber");
    element2.innerText = yourConnections
}

function reject1(){
    let element = document.querySelector("#phil");
    element.remove();
    count--;
    yourConnections++;
    let element2 = document.querySelector("#yourConnectionsNumber");
    element2.innerText = yourConnections
}