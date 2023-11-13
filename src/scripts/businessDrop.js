import apiKald from "./businessAPI"

const DROPDOWN = document.querySelector(".businesschevron")
let open = false


DROPDOWN.addEventListener("click", function (event) {
    event.target.classList.toggle("fa-chevron-right")
    event.target.classList.toggle("fa-chevron-down")

    if (open) {
        document.querySelector(".business__div").innerHTML = ""
        open = false
    } else {
        const BUSINESS_SECT = document.querySelector(".businessCtn")
        if (BUSINESS_SECT.querySelector(".businessCtn__fetch")) {
            BUSINESS_SECT.innerHTML = ""
        } else {
            apiKald()
        }
        open = true
    }





})


