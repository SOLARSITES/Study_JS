!function(){"use strict";const t=function(){var t=window.innerWidth-document.body.offsetWidth;document.body.dataset.scrollY=window.scrollY,document.body.style.cssText="\n        position:fixed;\n        top: -".concat(window.scrollY,"px;\n        left:0;\n        width: 100%;\n        overflow:hidden;\n        height:100vh;\n        padding-right: ").concat(t,"px;\n    ")},e=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};var n=t,o=e;var r=t,i=e;function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s=t,l=e;function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var m=e;function f(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const v=function(){function t(e){var n=e.main,o=e.wrap,r=e.next,i=e.prev,a=e.infinity,s=void 0!==a&&a,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?3:d,m=e.responsive,f=void 0===m?[]:m;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&o||console.warn('sliderCarousel: Необходимо добавить 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=f}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=f(t))){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: space-between !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19d5fe;\n      }\n      .glo-slider__prev {\n        border-right-color: #19d5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: none\n      }\n    ",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t,e=this,n=this.slidesToShow,o=this.responsive.map((function(t){return t.breakpoint})),r=Math.max.apply(Math,function(t){if(Array.isArray(t))return p(t)}(t=o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=function(){var t=document.documentElement.clientWidth;if(t<r)for(var i=0;i<o.length;i++)t<o[i]&&(e.slidesToShow=e.responsive[i].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.wrap.style.transform="translateX(-".concat(e.options.position*e.options.widthSlide,"%)"),e.addStyle()};i(),window.addEventListener("resize",i)}}])&&h(e.prototype,n),t}();var y,g,b,w,S,x,E,A,_,L,T,C,k,I,q,N,j,O,M,B,Y,D,$,F,U,X;D=document.querySelector(".services-carousel"),$=document.querySelector(".modal-application"),F=document.querySelector(".modal-overlay"),U=document.getElementById("applicationInput"),X=function(){$.style.display="none",F.style.display="none",o()},D.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".fancyboxModal")&&(U.value=e.dataset.application,$.style.display="block",F.style.display="block",n())})),$.addEventListener("click",(function(t){t.target.closest(".modal-close")&&X()})),F.addEventListener("click",(function(t){t.target.matches(".modal-overlay")&&X()})),function(){var t=document.querySelector(".modal-callback"),e=document.querySelector(".modal-overlay");document.addEventListener("click",(function(n){(n.target.matches(".callback-btn")||n.target.matches(".button-services"))&&(t.style.display="block",e.style.display="block",r()),(n.target.closest(".modal-close")||n.target.matches(".modal-overlay"))&&(t.style.display="none",e.style.display="none",i())}))}(),(Y=document.querySelectorAll(".accordeon .element")).forEach((function(t){var e=t.childNodes[3];t.addEventListener("click",(function(n){n.target.closest(".accordeon .element")&&(function(t,e){t.classList.toggle("active"),t.classList.contains("active")?e.style.display="block":e.style.display="none"}(t,e),t.classList.contains("active")&&function(t){var e;(e=Y,function(t){if(Array.isArray(t))return a(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return e!==t})).forEach((function(t){t.classList.contains("active")&&(t.classList.remove("active"),t.childNodes[3].style.display="none")}))}(t))}))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,e=function(e){var n=e.target;if(n.matches('[href^="#"]')){e.preventDefault();var o=0,r=window.pageYOffset,i=n.getAttribute("href");if("#"===i)return;var a=document.querySelector(i).getBoundingClientRect().top-100;requestAnimationFrame((function e(n){o||(o=n);var i=n-o,s=a<0?Math.max(r-i/t,r+a):Math.min(r+i/t,r+a);window.scrollTo(0,s),s<r+a&&requestAnimationFrame(e)}))}};document.body.addEventListener("click",e)}(),O=document.getElementById("services"),M=document.querySelector(".up"),B=function t(){N>0?(window.scrollTo(0,N),N-=20,j=setTimeout((function(){t()}))):(clearTimeout(j),window.scrollTo(0,0))},M.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>=O.offsetTop-100?M.style.display="block":M.style.display="none"})),M.addEventListener("click",(function(){N=window.pageYOffset,B()})),function(){var t,e=document.querySelector(".top-slider"),n=document.querySelectorAll(".top-slider-item"),o=document.querySelector(".top-slider-dots"),r=document.createElement("li"),i=0,a=function(t,e,n){t[e].classList.remove(n)},s=function(t,e,n){t[e].classList.add(n)},l=function(){a(n,i,"top-slider-item-active"),a(o.childNodes,i,"dot-active"),++i>=n.length&&(i=0),s(n,i,"top-slider-item-active"),s(o.childNodes,i,"dot-active")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;t=setInterval(l,e)};e.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".top-slider-btn, .dot")&&(a(n,i,"top-slider-item-active"),a(o.childNodes,i,"dot-active"),e.matches("#arrow_right")?i++:e.matches("#arrow_left")?i--:e.matches(".dot")&&o.childNodes.forEach((function(t,n){t===e&&(i=n)})),i>=n.length&&(i=0),i<0&&(i=n.length-1),s(n,i,"top-slider-item-active"),s(o.childNodes,i,"dot-active"))})),e.addEventListener("mouseover",(function(e){e.target.matches(".top-slider-btn, .dot")&&clearInterval(t)})),e.addEventListener("mouseout",(function(t){t.target.matches(".top-slider-btn, .dot")&&c(3e3)})),r.className="dot";for(var d=0;d<n.length;d++){var u=r.cloneNode();o.append(u)}o.childNodes[i].classList.add("dot-active"),c(3e3)}(),k=document.querySelector("body"),I=document.querySelector(".mobile-menu"),q=function(){I.classList.contains("mobile-menu-open")?(I.classList.remove("mobile-menu-open"),l()):(I.classList.add("mobile-menu-open"),s())},k.addEventListener("click",(function(t){var e=t.target;e.classList.contains("mobile-menu-close")&&(I.classList.remove("mobile-menu-open"),l()),I.classList.contains("mobile-menu-open")?e.closest(".mobile-menu")?(e=e.closest("a"))&&q():q():e.closest(".mob-menu-btn")&&q()})),document.body.addEventListener("input",(function(t){"form-name"===t.target.className&&(t.target.value=t.target.value.replace(/[^а-яА-ЯёЁ-\s]/g,"")),"form-phone"===t.target.className&&function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(t),r=function(t){var e=t.keyCode,o=n,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,s=o.replace(/[_\d]/g,(function(t){return a<i.length?i.charAt(a++)||r.charAt(a):t}));-1!=(a=s.indexOf("_"))&&(s=s.slice(0,a));var l=o.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||e>47&&e<58)&&(this.value=s),"blur"===t.type&&this.value.length<5&&(this.value="")},i=c(o);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.addEventListener("input",r),a.addEventListener("focus",r),a.addEventListener("blur",r)}}catch(t){i.e(t)}finally{i.f()}}(".form-phone")})),C={correctName:!0,correctTel:!0},document.body.addEventListener("change",(function(t){var e=function(e){var n=t.target.closest("form");if(n){var o=n.querySelector(".btn");t.target.style.border=e?"2px solid #fe193f":"2px solid #19fe52",Object.values(C).every((function(t){return t}))?o.removeAttribute("disabled"):o.setAttribute("disabled","true")}};if("form-name"===t.target.className){var n=t.target.value.trim().split(" "),o="",r="";t.target.value=t.target.value.replace(/\s+/g," "),n.forEach((function(t){r+="".concat(t.charAt(0).toUpperCase()+t.substring(1)," "),o=r.trim()}))," "===o?(t.target.value="",C.correctName=!1,e(!0)):o.length<2?(t.target.value=o,C.correctName=!1,e(!0)):(t.target.value=o,C.correctName=!0,e(!1))}if("form-phone"===t.target.className){var i=t.target.value.replace(/[\s\+\(\)-]*/g,"");t.target.value=t.target.value.replace(/^\+\d{1}\s/g,"+7 "),i.length<11?(C.correctTel=!1,e(!0)):(C.correctTel=!0,e(!1))}})),T=function(t){var e=document.createElement("div"),n=0,o=function(t){var o=document.querySelector(".modal-callback"),r=document.querySelector(".modal-application"),i=document.querySelector(".modal-overlay"),a=document.createElement("img"),s={load:{message:" Отправка данных...",img:"./images/load.gif"},error:{message:" Ошибка отправки, попробуйте ещё раз позже!",img:"./images/error.png"},success:{message:" Ваши данные успешно отправлены!",img:"./images/success.png"}};e.textContent=s[t].message,a.src=s[t].img,a.style.cssText="width: 30px; margin-right: 0.7rem;",e.insertBefore(a,e.firstChild),"success"===t||"error"===t?n=setInterval((function(){e.textContent="",clearInterval(n),r.style.display="none",o.style.display="none",i.style.display="none",m()}),4e3):n>0&&clearInterval(n)};e.style.cssText="color: #000; font-size: 1.5rem; margin: 0.5rem 0 1rem; display: flex; align-items: center; justify-content: flex-start;",t.addEventListener("submit",(function(n){var r=new FormData(t),i={};n.preventDefault(),t.appendChild(e),o("load"),r.forEach((function(t,e){i[e]=t})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"})}(i).then((function(e){if(200!==e.status)throw new Error("Network status: ".concat(e.status));o("success"),function(t){var e,n=document.getElementById("applicationInput");(e=t.elements,function(t){if(Array.isArray(t))return u(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"button"!==t.tagName.toLowerCase()&&"button"!==t.type})).forEach((function(t){t!==n&&(t.value="",t.removeAttribute("style"))}))}(t)})).catch((function(t){o("error"),console.error(t)}))}))},document.querySelectorAll("form").forEach((function(t){T(t)})),y=document.getElementById("nums"),g=document.getElementById("scheme"),b=document.getElementById("num1"),w=document.getElementById("num2"),S=document.getElementById("num3"),x=document.getElementById("num4"),E=+b.textContent,A=+w.textContent,_=+S.textContent,L=+x.textContent,b.textContent=0,w.textContent=0,S.textContent=0,x.textContent=0,window.addEventListener("scroll",(function(){var t=window.pageYOffset;t>=y.offsetTop-110&&t<g.offsetTop&&setTimeout((function(){var t,e,n,o,r;e=(t={duration:1500,timing:function(t){return t},draw:function(t){t>0&&(b.textContent=Math.floor(t*E),w.textContent=Math.floor(t*A),S.textContent=Math.floor(t*_),x.textContent=Math.floor(t*L))}}).timing,n=t.draw,o=t.duration,r=performance.now(),requestAnimationFrame((function t(i){var a=(i-r)/o;a>1&&(a=1);var s=e(a);n(s),a<1&&requestAnimationFrame(t)}))}),300)})),new v({main:".services-elements",wrap:".services-carousel",prev:"#arrow-left",next:"#arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}();