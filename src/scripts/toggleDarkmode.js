export default (function () {
    if (!window.location.pathname.includes("settings.html")) return // guard clause

    const DARK_BTN = document.querySelector(".settings__darkmode")
    DARK_BTN.addEventListener("click", darkToggle);

    function darkToggle() {
        const CLASS_LIST = document.body.classList
        CLASS_LIST.toggle("darkmode");
        localStorage.setItem("theme", CLASS_LIST.contains("darkmode") ? "darkmode" : "")
    }

    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "" )
    }

    if (localStorage.getItem("theme") === "darkmode") {
        DARK_BTN.checked = true
    }

    document.body.classList.add(localStorage.getItem("theme"))
})()
