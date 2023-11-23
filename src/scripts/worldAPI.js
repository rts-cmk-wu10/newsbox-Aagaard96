const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {
    if (!window.location.pathname.includes("index.html")) return

    try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${KEY}`)

        if (!response.ok) {
            throw new Error("Error fetching data")
        }

        const data = await response.json()
        console.log(data)

        const WORLD_SECT = document.querySelector(".world__div")

        data.results.forEach(function (results) {
            if (results.item_type !== "Article") return

            const ARTICLE = document.createElement("article")
            ARTICLE.classList.add("worldCtn__fetch")
            ARTICLE.innerHTML = `
                <div class="article__container">
                    <img class="worldCtn__apiImg" src="${results.multimedia[0].url}" alt="${results.multimedia[0].caption}">
                    <a class="worldCtn__apiLink" href="${results.url}">
                        <div class="worldCtn__textCtn">
                            <h2 class="worldCtn__apiHeading">${results.title}</h2>
                            <p class="worldCtn__apiAbstract">${results.abstract}</p>
                        </div>
                    </a>
                </div>
                <button class="swipe__ctn"><i class="fa-solid fa-inbox"></i></button>
            `

            let touchStartX = 0
            let touchEndX = 0

            ARTICLE.querySelector(".article__container").addEventListener("touchstart", function (e) {
                touchStartX = e.touches[0].clientX
            })

            ARTICLE.querySelector(".article__container").addEventListener("touchend", function (e) {
                touchEndX = e.changedTouches[0].clientX

                if (touchEndX < touchStartX) {
                    ARTICLE.querySelector(".article__container").style.animation = `moveLeft 1s ease`

                    // Tjekker om den valte artikel er gemt i localstorage, eller om den er tom
                    const SAVED_ARTICLES = JSON.parse(localStorage.getItem("savedWorld")) || []
                    // Tilføjer valgte artikel til 
                    SAVED_ARTICLES.push(results)
                    // Gør elemented til string (det SKAl det være)
                    localStorage.setItem("savedWorld", JSON.stringify(SAVED_ARTICLES))
                    // Sætter en timer så det ligner den bliver slettet
                }
                setInterval( function(forsvind) {
                    ARTICLE.style.display ="none"
                }, 800);
            })
            

            WORLD_SECT.append(ARTICLE)
        })
    } catch (error) {
        console.log(error)
    }
}
