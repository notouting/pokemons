
let elList = document.querySelector(".list");
let elValue = document.querySelector(".value");

for (let i = 0; i < 12; i++) {
    let elItem = document.createElement("li");
    if (pokemons[i].type[0] == "Fire") {
        elItem.innerHTML = `
                         <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isfire"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/fire.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
    `
    } else if (pokemons[i].type[0] == "Water") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img iswater"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/water.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `
    } else if (pokemons[i].type[0] == "Bug") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isbug"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/bug.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `
    } else if (pokemons[i].type[0] == "Normal") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isnormal"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/normal.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `
    } else if (pokemons[i].type[0] == "Grass") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isgrass"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/grass.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `
    } else if (pokemons[i].type[0] == "Poison") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img ispoison"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/ground.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `
    } else if (pokemons[i].type[0] == "Fighting") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isfighting"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/fighting.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `} else if (pokemons[i].type[0] == "Ground") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isground"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/ground.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `} else if (pokemons[i].type[0] == "Psychic") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img ispsychic"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `} else if (pokemons[i].type[0] == "Dragon") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isdragon"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `} else if (pokemons[i].type[0] == "Ice") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isice"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `} else if (pokemons[i].type[0] == "Rock") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isrock"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `}else if (pokemons[i].type[0] == "Ghost") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isghost"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
      `}else if (pokemons[i].type[0] == "Electric") {
        elItem.innerHTML = `
                           <div class="pokemon-section__item-box">
                       <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                    <img class="pokemon-section__item-img iselectric"
                        src="${pokemons[i].img}" alt="${pokemons[i].name}">
                        <div class="pokemon-section__item-box2">
                            Type :
                            <img class="pokemon-section__item-img2" src="../images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                        </div> 
                        <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                        <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                        <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                        <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                        <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                    </div>
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
                             <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isfire"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/fire.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
        `
        } else if (pokemons[i].type[0] == "Water") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img iswater"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/water.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `
        } else if (pokemons[i].type[0] == "Bug") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isbug"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/bug.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `
        } else if (pokemons[i].type[0] == "Normal") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isnormal"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/normal.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `
        } else if (pokemons[i].type[0] == "Grass") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isgrass"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/grass.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `
        } else if (pokemons[i].type[0] == "Poison") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img ispoison"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/ground.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `
        } else if (pokemons[i].type[0] == "Fighting") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isfighting"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/fighting.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `} else if (pokemons[i].type[0] == "Ground") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isground"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/ground.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `} else if (pokemons[i].type[0] == "Psychic") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img ispsychic"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `} else if (pokemons[i].type[0] == "Dragon") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isdragon"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `} else if (pokemons[i].type[0] == "Ice") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isice"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `} else if (pokemons[i].type[0] == "Rock") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isrock"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `}else if (pokemons[i].type[0] == "Ghost") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                               <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                            <img class="pokemon-section__item-img isghost"
                                src="${pokemons[i].img}" alt="${pokemons[i].name}">
                                <div class="pokemon-section__item-box2">
                                    Type :
                                    <img class="pokemon-section__item-img2" src="./images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                                </div> 
                                <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                                <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                                <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                                <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                                <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>
    
                            </div>
          `}else if (pokemons[i].type[0] == "Electric") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img iselectric"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/electric.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `} ;

        elList.appendChild(elItem);
        if (i == 11 + theValue) {
            elValue.textContent = Number(elValue.textContent) + 12;
        }
    }
    theValue = Number(elValue.textContent);
}