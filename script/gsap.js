gsap.registerPlugin(ScrollTrigger);

// Selector

// About us
let aboutUs = document.getElementById('about-us-block');

let allAElement = aboutUs.getElementsByClassName('elem'); // All services Element

// About us 2
let aboutUs2 = document.getElementById('about-us-block-2');

let allAElement2 = aboutUs2.getElementsByClassName('elem'); // All services Element




// Work
let work = document.getElementById('gallery-block');

let allWElement = work.getElementsByClassName('elem'); // All services Element








// About us 

gsap.from(allAElement, {
    opacity: 0,
    duration: 1,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: aboutUs,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});






// About us  2

gsap.from(allAElement2, {
    opacity: 0,
    duration: 3,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: aboutUs2,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});


// Work

gsap.from(allWElement, {
    opacity: 0,
    duration: 1,
    ease: 'easeOut',
    y: 1000,
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: work,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});