import carouselTemplate from '../../js/templates/carouselTemplate.js'
import renderModal from '../../js/templates/modalCarousel.js'

function carouselController(data){
    
    carouselTemplate(data)

    let slideIndex = 1
    let currentSlide = 1
    let slideId;

    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide")

    const carousel = document.querySelector("#carouselContent");
    let slides = carousel.querySelectorAll('.carousel__item');

    const slideWidth = slides[slideIndex].clientWidth;
    const interval = 2000;

    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
  
    const lastClone = slides[slides.length - 1].cloneNode(true);
    const secondLastClone = slides[slides.length - 2].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    // Clone carousel items
    carousel.prepend(lastClone);
    carousel.prepend(secondLastClone);
  
    carousel.append(firstClone)
    carousel.append(secondClone)


    const getSlides = () => document.querySelectorAll('.carousel__item');

    carousel.addEventListener('transitionend', () => {
        slides = getSlides();
        if (slides[currentSlide].id === firstClone.id) {
            currentSlide = 1;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
            slides[2].classList.add("current__slide")
        }
      });

    //Get length of carousel with cloned items
    const slidesLength = getSlides();
    
    // Set first slide to current slide
    slides[0].classList.add("current__slide")
    firstClone.classList.remove("current__slide")
    showModal()
  
    function removeCurrentClass(){
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("current__slide")
        }
    }

    const initCarousel = () => {    
        slideId = setInterval(() => {
            nextSlide()
        }, interval);
      };

    function nextSlide(){
        console.log(currentSlide)
        removeCurrentClass()  

        if(currentSlide === slidesLength.length-2 || currentSlide > 5){
            carousel.style.transition = 'none';
            currentSlide = 2
            // carousel.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }
        
        slidesLength[currentSlide+1].classList.add("current__slide")
        carousel.style.transition = '.7s ease-out';
        carousel.style.transform = `translateX(${-slideWidth * currentSlide}px)`; 
        currentSlide ++
        showModal()
    }

    function prevSlide(){
        removeCurrentClass()
        currentSlide--;
        if( currentSlide > 0){
            slidesLength[currentSlide+1].classList.add("current__slide")
            carousel.style.transition = '.7s ease-out';
            carousel.style.transform = `translateX(${-slideWidth * currentSlide}px)`
        }else{
            currentSlide = 1
        }
     
    }

    function showModal(){
        let modalBtn = document.getElementsByClassName('current__slide')[0]
        modalBtn.onclick = ()=>{
            renderModal(data.filter(el => el.id == modalBtn.id))
            document.getElementById('adoptModal').style.display="block"
            document.body.classList.add("modal-opened")
            document.dispatchEvent(carouselModalLoaded)
        }
    }

    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideId);
    });

    nextBtn.addEventListener('mouseenter', () => {
        clearInterval(slideId);
    });

    prevBtn.addEventListener('mouseenter', () => {
        clearInterval(slideId);
    });

    document.getElementById('adoptModal').addEventListener('mouseenter', () => {
        clearInterval(slideId);
    });

    carousel.addEventListener('mouseleave', initCarousel);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    initCarousel()

    const carouselModalLoaded = new Event('carouselModalLoaded');

    document.addEventListener('carouselModalLoaded', () => {   
        let btnClose = document.getElementById('btnClose')
        btnClose.onclick = ()=>{
            document.getElementById('adoptModal').style.display="none"
            document.body.classList.remove("modal-opened")
        }
    })

   

}

export default carouselController