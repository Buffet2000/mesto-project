(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector("#edit_profile"),o=document.querySelector("#popup_profile"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__occupation"),c=document.querySelector("#save_profile"),u=document.querySelector("#create"),a=document.querySelector(".profile__button-add"),i=document.querySelector("#popup_place"),l=document.querySelector("#add_new_place"),s=document.querySelector(".popup__input_place-name"),p=document.querySelector(".popup__input_place-link"),d=document.querySelector(".popup__input_name"),m=document.querySelector(".popup__input_occupation"),_=document.querySelectorAll(".popup"),v=document.querySelector(".elements"),f=(document.querySelector("#delete-button"),document.querySelector("#element-template").content),y=document.querySelector("#big_image"),S=document.querySelector(".popup__big-image"),h=document.querySelector(".popup__description"),q=document.querySelector("#edit_avatar"),b=document.querySelector("#popup_avatar"),E=document.querySelector("#save_avatar"),L=document.querySelector(".popup__input_avatar"),g=document.querySelector(".profile__avatar"),C=document.querySelector("#confirm_popup"),k=document.querySelector("#confirm"),T=(f.querySelector(".element").cloneNode(!0),{});function x(e){"Escape"===e.key&&N(document.querySelector(".popup_opened"))}function A(e){e.classList.add("popup_opened"),document.addEventListener("keydown",x)}function N(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",x)}var j="bc504b10-b5b7-4e7d-a9e5-28f90b8280a5";function z(e){return e.ok?(console.log(e),e.json()):(console.log("Отклонено"),Promise.reject(e.statusText))}var P;function w(){fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"GET",headers:{authorization:"".concat(j)}}).then(z).catch((function(e){return console.log(e)})).then((function(e){var t,o,c,u;t=e.name,o=e.about,c=e._id,u=e.avatar,T.id=c,n.textContent=t,r.textContent=o,g.src=u}))}function B(){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"GET",headers:{authorization:"".concat(j)}}).then(z).catch((function(e){return console.log(e)})).then((function(e){e.forEach((function(e){return console.log(e)})),e.reverse().forEach((function(e){var t,o;t=v,o=function(e,t,o,n,r){var c=f.querySelector(".element").cloneNode(!0),u=c.querySelector(".element__image");c.querySelector(".element__like-counter").textContent=o,c.querySelector(".element__title").textContent=e,u.src=t,u.alt=e,c.querySelector(".element__like").addEventListener("click",(function(e){e.target.classList.toggle("element__like_active")}));var a=c.querySelector("#delete-button");return T.id!=n&&a.classList.remove("element__delete_active"),a.addEventListener("click",(function(){A(C),k.onclick=function(e){e.preventDefault(),function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/".concat(e),{method:"DELETE",headers:{authorization:"".concat(j),"Content-Type":"application/json"}})}(r),c.remove(),N(C)}})),u.addEventListener("click",(function(){A(y),S.src=t,S.alt=e,h.textContent=e})),c}(e.name,e.link,e.likes.length,e.owner._id,e._id),t.prepend(o)}))}))}B(),w(),_.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&N(e),t.target.classList.contains("popup__close-button")&&N(e)}))})),i.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"".concat(j),"Content-Type":"application/json"},body:JSON.stringify({name:s.value,link:p.value})}),N(l),setTimeout(B,500)})),o.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"".concat(j),"Content-Type":"application/json"},body:JSON.stringify({name:d.value,about:m.value})}),N(t),setTimeout(w,500)})),b.addEventListener("submit",(function(e){e.preventDefault(),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"".concat(j),"Content-Type":"application/json"},body:JSON.stringify({avatar:L.value})}),N(b),setTimeout(w,500)})),a.addEventListener("click",(function(){A(l),s.value="",p.value="",u.classList.add("popup__submit-button_disabled"),u.disabled=!0})),e.addEventListener("click",(function(){A(t),d.value=n.textContent,m.value=r.textContent,c.classList.add("popup__submit-button_disabled"),c.disabled=!0})),q.addEventListener("click",(function(){A(b),E.classList.add("popup__submit-button_disabled"),E.disabled=!0,L.value=""})),P={formSelector:".popup__input-container",inputSelector:".popup__inputs",inputPlaceName:".popup__input_place-name",submitButton:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorMessage:".popup__input_error-message"},Array.from(document.querySelectorAll(P.formSelector)).forEach((function(e){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButton);o.forEach((function(r){r.addEventListener("input",(function(){(function(e,t,o){t.validity.valid?(console.log("Valid"),function(e,t,o){var n=e.querySelector("#".concat(t.name,"_error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.inputErrorActiveClass),n.textContent=""}(e,t,o)):(console.log("Invalid"),function(e,t,o,n){var r=e.querySelector("#".concat(t.name,"_error")),c=document.querySelector(n.inputPlaceName);t.classList.add(n.inputErrorClass),r.textContent=o,t===c&&(r.textContent="".concat(t.validationMessage," Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы"))}(e,t,t.validationMessage,o))})(e,r,t),function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(o.inactiveButtonClass)):(t.disabled=!0,t.classList.add(o.inactiveButtonClass))}(o,n,t)}))}))}(e,P)}))})();