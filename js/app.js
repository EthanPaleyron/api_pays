const results = document.querySelector(".results");
const url = `https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population`;

fetch(url)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      data.forEach((pay) => {
        const card = document.createElement("div");
        card.className = "country-card";
        card.dataset.name = pay.name.common;
        card.dataset.region = pay.region;
        const flag = document.createElement("img");
        flag.className = "country-flag";
        flag.src = pay.flags.png;
        flag.alt = pay.flags.alt;
        const details = document.createElement("div");
        details.className = "country-details";
        const h2 = document.createElement("h2");
        h2.textContent = pay.name.common;
        const ul = document.createElement("ul");
        const liPopulation = document.createElement("li");
        const spanPopulation = document.createElement("span");
        spanPopulation.textContent = "Population : " + pay.population;
        const liRegion = document.createElement("li");
        const spanRegion = document.createElement("span");
        spanRegion.textContent = "Region : " + pay.region;
        const liCapital = document.createElement("li");
        const spanCapital = document.createElement("span");
        spanCapital.textContent = "Capital : " + pay.capital;
        results.appendChild(card);
        card.appendChild(flag);
        card.appendChild(details);
        details.appendChild(h2);
        details.appendChild(ul);
        ul.appendChild(liPopulation);
        liPopulation.appendChild(spanPopulation);
        ul.appendChild(liRegion);
        liRegion.appendChild(spanRegion);
        ul.appendChild(liCapital);
        liCapital.appendChild(spanCapital);
      });
    })
  )
  .catch((error) => console.log("Error : " + error));

const regions = document.querySelector("#regions");
const search = document.querySelector(".search-input");

function filterCountrys() {
  document.querySelectorAll(".country-card").forEach((card) => {
    card.style.display = "block";
  });

  if (regions.value !== "") {
    document.querySelectorAll(".country-card").forEach((card) => {
      if (regions.value !== card.dataset.region) {
        card.style.display = "none";
      }
    });
  }

  if (search.value !== "") {
    document.querySelectorAll(".country-card").forEach((card) => {
      const nameCountry = card.dataset.name.toLowerCase();
      if (!nameCountry.includes(search.value)) {
        card.style.display = "none";
      }
    });
  }
}

regions.addEventListener("change", filterCountrys);
search.addEventListener("input", filterCountrys);
