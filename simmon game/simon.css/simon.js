let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "blue", "purple"];
let started = false;
let level = 0;
let maxScore = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started!");
        started = true;
        levelUp();
    }

})


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button choose;
    let randInd = Math.floor(Math.random() * 3);
    let randCol = btns[randInd];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randCol);
    // console.log(randInd);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1200);
        }
    } else {
        h2.innerHTML = `Game is over! your score was:<b>${level} </b> <br> try again, press any key.`;
        maxScore = Math.max(level, maxScore);
        let div = document.querySelector(".high");
        div.innerHTML = `<b style="font-size:25px;">Highest Score: ${maxScore}</b>`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 400);
        reset();
    }
}

function btnPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}