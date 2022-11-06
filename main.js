(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector("#edit_profile"),o=document.querySelector("#popup_profile"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__occupation"),c=document.querySelector("#save_profile"),u=document.querySelector("#create"),a=document.querySelector(".profile__button-add"),i=document.querySelector("#popup_place"),l=document.querySelector("#add_new_place"),s=document.querySelector(".popup__input_place-name"),p=document.querySelector(".popup__input_place-link"),d=document.querySelector(".popup__input_name"),m=document.querySelector(".popup__input_occupation"),f=document.querySelectorAll(".popup"),_=document.querySelector(".elements"),v=(document.querySelector("#delete-button"),document.querySelector("#element-template").content),h=(document.querySelector(".element__like-counter"),document.querySelector("#like-button"),document.querySelector("#big_image")),y=document.querySelector(".popup__big-image"),S=document.querySelector(".popup__description"),b=document.querySelector("#edit_avatar"),g=document.querySelector("#popup_avatar"),q=document.querySelector("#save_avatar"),L=document.querySelector(".popup__input_avatar"),E=document.querySelector(".profile__avatar"),k=document.querySelector("#confirm_popup"),C=document.querySelector("#confirm"),T=(v.querySelector(".element").cloneNode(!0),{}),x="bc504b10-b5b7-4e7d-a9e5-28f90b8280a5";function A(e){return e.ok?e.json():(console.log("Отклонено"),Promise.reject(e.statusText))}function w(e){"Escape"===e.key&&z(document.querySelector(".popup_opened"))}function j(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function z(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var P=function(e,t){var o,n=function(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return N(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?N(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,a=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return u=e.done,e},e:function(e){a=!0,c=e},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw c}}}}(e);try{for(n.s();!(o=n.n()).done;)if(o.value._id===t)return!0}catch(e){n.e(e)}finally{n.f()}};var D;function O(){fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"GET",headers:{authorization:"".concat(x)}}).then(A).catch((function(e){return console.log(e)})).then((function(e){var t,o,c,u;t=e.name,o=e.about,c=e._id,u=e.avatar,T.id=c,n.textContent=t,r.textContent=o,E.src=u}))}function B(){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"GET",headers:{authorization:"".concat(x)}}).then(A).catch((function(e){return console.log(e)})).then((function(e){e.reverse().forEach((function(e){var t,o;t=_,o=function(e,t,o,n,r,c){var u=v.querySelector(".element").cloneNode(!0),a=u.querySelector(".element__image"),i=u.querySelector(".element__like-counter"),l=u.querySelector("#like-button");i.textContent=o,u.querySelector(".element__title").textContent=e,a.src=t,a.alt=e,P(n,T.id)&&l.classList.add("element__like_active"),l.addEventListener("mousedown",(function(e){P(n,T.id)?(console.log("deleteLike"),function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"".concat(x),"Content-Type":"application/json"}}).then(A).catch((function(e){return console.log(e)}))}(c).then((function(t){console.log(t.likes.length),i.textContent=t.likes.length,e.target.classList.toggle("element__like_active"),n=t.likes}))):(console.log("putLike"),function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"".concat(x),"Content-Type":"application/json"}}).then(A).catch((function(e){return console.log(e)}))}(c).then((function(t){i.textContent=t.likes.length,e.target.classList.toggle("element__like_active"),n=t.likes})))}));var s=u.querySelector("#delete-button");return T.id!=r&&s.classList.remove("element__delete_active"),s.addEventListener("mousedown",(function(){j(k),C.onclick=function(e){e.preventDefault(),function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/".concat(e),{method:"DELETE",headers:{authorization:"".concat(x),"Content-Type":"application/json"}}).then(A).catch((function(e){return console.log(e)}))}(c),u.remove(),z(k)}})),a.addEventListener("mousedown",(function(){j(h),y.src=t,y.alt=e,S.textContent=e})),u}(e.name,e.link,e.likes.length,e.likes,e.owner._id,e._id),t.prepend(o)}))}))}B(),O(),f.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&z(e),t.target.classList.contains("popup__close-button")&&z(e)}))})),i.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"".concat(x),"Content-Type":"application/json"},body:JSON.stringify({name:s.value,link:p.value})}).then(A).catch((function(e){return console.log(e)})),z(l),setTimeout(B,500)})),o.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"".concat(x),"Content-Type":"application/json"},body:JSON.stringify({name:d.value,about:m.value})}).then(A).catch((function(e){return console.log(e)})),z(t),setTimeout(O,500)})),g.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"".concat(x),"Content-Type":"application/json"},body:JSON.stringify({avatar:L.value})}).then(A).catch((function(e){return console.log(e)})),z(g),setTimeout(O,500)})),a.addEventListener("click",(function(){j(l),s.value="",p.value="",u.classList.add("popup__submit-button_disabled"),u.disabled=!0})),e.addEventListener("click",(function(){j(t),d.value=n.textContent,m.value=r.textContent,c.classList.add("popup__submit-button_disabled"),c.disabled=!0})),b.addEventListener("click",(function(){j(g),q.classList.add("popup__submit-button_disabled"),q.disabled=!0,L.value=""})),D={formSelector:".popup__input-container",inputSelector:".popup__inputs",inputPlaceName:".popup__input_place-name",submitButton:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorMessage:".popup__input_error-message"},Array.from(document.querySelectorAll(D.formSelector)).forEach((function(e){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButton);o.forEach((function(r){r.addEventListener("input",(function(){(function(e,t,o){t.validity.valid?(console.log("Valid"),function(e,t,o){var n=e.querySelector("#".concat(t.name,"_error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.inputErrorActiveClass),n.textContent=""}(e,t,o)):(console.log("Invalid"),function(e,t,o,n){var r=e.querySelector("#".concat(t.name,"_error")),c=document.querySelector(n.inputPlaceName);t.classList.add(n.inputErrorClass),r.textContent=o,t===c&&(r.textContent="".concat(t.validationMessage," Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы"))}(e,t,t.validationMessage,o))})(e,r,t),function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(o.inactiveButtonClass)):(t.disabled=!0,t.classList.add(o.inactiveButtonClass))}(o,n,t)}))}))}(e,D)}))})();