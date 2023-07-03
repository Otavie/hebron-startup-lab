// Sliders for Alumni

const hslAlumniContent = document.querySelector('.hsl-alumni-content');
let isDragging = false;
let startScrollX = 0;
let startClientX = 0;

const handleMouseMove = (e) => {
  if (isDragging) {
    const deltaX = e.clientX - startClientX;
    hslAlumniContent.scrollLeft = startScrollX - deltaX;
  }
};

hslAlumniContent.addEventListener('mousemove', handleMouseMove);

const prevButton = document.querySelector('.hsl-alumni-slider-prev');
const nextButton = document.querySelector('.hsl-alumni-slider-next');
const sliderContainerWidth = 400 + 1;

const scrollLeft = () => {
    hslAlumniContent.scroll({
      left: hslAlumniContent.scrollLeft - sliderContainerWidth,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    hslAlumniContent.scroll({
      left: hslAlumniContent.scrollLeft + sliderContainerWidth,
      behavior: 'smooth'
    });
  }

prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);


// Sliders for Team Members

const buttons = document.querySelectorAll('[data-control-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.controlButton === 'next' ? 1 : -1;
        const teamSlider = button.closest('[data-control]').querySelector('[data-slides]')
        const activeSlide = teamSlider.querySelector("[data-active]")
        let ind = [...teamSlider.children].indexOf(activeSlide) + offset
        if (ind < 0) {
            ind = teamSlider.children.length - 1
        }
        if (ind >= teamSlider.children.length) {
            ind = 0
        }

        teamSlider.children[ind].dataset.active = true
        delete activeSlide.dataset.active
    })  
})


// Sliders for Partners

$(document).ready(function(){
    $('.partners-sliders').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:true,
        adaptiveHeight:true,
        variableWidth: true,
    });
});
