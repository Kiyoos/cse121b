/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];
const templeUrl =
  'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement('article');

    // h3 - names of temples
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;

    // img - images of temples
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', temple.imageUrl);
    imgElement.setAttribute('alt', temple.location);

    // adding the h3 and img elements to the article elements
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    templeList = await response.json();
    console.log(templeList);
    displayTemples(templeList);
  }
};

/* reset Function */
const reset = () => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById('filtered').value;
  switch (filter) {
    case 'utah':
      const utahTemples = temples.filter((temple) =>
        temple.location.includes('Utah')
      );
      displayTemples(utahTemples.sort(sortTemple));
      break;
    case 'notutah':
      const notUtTemples = temples.filter(
        (temple) => !temple.location.includes('Utah')
      );
      displayTemples(notUtTemples.sort(sortTemple));
      break;
    case 'older':
      const year = new Date(1950, 0, 1);
      const oldTemples = temples.filter(
        (temple) => Date.parse(temple.dedicated) < year
      );
      displayTemples(oldTemples.sort(sortTemple));
      break;
    case 'all':
      displayTemples(temples.sort(sortTemple));
      break;
  }
};

const sortTemple = (a, b) => {
  if (a.templeName < b.templeName) {
    return -1;
  } else if (a.templeName > b.templeName) {
    return 1;
  } else return 0;
};

getTemples(templeUrl);

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
  filterTemples(templeList);
});
