// let section = document.getElementsByClassName("section");
// console.dir(section);
// for (let i = 0; i < section.length; i++) {
//     section[i].addEventListener("click", function() {
//         let id = ducument.creatElement("p");
//         console.log(id);
//         id.style.innerHtml = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//         section[i].classList.add("id");


//     })
// }
let sections = document.getElementsByClassName("section");
console.dir(sections);

for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
        // Check if the id element exists as a child
        let id = sections[i].querySelector("p");

        if (id) {
            // If the id element exists, remove it
            sections[i].removeChild(id);
        } else {
            // If the id element does not exist, create and append it
            id = document.createElement("p");
            id.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            sections[i].appendChild(id);
        }
    });
}