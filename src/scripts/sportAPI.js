const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {
    if (!window.location.pathname.includes("index.html")) return // guard clause
    fetch(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const SPORTS_SECT = document.querySelector(".sports__div")

            data.results.forEach(function (results) {
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("sportsCtn__fetch")
                ARTICLE.innerHTML = `
                <img class="sportsCtn__apiImg" src="${results.multimedia[2].url}" alt="${results.multimedia[2].caption}">
                <a class="sportsCtn__apiLink" href="${results.url}">
                <div sportsCtn__textCtn>
                    <h2 class="sportsCtn__apiHeading">${results.title}<h2>
                    <p class="sportsCtn__apiAbstract">${results.abstract}</p>
                </div>
                </a>
            `
               SPORTS_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}