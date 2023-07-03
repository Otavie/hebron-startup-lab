const sections = document.querySelectorAll('section');
const containerLanding = document.querySelector('.container-landing');
const footer = document.getElementsByTagName('footer');
const nav = document.querySelector('nav');
const navA = document.querySelector('nav a')
const navBack = document.querySelector('a.each-nav')
const navList = document.querySelectorAll('.nav-list li a')
const mobileMenu = document.querySelector('#mobile-menu');
const screenSize = window.matchMedia('(min-width: 750px)')

const handleScroll = () => {
    if (window.scrollY >= 100){
        nav.classList.add('side-nav')
        navA.classList.remove('active')
        navBack.classList.add('nav-back')
    } 
    else {
        
        if (screenSize.matches) {
            nav.classList.remove('side-nav');
        } 
    }
}    
window.addEventListener('scroll', handleScroll);

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('fa-close');
        if (!nav.classList.contains('side-nav')) {
            nav.classList.add('side-nav');
        } 
    nav.classList.toggle('show');
});
  
const options = {
    threshold: '0.15',
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navList.forEach(link => {
                if (e.target.id === 'container-landing') {
                    navA.classList.add('active')
                    link.classList.remove('nav-back')
                } else {
                    link.classList.add('nav-back')
                }

                link.classList.remove('active')
                if (e.target.id === link.dataset.nav) {
                    link.classList.add('active')
                }
            })
        }
    });
}, options)

sections.forEach(section => {
    observer.observe(section)
})


const aboutI = document.querySelectorAll('.about-intersection')

const optionsTwo = {
    threshold: '0.4',
};

const observerTwo = new IntersectionObserver(function (entries, observerTwo) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('appear');
        } else {
            entry.target.classList.add('appear');
        }
    });
}, optionsTwo)

aboutI.forEach(about => {
    observerTwo.observe(about);
});


const teamObserver = document.querySelectorAll('.team-observer')

const optionsThree = {
    threshold: '0.1',
};

const observerThree = new IntersectionObserver(function (entries, observerThree) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('show-team');
        } else {
            entry.target.classList.add('show-team');
        }
    });
}, optionsThree)

teamObserver.forEach(team => {
    observerThree.observe(team);
});