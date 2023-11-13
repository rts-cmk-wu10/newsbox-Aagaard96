const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {

    fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const WORLD_SECT = document.querySelector(".world__div")

            data.results.forEach(function (results) {
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("worldCtn__fetch")
                ARTICLE.innerHTML = `
                <img class="worldCtn__apiImg" src="${results.multimedia[2].url}" alt="${results.multimedia[2].caption}">
                <a class="worldCtn__apiLink" href="${results.url}">
                    <div worldCtn__textCtn>
                        <h2 class="worldCtn__apiHeading">${results.title}<h2>
                        <p class="worldCtn__apiAbstract">${results.abstract}</p>
                    </div>
                </a>
            `
                WORLD_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}