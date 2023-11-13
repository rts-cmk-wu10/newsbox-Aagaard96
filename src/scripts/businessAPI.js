const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {

    fetch(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const BUSINESS_SECT = document.querySelector(".business__div")

            data.results.forEach(function (results) {
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("businessCtn__fetch")
                ARTICLE.innerHTML = `
                <img class="businessCtn__apiImg" src="${results.multimedia[2].url}" alt="${results.multimedia[2].caption}">
                <a class="businessCtn__apiLink" href="${results.url}">
                <div businessCtn__textCtn>
                    <h2 class="businessCtn__apiHeading">${results.title}<h2>
                    <p class="businessCtn__apiAbstract">${results.abstract}</p>
                </div>
                </a>
            `
               BUSINESS_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}