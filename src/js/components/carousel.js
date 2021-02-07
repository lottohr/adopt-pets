import renderTemplate from "../../js/templates/carouselTemplate.js";
import renderModal from "../../js/templates/modalTemplate.js";

function carouselController(data){
    renderTemplate(data.sort((a, b) => a.age - b.age).slice(0, 4));
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
    const carouselModalLoaded = new Event('modalLoaded');

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
        showModalOnCurrentSlideClick();
    }

    function showModalOnCurrentSlideClick(){
        let slides = document.querySelectorAll(".carousel__item");
        slides.forEach((slide)=>{
            if(slide.classList.contains('current__slide')){
                slide.onclick = ()=>{
                    renderModal(data.filter(el => el.id == slide.id));
                    document.getElementById("adoptModal").style.display="block";
                    document.body.classList.add("modal-opened"); 
                    document.dispatchEvent(carouselModalLoaded);
                }
            }else{
                slide.onclick = null;
            }
        })
    }

    function stopSliderOnCurrentSlideHover(){
        let slides = document.querySelectorAll(".carousel__item");
        slides.forEach((slide)=>{
            if(slide.classList.contains('current__slide')){
                slide.addEventListener("mouseenter", stopSlider );
                slide.addEventListener("mouseleave", initCarousel);
            }else{
                removeMouseEvents(slide);   
            }
        })
    }

    function stopSlider(){
        clearInterval(slideId);
    }

    function removeMouseEvents(slide) {  
        slide.removeEventListener('mouseenter', stopSlider);
        slide.removeEventListener('mouseleave', initCarousel);
    }

    initCarousel();
    showModalOnCurrentSlideClick();

    nextBtn.addEventListener("mouseenter", stopSlider);
    prevBtn.addEventListener("mouseenter", stopSlider);

    nextBtn.addEventListener("mouseleave", initCarousel);
    prevBtn.addEventListener("mouseleave", initCarousel);

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    document.addEventListener("carouselUpdated", (ev) => {   
        renderTemplate(ev.detail.data.sort((a, b) => a.age - b.age).slice(0, 4));
        let slides = carousel.querySelectorAll(".carousel__item");
        let currentSlide = slides[3];
        currentSlide.classList.add("current__slide");
        carousel.prepend(lastClone);
        carousel.prepend(secondLastClone);
        carousel.append(firstClone);
        carousel.append(secondClone);
    })
}
export default carouselController