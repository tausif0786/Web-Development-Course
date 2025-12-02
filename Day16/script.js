console.log("Hello");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "purple";
})