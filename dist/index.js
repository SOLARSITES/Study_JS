!function(){"use strict";const t=function(){};var e=t.disableScroll,n=t.enableScroll;function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const s=function(){function t(e){var n=e.main,i=e.wrap,o=e.next,r=e.prev,s=e.infinity,l=void 0!==s&&s,a=e.position,d=void 0===a?0:a,c=e.slidesToShow,p=void 0===c?3:c,h=e.responsive,u=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&i||console.warn('sliderCarousel: Необходимо добавить 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=p,this.options={position:d,infinity:l,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=u}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,s=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: space-between !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19d5fe;\n      }\n      .glo-slider__prev {\n        border-right-color: #19d5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: none\n      }\n    ",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t,e=this,n=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return o(t)}(t=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var t=document.documentElement.clientWidth;if(t<s)for(var i=0;i<r.length;i++)t<r[i]&&(e.slidesToShow=e.responsive[i].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle()};l(),window.addEventListener("resize",l)}}])&&r(e.prototype,n),t}();var l,a,d,c;l=document.querySelector(".services-carousel"),a=document.querySelector(".modal-application"),d=document.querySelector(".modal-overlay"),c=function(){a.style.display="none",d.style.display="none",n()},l.addEventListener("click",(function(t){t.preventDefault(),t.target.matches(".fancyboxModal")&&(a.style.display="block",d.style.display="block",e())})),a.addEventListener("click",(function(t){t.target.closest(".modal-close")&&c()})),d.addEventListener("click",(function(t){t.target.matches(".modal-overlay")&&c()})),new s({main:".services-elements",wrap:".services-carousel",prev:"#arrow-left",next:"#arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}();