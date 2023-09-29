

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const back = document.getElementById('back')
const limit =15;
let offset = 0;


function toListPokemon(pokemon) {
    return `
    <a class="link" onclick="pokemonDetail(${pokemon.number})" href="#">
        <li class="pokemon ${pokemon.type}">
                
        <span class="number">#${pokemon.number}</span> 
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
        </div>
        </li>
    </a>
    `
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(toListPokemon).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset+= limit;
    loadPokemonItens(offset, limit)
});




