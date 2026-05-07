let newheading = document.getElementById("heading");
newheading.textContent="DOM Manipulation In Javascript";
newheading.style.color="blue";
newheading.style.fontSize="40px";

let paragrapgh = document.getElementsByClassName("paragraph");
paragrapgh[0].innerHTML = "<strong>This paragraph has been updated using javascript</strong>";
paragrapgh[0].style.color="green";
paragrapgh[0].style.fontSize="20px";

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div created using JavaScript.";
document.body.appendChild(newDiv);

function addList(list){
    let newList = document.createElement("li");
    

}