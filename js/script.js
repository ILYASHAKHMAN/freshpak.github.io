const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');

   if(menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
   }

   if(!menu.classList.contains('active')) {
      document.body.style.overflow = '';
   }
});


// Slider 

const slides = document.querySelectorAll ('.slider__slide');

for (let slide of slides) {
   slide.addEventListener('click', () => {
      clearActiveSlide();

      slide.classList.add('active-slide');
   });
}

function clearActiveSlide () {
   slides.forEach(i => {
      i.classList.remove('active-slide');
   });
};

//navLink

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
   link.addEventListener('click', () => {
      document.body.style.overflow = '';
      
      if(menu.scrollWidth < 600) {
         burger.classList.remove('active');
         menu.classList.remove('active');
      }
   });
});

links.forEach(link => {
   link.addEventListener('mouseenter', () => {
      link.classList.add('active');
   });
   link.addEventListener('mouseleave', () => {
      link.classList.remove('active');
   });
});