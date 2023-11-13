const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {

    fetch(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const HEALTH_SECT = document.querySelector(".health__div")

            data.results.forEach(function (results) {
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("healthCtn__fetch")
                ARTICLE.innerHTML = `
                <a class="healthCtn__apiLink" href="${results.url}">
                <div healthCtn__textCtn>
                    <h2 class="healthCtn__apiHeading">${results.title}<h2>
                    <p class="healthCtn__apiAbstract">${results.abstract}</p>
                </div>
                </a>
            `
                HEALTH_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}