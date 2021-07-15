!function(){"use strict";const e=function(){var e=window.innerWidth-document.body.offsetWidth;document.body.dataset.scrollY=window.scrollY,document.body.style.cssText="\n        position:fixed;\n        top: -".concat(window.scrollY,"px;\n        left:0;\n        width: 100%;\n        overflow:hidden;\n        height:100vh;\n        padding-right: ").concat(e,"px;\n    ")},t=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};var n=e,o=t;var r=e,i=t;function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=e,l=t;function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=t;function f(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const v=function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,a=t.infinity,s=void 0!==a&&a,l=t.position,c=void 0===l?0:l,d=t.slidesToShow,u=void 0===d?3:d,m=t.responsive,f=void 0===m?[]:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('sliderCarousel: Необходимо добавить 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=f}var t,n;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: space-between !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19d5fe;\n      }\n      .glo-slider__prev {\n        border-right-color: #19d5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: none\n      }\n    ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e,t=this,n=this.slidesToShow,o=this.responsive.map((function(e){return e.breakpoint})),r=Math.max.apply(Math,function(e){if(Array.isArray(e))return p(e)}(e=o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=function(){var e=document.documentElement.clientWidth;if(e<r)for(var i=0;i<o.length;i++)e<o[i]&&(t.slidesToShow=t.responsive[i].slidesToShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.widthSlide,"%)"),t.addStyle());else t.slidesToShow=n,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.widthSlide,"%)"),t.addStyle()};i(),window.addEventListener("resize",i)}}])&&h(t.prototype,n),e}();var y,g,b,w,S,E,x,A,_,L,k,T,I,C,q,N,j,M,O,B,D,Y,$,F,U;D=document.querySelector(".services-carousel"),Y=document.querySelector(".modal-application"),$=document.querySelector(".modal-overlay"),F=document.getElementById("applicationInput"),U=function(){Y.style.display="none",$.style.display="none",o()},D.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".fancyboxModal")&&(F.value=t.dataset.application,Y.style.display="block",$.style.display="block",n())})),Y.addEventListener("click",(function(e){e.target.closest(".modal-close")&&U()})),$.addEventListener("click",(function(e){e.target.matches(".modal-overlay")&&U()})),function(){var e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.addEventListener("click",(function(n){(n.target.matches(".callback-btn")||n.target.matches(".button-services"))&&(e.style.display="block",t.style.display="block",r()),(n.target.closest(".modal-close")||n.target.matches(".modal-overlay"))&&(e.style.display="none",t.style.display="none",i())}))}(),(B=document.querySelectorAll(".accordeon .element")).forEach((function(e){var t=e.childNodes[3];e.addEventListener("click",(function(n){n.target.closest(".accordeon .element")&&(function(e,t){e.classList.toggle("active"),e.classList.contains("active")?t.style.display="block":t.style.display="none"}(e,t),e.classList.contains("active")&&function(e){var t;(t=B,function(e){if(Array.isArray(e))return a(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return t!==e})).forEach((function(e){e.classList.contains("active")&&(e.classList.remove("active"),e.childNodes[3].style.display="none")}))}(e))}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,t=function(t){var n=t.target;if(n.matches('[href^="#"]')){t.preventDefault();var o=0,r=window.pageYOffset,i=n.getAttribute("href");if("#"===i)return;var a=document.querySelector(i).getBoundingClientRect().top-100;requestAnimationFrame((function t(n){o||(o=n);var i=n-o,s=a<0?Math.max(r-i/e,r+a):Math.min(r+i/e,r+a);window.scrollTo(0,s),s<r+a&&requestAnimationFrame(t)}))}};document.body.addEventListener("click",t)}(),j=document.getElementById("services"),M=document.querySelector(".up"),O=function e(){q>0?(window.scrollTo(0,q),q-=20,N=setTimeout((function(){e()}))):(clearTimeout(N),window.scrollTo(0,0))},M.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>=j.offsetTop-100?M.style.display="block":M.style.display="none"})),M.addEventListener("click",(function(){q=window.pageYOffset,O()})),function(){var e,t=document.querySelector(".top-slider"),n=document.querySelectorAll(".top-slider-item"),o=document.querySelector(".top-slider-dots"),r=document.createElement("li"),i=0,a=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},l=function(){a(n,i,"top-slider-item-active"),a(o.childNodes,i,"dot-active"),++i>=n.length&&(i=0),s(n,i,"top-slider-item-active"),s(o.childNodes,i,"dot-active")},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".top-slider-btn, .dot")&&(a(n,i,"top-slider-item-active"),a(o.childNodes,i,"dot-active"),t.matches("#arrow_right")?i++:t.matches("#arrow_left")?i--:t.matches(".dot")&&o.childNodes.forEach((function(e,n){e===t&&(i=n)})),i>=n.length&&(i=0),i<0&&(i=n.length-1),s(n,i,"top-slider-item-active"),s(o.childNodes,i,"dot-active"))})),t.addEventListener("mouseover",(function(t){t.target.matches(".top-slider-btn, .dot")&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){e.target.matches(".top-slider-btn, .dot")&&c(3e3)})),r.className="dot";for(var d=0;d<n.length;d++){var u=r.cloneNode();o.append(u)}o.childNodes[i].classList.add("dot-active"),c(3e3)}(),T=document.querySelector("body"),I=document.querySelector(".mobile-menu"),C=function(){I.classList.contains("mobile-menu-open")?(I.classList.remove("mobile-menu-open"),l()):(I.classList.add("mobile-menu-open"),s())},T.addEventListener("click",(function(e){var t=e.target;t.classList.contains("mobile-menu-close")&&(I.classList.remove("mobile-menu-open"),l()),I.classList.contains("mobile-menu-open")?t.closest(".mobile-menu")?(t=t.closest("a"))&&C():C():t.closest(".mob-menu-btn")&&C()})),document.body.addEventListener("input",(function(e){"form-name"===e.target.className&&(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g,"")),"form-phone"===e.target.className&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(e),r=function(e){var t=e.keyCode,o=n,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,s=o.replace(/[_\d]/g,(function(e){return a<i.length?i.charAt(a++)||r.charAt(a):e}));-1!=(a=s.indexOf("_"))&&(s=s.slice(0,a));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")},i=c(o);try{for(i.s();!(t=i.n()).done;){var a=t.value;a.addEventListener("input",r),a.addEventListener("focus",r),a.addEventListener("blur",r)}}catch(e){i.e(e)}finally{i.f()}}(".form-phone")})),k={correctName:!0,correctTel:!0},document.body.addEventListener("change",(function(e){var t=function(t){var n=e.target.closest("form");if(n){var o=n.querySelector(".btn");e.target.style.border=t?"2px solid #fe193f":"2px solid #19fe52",Object.values(k).every((function(e){return e}))?o.removeAttribute("disabled"):o.setAttribute("disabled","true")}};if("form-name"===e.target.className){var n=e.target.value.trim().split(" "),o="",r="";e.target.value=e.target.value.replace(/\s+/g," "),n.forEach((function(e){r+="".concat(e.charAt(0).toUpperCase()+e.substring(1)," "),o=r.trim()}))," "===o?(e.target.value="",k.correctName=!1,t(!0)):o.length<2?(e.target.value=o,k.correctName=!1,t(!0)):(e.target.value=o,k.correctName=!0,t(!1))}if("form-phone"===e.target.className){var i=e.target.value.replace(/[\s\+\(\)-]*/g,"");e.target.value=e.target.value.replace(/^\+\d{1}\s/g,"+7 "),i.length<11?(k.correctTel=!1,t(!0)):(k.correctTel=!0,t(!1))}})),L=function(e){var t=document.createElement("div"),n=0,o=function(e){var o=document.querySelector(".modal-callback"),r=document.querySelector(".modal-application"),i=document.querySelector(".modal-overlay"),a=document.createElement("img"),s={load:{message:" Отправка данных...",img:"./images/load.gif"},error:{message:" Ошибка отправки, попробуйте ещё раз позже!",img:"./images/error.png"},success:{message:" Ваши данные успешно отправлены!",img:"./images/success.png"}};t.textContent=s[e].message,a.src=s[e].img,a.style.cssText="width: 30px; margin-right: 0.7rem;",t.insertBefore(a,t.firstChild),"success"===e||"error"===e?n=setInterval((function(){t.textContent="",clearInterval(n),r.style.display="none",o.style.display="none",i.style.display="none",m()}),4e3):n>0&&clearInterval(n)};t.style.cssText="color: #000; font-size: 1.5rem; margin: 0.5rem 0 1rem; display: flex; align-items: center; justify-content: flex-start;",e.addEventListener("submit",(function(n){var r=new FormData(e),i={};n.preventDefault(),e.appendChild(t),o("load"),r.forEach((function(e,t){i[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})}(i).then((function(t){if(200!==t.status)throw new Error("Network status: ".concat(t.status));o("success"),function(e){var t,n=document.getElementById("applicationInput");(t=e.elements,function(e){if(Array.isArray(e))return u(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})).forEach((function(e){e!==n&&(e.value="",e.removeAttribute("style"))}))}(e)})).catch((function(e){o("error"),console.error(e)}))}))},document.querySelectorAll("form").forEach((function(e){L(e)})),E=document.getElementById("num1"),x=document.getElementById("num2"),A=document.getElementById("num3"),_=document.getElementById("num4"),g=(y={duration:2e3,timing:function(e){return e},draw:function(e){E.textContent=Math.floor(5e3*e),x.textContent=Math.floor(50*e),A.textContent=Math.floor(30*e),_.textContent=Math.floor(3e3*e)}}).timing,b=y.draw,w=y.duration,S=performance.now(),requestAnimationFrame((function e(t){var n=(t-S)/w;n>1&&(n=1);var o=g(n);b(o),n<1&&requestAnimationFrame(e)})),new v({main:".services-elements",wrap:".services-carousel",prev:"#arrow-left",next:"#arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}();