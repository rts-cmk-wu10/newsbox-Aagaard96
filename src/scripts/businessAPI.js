const KEY = "KsMM6ssh0kdJGeDQA34rW7XrhTs8uY3m"

export default async function apiKald() {
    if (!window.location.pathname.includes("index.html")) return // guard clause
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
                if (results.item_type != "Article") return // guard clause
                const ARTICLE = document.createElement("article")
                ARTICLE.classList.add("businessCtn__fetch")
                ARTICLE.innerHTML = `
                <div class="article__container">
                <img class="businessCtn__apiImg" src="${results.multimedia[0].url}" alt="${results.multimedia[0].caption}">
                <a class="businessCtn__apiLink" href="${results.url}">
                    <div class="businessCtn__textCtn">
                        <h2 class="businessCtn__apiHeading">${results.title}<h2>
                        <p class="businessCtn__apiAbstract">${results.abstract}</p>
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
                    const SAVED_ARTICLES = JSON.parse(localStorage.getItem("savedBusiness")) || []
                    SAVED_ARTICLES.push(results)
                    localStorage.setItem("savedBusiness", JSON.stringify(SAVED_ARTICLES))
                }
            })

                BUSINESS_SECT.append(ARTICLE)
            })
        })
        .catch(function (error) {
            console.log(error)
        })

}