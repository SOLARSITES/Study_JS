// Modules Import
import modalOrder from './modules/modalOrder';
import modal from './modules/modal';
import accordion from './modules/accordion';
import smoothScroll from './modules/smoothScroll';
import scrollUp from './modules/scrollUp';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCarousel';

// Modal Order (sliderCarousel Section)
modalOrder();
// Modal
modal();
// Accordion
accordion();
// Smooth Scroll Down
smoothScroll();
// Smooth Scroll Up
scrollUp();
// Top Slider
slider();
// Send-AJAX-Form
// sendForm();

sendForm('form1');
sendForm('form2');
sendForm('form3');

// Slider Carousel
const sliderCarousel = new SliderCarousel({
  main: '.services-elements',
  wrap: '.services-carousel',
  prev: '#arrow-left',
  next: '#arrow-right',
  slidesToShow: 3,
  infinity: true,
  responsive: [
    {
      breakpoint: 768,
      slidesToShow: 2,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
    },
  ],
});
sliderCarousel.init();
