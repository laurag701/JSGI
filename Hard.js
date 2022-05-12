document.getElementById("button1").onclick = function() {changeToRed("bg-red")};
document.getElementById("button1").onclick = function() {changeToWhite("bg-white")};

let changeToRed = function(color) {
    var element = document.getElementsByTagName("body")[0]

    if (color == "bg-red") {
        element.classList.toggle(color);
    }
    if (document.body.style.backgroundColor="red") {
        return console.log("red again");
    }

}
let changeToWhite = function(color) {
    var element = document.getElementsByTagName("body")[0]

    if (color == "bg-white") {
        element.classList.toggle(color);
    }
    if (document.body.style.backgroundColor="white") {
        return console.log("white again");
    }

}
