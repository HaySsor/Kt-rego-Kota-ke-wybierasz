// Import stylesheets
import './style.css';

const photo1 = document.querySelector('[data-photo="1"]');
const photo2 = document.querySelector('[data-photo="2"]');
const button1 = document.querySelector('[data-button="1"]');
const button2 = document.querySelector('[data-button="2"]');
const catsThatWas = [];
let rigthSide = 1;
let LeftSide = 1;
const counter1 = document.querySelector('.counter1');
const counter2 = document.querySelector('.counter2');

function RandomThatCat() {
  let randomindex = Math.floor(Math.random() * 1000);
  return randomindex;
}

const winAlert = () =>
  window.confirm('O NIE!! KOTAŁKI się skończyły')
    ? window.location.reload(true)
    : null;

function RandomPhoto(photoIndex) {
  let index = photoIndex.getAttribute('src').slice(-3);
  catsThatWas.push(index);
  let newIndex = RandomThatCat();
  if (catsThatWas.includes(newIndex)) {
    if (catsThatWas.length === 1000) {
      winAlert();
    } else {
      newIndex = RandomThatCat();
    }
  } else {
    index = newIndex;
    photoIndex.setAttribute('src', `https://cataas.com/cat?${index}`);
  }
}

button1.addEventListener('click', () => {
  counter1.textContent = LeftSide;
  LeftSide++;
  RandomPhoto(photo2);
});
button2.addEventListener('click', () => {
  counter2.textContent = rigthSide;
  rigthSide++;
  RandomPhoto(photo1);
});
