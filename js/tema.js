const button = document.getElementById("tema");
const tema = window.localStorage.getItem("tema");


if (tema === "dark") document.body.classList.add("dark");


button.addEventListener("click", () => { 

    document.body.classList.toggle("dark");

    if (tema === "dark") {
        window.localStorage.setItem("tema", "light");
    } else {
        window.localStorage.setItem("tema", "dark");
    }

});

