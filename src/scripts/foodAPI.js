const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {
    if (!window.location.pathname.includes("index") && window.location.pathname !== "/") return // guard clause
    fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${KEY}`)
        .then(function (response) {
            if (response.status !== 200)
                throw new Error("fejlbesked kig her")
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            const FOOD_SECT = document.querySelector(".food__div")

            data.results.forEach(function (results) {
                if (results.item_type != "Article") return // guard clause
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("foodCtn__fetch")
                ARTICLE.innerHTML = `
                <div class="article__container">
                <img class="foodCtn__apiImg" src="${results.multimedia[0].url}">
                <a class="foodCtn__apiLink" href="${results.url}">
                    <div class="foodCtn__textCtn">
                        <h2 class="foodCtn__apiHeading">${results.title}<h2>
                        <p class="foodCtn__apiAbstract">${results.abstract}</p>
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

                    // Save the swiped article immediately to localStorage
                    const SAVED_ARTICLES = JSON.parse(localStorage.getItem("savedFood")) || []
                    SAVED_ARTICLES.push(results)
                    localStorage.setItem("savedFood", JSON.stringify(SAVED_ARTICLES))
                }
                setInterval( function(forsvind) {
                    ARTICLE.style.display ="none"
                }, 800);
            })

                FOOD_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })

}