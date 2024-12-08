let element1 = document.querySelector("#box1");
let element2 = document.querySelector("#box2");
let element3 = document.querySelector("#box3");
let element4 = document.querySelector("#box4");

element1.addEventListener("mouseover",()=>{
    element1.classList.add("box11");
});
element1.addEventListener("mouseout",()=>{
    element1.classList.remove("box11");
});

element2.addEventListener("mouseover",()=>{
    element2.classList.add("box22");
});

element2.addEventListener("mouseout",()=>{
    element2.classList.remove("box22");
});

element3.addEventListener("mouseover",()=>{
    element3.classList.add("box33");
});
element3.addEventListener("mouseout",()=>{
    element3.classList.remove("box33");
});
element4.addEventListener("mouseover",()=>{
    element4.classList.add("box44");
});
element4.addEventListener("mouseout",()=>{
    element4.classList.remove("box44");
});