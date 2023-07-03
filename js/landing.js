var index = 0;
var i = 0;

var sliders = document.getElementsByClassName('landing-page__slider__each-slide');

async function runLandingPageSlider(){
    await sleep(14);
    landingPageSlider();
}

async function sleep(sec){
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

function showSlides(n){
    for (i = 0; i < sliders.length; i++){
        if (i == 0){
            sliders[i].style.clipPath = 'circle(0% at 50% 50%)';
            sliders[n - 1].style.clipPath = 'circle(400% at 50%)';
        }else{   
            sliders[i].style.clipPath = 'circle(0% at 0% 50%)';
            sliders[n - 1].style.clipPath = 'circle(400% at 50%)';
        }
        
    } 
    
}

async function landingPageSlider(){
    index ++;
    if (index > sliders.length){
        await sleep(2);
        index = 2;
    }

    showSlides(index);
    setTimeout(landingPageSlider, 6000);
}

runLandingPageSlider();