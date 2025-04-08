
'use strict';

//Our Work JS
const root = document.documentElement;
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
//Listing JS
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;
const nav = document.querySelector('.carousel-nav');
//Our Work
if (btn1 && btn2 && btn3) {
    btn1.addEventListener('click', buttonClick);
    btn2.addEventListener('click', buttonClick);
    btn3.addEventListener('click', buttonClick);
}
//Listing JS
if (leftBtn && rightBtn && nav) {
    leftBtn.addEventListener('click', swipe);
    rightBtn.addEventListener('click', swipe);
    nav.addEventListener('click', dotClicked);
}

function swipe(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')){
        if(currentIndex === 0){
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }
    }
    else{
        if(currentIndex === CAROUSEL_SIZE - 1){
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

function dotClicked(e) {
    const currentNavItem = document.querySelector('.nav-item.active');
    const currentCarouselItem = document.querySelector('.carousel-item.active');

    if (e.target === currentNavItem){
        return
    }
    else {
        const newIndex = navItems.indexOf(e.target);
        navItems[newIndex].classList.add('active');
        carouselItems[newIndex].classList.add('active');
        currentNavItem.classList.remove('active');
        currentCarouselItem.classList.remove('active');
    }
}

//Our Work JS
function buttonClick (e) {
    //get the event target, which is the button being clicked, store it in a variable named btn.
    let btn = e.target;
    //toggle the open class on btn, and similarly, toggle the open class on the corresponding content element, i.e., the accordion-content element below btn. (Hint: in the DOM tree, the content element is the next sibling element of the button)
    btn.classList.toggle('open');
    const content = btn.nextElementSibling;
    content.classList.toggle('open');

    //set --content-height to the scrollHeight property of the content element.
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');

    //loop through all the buttons, for each button if not btn and classlist contains open class, remove
    //open class from class list and remove open class from the cooresponding content element
    const buttonItems = Array.from(document.querySelectorAll('button'));
    buttonItems.forEach(button => {
        if (button !== btn && button.classList.contains('open')) {
           button.classList.remove('open'); 
           const contentElement = button.nextElementSibling;
           contentElement.classList.remove('open');
        }
    });
}