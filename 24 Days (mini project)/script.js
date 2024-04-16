// STYLES
document.body.style.fontFamily = `Montserrat`
// body element
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundImage = 'url("galaxy.gif")';
bodyElement.style.display = `flex`
bodyElement.style.flexDirection = `column`
bodyElement.style.justifyContent = `center`
bodyElement.style.alignItems = `center`

// h1 element
let h1Element = document.querySelector(`h1`);
h1Element.style.color = `white`
h1Element.style.fontSize = `2.7rem`
h1Element.style.letterSpacing = `0.2rem`
h1Element.style.marginBottom = `5rem`

// div - calculate content 
let divCC = document.querySelector(`.calculate-content`);
divCC.style.display = `flex`
divCC.style.justifyContent = `center`
// input
let inputElement = document.querySelector(`#mass`)
inputElement.style.fontSize = `0.9rem`
inputElement.style.padding = `0.9rem 2rem 0.9rem 1rem`
inputElement.style.borderRadius = `0.3rem`
inputElement.style.margin = `0rem 0.5rem 0rem 1rem`
inputElement.style.fontWeight = `normal`
// select
let selectElement = document.querySelector(`select`)
selectElement.style.fontSize = `0.8rem`
selectElement.style.padding = `0.4rem 0.4rem 0.4rem 0.4rem`
selectElement.style.borderRadius = `0.4rem`
selectElement.style.margin = `0rem 0.5rem 0rem 0rem`
selectElement.style.fontWeight = `bold`
selectElement.style.color = `rgb(189, 189, 189)`

//button
let buttonElement = document.querySelector(`button`)
buttonElement.style.fontSize = `0.9rem`
buttonElement.style.padding = `0.7rem 0.4rem 0.7rem 0.3rem`
buttonElement.style.borderRadius = `0.4rem`
buttonElement.style.margin = `0rem 0.5rem 0rem 0rem`
buttonElement.style.fontWeight = `bold`
buttonElement.style.backgroundColor = `rgba(255, 255, 255, 0.6)`
buttonElement.style.color = `white`

buttonElement.addEventListener('mouseenter', function() {
    buttonElement.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
});

buttonElement.addEventListener('mouseleave', function() {
    buttonElement.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
});

let planets = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun', 'Pluto'];

planets.forEach(function(planetName) {
    let option = document.createElement('option');
    option.value = planetName.toLowerCase();
    option.textContent = planetName.toUpperCase();
    selectElement.appendChild(option);
});
