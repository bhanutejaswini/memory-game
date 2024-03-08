const tiles = [
  {
    name: "beach",
    img: "images/beach.jpg",
  },
  {
    name: "green-hill",
    img: "images/green-hill.jpg",
  },
  {
    name: "night-sky",
    img: "images/night-sky.jpg",
  },
  {
    name: "pink-flowers",
    img: "images/pink-flowers.jpg",
  },
  {
    name: "snowy-mountain",
    img: "images/snowy-mountain.jpg",
  },
  {
    name: "trees",
    img: "images/trees.jpg",
  },
  {
    name: "beach",
    img: "images/beach.jpg",
  },
  {
    name: "green-hill",
    img: "images/green-hill.jpg",
  },
  {
    name: "night-sky",
    img: "images/night-sky.jpg",
  },
  {
    name: "pink-flowers",
    img: "images/pink-flowers.jpg",
  },
  {
    name: "snowy-mountain",
    img: "images/snowy-mountain.jpg",
  },
  {
    name: "trees",
    img: "images/trees.jpg",
  },
];

const grid = document.getElementById("grid");
const popup = document.getElementById("popup");
const score = document.getElementById("score");

let scoreVal = 0;
let tilesChosen = [],
  tilesChosenId = [];
const tilesWon = [];

tiles.sort(() => 0.5 - Math.random()); //to shuffle array randomly
console.log(tiles);

const displayPopup = (message) => {
  popup.textContent = message;
  popup.classList.add("open");

  setTimeout(() => popup.classList.remove("open"), 2000);
};

const checkMatch = () => {
  if (tilesChosen.length === 2) {
    const firstTile = tiles[tilesChosenId[0]],
      secondTile = tiles[tilesChosenId[1]];

    const firstTileElement = document.getElementById(tilesChosenId[0]),
      secondTileElement = document.getElementById(tilesChosenId[1]);

    if (firstTile.name === secondTile.name) {
      displayPopup("It is a match!!");

      setTimeout(() => {
        firstTileElement.setAttribute("src", "images/matched.png");
        secondTileElement.setAttribute("src", "images/matched.png");
      }, 2000);

      firstTileElement.removeEventListener("click", (e) => handleTileClick(e));
      secondTileElement.removeEventListener("click", (e) => handleTileClick(e));

      scoreVal += 1;

      if (scoreVal == tiles.length / 2)
        displayPopup("Perfect! All tiles are matched.");
    } else {
      displayPopup("Not a match!!");

      setTimeout(() => {
        firstTileElement.setAttribute("src", "images/tile.jpg");
        secondTileElement.setAttribute("src", "images/tile.jpg");
      }, 2000);
    }

    score.textContent = scoreVal;

    tilesChosen = [];
    tilesChosenId = [];
  }
};

const handleTileClick = (e) => {
  const tileId = e.target.id;
  const tileClicked = document.getElementById(tileId);

  tileClicked.setAttribute("src", tiles[tileId].img);

  tilesChosen.push(tileClicked);
  tilesChosenId.push(tileId);

  checkMatch();
};

//create an element for each image in the tiles array and add event listener
for (let i = 0; i < tiles.length; i++) {
  const tile = document.createElement("img");

  tile.setAttribute("id", i);
  tile.setAttribute("src", "images/tile.jpg");

  tile.addEventListener("click", (e) => handleTileClick(e));

  grid.appendChild(tile);
}
