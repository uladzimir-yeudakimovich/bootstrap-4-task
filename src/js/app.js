import Slide from "./slide";
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

let chat = new Slide(
  '.slides-chat .slide-chat',
  'slide-chat',
  'slide-chat showing-chat',
  'previousChatEn',
  'previousChatRu',
  'pauseChatEn',
  'pauseChatRu',
  'nextChatEn',
  'nextChatRu'
);
setTimeout(() => chat.build(), 5);

let game = new Slide(
  '.slides-game .slide-game',
  'slide-game',
  'slide-game showing-game',
  'previousGameEn',
  'previousGameRu',
  'pauseGameEn',
  'pauseGameRu',
  'nextGameEn',
  'nextGameRu'
);
setTimeout(() => game.build(), 10);

let social = new Slide(
  '.slides-social .slide-social',
  'slide-social',
  'slide-social showing-social',
  'previousSocialEn',
  'previousSocialRu',
  'pauseSocialEn',
  'pauseSocialRu',
  'nextSocialEn',
  'nextSocialRu'
);
setTimeout(() => social.build(), 15);

let react = new Slide(
  '.slides-react-app .slide-react-app',
  'slide-react-app',
  'slide-react-app showing-react-app',
  'previousReactEn',
  'previousReactRu',
  'pauseReactEn',
  'pauseReactRu',
  'nextReactEn',
  'nextReactRu'
);
setTimeout(() => react.build(), 20);

let match = new Slide(
  '.slides-match .slide-match',
  'slide-match',
  'slide-match showing-match',
  'previousMatchEn',
  'previousMatchRu',
  'pauseMatchEn',
  'pauseMatchRu',
  'nextMatchEn',
  'nextMatchRu'
);
setTimeout(() => match.build(), 25);

let restaurant = new Slide(
  '.slides-restaurant .slide-restaurant',
  'slide-restaurant',
  'slide-restaurant showing-restaurant',
  'previousRestaurantEn',
  'previousRestaurantRu',
  'pauseRestaurantEn',
  'pauseRestaurantRu',
  'nextRestaurantEn',
  'nextRestaurantRu'
);
setTimeout(() => restaurant.build(), 30);

let site = new Slide(
  '.slides-site .slide-site',
  'slide-site',
  'slide-site showing-site',
  'previousSiteEn',
  'previousSiteRu',
  'pauseSiteEn',
  'pauseSiteRu',
  'nextSiteEn',
  'nextSiteRu'
);
setTimeout(() => site.build(), 35);

let currency = new Slide(
  '.slides-currency .slide-currency',
  'slide-currency',
  'slide-currency showing-currency',
  'previousCurrencyEn',
  'previousCurrencyRu',
  'pauseCurrencyEn',
  'pauseCurrencyRu',
  'nextCurrencyEn',
  'nextCurrencyRu'
);
setTimeout(() => currency.build(), 40);

let phone = new Phone(`<div class="phone"><h4>+375 33 3344201</h4></div>`);
window.onload = setTimeout(() => phone.build(), 6000);

let obj = {
  developer: "Uladzimir Yeudakimovich"
};

let Obj = JSON.stringify(obj);

localStorage.setItem("front-end", Obj);

//let returnObj = JSON.parse(localStorage.getItem("developer"))

//localStorage.removeItem("front-end");
