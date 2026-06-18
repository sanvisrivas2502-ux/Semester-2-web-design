let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

document.getElementById("changeTextBtn").addEventListener("click", () =>{
  if(input.value !== ""){
    heading.innerHTML = input.value;
  }
});

document.getElementById("bgColorBtn").onclick = function(){
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 167777215).toString(16);

};

document.getElementById("fontSizeBtn").addEventListener("click", () => {
  fontSize += 2;
  paragraph.style.fontSize = fontSize + "px";
});


document.getElementById("toggleBtn").addEventListener("click", () => {
  if (paragraph.style.display === "none"){
    paragraph.style.display = "block";
  }


    else{
      paragraph.style.display = "none";
    }
  
});

document.getElementById("reset").addEventListener("click" ,() => {
  heading.innerHTML = "Welcome to JavaScript Lab";
  paragraph.style.display = "bllock";
  paragraph.style.fontSize = "16px";
  document.body.style.backgrounColor = "#f4f4f4";
  input.value = "";
  fontSize = 16;

});

