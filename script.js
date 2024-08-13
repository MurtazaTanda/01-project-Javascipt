let searchresults = document.getElementById("searchresult");
let forminput = document.getElementById("form-input");
let formbtn = document.getElementById("form-btn");
let btn = document.getElementById("btn2");
let accessKey = "QhJ3hfCX7yA2KlT-Scy9Uoy96qXoyvLv8SI3R7e78UQ";


let keyword = ""
let page = 1;

async function searchimages() {
    keyword = forminput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results


    searchresults.innerHTML = ''

    results.map(result => {
        const image = document.createElement("img")
        image.src = result.urls.small
        searchresults.appendChild(image)
    })

    btn.style.visibility = "visible"
}   

formbtn.addEventListener('click', (e) => {
    e.preventDefault()
    page = 1
    searchimages()
})

btn.addEventListener('click', () => {
    page++
    searchimages()
})

