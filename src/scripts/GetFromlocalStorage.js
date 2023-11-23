// VIRKER IKKE!!!!!!!!!!!!!!

export default function ToArchive() {
    if (!window.location.pathname.includes("archive.html")) return; // guard clause

    const STORED_DATA = JSON.parse(localStorage.getItem("savedWorld"))
    const DESTINATION = document.querySelector(".world__div")

    STORED_DATA.results.forEach(function (results) {
        if (results.item_type !== "Article") return; // guard clause

        const articleElement = document.createElement("article")
        articleElement.classList.add("worldCtn__fetch")
        articleElement.innerHTML = `
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

        DESTINATION.appendChild(articleElement);
    })
}
