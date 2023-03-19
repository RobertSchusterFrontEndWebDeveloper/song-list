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

total.innerText = `My Favorite ${epicMix.length} songs.`;

const mixInfo = function(mix) {
  mix.forEach(function(song, index){
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index +1}</span> ${song}`;
    mixList.append(li);
  });
};