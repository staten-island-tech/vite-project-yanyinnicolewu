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
    alt: "",
  },
  {
    name: "Cinderella",
    image:
      "https://m.media-amazon.com/images/I/81WQv5bFbfL._AC_UF1000,1000_QL80_.jpg",
    alt: "Cinderella movie poster",
  },
  {
    name: "Snow White and the Seven Dwarfs",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_snowwhiteandthesevendwarfs_19871_806c8934.jpeg",
    alt: "Snow White and the Seven Dwarfs movie poster",
  },
  {
    name: "Peter Pan",
    image:
      "https://www.prindleinstitute.org/wp-content/uploads/2021/01/Screen-Shot-2021-01-29-at-6.51.28-AM.png",
    alt: "Peter Pan movie poster",
  },
  {
    name: "The Little Mermaid",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_6a6ef760.jpeg",
    alt: "The Little Mermaid movie poster",
  },
  {
    name: "Mulan",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg",
    alt: "Mulan movie poster",
  },
  {
    name: "The Jungle Book",
    image:
      "https://m.media-amazon.com/images/I/918VXM4ZscL._AC_UF1000,1000_QL80_.jpg",
    alt: "The Jungle Book movie poster",
  },
  {
    name: "Tangled",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
    alt: "Tangled movie poster",
  },
  {
    name: "Zootopia",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg",
    alt: "Zootopia movie poster",
  },
  {
    name: "Ratatouille",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    alt: "Ratatouille movie poster",
  },
  {
    name: "Toy Story",
    image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    alt: "Toy Story movie poster",
  },
  {
    name: "Inside Out",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
    alt: "",
  },
  {
    name: "Wreck-It Ralph",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg",
    alt: "",
  },
  {
    name: "Monsters University",
    image: "",
    alt: "https://lumiere-a.akamaihd.net/v1/images/p_monstersuniversity_19752_34ba9b39.jpeg?region=0%2C0%2C540%2C810",
  },
  {
    name: "Luca",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    alt: "",
  },
  {
    name: "Elio",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg",
    alt: "",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card" data-name="${item.name}" data-img="${item.img}" data-alt="${item.alt}" data-price="${item.price}">
      <img class="card-img" src="${item.img}" alt="${item.alt}">
      <h2 class="card-name">${item.name}</h2>
      <p class="card-alt">${item.alt}</p>
      <p class="card-price">Price: $${item.price}</p>
      <button class="button">Add to Cart</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}
