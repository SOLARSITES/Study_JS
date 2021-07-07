// Modules Import
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDot from './modules/addDot';
import setCommandImg from './modules/setCommandImg';
import calc from './modules/calc';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCarousel';

// Timer
countTimer('17 Jun 2021');
// Menu
toggleMenu();
// Popup
togglePopUp();
// Tabs
tabs();
// Add .dot
addDot();
// Change Command Photos
setCommandImg();
// Calculator
calc(100);
// Slider
slider();
// Send-AJAX-Form
sendForm();
// Slider Carousel
const sliderCarousel = new SliderCarousel({
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  // prev: '#test-left',
  // next: '#test-right',
  slidesToShow: 4,
  infinity: true,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 3,
    },
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
