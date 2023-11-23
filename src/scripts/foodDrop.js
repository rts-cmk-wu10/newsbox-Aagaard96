import apiKald from "./foodAPI"

const DROPDOWN = document.querySelector(".foodchevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".food__div").innerHTML = ""
        open = false
    } else {
        const FOODS_SECT = document.querySelector(".foodCtn")
        if (FOODS_SECT.querySelector(".foodCtn__fetch")) {
            FOODS_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }





})


