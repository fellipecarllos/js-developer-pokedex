

const pokeApi={}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const[type] = types
    //pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) -- mesma coisa que a parte de cima
    //pokemon.type = pokemon.types.get(0)
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    pokemon.especie = pokeDetail.species.name
    pokemon.weight = pokeDetail.weight
    pokemon.height = pokeDetail.height
    
    const abilities  = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const[ability] = abilities
    pokemon.abilities=abilities
    pokemon.ability = ability

    return pokemon

}

pokeApi.getPokemonsDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response) =>response.json())
        .then(convertPokeApiDetailToPokemon) 
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}+&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) =>pokemonsDetails)
    //.catch((erro) => console.error(error))
}

pokeApi.getPokemon = (pokemonId = 1) => {    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon) 
}









