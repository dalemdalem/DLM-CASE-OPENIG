window.onload = function () {

  const skins = [
    { name: "AK-47 Redline", img: "https://picsum.photos/100/80?random=1", chance: 60, rarity: "common" },
    { name: "AWP Asiimov", img: "https://picsum.photos/100/80?random=2", chance: 25, rarity: "rare" },
    { name: "M4A1-S Hyper Beast", img: "https://picsum.photos/100/80?random=3", chance: 10, rarity: "epic" },
    { name: "Knife 🔥", img: "https://picsum.photos/100/80?random=4", chance: 5, rarity: "legendary" }
  ];

  const roller = document.getElementById("roller");
  const caseBox = document.getElementById("caseBox");

  function getWinningSkin() {
    let rand = Math.random() * 100;
    let cumulative = 0;

    for (let i = 0; i < skins.length; i++) {
      cumulative += skins[i].chance;
      if (rand <= cumulative) {
        return skins[i];
      }
    }
  }

  function generateItems(winnerIndex, winnerSkin) {
    roller.innerHTML = "";

    for (let i = 0; i < 40; i++) {
      let skin;

      if (i === winnerIndex) {
        skin = winnerSkin;
      } else {
        skin = skins[Math.floor(Math.random() * skins.length)];
      }

      let item = document.createElement("div");
      item.className = "item " + skin.rarity;

     item.innerHTML = "<img src='" + skin.img + "'><p>" + skin.name + "</p><span>" + skin.chance + "%</span>";

      roller.appendChild(item);
    }
  }

  function openCase() {

    let winner = getWinningSkin();
    let winnerIndex = Math.floor(Math.random() * 10) + 20;

    generateItems(winnerIndex, winner);

    
	
let item = document.querySelector(".item");
let itemWidth = item.offsetWidth + 20; // 20 = margin (10 + 10)
let offset = winnerIndex * itemWidth;
    setTimeout(function () {
      roller.style.transition = "transform 4s ease";
      roller.style.transform = "translateX(-" + offset + "px)";
    }, 50);

   setTimeout(function () {

  const items = document.querySelectorAll(".item");
  const caseRect = document.querySelector(".case").getBoundingClientRect();
  const center = caseRect.left + caseRect.width / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;

    const distance = Math.abs(center - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  alert("Ai castigat: " + closestItem.innerText);

}, 4200);
  }

  caseBox.addEventListener("click", openCase);

  function showPreview() {
    let preview = document.getElementById("preview");

    for (let i = 0; i < skins.length; i++) {
      let item = document.createElement("div");
      item.className = "item " + skins[i].rarity;

      item.innerHTML = "<img src='" + skins[i].img + "'><p>" + skins[i].name + "</p>";

      preview.appendChild(item);
    }
  }

  showPreview();

};