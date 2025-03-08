let divs = document.querySelectorAll(".box");


for(div of divs){
    console.log(div.inner);
}

divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";


let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


//------EVENT OBJECT-------//

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

};

let div= document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}