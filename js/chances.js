
let elList = document.querySelector(".list");
let elValue = document.querySelector(".value");

for (let i = 0; i < 12; i++) {
    let elItem = document.createElement("li");
    if (pokemons[i].type[0] == "Fire") {
        elItem.innerHTML = `
                        <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isfire" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
    `
    } else if (pokemons[i].type[0] == "Water") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img iswater" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `
    } else if (pokemons[i].type[0] == "Bug") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isbug" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `
    } else if (pokemons[i].type[0] == "Normal") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isnormal" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `
    } else if (pokemons[i].type[0] == "Grass") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isgrass" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `
    } else if (pokemons[i].type[0] == "Poison") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img ispoison" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `
    } else if (pokemons[i].type[0] == "Electric") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img iselectric" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Ground") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isground" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Grass") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isgrass" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Fighting") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isfighting" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Psychic") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img ispsychic" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Dragon") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isdragon" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Ice") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isice" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `} else if (pokemons[i].type[0] == "Rock") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isrock" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `}else if (pokemons[i].type[0] == "Ghost") {
        elItem.innerHTML = `
                          <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                    <img class="pokemon-section__item-img isghost" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                    <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
      `};

    elList.appendChild(elItem);
    if (i == 11) {
        elValue.textContent = Number(elValue.textContent) + Number(i) + 1;
    }
}
let theValue = Number(elValue.textContent);

function loadMore() {
    for (let i = theValue; i < (theValue + 12); i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Fire") {
            elItem.innerHTML = `
                            <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isfire" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
        `
        } else if (pokemons[i].type[0] == "Water") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img iswater" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `
        } else if (pokemons[i].type[0] == "Bug") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isbug" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `
        } else if (pokemons[i].type[0] == "Normal") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isnormal" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `
        } else if (pokemons[i].type[0] == "Grass") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isgrass" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `
        } else if (pokemons[i].type[0] == "Poison") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img ispoison" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `
        } else if (pokemons[i].type[0] == "Electric") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img iselectric" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Ground") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isground" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Grass") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isgrass" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Fighting") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isfighting" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Psychic") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img ispsychic" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Dragon") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isdragon" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Ice") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isice" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `} else if (pokemons[i].type[0] == "Rock") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isrock" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `}else if (pokemons[i].type[0] == "Ghost") {
            elItem.innerHTML = `
                              <h3 class="pokemon-section__item-title">${pokemons[i].name}</h3>
                        <img class="pokemon-section__item-img isghost" src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <p class="chances">Spawn chance :${pokemons[i].spawn_chance}%</p>
          `};

        elList.appendChild(elItem);
        if (i == 11 + theValue) {
            elValue.textContent = Number(elValue.textContent) + 12;
        }
    }
    theValue = Number(elValue.textContent);
}