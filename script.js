const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMore = document.getElementById("show-more")

let keyword = ""
let page = 1
let apiKey = "O7BXe5u0wdric_hV-TeibBvPBvFv3JkzDuSIPsZxQvI"

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

    const reponse = await fetch(url);
    const data = await reponse.json();

    console.log(data);
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = '';
    searchImages();
})

showMore.addEventListener("click" , () =>{
    page++;
    searchImages();
})
