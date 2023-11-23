const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {
    if (!window.location.pathname.includes("index") && window.location.pathname !== "/") return // guard clause
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
                if (results.item_type != "Article") return // guard clause
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("healthCtn__fetch")
                ARTICLE.innerHTML = `
                <div class="article__container">
                <img class="healthCtn__apiImg" src="${results.multimedia[0].url}" alt="${results.multimedia[0].caption}">
                <a class="healthCtn__apiLink" href="${results.url}">
                    <div class="healthCtn__textCtn">
                        <h2 class="healthCtn__apiHeading">${results.title}<h2>
                        <p class="healthCtn__apiAbstract">${results.abstract}</p>
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
                    const SAVED_ARTICLES = JSON.parse(localStorage.getItem("savedHealth")) || []
                    // Tilføjer valgte artikel til 
                    SAVED_ARTICLES.push(results)
                    // Gør elemented til string (det SKAl det være)
                    localStorage.setItem("savedHealth", JSON.stringify(SAVED_ARTICLES))
                    // Sætter en timer så det ligner den bliver slettet
                    setInterval( function(forsvind) {
                        ARTICLE.style.display ="none"
                    }, 800);
                }
            })

                HEALTH_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })

}