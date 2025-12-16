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

const themeBtn = document.querySelector(".theme-btn");

const disneymovies = [
  {
    name: "The Lion King",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg",
    alt: "The Lion King is a Disney story about a young lion prince, Simba, who is destined to be king but flees his kingdom after his father, Mufasa, is murdered by his uncle, Scar.",
    year: 1994,
  },
  {
    name: "Beauty and the Beast",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast1991_20488_592ec4b5.jpeg",
    alt: "Beauty and the Beast it tells a story about a selfish prince cursed to be a monstrous beast who must learn to love and be loved in return to break the spell.",
    year: 1991,
  },
  {
    name: "Aladdin",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg",
    alt: "Aladdin tells the story of a poor street urchin named Aladdin who finds a magic lamp containing a powerful genie",
    year: 1992,
  },
  {
    name: "Frozen",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
    alt: "Frozen movie tells a stiry about two sisters in the kingdom of Arendelle: Elsa, who has magical powers to control ice and snow, and her younger sister, Anna.",
    year: 2013,
  },
  {
    name: "Moana",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/250px-Moana_Teaser_Poster.jpg",
    alt: "Moana is an animated musical adventure film about a Polynesian teenage princess who sets out on a daring sea voyage to save her people.",
    year: 2016,
  },
  {
    name: "Lilo & Stitch",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg",
    alt: " Lilo & Stitch is a film about a lonely Hawaiian girl, Lilo, who adopts a strange, blue dog from an animal shelter, unaware he's Stitch, a mischievous, hyper-destructive alien experiment escaped from an alien planet. ",
    year: 2002,
  },
  {
    name: "Wall-E",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
    alt: "Wall-E is about the last trash-compacting robot on Earth, centuries after humans abandoned a garbage-choked planet, who develops a personality and falls for a sleek probe named EVE, leading him on an adventure across the galaxy to help return humanity to a revitalized Earth.",
    year: 2008,
  },
  {
    name: "The Princess and the Frog",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/The_Princess_and_the_Frog_poster.jpg/250px-The_Princess_and_the_Frog_poster.jpg",
    alt: "The Princess and the Frog is about a hardworking waitress Tiana in New Orleans, whose dream of opening a restaurant is derailed when she kisses Prince Naveen, who's been turned into a frog by a voodoo magician, Dr. Facilier.",
    year: 1953,
  },
  {
    name: "The Little Mermaid",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_6a6ef760.jpeg",
    alt: "The Little Mermaid is the story of Ariel, a mermaid princess who dreams of the human world and falls in love with Prince Eric",
    year: 1990,
  },
  {
    name: "Mulan",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg",
    alt: "Mulan about a young Chinese woman who disguises herself as a man to take her elderly father's place in the army to fight invaders. ",
    year: 1998,
  },
  {
    name: "The Jungle Book",
    img: "https://m.media-amazon.com/images/I/918VXM4ZscL._AC_UF1000,1000_QL80_.jpg",
    alt: "The Jungle Book is an adventure story about a human boy named Mowgli, who was raised in the Indian jungle by wolves",
    year: 2016,
  },
  {
    name: "Tangled",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
    alt: "Tangled is a spirited princess with magical, long hair who makes a deal with a charming bandit to escape her tower and see the world for the first time. ",
    year: 2010,
  },
  {
    name: "Zootopia",
    img: "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg",
    alt: "Zootopia is a comedy-adventure film set in a modern, anthropomorphic animal city where a determined rabbit, Judy Hopps, becomes the first bunny police officer.",
    year: 2016,
  },
  {
    name: "Ratatouille",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    alt: "Ratatouille is animated film about a rat named Remy who, despite his family's wishes, dreams of becoming a gourmet chef in Paris.",
    year: 2007,
  },
  {
    name: "Toy Story",
    img: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    alt: "Toy Story is a computer-animated film series centered on a group of toys that come to life when humans are not around.",
    year: 1995,
  },
  {
    name: "Inside Out",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
    alt: "Inside Out tells a story about the personified emotions—Joy, Sadness, Anger, Fear, and Disgust—living inside an 11-year-old girl's mind as she deals with a major life change: moving to a new city",
    year: 2015,
  },
  {
    name: "Wreck-It Ralph",
    img: "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg",
    alt: "Wreck-It Ralph is an animated film about a video game bad guy named Ralph who is tired of being unappreciated and embarks on a journey to prove he can be a hero.",
    year: 2012,
  },
  {
    name: "Monsters University",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_monstersuniversity_19752_34ba9b39.jpeg?region=0%2C0%2C540%2C810",
    alt: "Monsters Univeristy tells the story of how Mike Wazowski and James P. Sulley Sullivan first met at Monsters University, where they were initially rivals. After being kicked out of the elite Scare Program, they must team up with a group of misfit monsters to prove they belong and to get back on track",
    year: 2013,
  },
  {
    name: "Luca",
    img: "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    alt: "Luca talks about a young sea monster who experiences an unforgettable summer on the Italian Riviera, befriending a human and discovering a new world.",
    year: 2021,
  },
  {
    name: "Elio",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg",
    alt: "Elio is about an 11-year-old boy who, feeling like an outsider, is mistaken for Earth's intergalactic ambassador by aliens and beamed to a space station. ",
    year: 2025,
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card"
          data-name="${item.name}" 
          data-img="${item.img}"
          data-alt="${item.alt}" 
          data-year="${item.year}">
      <img class="card-img" src="${item.img}" alt="${item.alt}">
      <h2 class="card-name">${item.name}</h2>
      <p class="card-alt">${item.alt}</p>
     <p class="card-year">Year: ${item.year}</p>
     <button class="toWatch">Watched</button>
   </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

disneymovies.forEach((item) => inject(item));

function filter(type) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  disneymovies.forEach((disneymovie) => {
    if (type === "all") inject(disneymovie);

    if (
      type === "old" &&
      disneymovie.year >= 1990 &&
      disneymovie.year <= 1999
    ) {
      inject(disneymovie);
    }

    if (
      type === "mid" &&
      disneymovie.year >= 2000 &&
      disneymovie.year <= 2009
    ) {
      inject(disneymovie);
    }

    if (type === "recent" && disneymovie.year > 2009) {
      inject(disneymovie);
    }
  });
}

function showFilter() {
  const buttons = document.querySelectorAll(".filter button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterType = btn.getAttribute("data-filter");
      filter(filterType);
    });
  });
}

showFilter();

document.addEventListener("click", (e) => {
  if (e.target.className === "toWatch") {
    const card = e.target.closest(".card");
    const showWatched = document.querySelector(".showWatched");

    const name = card.getAttribute("data-name");
    const img = card.getAttribute("data-img");
    const alt = card.getAttribute("data-alt");
    const year = card.getAttribute("data-year");

    const html = `
      <div class = "card" data-name = "${name}" data-img="${img}" data-alt="${alt}" data-year="${year}">
        <img class = "card-img" src="${img}" alt="${alt}">
        <h2 class="card-name">${name}</h2>
        <p class = "card-alt">${alt}</p>
        <p class = "card-year">Year: ${year}</p>
        </div>
    `;

    showWatched.insertAdjacentHTML("afterbegin", html);
  }
});

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

document.getElementById("searchform").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = document.getElementById("title").value.toLowerCase();
  const container = document.querySelector(".container");

  container.innerHTML = "";

  let found = false;

  disneymovies.forEach((item) => {
    if (item.name.toLowerCase().includes(value)) {
      inject(item);
      found = true;
    }
  });

  if (!found) {
    container.innerHTML = "<p>No disneymovie found.</p>";
  }
});
