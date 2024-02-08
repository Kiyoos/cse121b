const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const urlList = 'https://pokeapi.co/api/v2/pokemon';
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector('#output');
  const doStuffHtml = `<h2>${results.name}</h2>
    <img src='${results.sprites.front_default}' alt='Image of ${results.name}'>`;
  outputElement.innerHTML = doStuffHtml;
  console.log('first: ', results);
}

function doStuffList(data) {
  console.log(data);
  const outputListElement = document.querySelector('#outputList');
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((item) => {
    const pokeListHtml = `<li>${item.name}</li>`;
    outputListElement.innerHTML += pokeListHtml;
  });
}

function sortPokemon(list) {
  let pokeSort = list.sort(compare);
  return pokeSort;
}

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else return 0;
}

getPokemon(url);
console.log('second: ', results);

getPokemonList(urlList);
