// STYLES
document.body.style.fontFamily = `Montserrat`;
// body element
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundImage = 'url("galaxy.gif")';
bodyElement.style.display = `flex`;
bodyElement.style.flexDirection = `column`;
bodyElement.style.justifyContent = `center`;
bodyElement.style.alignItems = `center`;

// h1 element
let h1Element = document.querySelector(`h1`);
h1Element.style.color = `white`;
h1Element.style.fontSize = `2.7rem`;
h1Element.style.letterSpacing = `0.2rem`;
h1Element.style.marginBottom = `5rem`;

// div - calculate content 
let divCC = document.querySelector(`.calculate-content`);
divCC.style.display = `flex`;
divCC.style.justifyContent = `center`;
// input
let inputElement = document.querySelector(`#mass`);
inputElement.style.fontSize = `0.9rem`;
inputElement.style.padding = `0.9rem 2rem 0.9rem 1rem`;
inputElement.style.borderRadius = `0.3rem`;
inputElement.style.margin = `0rem 0.5rem 0rem 1rem`;
inputElement.style.fontWeight = `normal`;
// select
let selectElement = document.querySelector(`select`);
selectElement.style.fontSize = `0.8rem`;
selectElement.style.padding = `0.4rem 0.4rem 0.4rem 0.4rem`;
selectElement.style.borderRadius = `0.4rem`;
selectElement.style.margin = `0rem 0.5rem 0rem 0rem`;
selectElement.style.fontWeight = `bold`;
selectElement.style.color = `rgb(189, 189, 189)`;

//button
let buttonElement = document.querySelector(`button`);
buttonElement.style.fontSize = `0.9rem`;
buttonElement.style.padding = `0.7rem 0.4rem 0.7rem 0.3rem`;
buttonElement.style.borderRadius = `0.4rem`;
buttonElement.style.margin = `0rem 0.5rem 0rem 0rem`;
buttonElement.style.fontWeight = `bold`;
buttonElement.style.backgroundColor = `rgba(255, 255, 255, 0.6)`;
buttonElement.style.color = `white`;

buttonElement.addEventListener('mouseenter', function() {
    buttonElement.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
});

buttonElement.addEventListener('mouseleave', function() {
    buttonElement.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
});

let massInNewtons = {
    'Mercury': 3.7,
    'Venus': 8.87,
    'Earth': 9.81,
    'Moon': 1.62,
    'Mars': 3.71,
    'Jupiter': 24.79,
    'Saturn': 10.44,
    'Uranus': 8.69,
    'Neptun': 11.15,
    'Pluto': 0.62
};

let planets = Object.keys(massInNewtons);

planets.forEach(function(planetName) {
    let option = document.createElement('option');
    option.value = planetName.toLowerCase();
    option.textContent = planetName.toUpperCase();
    selectElement.appendChild(option);
});

const flexContainer = document.querySelector(`.flex-container`);
flexContainer.style.marginTop = `3rem`;
flexContainer.style.width = `80rem`;
flexContainer.style.borderRadius = `1.6rem`;
flexContainer.style.backgroundColor = `rgba(255,255,255,0.12)`;
flexContainer.style.display = `flex`;
flexContainer.style.alignItems = `center`;
flexContainer.style.justifyContent = `center`;

const image = document.querySelector(`.flex-item-image img`);
image.style.height = `25rem`;
image.style.width = `25rem`;
image.style.padding = `1rem 0rem 1rem 0rem`;

function calculateMass() {
    const inputValue = parseFloat(inputElement.value);
    const selectValue = selectElement.value.charAt(0).toUpperCase() + selectElement.value.slice(1);
    let res = inputValue * massInNewtons[selectValue];
    const pDect = document.querySelector('.flex-item-description p'); 
    const paragraphWeight = document.createElement('p'); 
    
    const divImage = document.querySelector(`.flex-item-image`);
    while (divImage.firstChild) {
        divImage.removeChild(divImage.firstChild);
    }

    const containerWithDescription = document.querySelector(`.flex-item-description`);
    while (containerWithDescription.firstChild) {
        containerWithDescription.removeChild(containerWithDescription.firstChild);
    }

    if (!isNaN(inputValue) && selectElement.value != 'none') {
        const image = document.createElement('img');
        image.style.height = `25rem`;
        image.style.width = `25rem`;
        image.style.padding = `1rem 0rem 1rem 0rem`;
        image.src = `./images/${selectValue.toLowerCase()}.png`;
        divImage.appendChild(image);

        containerWithDescription.style.backgroundColor = `rgba(255,255,255,0.12)`;
        containerWithDescription.style.color = `white`;
        containerWithDescription.style.width = `40rem`;
        containerWithDescription.style.height = `12rem`;
        containerWithDescription.style.display = `flex`;
        containerWithDescription.style.flexDirection = `column`;
        containerWithDescription.style.justifyContent = `center`;
        containerWithDescription.style.alignItems = `center`;
        containerWithDescription.style.marginLeft = `5rem`;

        let paragraphDescription = document.createElement(`p`);
        containerWithDescription.appendChild(paragraphDescription);
        paragraphDescription.style.fontSize = `1.2rem`;
        paragraphDescription.textContent = `The weight of the object ${selectValue}`;

        const containerWithWeight = document.createElement(`div`);
        containerWithDescription.appendChild(containerWithWeight);
        containerWithWeight.style.backgroundColor = `rgba(255,255,255,0.15)`;
        containerWithWeight.style.borderRadius = '50%';
        containerWithWeight.style.width = '100px'; 
        containerWithWeight.style.height = '100px'; 
        containerWithWeight.style.display = `flex`;
        containerWithWeight.style.justifyContent = `center`;
        containerWithWeight.style.alignItems = `center`;

        let paragraphWeight = document.createElement(`p`);
        containerWithWeight.appendChild(paragraphWeight);
        paragraphWeight.style.fontWeight = `bold`;
        paragraphWeight.textContent = `${res.toFixed(2)} N`;
    } else if (selectElement.value === `none` && !isNaN(inputValue)) {
        containerWithDescription.style.backgroundColor = `rgba(255,255,255,0.12)`;
        containerWithDescription.style.color = `white`;
        containerWithDescription.style.width = `40rem`;
        containerWithDescription.style.height = `3rem`;
        containerWithDescription.style.display = `flex`;
        containerWithDescription.style.flexDirection = `column`;
        containerWithDescription.style.justifyContent = `center`;
        containerWithDescription.style.alignItems = `center`;
        containerWithDescription.style.margin = `1.5rem 0rem 1.5rem 0rem`

        let paragraphDescription = document.createElement(`p`);
        containerWithDescription.appendChild(paragraphDescription);
        paragraphDescription.style.fontSize = `1.2rem`;
        paragraphDescription.textContent = `You did not choose a planet yet`;
    } else if (selectElement.value === `none` && isNaN(inputValue)) {
        containerWithDescription.style.backgroundColor = `rgba(255,255,255,0.12)`;
        containerWithDescription.style.color = `white`;
        containerWithDescription.style.width = `40rem`;
        containerWithDescription.style.height = `3rem`;
        containerWithDescription.style.display = `flex`;
        containerWithDescription.style.flexDirection = `column`;
        containerWithDescription.style.justifyContent = `center`;
        containerWithDescription.style.alignItems = `center`;
        containerWithDescription.style.margin = `1.5rem 0rem 1.5rem 0rem`

        let paragraphDescription = document.createElement(`p`);
        containerWithDescription.appendChild(paragraphDescription);
        paragraphDescription.style.fontSize = `1.2rem`;
        paragraphDescription.textContent = `Fill in the required fields`;
    }
     else {
        containerWithDescription.style.backgroundColor = `rgba(255,255,255,0.12)`;
        containerWithDescription.style.color = `white`;
        containerWithDescription.style.width = `40rem`;
        containerWithDescription.style.height = `3rem`;
        containerWithDescription.style.display = `flex`;
        containerWithDescription.style.flexDirection = `column`;
        containerWithDescription.style.justifyContent = `center`;
        containerWithDescription.style.alignItems = `center`;
        containerWithDescription.style.margin = `1.5rem 0rem 1.5rem 0rem`

        let paragraphDescription = document.createElement(`p`);
        containerWithDescription.appendChild(paragraphDescription);
        paragraphDescription.style.fontSize = `1.2rem`;
        paragraphDescription.textContent = `Mass is required`;
    }
}

buttonElement.addEventListener(`click`, calculateMass);


        containerWithDescription.style.backgroundColor = `rgba(255,255,255,0.12)`;
        containerWithDescription.style.color = `white`;
        containerWithDescription.style.width = `40rem`;
        containerWithDescription.style.height = `3rem`;
        containerWithDescription.style.display = `flex`;
        containerWithDescription.style.flexDirection = `column`;
        containerWithDescription.style.justifyContent = `center`;
        containerWithDescription.style.alignItems = `center`;
        containerWithDescription.style.margin = `1.5rem 0rem 1.5rem 0rem`

        let paragraphDescription = document.createElement(`p`);
        containerWithDescription.appendChild(paragraphDescription);
        paragraphDescription.style.fontSize = `1.2rem`;
        paragraphDescription.textContent = `Mass is required`;