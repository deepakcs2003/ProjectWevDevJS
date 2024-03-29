let btn = document.querySelector(".btn");
btn.addEventListener("mouseover", function() {
    let box = document.querySelector(".dropdown");
    box.style.display = "flex";
})
let main = document.querySelector(".dropdown");
main.addEventListener("mouseout", function() {
    let box = document.querySelector(".dropdown");
    box.style.display = "none";
})