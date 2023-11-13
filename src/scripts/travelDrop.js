import apiKald from "./travelAPI"

const DROPDOWN = document.querySelector(".travelchevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".travel__div").innerHTML = ""
        open = false
    } else {
        const TRAVEL_SECT = document.querySelector(".travelCtn")
        if (TRAVEL_SECT.querySelector(".travelCtn__fetch")) {
            TRAVEL_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }





})


