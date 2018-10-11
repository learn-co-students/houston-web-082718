const render = (pokemon) => {
  let container = document.getElementById('pokemon-container')
  container.innerHTML +=
  `<div class="pokemon-cards" id="${pokemon.id}" onClick="deletePokemon(this.id)">
  <h2>${pokemon.name}</h2>
  <img src="${pokemon.sprites.front}"/>
  </div>`
}

const fetchInitialPokemon = () => {
  fetch('http://localhost:3000/pokemon')
  .then(resp => resp.json())
  .then(data => data.forEach(pokemon => {
    render(pokemon)
  }))
}

const postNewPokemon = (event) => {
  //turns event data into pokemon object
  const name = event.target['name-input'].value
  const sprite = event.target['sprite-input'].value
  const pokemon = {name: name, sprites: {front: sprite}}
  fetch('http://localhost:3000/pokemon', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(pokemon)
  }).then(
    console.log('finished')
  )
  render(pokemon)
}

const deletePokemon = (id) => {
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  document.getElementById(id).remove()
}

const addFormHandler = () => {
  document.querySelector('form').addEventListener('submit',
  function(event){
    event.preventDefault()
    postNewPokemon(event)
  })
}

const wait = (ms) => {
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

const fastCounter = () => {
  let el = document.getElementById('fast')
  el.innerHTML = parseInt(el.innerHTML) + 1
}

const slowCounter = () => {
  let el = document.getElementById('slow')
  setTimeout(() => {el.innerHTML = parseInt(el.innerHTML) + 1}, 5000)
}

const fakeRequests = () => {
  console.log('let\'s find pikachu\'s secret ability')
  setTimeout(() => {
    console.log('getting data for all pokemon')
    setTimeout(() => {
      console.log('getting data for pikachu')
      setTimeout(() => {
        console.log('getting data for its ability') 
      }, 500)
    }, 2000)
  }, 1000)
}


document.addEventListener("DOMContentLoaded", function(){
  //fakeRequests()
  fetchInitialPokemon()
  addFormHandler()
  // console.log('connected')
  // console.log('wait is over')
});