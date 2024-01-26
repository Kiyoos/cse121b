const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://picsum.photos/200');
newImg.setAttribute('alt', 'Image added by JavaScript');
document.body.appendChild(newImg);

const newSection = document.createElement('section');
newSection.innerHTML = '<h2>CSE 121b</h2><p>Wecome to JavaScript Language</p>';
document.body.appendChild(newSection);
