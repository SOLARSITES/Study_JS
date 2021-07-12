!function(){"use strict";const t=function(){var t=window.innerWidth-document.body.offsetWidth;document.body.dataset.scrollY=window.scrollY,document.body.style.cssText="\n        position:fixed;\n        top: -".concat(window.scrollY,"px;\n        left:0;\n        width: 100%;\n        overflow:hidden;\n        height:100vh;\n        padding-right: ").concat(t,"px;\n    ")},e=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};var n=t,o=e;var i=t,r=e;function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const d=function(){function t(e){var n=e.main,o=e.wrap,i=e.next,r=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?3:d,p=e.responsive,h=void 0===p?[]:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&o||console.warn('sliderCarousel: Необходимо добавить 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=h}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: space-between !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19d5fe;\n      }\n      .glo-slider__prev {\n        border-right-color: #19d5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: none\n      }\n    ",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t,e=this,n=this.slidesToShow,o=this.responsive.map((function(t){return t.breakpoint})),i=Math.max.apply(Math,function(t){if(Array.isArray(t))return l(t)}(t=o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=function(){var t=document.documentElement.clientWidth;if(t<i)for(var r=0;r<o.length;r++)t<o[r]&&(e.slidesToShow=e.responsive[r].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle()};r(),window.addEventListener("resize",r)}}])&&c(e.prototype,n),t}();var u,p,h,f,m,y;p=document.querySelector(".services-carousel"),h=document.querySelector(".modal-application"),f=document.querySelector(".modal-overlay"),m=document.getElementById("applicationInput"),y=function(){h.style.display="none",f.style.display="none",o()},p.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".fancyboxModal")&&(m.value=e.dataset.application,h.style.display="block",f.style.display="block",n())})),h.addEventListener("click",(function(t){t.target.closest(".modal-close")&&y()})),f.addEventListener("click",(function(t){t.target.matches(".modal-overlay")&&y()})),function(){var t=document.querySelector(".modal-callback"),e=document.querySelector(".modal-overlay");document.addEventListener("click",(function(n){n.preventDefault(),(n.target.matches(".callback-btn")||n.target.matches(".button-services"))&&(t.style.display="block",e.style.display="block",i()),(n.target.closest(".modal-close")||n.target.matches(".modal-overlay"))&&(t.style.display="none",e.style.display="none",r())}))}(),(u=document.querySelectorAll(".accordeon .element")).forEach((function(t){var e=t.childNodes[3];t.addEventListener("click",(function(n){n.target.closest(".accordeon .element")&&(function(t,e){t.classList.toggle("active"),t.classList.contains("active")?e.style.display="block":e.style.display="none"}(t,e),t.classList.contains("active")&&function(t){var e;(e=u,function(t){if(Array.isArray(t))return s(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return e!==t})).forEach((function(t){t.classList.contains("active")&&(t.classList.remove("active"),t.childNodes[3].style.display="none")}))}(t))}))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,e=function(e){var n=e.target;if(n.matches('[href^="#"]')){e.preventDefault();var o=0,i=window.pageYOffset,r=n.getAttribute("href");if("#"===r)return;var s=document.querySelector(r).getBoundingClientRect().top-100;requestAnimationFrame((function e(n){o||(o=n);var r=n-o,a=s<0?Math.max(i-r/t,i+s):Math.min(i+r/t,i+s);window.scrollTo(0,a),a<i+s&&requestAnimationFrame(e)}))}};document.body.addEventListener("click",e)}(),new d({main:".services-elements",wrap:".services-carousel",prev:"#arrow-left",next:"#arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}();