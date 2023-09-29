const pokemonPage = document.querySelector('#pokemonPage');
const pokedex = document.querySelector('#pokedex');

function pokemonDetail(pokemonId){
    console.log('pokemonId: ', pokemonId);

    pokeApi.getPokemon(pokemonId).then((pokemon) => {
        if (!pokedex.hasAttribute('hidden')) {
            pokedex.setAttribute('hidden', 'true');

            pokemonPage.innerHTML = `
            <li class="pokemonDetail ${pokemon.type}">
                
                    <div class="titulo">
                        <span class="name">${pokemon.name}</span> 
                        <span class="number">#${pokemon.number}</span>
                    </div>
        
                        <div class="detail">
                            <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        </div>     

                        <div class="imagem">
                            <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                        </div>

                            <span class="name">Especies: ${pokemon.especies}</span> 
                            <span class="name">Height: ${pokemon.height}</span>
                            <span class="name">Weight: ${pokemon.weight}</span>
                    
                            <ol class="abilities">
                                <li class="ability">Abilities: </li>${pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}
                            </ol>
                        
                </li>
                <div class="pagination">
                <a class="link" href="index.html" id="back" type="button">
                    Back

                </button>`
        }
        
            
    }   )
}