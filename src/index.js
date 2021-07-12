// Modules Import
// import { disableScroll, enableScroll } from '../modules/blockScroll';
// import { disableScroll, enableScroll } from './modules/blockScroll';
import modalOrder from './modules/modalOrder';
// import toggleMenu from './modules/toggleMenu';
// import togglePopUp from './modules/togglePopUp';
// import tabs from './modules/tabs';
// import addDot from './modules/addDot';
// import slider from './modules/slider';
// import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCarousel';

// Block Scroll
// disableScroll();
// Modal Order
modalOrder();
// Menu
// toggleMenu();
// Popup
// togglePopUp();
// Tabs
// tabs();
// Add .dot
// addDot();
// Slider
// slider();
// Send-AJAX-Form
// sendForm();
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
