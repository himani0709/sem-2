let heading = document.getElementById("mainHeading");
let paragraph = document.getElementsById("mainParagraph");
let input = document.getElementById("userInput");

let fontSixe = 16;

//change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    if (input.value !== ""){
        heading.innerHTML = input.value;
    }
});

//chnage background color
document.getElementById("changebgColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
    "#" + Math.floor(Math.random()*16777215).toString(16);
});

//increase font size
document.getElementById("changefontSizeBtn").addEventListener("click", function() {
    fontSixe += 2;
    heading.style.fontSize = fontSixe + "px";
    paragraph.style.fontSize = fontSize + "px";
});

//Show/Hide Button
document.getElementById("toggleBtn").addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

//Reset Button
document.getElementById("resetBtn").addEventListener("click", function() {
    heading.innerHTML = "Welcome to JavaScript (DOM Manipulation) Lab";
    document.body.style.backgroundColor = "blue";
    fontSixe = 16;
    heading.style.fontSize = fontSixe + "px";
    paragraph.style.fontSize = fontSixe + "px";
});

