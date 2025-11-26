const disneymovie = [
  {
    name: "The Lion King",
    image: "https://link-to-lion-king-image.jpg",
    alt: "The Lion King movie poster",
  },
  {
    name: "Beauty and the Beast",
    image: "https://link-to-beauty-and-the-beast-image.jpg",
    alt: "Beauty and the Beast movie poster",
  },
  {
    name: "Aladdin",
    image: "https://link-to-aladdin-image.jpg",
    alt: "Aladdin movie poster",
  },
  {
    name: "Frozen",
    image: "https://link-to-frozen-image.jpg",
    alt: "Frozen movie poster",
  },
  {
    name: "Moana",
    image: "https://link-to-moana-image.jpg",
    alt: "Moana movie poster",
  },
  {
    name: "Cinderella",
    image: "https://link-to-cinderella-image.jpg",
    alt: "Cinderella movie poster",
  },
  {
    name: "Snow White and the Seven Dwarfs",
    image: "https://link-to-snow-white-image.jpg",
    alt: "Snow White and the Seven Dwarfs movie poster",
  },
  {
    name: "Peter Pan",
    image: "https://link-to-peter-pan-image.jpg",
    alt: "Peter Pan movie poster",
  },
  {
    name: "The Little Mermaid",
    image: "https://link-to-little-mermaid-image.jpg",
    alt: "The Little Mermaid movie poster",
  },
  {
    name: "Mulan",
    image: "https://link-to-mulan-image.jpg",
    alt: "Mulan movie poster",
  },
  {
    name: "The Jungle Book",
    image: "https://link-to-jungle-book-image.jpg",
    alt: "The Jungle Book movie poster",
  },
  {
    name: "Tangled",
    image: "https://link-to-tangled-image.jpg",
    alt: "Tangled movie poster",
  },
  {
    name: "Zootopia",
    image: "https://link-to-zootopia-image.jpg",
    alt: "Zootopia movie poster",
  },
  {
    name: "Ratatouille",
    image: "https://link-to-ratatouille-image.jpg",
    alt: "Ratatouille movie poster",
  },
  {
    name: "Toy Story",
    image: "https://link-to-toy-story-image.jpg",
    alt: "Toy Story movie poster",
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
