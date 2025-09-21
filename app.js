const displayContainer = document.getElementById("display-container");
const shop = document.getElementById("shop");
const cookie = document.getElementById(`cookies`);

let cookieCount = 0;
let cps = 1;
setInterval(function () {
  cookieCount = cookieCount + cps;
  console.log(cookieCount);
}, 1000);
// Fetch upgrades from AP
async function fetchUpgrades() {
  try {
    const response = await fetch(
      "https://cookie-upgrade-api.vercel.app/api/upgrades"
    );
    const upgrades = await response.json();
    console.log("Fetched upgrades:", upgrades);
    return upgrades;
  } catch (error) {
    console.error("Failed to fetch upgrades:", error);
    return [];
  }
}

// Create shop UI
function createShop(upgrades) {
  upgrades.forEach((upgrade) => {
    const upgradeElement = document.createElement("div");

    upgradeElement.classList.add("upgrade-item");

    upgradeElement.innerHTML = `
      <p>${upgrade.name}</h3>
      <p>Cost: ${upgrade.cost}</p>
      <p> Cps: ${upgrade.cps}</p>
      <p>Effect: ${upgrade.increase}</p>
      <button>buy now</button>
    `;

    shop.appendChild(upgradeElement);
  });
}

// Initialize shop
fetchUpgrades().then(createShop);
