import renderCarouselTemplate from "../../js/templates/carouselTemplate.js";
import renderModal from "../../js/templates/modalTemplate.js";

function carouselController(data){
    renderCarouselTemplate(data);
    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide");
    const carousel = document.querySelector("#carouselContent");
    const interval = 2000;
    let slideId;
    let slides = carousel.querySelectorAll(".carousel__item");
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    const secondLastClone = slides[slides.length - 2].cloneNode(true);

    // Clone carousel items
    carousel.prepend(lastClone);
    carousel.prepend(secondLastClone);
    carousel.append(firstClone);
    carousel.append(secondClone);

    // Set first slide to current slide
    slides[0].classList.add("current__slide");
 
    function removeCurrentClass(){
        let slides = carousel.querySelectorAll(".carousel__item");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("current__slide");
        }
    }

    const initCarousel = () => {    
        slideId = setInterval(() => {
            nextSlide();
        }, interval);
      };
 
    function nextSlide(){
        removeCurrentClass();
        let slides = carousel.querySelectorAll(".carousel__item");
        let currentSlide = slides[3];
        currentSlide.classList.add("current__slide");
        carousel.appendChild(slides[0]);
        showModalOnCurrentSlideClick();
        stopSliderOnCurrentSlideHover();
    }

    function prevSlide(){
        removeCurrentClass();
        let slides = carousel.querySelectorAll(".carousel__item");
        slides[1].classList.add("current__slide"); 
        carousel.insertBefore(slides[slides.length - 1], slides[0]);
    }

    function showModalOnCurrentSlideClick(){
        let modalBtn = document.querySelector(".current__slide");
        console.log(modalBtn)
        modalBtn.onclick = ()=>{
            renderModal(data.filter(el => el.id == modalBtn.id));
            document.getElementById("adoptModal").style.display="block";
            document.body.classList.add("modal-opened"); 
            document.dispatchEvent(new Event('modalLoaded'));
        }
    }

    function stopSliderOnCurrentSlideHover(){
        let currentSlide = carousel.querySelectorAll(".current__slide")[0];
        currentSlide.addEventListener("mouseleave", initCarousel);
        currentSlide.addEventListener("mouseenter", () => {
            clearInterval(slideId);
        });
    }

    // initCarousel();
    showModalOnCurrentSlideClick();

    nextBtn.addEventListener("mouseenter", () => {
        clearInterval(slideId);
    });

    prevBtn.addEventListener("mouseenter", () => {
        clearInterval(slideId);
    });

    document.getElementById("adoptModal").addEventListener("mouseenter", () => {
        clearInterval(slideId);
    });

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
}
export default carouselController