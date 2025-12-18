publishers = {};
videoGames.forEach((game) => {
  let studio = game.studio;
  if (!publishers[studio]) {
    publishers[studio] = 1;
  } else {
    publishers[studio] = publishers[studio] + 1;
  }
});

for (let publisher in publishers) {
  let publishDiv = document.querySelector(".publishers");
  publishDiv.insertAdjacentHTML(
    "afterbegin",
    `<div class="publish-container">
    <h2 class="publisher">${publisher}</h2>
    <h3 class="amount">${publishers[publisher]}</h3>
    </div>`
  );
}
videoGames
  .filter((game) => game.ratings.metacritiv > 95)
  .forEach((gmae) =>
    document
      .querySelector(".games")
      .insertAdjacentHTML("afterbegin", `<h2>${game.title}</h2>`)
  );
