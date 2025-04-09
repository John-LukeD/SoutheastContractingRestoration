
'use strict';

//Listing page carousel below
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;
const nav = document.querySelector('.carousel-nav');

//create event listeners if we are on the correct web page
if (leftBtn && rightBtn && nav) {
    leftBtn.addEventListener('click', swipe);
    rightBtn.addEventListener('click', swipe);
    nav.addEventListener('click', dotClicked);
}

function swipe(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    //index logic for changing img
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

    //switch image
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

//Our Work acordion below
const root = document.documentElement;
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');

if (btn1 && btn2 && btn3) {
    btn1.addEventListener('click', buttonClick);
    btn2.addEventListener('click', buttonClick);
    btn3.addEventListener('click', buttonClick);
}

function buttonClick (e) {
    //get the button
    let btn = e.target;
    //toggle the open class on btn and content element
    btn.classList.toggle('open');
    const content = btn.nextElementSibling;
    content.classList.toggle('open');

    //set --content-height to the scrollHeight property of the content
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');

    //loop through all the buttons, for each button if not btn and classlist contains open class, remove
    //open class from class list and remove open class from content
    const buttonItems = Array.from(document.querySelectorAll('button'));
    buttonItems.forEach(button => {
        if (button !== btn && button.classList.contains('open')) {
           button.classList.remove('open'); 
           const contentElement = button.nextElementSibling;
           contentElement.classList.remove('open');
        }
    });
}

//listings ToolTip below
const tooltipText = 'Click me to view more';
const imgs = document.querySelectorAll('.tooltip-img');
  
if (imgs.length > 0) {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-box';
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);
   
    //for each img in imgs, add eventlisteners
    imgs.forEach((img) => {
        //if hovering over the img, set opacity to 1
        img.addEventListener('mouseover', () => {
          tooltip.style.opacity = '1';
        });
        //follow the cursor
        img.addEventListener('mousemove', (e) => {
          tooltip.style.left = `${e.pageX + 5}px`;
          tooltip.style.top = `${e.pageY - 35}px`;
        });
        //if not hovering set opacity to 0
        img.addEventListener('mouseleave', () => {
          tooltip.style.opacity = '0';
        });
      });
}