(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/plus-cohort-14",headers:{authorization:"bc504b10-b5b7-4e7d-a9e5-28f90b8280a5","Content-Type":"application/json"}};function t(e){return e.ok?e.json():(console.log("Отклонено"),Promise.reject(e.statusText))}var n=document.querySelector(".profile__button-edit"),o=document.querySelector("#edit_profile"),r=document.querySelector("#popup_profile"),c=document.querySelector(".profile__name"),a=document.querySelector(".profile__occupation"),u=document.querySelector("#save_profile"),i=document.querySelector("#create"),l=document.querySelector(".profile__button-add"),s=document.querySelector("#popup_place"),d=document.querySelector("#add_new_place"),p=document.querySelector(".popup__input_place-name"),m=document.querySelector(".popup__input_place-link"),f=document.querySelector(".popup__input_name"),_=document.querySelector(".popup__input_occupation"),v=document.querySelector("#place-name_error"),h=document.querySelector("#place-link_error"),y=document.querySelectorAll(".popup"),b=document.querySelector(".elements"),S=document.querySelector("#element-template").content,q=(document.querySelector(".element__like-counter"),document.querySelector("#like-button"),document.querySelector("#big_image")),g=document.querySelector(".popup__big-image"),L=document.querySelector(".popup__description"),C=document.querySelector("#edit_avatar"),E=document.querySelector("#popup_avatar"),k=document.querySelector("#save_avatar"),x=document.querySelector(".popup__input_avatar"),A=document.querySelector(".profile__avatar"),w=document.querySelector("#confirm_popup"),T=document.querySelector("#confirm"),j={};function O(e){"Escape"===e.key&&D(document.querySelector(".popup_opened"))}function P(e){e.classList.add("popup_opened"),document.addEventListener("keydown",O)}function D(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",O)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function N(e,t){e.prepend(t)}var B,M,U,J=function(e,t){var n,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw c}}}}(e);try{for(o.s();!(n=o.n()).done;)if(n.value._id===t)return!0}catch(e){o.e(e)}finally{o.f()}};function G(n,o,r,c,a,u){var i=S.querySelector(".element").cloneNode(!0),l=i.querySelector(".element__image"),s=i.querySelector(".element__like-counter"),d=i.querySelector("#like-button");s.textContent=r,i.querySelector(".element__title").textContent=n,l.src=o,l.alt=n,J(c,j.id)&&d.classList.add("element__like_active"),d.addEventListener("mousedown",(function(n){J(c,j.id)?function(n){return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/likes/".concat(n),{method:"DELETE",headers:e.headers}).then(t)}(u).then((function(e){s.textContent=e.likes.length,n.target.classList.toggle("element__like_active"),c=e.likes})).catch((function(e){console.log(e)})):function(n){return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/likes/".concat(n),{method:"PUT",headers:e.headers}).then(t)}(u).then((function(e){s.textContent=e.likes.length,n.target.classList.toggle("element__like_active"),c=e.likes})).catch((function(e){console.log(e)}))}));var p=i.querySelector("#delete-button");return p.addEventListener("click",(function(){P(w),B=u,M=i})),j.id!=a&&p.classList.remove("element__delete_active"),l.addEventListener("mousedown",(function(){P(q),g.src=o,g.alt=n,L.textContent=n})),i}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function V(e,t,n,o){j.id=n,c.textContent=e,a.textContent=t,A.src=o}T.addEventListener("click",(function(n){var o;n.preventDefault(),(o=B,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/".concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){M.remove(),D(w)})).catch((function(e){console.log(e)}))})),Promise.all([fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"GET",headers:e.headers}).then(t),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"GET",headers:e.headers}).then(t)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];V(c.name,c.about,c._id,c.avatar),r.reverse().forEach((function(e){N(b,G(e.name,e.link,e.likes.length,e.likes,e.owner._id,e._id))}))})).catch((function(e){console.log(e)})),s.addEventListener("submit",(function(n){var o,r;n.preventDefault(),i.textContent="Сохранение...",(o=p.value,r=m.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:e.headers,body:JSON.stringify({name:o,link:r})}).then(t)).then((function(e){N(b,G(e.name,e.link,e.likes.length,e.likes,e.owner._id,e._id)),D(d)})).catch((function(e){console.log(e)})).finally((function(){i.textContent="Создать"}))})),r.addEventListener("submit",(function(n){var r,c;n.preventDefault(),u.textContent="Сохранение...",(r=f.value,c=_.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:c})}).then(t)).then((function(e){V(e.name,e.about,e.id,e.avatar),D(o)})).catch((function(e){console.log(e)})).finally((function(){u.textContent="Сохранить"}))})),E.addEventListener("submit",(function(n){var o;n.preventDefault(),k.textContent="Сохранение...",(o=x.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:o})}).then(t)).then((function(e){V(e.name,e.about,e.id,e.avatar),D(E)})).catch((function(e){console.log(e)})).finally((function(){k.textContent="Сохранить"}))})),l.addEventListener("click",(function(){P(d),p.value="",m.value="",i.classList.add("popup__submit-button_disabled"),i.disabled=!0,v.textContent="",h.textContent="",p.classList.remove("popup__input_error"),m.classList.remove("popup__input_error")})),n.addEventListener("click",(function(){P(o),f.value=c.textContent,_.value=a.textContent,u.classList.add("popup__submit-button_disabled"),u.disabled=!0})),C.addEventListener("click",(function(){P(E),k.classList.add("popup__submit-button_disabled"),k.disabled=!0,x.value=""})),U={formSelector:".popup__input-container",inputSelector:".popup__inputs",inputPlaceName:".popup__input_place-name",inputProfileName:".popup__input_name",submitButton:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error"},Array.from(document.querySelectorAll(U.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButton);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector("#".concat(t.name,"_error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.inputErrorActiveClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector("#".concat(t.name,"_error"));t.classList.add(o.inputErrorClass),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}(n,o,t)}))}))}(e,U)})),y.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&D(e),t.target.classList.contains("popup__close-button")&&D(e)}))}))})();