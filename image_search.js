const accessKey = "HUlD7lSWtCvSDNpZ9Iiwg1Z-k_GcflysG2v7wczliCY";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search_input");
const searchEl = document.querySelector(".search_button");
const searchResults = document.querySelector(".search_results");
const showMore = document.querySelector(".show_more_button");
let inputData = "";
let page = 1;
async function searchImages() {
    console.log(inputEl);
    inputData = inputEl.value;
    console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search_result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    })
    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}
formEl.addEventListener("submit", (Event) => {
    Event.preventDefault();
    page = 1;
    searchImages();
})
showMore.addEventListener("click", (Event) => {
    searchImages();
})