const characterElement = document.getElementById('character');
const ddUrl = 'https://www.dnd5eapi.co/api/classes/';
let ddIndex = [];

const displayClasses = async (list) => {
  // creates articles and contents for each class
  for (let i = 0; i < list.length; i++) {
    const articleElement = document.createElement('article');

    // header - Class Name
    const h3Element = document.createElement('h3');
    h3Element.textContent = list[i].name;

    // List - Hit Die
    const ulElement = document.createElement('ul');
    const liElement = document.createElement('li');
    liElement.textContent = `Hit Die: ${list[i].hit_die}`;

    // proficiency lists
    const liProficiency = document.createElement('li');
    liProficiency.textContent = `Proficiencies: ${list[i].proficiencies.length}`;
    const ulProficiency = document.createElement('ul');
    ulProficiency.setAttribute('class', 'proficiencies');

    for (let ii = 0; ii < list[i].proficiencies.length; ii++) {
      ulProficiency.innerHTML += `<li>${list[i].proficiencies[ii].name}</li>`;
    }

    articleElement.appendChild(h3Element);
    articleElement.appendChild(ulElement);
    ulElement.appendChild(liElement);
    ulElement.appendChild(liProficiency);
    liProficiency.appendChild(ulProficiency);
    characterElement.appendChild(articleElement);
  }
};

const createIndex = async (url) => {
  // gets all class names to create a classList
  let data = await getInfo(url);
  let data1 = data.results;

  for (let i = 0; i < data1.length; i++) {
    let data2 = await getInfo(`${url}${data1[i].index}`);
    ddIndex[i] = data2;
  }
  displayClasses(ddIndex);
};

// getInfo will grab api data from a url source and convert to json
const getInfo = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

const reset = () => {
  characterElement.innerHTML = '';
};

/* Choose a Class by Hit Die Function */
const chooseClass = async (list) => {
  reset();

  const ddValue = document.getElementById('ddClass').value;
  switch (ddValue) {
    case 'high':
      const highDie = list.filter((classDie) => classDie.hit_die > 8);
      displayClasses(highDie);
      break;
    case 'medium':
      const medDie = list.filter((classDie) => classDie.hit_die == 8);
      displayClasses(medDie);
      break;
    case 'low':
      const lowDie = list.filter((classDie) => classDie.hit_die < 8);
      displayClasses(lowDie);
      break;
    case 'all':
      displayClasses(list);
      break;
  }
};

createIndex(ddUrl);

/* Event Listener */
document.getElementById('ddClass').addEventListener('change', () => {
  chooseClass(ddIndex);
});
