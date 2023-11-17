import apiKald from "./worldAPI"

const DROPDOWN = document.querySelector(".worldchevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".world__div").innerHTML = ""
        open = false
    } else {
        const WORLD_SECT = document.querySelector(".worldCtn")
        if (WORLD_SECT.querySelector(".worldCtn__fetch")) {
            WORLD_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }
})


