let btn = document.querySelector(".btn");
// console.dir(btn);
btn.addEventListener("click", function() {
    let main = document.querySelector(".main");
    main.style.width = "250px";
});
let close = document.querySelector(".close");
close.addEventListener("click", function() {
    let main = document.querySelector(".main");
    main.style.width = "0px";
})