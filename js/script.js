const epicMix = [
  "Don't Steal My Sunshine",
  "Walkin on the Sun",
  "Black Velvanteen",
  "Take a Chance on Me",
  "Candy Perfume Girl",
  "Call Me",
  "Sunglasses at Night",
  "Radar Love",
  "I Wanna New Drug",
  "I Can't Drive 55",
  "Vogue",
  "Don't Worry Be Happy",
  "Poker Face"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener('click', function(){
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});
