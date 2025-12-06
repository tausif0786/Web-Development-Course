let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Hello";
    // alert("Hello! Welcome");
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})