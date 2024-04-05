const countriesAPI = 'https://restcountries.com/v2/all'
let countryName = [];

// get the names of the countries
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        countryName = data.map(country => country.name);
        pElements.textContent = `Total Number of countries: ${countryName.length}`;

        const divCountries = document.createElement('div');
        divElement.appendChild(divCountries);

        divCountries.style.display = `grid`;
        divCountries.style.gridTemplateColumns = `repeat(6, calc(16.666% - 20px))`;
        divCountries.style.gridGap = `0.4rem`;
        divCountries.style.gridRowGap = `0.4rem`;
        divCountries.style.marginLeft = `4rem`

        countryName.forEach(country => {
            const cell = document.createElement('div');
            cell.textContent = country;

            // cell.style.border = '1px solid black';
            cell.style.boxShadow = `0 0 10px rgba(0,0,0,0.1)`;
            cell.style.borderRadius = `0.2rem`
            cell.style.padding = '5px';
            cell.style.height = `6rem`;
            cell.style.display = `flex`;
            cell.style.justifyContent = `center`;
            cell.style.alignItems = `center`;
            cell.style.textAlign = `center`;

            divCountries.appendChild(cell);
        });
    })
    .catch(error => console.error(error));

// worked with HTML elements

// body element
const bodyElement = document.body;
// styles
bodyElement.style.fontFamily = `serif`;

// main div element
const divElement = document.createElement(`div`);
bodyElement.appendChild(divElement);
// styles
divElement.style.display = `flex`;
divElement.style.flexDirection = `column`;
divElement.style.alignItems = `center`;

// h1 element
const h1Elements = document.createElement(`h1`);
divElement.appendChild(h1Elements);
// styles
h1Elements.textContent = `WORLD COUNTRIES LIST`;
h1Elements.style.marginBottom = `0.1rem`

// p element
const pElements = document.createElement(`p`);
divElement.appendChild(pElements);
// styles
pElements.style.fontSize = `0.85rem`;
pElements.style.fontWeight = `bold`;
pElements.style.marginTop = `0.1rem`;
pElements.style.marginBottom = `0.1rem`;

// p Course element
const pCourseElement = document.createElement(`p`);
divElement.appendChild(pCourseElement);
// styles
pCourseElement.textContent = `30DaysOfJavaScript:DOM-Day-2`;
pCourseElement.style.fontSize = `0.7rem`;
pCourseElement.style.fontWeight = `normal`;
pCourseElement.style.marginTop = `0.1rem`;
pCourseElement.style.marginBottom = `0.1rem`;

// p Author
const pAuthor = document.createElement(`p`);
divElement.appendChild(pAuthor);
// styles
pAuthor.textContent = `Author: Oleksandr`;
pAuthor.style.fontSize = `0.7rem`;
pAuthor.style.fontWeight = `normal`;
pAuthor.style.fontStyle = `italic`
pAuthor.style.marginTop = `0.1rem`;
pAuthor.style.marginBottom = `3rem`;
