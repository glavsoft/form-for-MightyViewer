"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var cookieBlock = document.querySelector('.cookie-block');
  var okCookie = document.querySelectorAll('.ok-cookie');

  var _iterator = _createForOfIteratorHelper(okCookie),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var Item = _step.value;
      // закрываем по клику
      Item.addEventListener('click', function () {
        // записываем cookie на 30 деней, с которой мы не показываем окно
        cookieBlock.style.display = 'none';
        var date = new Date();
        date.setDate(date.getDate() + 30);
        document.cookie = "hide-cookie=ok; path=/; expires=" + date.toUTCString();
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var cookies = function cookies() {
    // функция возвращает cookie с именем name, если есть, если нет, то undefined
    function getCookie(name) {
      var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    } // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ


    if (!getCookie('hide-cookie')) {
      // показываем
      setTimeout(function () {
        cookieBlock.style.display = 'block';
      }, 1000);
    }
  };

  cookies();
})();

(function () {
  var privacyAgreeCheckbox = document.getElementById('privacy_agreeCheckbox');
  var formSubmitButton = document.getElementById('submit'); // if (privacyAgreeCheckbox.checked === false) { //условие если галочка не выбрана то есть false то тогда делать кнопку не активной
  //     formSubmitButton.disabled = true;
  // }

  function getCheckedPolicy() {
    formSubmitButton.disabled = !privacyAgreeCheckbox.checked; //если выбран чекбокс то кнопка активна, сянта галочка кнопка не активна
  } // setInterval(function getCheckedPolicy() {  //если по какой то причине не отправлена форма то проверять стоит ли галочка на чекбоксе
  //     formSubmitButton.disabled = !privacyAgreeCheckbox.checked;  //если выбран чекбокс то кнопка активна, не сянта галочка кнопка не активна
  // }, 0);

})();

(function () {
  var form = document.querySelector(".embedded-form-mv[data-2306211538] > .form"); //если не будет этого класса to-connect-with__ то инпуты не будут завязаны с кнопкой отправить

  var inputs = form.querySelectorAll('input.to-connect-with');
  var btn = form.querySelector("#btn2806211546");
  setTimeout(function () {
    btn.setAttribute('disabled', '');
  }, 3000);
  btn.addEventListener('click', getChecked);

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', getChecked);
    inputs[i].addEventListener('keyup', getChecked);
  }

  function getChecked() {
    var allEmptyCheckboxes = true;
    var allEmptyEmail = true;
    var selectedAllCheckbox = null;
    var filledAllEmail = null;
    var numberAllCheckboxes = null;
    var numberAllInputEmail = null;

    for (var _i = 0; _i < inputs.length; _i++) {
      if (inputs[_i].type === 'checkbox') {
        numberAllCheckboxes++;
      }

      if (inputs[_i].type === 'text') {
        numberAllInputEmail++;
      }
    }

    for (var _i2 = 0; _i2 < inputs.length; _i2++) {
      if (inputs[_i2].type === 'checkbox' && inputs[_i2].checked === true) {
        var numberCheckedCheckboxes = !!inputs[_i2];
        selectedAllCheckbox += numberCheckedCheckboxes;

        if (numberAllCheckboxes === selectedAllCheckbox) {
          allEmptyCheckboxes = false;
        }
      }

      if (inputs[_i2].type === 'text' && inputs[_i2].value !== '') {
        var numberFilledEmail = !!inputs[_i2];
        filledAllEmail += numberFilledEmail;

        if (numberAllInputEmail === filledAllEmail) {
          allEmptyEmail = false;
        }
      }
    }

    if (!allEmptyEmail && !allEmptyCheckboxes) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', '');
    }
  }
})();