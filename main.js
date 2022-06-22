(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._template=document.querySelector(this._cardSelector),this._handleCardClick=r}var n,r;return n=e,(r=[{key:"_removeCard",value:function(){this._element.remove()}},{key:"_handleLikeCard",value:function(){this._likeButton.classList.toggle("cards__like-button-active")}},{key:"_getElement",value:function(){return this._template.content.querySelector(".cards__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._trashButton.addEventListener("click",(function(){t._removeCard()})),this._likeButton.addEventListener("click",(function(){t._handleLikeCard()})),this._image.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"generateCard",value:function(){return this._element=this._getElement(),this._image=this._element.querySelector(".cards__image"),this._image.src=this._link,this._image.alt=this._name,this._title=this._element.querySelector(".cards__title"),this._title.textContent=this._name,this._trashButton=this._element.querySelector(".cards__trash"),this._likeButton=this._element.querySelector(".cards__like-button"),this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"enableValidation",(function(){o._setEventListeners()})),r(this,"resetValidation",(function(){o._toggleButtonState(),o._inputList.forEach((function(t){o._hideInputError(t)}))})),this._formElement=e,this._config=n,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}var e,o;return e=t,(o=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=n}var e,n;return e=t,(n=[{key:"setItem",value:function(t){this._container.prepend(t)}},{key:"addItem",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscUp=this._handleEscUp.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscUp",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup__active")&&t.close(t._popup),e.target.classList.contains("popup__close")&&t.close(t._popup)}))}},{key:"open",value:function(){document.addEventListener("keyup",this._handleEscUp),this._popup.classList.add("popup__active")}},{key:"close",value:function(){document.removeEventListener("keyup",this._handleEscUp),this._popup.classList.remove("popup__active")}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=p(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function _(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupText=e._popup.querySelector(".popup__text"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupText.textContent=t,f(y(u.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function w(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t,e){var n,r=e.submitButton;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitButton=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValue={},this._inputList.forEach((function(e){t._inputValue[e.name]=e.value})),this._inputValue}},{key:"setEventListeners",value:function(){var t=this;b(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton(t._getInputValues()),t.close()}))}},{key:"close",value:function(){b(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var P=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=document.querySelector(e),this._aboutProfile=document.querySelector(n)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._user={fullname:this._nameProfile.textContent,aboutMe:this._aboutProfile.textContent},this._user}},{key:"setUserInfo",value:function(t,e){this._nameProfile.textContent=t,this._aboutProfile.textContent=e}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j,L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._headers={"Content-type":"application/json",authorization:"f14481c5-e77c-456f-a863-20543b32692f"}}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch(this._options,{method:"GET",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Возникла ошибка")})).then((function(t){console.log(t)}))}},{key:"editProfile",value:function(t,e){return fetch(this._options,{method:"PATCH",headers:this.headers,body:JSON.stringify({fullname:nameProfile,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Возникла ошибка")})).then((function(t){console.log(t)}))}},{key:"addCard",value:function(t,e){return fetch(this._options,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Возникла ошибка")}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B=document.querySelector(".cards"),I=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),R=document.forms.profile,T=R.elements.fullname,x=R.elements.about_me,V=document.forms.card,A={};j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(j.formSelector)).forEach((function(t){var e=new o(t,j),n=t.getAttribute("name");A[n]=e,e.enableValidation()})),new L("https://mesto.nomoreparties.co/v1/cohort-43/cards").getInitialCards().then((function(t){var e=new u({items:t,renderer:function(t){var n=z(t);e.setItem(n)}},B);e.addItem()})).catch((function(t){console.log(t)})),new L("https://mesto.nomoreparties.co/v1/cohort-43/users/me ");var U=new L("https://mesto.nomoreparties.co/v1/cohort-43/cards "),D=new P(".profile__fullname",".profile__about-me"),M=new O(".popup_profile",{submitButton:function(t){D.setUserInfo(t.fullname,t.about_me)}});M.setEventListeners(),I.addEventListener("click",(function(){var t=D.getUserInfo();T.value=t.fullname,x.value=t.aboutMe,M.open(),A.profile.resetValidation()}));var N=new d(".popup_fullimage");function J(t,e){N.open(t,e),N.setEventListeners()}function z(t){return new e(t,".create-card",J).generateCard()}var G=new O(".popup_add-card",{submitButton:function(t){U.addCard(t.name,t.link).then((function(t){var e=z([t]);console.log(t),cardSection.setItem(e)})).catch((function(t){return console.log(t)})),V.reset()}});G.setEventListeners(),q.addEventListener("click",(function(){G.open(),A.card.resetValidation()}))})();