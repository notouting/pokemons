
let elList = document.querySelector(".list");
let elValue = document.querySelector(".value");
let theValue = 0;

function fire() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Fire") {
            elItem.innerHTML = `
                             <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isfire"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type : ${pokemons[i].type}
                                <img class="pokemon-section__item-img2" src="../images/fire.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
        `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function water() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Water") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img iswater"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/water.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function bug() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Bug") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isbug"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/bug.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function normal() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Normal") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isnormal"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/normal.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function poison() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Poison") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img ispoison"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/poison.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function electric() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Electric") {
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
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function ground() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Ground") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isground"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/ground.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function grass() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Grass") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isgrass"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/grass.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `
        }else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function fighting() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Fighting") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isfighting"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/fighting.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function psychic() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Psychic") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img ispsychic"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/psychic.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function dragon() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Dragon") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isdragon"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/dragon.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function ice() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Ice") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isice"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/ice.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function rock() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Rock") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isrock"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/rock.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}
function ghost() {
    elList.innerHTML = "";
    for (let i = theValue; i < pokemons.length; i++) {
        let elItem = document.createElement("li");
        if (pokemons[i].type[0] == "Ghost") {
            elItem.innerHTML = `
                               <div class="pokemon-section__item-box">
                           <h2 class="pokemon-section__item-title">${pokemons[i].name}</h2>
                        <img class="pokemon-section__item-img isghost"
                            src="${pokemons[i].img}" alt="${pokemons[i].name}">
                            <div class="pokemon-section__item-box2">
                                Type :
                                <img class="pokemon-section__item-img2" src="../images/ghost.png" width="30" height="30" alt="${pokemons[i].type}">
                            </div> 
                            <p class="pokemon-section__item-height">Height : ${pokemons[i].height}</p>
                            <p class="pokemon-section__item-weight">Weight : ${pokemons[i].weight}</p>
                            <p class="pokemon-section__item-eggs">Eggs : ${pokemons[i].egg}</p>
                            <p class="pokemon-section__item-spawn">Spawn chances : ${pokemons[i].spawn_chance} %</p>
                            <p class="pokemon-section__item-weaknesses">Weaknesses : ${pokemons[i].weaknesses}</p>

                        </div>
          `}else{
            continue
        }
        elList.appendChild(elItem);
    }
}