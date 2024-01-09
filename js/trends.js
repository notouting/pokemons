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