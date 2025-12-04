import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
const disneymovie = [
  {
    name: "The Lion King",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg",
    alt: "The Lion King is a Disney story about a young lion prince, Simba, who is destined to be king but flees his kingdom after his father, Mufasa, is murdered by his uncle, Scar.",
  },
  {
    name: "Beauty and the Beast",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast1991_20488_592ec4b5.jpeg",
    alt: "Beauty and the Beast it tells a story about a selfish prince cursed to be a monstrous beast who must learn to love and be loved in return to break the spell.",
  },
  {
    name: "Aladdin",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg",
    alt: "Aladdin tells the story of a poor street urchin named Aladdin who finds a magic lamp containing a powerful genie",
  },
  {
    name: "Frozen",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
    alt: "Frozen movie tells a stiry about two sisters in the kingdom of Arendelle: Elsa, who has magical powers to control ice and snow, and her younger sister, Anna.",
  },
  {
    name: "Moana",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/250px-Moana_Teaser_Poster.jpg",
    alt: "Moana is an animated musical adventure film about a Polynesian teenage princess who sets out on a daring sea voyage to save her people.",
  },
  {
    name: "Cinderella",
    image:
      "https://m.media-amazon.com/images/I/81WQv5bFbfL._AC_UF1000,1000_QL80_.jpg",
    alt: "Cinderella is about a kind young woman who is mistreated by her cruel stepmother and stepsisters after her father's death ",
  },
  {
    name: "Snow White and the Seven Dwarfs",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_snowwhiteandthesevendwarfs_19871_806c8934.jpeg",
    alt: "Snow White and the Seven Dwarfs is about  a beautiful princess who, after her evil stepmother the Queen discovers she is fairest of all, flees into the forest and finds refuge in the cottage of seven dwarfs. ",
  },
  {
    name: "Peter Pan",
    image:
      "https://www.prindleinstitute.org/wp-content/uploads/2021/01/Screen-Shot-2021-01-29-at-6.51.28-AM.png",
    alt: "Peter Pan os about a magical boy who won't grow up, Peter Pan, taking siblings Wendy, John, and Michael to the island of Neverland. ",
  },
  {
    name: "The Little Mermaid",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_6a6ef760.jpeg",
    alt: "The Little Mermaid is the story of Ariel, a mermaid princess who dreams of the human world and falls in love with Prince Eric",
  },
  {
    name: "Mulan",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg",
    alt: "Mulan about a young Chinese woman who disguises herself as a man to take her elderly father's place in the army to fight invaders. ",
  },
  {
    name: "The Jungle Book",
    image:
      "https://m.media-amazon.com/images/I/918VXM4ZscL._AC_UF1000,1000_QL80_.jpg",
    alt: "The Jungle Book is an adventure story about a human boy named Mowgli, who was raised in the Indian jungle by wolves",
  },
  {
    name: "Tangled",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
    alt: "Tangled is a spirited princess with magical, long hair who makes a deal with a charming bandit to escape her tower and see the world for the first time. ",
  },
  {
    name: "Zootopia",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg",
    alt: "Zootopia is a comedy-adventure film set in a modern, anthropomorphic animal city where a determined rabbit, Judy Hopps, becomes the first bunny police officer.",
  },
  {
    name: "Ratatouille",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    alt: "Ratatouille is animated film about a rat named Remy who, despite his family's wishes, dreams of becoming a gourmet chef in Paris.",
  },
  {
    name: "Toy Story",
    image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    alt: "Toy Story is a computer-animated film series centered on a group of toys that come to life when humans are not around.",
  },
  {
    name: "Inside Out",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
    alt: "Inside Out tells a story about the personified emotions—Joy, Sadness, Anger, Fear, and Disgust—living inside an 11-year-old girl's mind as she deals with a major life change: moving to a new city",
  },
  {
    name: "Wreck-It Ralph",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg",
    alt: "Wreck-It Ralph is an animated film about a video game bad guy named Ralph who is tired of being unappreciated and embarks on a journey to prove he can be a hero.",
  },
  {
    name: "Monsters University",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_monstersuniversity_19752_34ba9b39.jpeg?region=0%2C0%2C540%2C810",
    alt: "Monsters Univeristy tells the story of how Mike Wazowski and James P. Sulley Sullivan first met at Monsters University, where they were initially rivals. After being kicked out of the elite Scare Program, they must team up with a group of misfit monsters to prove they belong and to get back on track",
  },
  {
    name: "Luca",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    alt: "Luca talks about a young sea monster who experiences an unforgettable summer on the Italian Riviera, befriending a human and discovering a new world.",
  },
  {
    name: "Elio",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg",
    alt: "Elio is about an 11-year-old boy who, feeling like an outsider, is mistaken for Earth's intergalactic ambassador by aliens and beamed to a space station. ",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card" data-name="${item.name}" data-img="${item.img}" data-alt="${item.alt}" data-year="${item.year}">
      <img class="card-img" src="${item.img}" alt="${item.alt}">
      <h2 class="card-name">${item.name}</h2>
      <p class="card-alt">${item.alt}</p>
      <p class="card-year">Year: $${item.year}</p>
      <button class="button">Watched</button>
      <button class="button">Want to Watch</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

movies.forEach((item) => inject(item));

function Watched() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      const name = card.getAttribute("data-name");
      const year = card.getAttribute("data-year");

      const watched = document.querySelector(".watched");
      const html = `<div class="cart-item" data-year="${year}">${name} : $${year}</div>`;
      watched.insertAdjacentHTML("afterbegin", html);

      insideWatched();
    })
  );
}

Watched();

function addToCart() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      const name = card.getAttribute("data-name");
      const price = card.getAttribute("data-price");

      const cart = document.querySelector(".cart");
      const html = `<div class="cart-item" data-price="${price}">${name} : $${price}</div>`;
      cart.insertAdjacentHTML("afterbegin", html);

      insideCart();
    })
  );
}

addToCart();
