// Functionize Minecraft Fishing Start Code

//HTML VARIABLES
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let display = document.getElementById("display");
let sortFish = document.getElementById("sort");
//Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
sortFish.addEventListener("click", sort);
let fishInventory = +document
  .getElementById("times")
  .addEventListener("input", inventory);
function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Raw-Cod.png' width='20px' />";
      }
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Raw-Salmon.png' width='20px' />";
      }
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Tropical-Fish.png' width='20px' />";
      }
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Pufferfish.png' width='20px' />";
      }
    }
  } else if (character === "alex") {
    // Alex fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}

// Plus 5
function plus5() {
  for (let n = 1; n <= 5; n++) {
    console.log(n);
    fishBtnClicked();
  }

  if (character === "steve") {
    // Steve fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Raw-Cod.png' width='20px' />";
      }
    }
  }
  for (let n = 1; n <= 1; n++) {
    document.getElementById("display").innerHTML +=
      "<img src='img/Raw-Salmon.png' width='20px' />";
  }
}

//Until 200
function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);

  if (character === "steve") {
    // Steve fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      for (let n = 1; n <= 1; n++) {
        document.getElementById("display").innerHTML +=
          "<img src='img/Raw-Cod.png' width='20px' />";
      }
    }
  }
  for (let n = 1; n <= 1; n++) {
    document.getElementById("display").innerHTML +=
      "<img src='img/Raw-Salmon.png' width='20px' />";
  }
}

// Fish Inventory
function inventory() {
  let count = document.getElementById("times").value;
  numCod = 1;
  numSalmon = 1;
  numPuffer = 1;
  numTropical = 1;

  target = numCod + count;
  while (
    numCod < count &&
    numSalmon < count &&
    numPuffer < count &&
    numTropical < count
  ) {
    numCod++;
    numSalmon++;
    numPuffer++;
    numTropical++;
    fishBtnClicked();
  }
}

// Sort fish

function sort() {
  plus5();
  until200();
  inventory();
  fishBtnClicked();
  document.getElementById("display").innerHTML = "      ";
  document.getElementById("display").innerHTML = numCod;
}
