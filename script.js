const skins = [
  { name: "AK-47 Redline", chance: 60, rarity: "common" },
  { name: "AWP Asiimov", chance: 25, rarity: "rare" },
  { name: "M4A1-S Hyper Beast", chance: 10, rarity: "epic" },
  { name: "Knife 🔥", chance: 5, rarity: "legendary" }
];

const roller = document.getElementById("roller");

// alegem castigatorul REAL
function getWinningSkin() {
  const rand = Math.random() * 100;
  let cumulative = 0;

  for (let skin of skins) {
    cumulative += skin.chance;
    if (rand <= cumulative) {
      return skin;
    }
  }
}

// generam lista DAR fortam castigatorul
function generateItems(winnerIndex, winnerSkin) {
  roller.innerHTML = "";

  for (let i = 0; i < 40; i++) {
    let skin;

    if (i === winnerIndex) {
      skin = winnerSkin; // FORȚĂM câștigul
    } else {
      skin = skins[Math.floor(Math.random() * skins.length)];
    }

    const item = document.createElement("div");
    item.className = "item " + skin.rarity;
    item.innerText = skin.name;

    roller.appendChild(item);
  }
}

function openCase() {
  const winner = getWinningSkin();

  const winnerIndex = Math.floor(Math.random() * 10) + 20;

  generateItems(winnerIndex, winner);

  const offset = winnerIndex * 130;

  roller.style.transition = "none";
  roller.style.transform = "translateX(0px)";

  setTimeout(() => {
    roller.style.transition = "transform 4s cubic-bezier(0.1, 0.7, 0.1, 1)";
    roller.style.transform = `translateX(-${offset}px)`;
  }, 50);

  // afisam rezultatul dupa animatie
  setTimeout(() => {
    alert("Ai castigat: " + winner.name);
  }, 4200);
}

roller.style.transition = "transform 5s cubic-bezier(0.08, 0.6, 0.2, 1)";