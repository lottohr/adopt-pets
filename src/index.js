import getData from "./js/helpers/getData.js";
import listComponent from "./js/components/list.js";
import carouselComponent from "./js/components/carousel.js";

const carousel = async () => {
    let data = getData();
    data = await data; 
    carouselComponent(data);
}

const list = async () => {
    let data = getData();
    data = await data;

    let jsonData = data.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
    let state = {
        currentItems: 20,
        totalItems: data.length,
        sortBy: "age",
        sortOrder: "asc",
        filterAge1: "null",
        filterAge2: "null",
        filterColor: "null",
        searchTerm: "",
    };
    listComponent(state, jsonData);
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


    let menuBtn = document.querySelector(".menu_btn");
    menuBtn.addEventListener("click", function (e) {
        menuBtn.classList.toggle('change');
    });
    
});