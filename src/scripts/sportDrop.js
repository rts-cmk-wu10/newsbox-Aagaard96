import apiKald from "./sportAPI"

const DROPDOWN = document.querySelector(".sportschevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".sports__div").innerHTML = ""
        open = false
    } else {
        const SPORTS_SECT = document.querySelector(".sportsCtn")
        if (SPORTS_SECT.querySelector(".sportsCtn__fetch")) {
            SPORTS_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }





})


