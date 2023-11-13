const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {

    fetch(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const TRAVEL_SECT = document.querySelector(".travel__div")

            data.results.forEach(function (results) {
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("travelCtn__fetch")
                ARTICLE.innerHTML = `
                <a class="travelCtn__apiLink" href="${results.url}">
                <div travelCtn__textCtn>
                    <h2 class="travelCtn__apiHeading">${results.title}<h2>
                    <p class="travelCtn__apiAbstract">${results.abstract}</p>
                </div>
                </a>
            `
               TRAVEL_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}