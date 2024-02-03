/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: 'Nina Saunders',
  photo: 'images/nina-smallmouth.jpg',
  favoriteFoods: ['Steak', 'Brussel Sprouts', 'Lemongrass Chicken', 'Bacon'],
  hobbies: ['Hiking', 'Fishing', 'Walking', 'Reading'],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Idaho Falls',
    length: '6 Years',
  },
  {
    place: 'Post Falls',
    length: '17 Years',
  },
  {
    place: 'Yakima',
    length: '7 Years',
  },
  {
    place: 'Sandpoint',
    length: '4 Years',
  },
  {
    place: 'Spokane',
    length: '6 Years',
  }
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let addFood = document.createElement('li');
  addFood.textContent = food;
  document.getElementById('favorite-foods').appendChild(addFood);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let addHobby = document.createElement('li');
  addHobby.textContent = hobby;
  document.getElementById('hobbies').appendChild(addHobby);
});

/* Places Lived DataList */

const placeElement = document.getElementById('places-lived');
const addPlaces = myProfile.placesLived.map(
  (places) =>
    `<dt>${places.place}</dt>
      <dd>${places.length}</dd>`
);
placeElement.innerHTML = addPlaces.join('');
