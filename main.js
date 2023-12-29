(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([e.id,"* {\n    font-family: Raleway, Arial, sans-serif;\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n#header {\n    padding: 0 20px;\n    height: 80px;\n    background-color: #789949;\n    color: #ffffff;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 36px;\n}\n\n#footer {\n    height: 50px;\n    background-color: #789949;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n}\n\n\n.nav button {\n    border: none;\n    background-color: transparent;\n    font-size: 24px;\n    color: #ffffff;\n    padding: 50px 15px;\n}\n\n.nav button:hover {\n    background-color: #4f662e\n}\n\n.nav ul {\n    display: flex;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.main-img {\n    width: 100%;\n}\n\n\n#content {\n    background-color: #ded4c8;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    flex: 1;\n}\n\n.section-header {\n    padding: 30px 0 0 0;\n    font-size: 30px;\n}\n\n.about {\n    padding: 0 100px;\n}\n\n.testimonials {\n    margin: 0 100px 50px 100px;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 50px 100px;\n}\n\n.testimonials .section-header {\n    grid-column: 1 / -1;\n}\n.review {\n    height: 50px;\n    background-color: #ffffffc0;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border-left: 5px solid #789949;\n}\n\n.quote {\n    font-style: italic;\n}\n\n.contact-container {\n    display: flex;\n    gap: 50px;\n    padding: 0 50px 50px 50px;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.main, .dessert {\n    padding: 30px 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 50px;\n}\n\n.food-container {\n    display: flex;\n    gap: 20px;\n    width: 400px;\n}\n\n.food-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.food-name {\n    font-weight: bold;\n}\n\n.food-img {\n    border-radius: 10px;\n    background-size: cover;\n    background-position: center;\n    min-width: 100px;\n    min-height: 100px;\n}\n\n.dessert {\n    padding: 0 0 50px 0;\n}",""]);const d=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},r=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=i(f,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var d=t(a[r]);n[d].references--}for(var c=o(e,i),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"d338d7ed98ef20ce65d0.jpeg",n=t.p+"e7d318ae89ce9aa40b29.png";function o(){const t=document.querySelector("#content"),o=i("img","main-img");o.src=e,t.appendChild(o);const a=i("div","section-header","food made with love ♡");t.appendChild(a);const r=i("div","about","welcome! we strive to make quality meals that remind you of home.         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id         est laborum.");t.appendChild(r);const d=document.createElement("img");d.src=n,t.appendChild(d);const c=i("div","testimonials");t.appendChild(c);const s=i("div","section-header","testimonials");c.appendChild(s);const l=i("div","review");c.appendChild(l);const p=i("div","quote","Ghibli's Gourmet is so cozy and the food is delicious!"),u=i("div","author","- Kiki");l.appendChild(p),l.appendChild(u);const f=i("div","review");c.appendChild(f);const m=i("div","quote","Ghibli's Gourmet has become my favorite restaurant. Pleasant atmosphere and amazing food."),h=i("div","author","- Sophie");f.appendChild(m),f.appendChild(h)}function i(e,n=null,t=""){const o=document.createElement(e);return n&&o.classList.add(n),o.textContent=t,o}const a=t.p+"b48a997bdc2a0d35b9e5.png",r=t.p+"4adc8c7ef68cfb7bbb23.png",d=t.p+"5556a8217b6219aa2b71.png",c=t.p+"651379749545be3c23eb.png",s=t.p+"1e7e6f08393b85062f94.png",l=t.p+"19ecf9c00f991c7341d4.png";function p(e){let n=document.createElement("div");n.classList.add("food-container");let t=document.createElement("div");t.classList.add("food-img"),t.style=`background-image: url('${e.img}');`;let o=function(e){let n=document.createElement("div");n.classList.add("food-info");let t=document.createElement("div");t.classList.add("food-name"),t.textContent=e.name;let o=document.createElement("div");o.classList.add("food-desc"),o.textContent=e.desc;let i=document.createElement("div");return i.classList.add("food-price"),i.textContent="$"+e.price,n.appendChild(t),n.appendChild(o),n.appendChild(i),n}(e);return n.appendChild(t),n.appendChild(o),n}function u(e,n,t,o,i){return{name:e,price:n,type:t,desc:o,img:i}}const f=u("Bento Box",12,"Main","Classic bento box filled with rice, sausage, egg, and veggies.",a),m=u("Chocolate Cake",25,"Dessert","Chocolate cake perfect for young witches.",r),h=u("Eggs and Bacon",10,"Main","Sunny-side up eggs with crispy bacon.",d),g=u("Eggs On Toast",8,"Main","Sunny-side up eggs over fluffy bread.",c),v=u("Fish and Carrots",16,"Main","Fish served with creamy sauce and carrots.",s),y=u("Ramen",15,"Main","Ramen served with cha shu pork and hard-boiled egg.",n),x=u("Siberia Cake",10,"Dessert","Sponge cake with read bean filling.",l),b=function(){const e=[];return{addToMenu:function(n){e.push(n)},getMenu:()=>e}}();function C(e,n=null,t=""){const o=document.createElement(e);return n&&o.classList.add(n),o.textContent=t,o}b.addToMenu(f),b.addToMenu(m),b.addToMenu(h),b.addToMenu(g),b.addToMenu(v),b.addToMenu(y),b.addToMenu(x);var w=t(379),E=t.n(w),M=t(795),k=t.n(M),S=t(569),T=t.n(S),L=t(565),q=t.n(L),j=t(216),z=t.n(j),A=t(589),I=t.n(A),P=t(426),D={};D.styleTagTransform=I(),D.setAttributes=q(),D.insert=T().bind(null,"head"),D.domAPI=k(),D.insertStyleElement=z(),E()(P.Z,D),P.Z&&P.Z.locals&&P.Z.locals,o(),document.querySelector(".home-btn").addEventListener("click",(()=>{F.replaceChildren(),o()})),document.querySelector(".menu-btn").addEventListener("click",(()=>{F.replaceChildren(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("section-header"),n.textContent="main";const t=document.createElement("div");t.classList.add("main");const o=document.createElement("div");o.classList.add("section-header"),o.textContent="dessert";const i=document.createElement("div");e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(i),i.classList.add("dessert"),console.log(b.getMenu());for(let e of b.getMenu())console.log(e),"Main"===e.type?t.append(p(e)):"Dessert"===e.type&&i.append(p(e))}()})),document.querySelector(".contact-btn").addEventListener("click",(()=>{F.replaceChildren(),function(){const e=document.querySelector("#content"),n=C("div","section-header","visit us");e.appendChild(n);const t=C("div","contact-container");e.appendChild(t);const o=C("div","contact-info"),i=C("div","address","address: 1 chome-1-83 shimorenjaku, mitaka, tokyo 181-0013, japan"),a=C("div","tel","tel: 123-456-0987"),r=C("div","hours","hours"),d=C("ul");let c=["sun: closed","mon - thurs: 12pm - 8pm","fri - sat: 12pm - 10pm"];for(let e of c)d.appendChild(C("li","",e));o.appendChild(i),o.appendChild(a),o.appendChild(r),r.appendChild(d),t.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2184198460354!2d139.56785677515222!3d35.69624232915027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee34e5038c2d%3A0x4de155903f849205!2sGhibli%20Museum!5e0!3m2!1sen!2sus!4v1703297805063!5m2!1sen!2sus" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',t.appendChild(o)}()}));const F=document.querySelector("#content")})()})();