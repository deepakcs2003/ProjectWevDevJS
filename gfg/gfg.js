let display_fun = function(a, b, c, d) {
    let li_element_1 = document.querySelector(a);
    console.log(li_element_1);
    li_element_1.addEventListener("click", function() {
        let ul_1 = document.querySelector(b);
        console.dir(ul_1)
        if (ul_1.style.display === "none") {
            ul_1.style.display = "block";
            change(c);
            img_change(d);
        } else {
            ul_1.style.display = "none";
            reset(c);
            img_reset(d);
        }


    })
}
let change = function(a) {
    let course = document.querySelector(a);
    course.style.color = "#308d46"
}
let reset = function(a) {
    let course = document.querySelector(a);
    course.style.color = " #ececec"
}
let img_change = function(a) {
    let img_up_down = document.querySelector(a);
    img_up_down.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMDhkNDYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg=="
}
let img_reset = function(a) {
    let img_up_down = document.querySelector(a);
    console.dir(img_up_down);
    img_up_down.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjZWNlY2VjIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2hldnJvbi11cCI+PHBhdGggZD0ibTE4IDE1LTYtNi02IDYiLz48L3N2Zz4="
}

// display course ofter click the course icon;
display_fun(".li_element_1", ".ul_inner_1", ".course_1", ".img_up_down_1");

//display totorial element aften click on totorial icon;
display_fun(".li_element_2", ".ul_inner_2", ".totorial_1", ".img_up_down_2");

//display jobs element aften click on jobs icon;
display_fun(".li_element_3", ".ul_inner_3", ".job_1", ".img_up_down_3");
//display practice element aften click on practice icon;
display_fun(".li_element_4", ".ul_inner_4", ".practice_1", ".img_up_down_4");
//display contest element aften click on contest icon;
display_fun(".li_element_5", ".ul_inner_4", ".contest_1", ".img_up_down_5");
// search bar shown
let search = document.querySelector(".searchbar");
console.dir(search);
search.addEventListener("click", function() {
    let src = document.querySelector(".search");
    console.dir(src);
    src.style.display = "flex";

});
//search bar hide
let cut = document.querySelector(".close");
cut.addEventListener("click", function() {
    let src = document.querySelector(".search");
    console.dir(src);
    src.style.display = "none";

});
let login = document.querySelector(".login_me");
console.log(login);
login.addEventListener("click", function() {
    let login_show = document.querySelector(".ul_inner_6");
    console.dir(login_show);
    if (login_show.style.display === "none") {
        login_show.style.display = "block";
    } else {
        login_show.style.display = "none";
    }
});
//sidebar click
// let sidebar = document.querySelector(".sidebar");
// console.log(sidebar);
// sidebar.addEventListener("click", function() {
//     console.log("yed");
//     let login_show = document.querySelector(".sidemanu_outer");
//     console.dir(login_show);
//     login_show.style.display = "block";

// });
// let Question_cut = document.querySelector(".sidebar_header");
// console.log(sidebar);
// Question_cut.addEventListener("click", function() {
//     console.log("yed");
//     let login_show = document.querySelector(".sidemanu_outer");
//     console.dir(login_show);
//     login_show.style.display = "none";

// });
let sidebar = document.querySelector(".sidebar");
console.log(sidebar)
login_show = document.querySelector(".sidemanu_outer");
sidebar.addEventListener("click", function() {
    console.dir(login_show);
    login_show.classList.toggle('show');
})
let Question_cut = document.querySelector(".sidebar_header");
Question_cut.addEventListener("click", function() {
    login_show.classList.toggle('show');
});
let language = document.querySelector(".language");
language.addEventListener("click", function() {
    let language_list = document.querySelector(".langauge_list");
    if (language_list.style.display === "block") {
        language_list.style.display = "none";
    } else {
        language_list.style.display = "block";
        let language_ls = document.getElementsByClassName("ll");
        console.dir(language_ls);
        for (let i = 0; i < language_ls.length; i++) {
            language_ls[i].addEventListener("click", function() {
                language.innerHTML = language_ls[i].innerHTML;
                // let ik = document.querySelector(".fa-solid fa-caret-down");
                // language.innerHTML = ik;
                // andi bandi sandi jo mera code copy kiya who randi 
            })
        }

    }

    // console.dir(language_list);
})