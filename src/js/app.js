import Phone from "./phone";
import '../less/base.less';

document.getElementById('btn1').addEventListener("click", function() {
  document.getElementById('language-en-header').style.display='none';
  document.getElementById('language-en-main').style.display='none';
  document.getElementById('language-en-footer').style.display='none';
  document.getElementById('language-ru-header').style.display='block';
  document.getElementById('language-ru-main').style.display='block';
  document.getElementById('language-ru-footer').style.display='block';
  let phone = new Phone(`<div class="phone"><h4>Мой телефон: +375 33 3344201</h4></div>`);
  phone.build();
});

document.getElementById('btn2').addEventListener("click", function() {
  document.getElementById('language-ru-header').style.display='none';
  document.getElementById('language-ru-main').style.display='none';
  document.getElementById('language-ru-footer').style.display='none';
  document.getElementById('language-en-header').style.display='block';
  document.getElementById('language-en-main').style.display='block';
  document.getElementById('language-en-footer').style.display='block';
  let phone = new Phone(`<div class="phone"><h4>My phone: +375 33 3344201</h4></div>`);
  phone.build();
});

let phone = new Phone(`<div class="phone"><h4>+375 33 3344201</h4></div>`);
window.onload = setTimeout(() => phone.build(), 6000);
