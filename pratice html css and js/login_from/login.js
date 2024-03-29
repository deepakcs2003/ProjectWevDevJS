let btn = document.querySelector(".btn");
console.dir(btn);
btn.addEventListener("click", function() {
    let m = document.querySelector(".main");
    console.dir(m);
    m.style.display = "block";
    let login = document.querySelector(".login");
    login.style.display = "none";
});
let close = document.querySelector(".close");
close.addEventListener("click", function() {
    let m = document.querySelector(".main");
    console.dir(m);
    m.style.display = "none";
    let login = document.querySelector(".login");
    login.style.display = "block";
})
let cal = document.querySelector(".can");
cal.addEventListener("click", function() {
    let m = document.querySelector(".main");
    console.dir(m);
    m.style.display = "none";
    let login = document.querySelector(".login");
    login.style.display = "block";
})