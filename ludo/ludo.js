let img = document.querySelector(".cng");
let idx = ["d1", 'd2', 'd3', 'd4', 'd5', 'd6'];
// let img1 = document.querySelector(`.${idx[0]}`);
// console.dir(img1);
// img.src = img1.src;
let btn = document.querySelector(".btn");
btn.addEventListener("click", function() {

    setTimeout(() => {
        clearInterval(id);
        btn.innerHTML = "Roll-Now";
    }, 1000);
    let id = setInterval(() => {
        let index = Math.floor(Math.random() * 6);
        //console.log(idx[index]);
        let newImg = document.querySelector(`.${idx[index]}`);
        // console.dir(newImg);
        img.src = newImg.src;
    }, 5);
    btn.innerHTML = "<b>best-Luck</b>";


})