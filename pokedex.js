var numPokemons = document.getElementById('numPokemons')
numPokemons.addEventListener('keyup',()=>{
    pegaPokemons(numPokemons.value)
})

function pegaPokemons(numPokemons){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemons}`).then(response => response.json()).then(allpokemon => {
    var pokemons = []
    allpokemon.results.map((val)=>{
        

        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
           
           pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default})
           if(pokemons.length == numPokemons){
                pokemons.map((val)=>{
                    var pokemonsBoxes = document.querySelector('.pokemon-boxes')
                    pokemonsBoxes.innerHTML = ''
                    pokemons.map((val)=>{
                        pokemonsBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="${val.imagem}" alt="">
                            <p>${val.nome.toUpperCase()}</p>
                        </div>
                        `
                    })
            })
           }

            })
        })
    })


}