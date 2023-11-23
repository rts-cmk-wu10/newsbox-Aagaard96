export default (function () {


    const DARK_BTN = document.querySelector(".settings__darkmode")

    if (DARK_BTN) {
        DARK_BTN.addEventListener("click", darkToggle);
    }


    function darkToggle() {
        const CLASS_LIST = document.body.classList
        CLASS_LIST.toggle("darkmode");
        localStorage.setItem("theme", CLASS_LIST.contains("darkmode") ? "darkmode" : "")
    }

    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "")
    }

    document.body.classList.add(localStorage.getItem("theme") || "hej")
})()
