import apiKald from "./healthAPI"

const DROPDOWN = document.querySelector(".healthchevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".health__div").innerHTML = ""
        open = false
    } else {
        const HEALTH_SECT = document.querySelector(".healthCtn")
        if (HEALTH_SECT.querySelector(".healthCtn__fetch")) {
            HEALTH_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }
})


