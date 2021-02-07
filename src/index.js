import listComponent from "./js/components/list.js";
import carouselComponent from "./js/components/carousel.js";

const carousel = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        data.forEach((obj, id) => {
            Object.assign(obj, {
                id: id,
                img: `img/${obj.name.toLowerCase()}.jpg`
            })
        })
        let jsonData = data.sort((a, b) => a.age - b.age).slice(0, 4);
        carouselComponent(jsonData);
    }
}

const list = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        data.forEach((obj, id) => {
            Object.assign(obj, {
                id: id,
                img: `img/${obj.name.toLowerCase()}.jpg`
            })
        })

        let jsonData = data.sort((a, b) => a.age - b.age);
        let state = {
            currentItems: 20,
            totalItems: data.length,
            sortBy: "age",
            sortOrder: "asc",
            filterAge1: "null",
            filterAge2: "null",
            filterColor: "null",
        };

        //List controller
        listComponent(state, jsonData);
    }
}

window.addEventListener("load", () => {
    // Init components
    carousel();
    list();

    // Remove modal on click outside
    let modal = document.querySelector(".modal_overlay");
    modal.addEventListener("click", function (e) {
        document.getElementById("adoptModal").style.display = "none";
        document.body.classList.remove("modal-opened");
    });
});