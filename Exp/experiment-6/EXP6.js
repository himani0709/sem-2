//selecting elements from HTML
let heading = document.getElementById("heading");
let input = document.getElementById("inputTextt");
let para = document.getElementById("para");

//1. Change heading text when button is clicked
//onclick runs function when button is clicked
document.getElementById("changeTextBtn").onclick = 
function () {
    //innerText changes the text of heading
    heading.innerText = input.value;
}; 
/////semicolon bcz fufunction yaha terminate ho rhi hai

//2. Input Change Event
//onchange runs function when user changes input and click
input.onchange = function () {
    console.log("Input changed : " , input.value);
};

//3. Change Background Color
//addEventListener allows multiple event on same element
document.getElementById("bgColorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily = "Arial"; // Change font family to Arial
});

//4. Increase Font Size of Heading
let fontSize = 16;
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    heading.style.fontSize = fontSize + "px";
    heading.style.maxFontSize = "80px"; // Set maximum font size to 80px
});

//5. Show/Hide Paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (isVisible) {
        para.style.display = "none"; //hide
        isVisible = false;
    } 
    else {
        para.style.display = "block"; //show
        isVisible = true;
    }
});

//6. Reset Page
document.getElementById("resetBtn").addEventListener("click", function () {
    location.reload(); // Reload the page to reset all changes
    // Alternatively, you can manually reset each element to its default state
    // heading.innerText = "Welcome to JavaScript Lab";
    // para.style.display = "block";
    // para.style.fontSize = "16px";
    // document.body.style.backgroundColor = "#f4f4f4";
    // input.value = "";
    // fontSize = 16;
});

//7.Mouse Over Event (hover on heading)
heading.onmouseover=function () {
 heading.style.color = "red"; // Change text color to red on mouse over
};

//8.Mouse Out Event (hover out from heading)
heading.onmouseout=function () {
    heading.style.color = "black"; // Change text color back to black on mouse out
   };