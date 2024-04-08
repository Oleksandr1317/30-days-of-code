const bodyElement = document.body;
bodyElement.style.fontFamily = `sans-serif`;

const containerDiv = document.createElement(`div`);
document.body.appendChild(containerDiv);
containerDiv.setAttribute(`id`, `container`);
containerDiv.style.display = `flex`;
containerDiv.style.flexDirection = `column`;
containerDiv.style.alignItems = 'center';

const h1Elements = document.createElement(`h1`);
containerDiv.appendChild(h1Elements);
h1Elements.id = `title`;
// styles
h1Elements.textContent = `Number Generator`;
h1Elements.style.margin = `0.3rem auto 0.5rem`;

const pElements = document.createElement(`p`);
containerDiv.appendChild(pElements);
pElements.id = `NameOfCourse`;
// styles
pElements.textContent = `30DaysOfJavaScript:DOM Day 2`;
pElements.style.textDecoration = `underline`;
pElements.style.fontSize = `1rem`
pElements.style.margin = `0.1rem auto`;

const pAuthor = document.createElement(`p`);
containerDiv.appendChild(pAuthor);
pAuthor.id = `authorP`;
// styles
pAuthor.textContent = `Author: Oleksandr`;
pAuthor.style.textDecoration = `underline`;
pAuthor.style.margin = `0.1rem auto 1rem`;
pAuthor.style.fontSize = `0.7rem`
pAuthor.style.fontWeight = `100`

// INPUT/BUTTON element
const divInput = document.createElement(`div`)
containerDiv.appendChild(divInput);
divInput.style.marginBottom = `1rem`;
divInput.style.width = `42rem`

const inputElement = document.createElement(`input`);
divInput.appendChild(inputElement);
inputElement.placeholder = `Generate more numbers...`
inputElement.style.marginRight = `0.7rem`;
inputElement.style.fontSize = `1rem`;
inputElement.style.border = `0.1rem solid rgb(104,200,109)`
inputElement.style.padding = `0.20rem 18rem 0.20rem 0.6rem`
inputElement.style.borderRadius = `0.2rem`

const generateButton = document.createElement(`button`)
divInput.appendChild(generateButton);
generateButton.textContent = `Generate numbers`;
generateButton.style.fontSize = `1rem`;
generateButton.style.backgroundColor = `rgb(104,200,109)`;
generateButton.style.border = `none`;
generateButton.style.padding = `0.3rem 0.3rem 0.3rem 0.3rem`
generateButton.style.color = `white`
generateButton.style.borderRadius = `0.2rem`


const divNumbers = document.createElement(`div`);
containerDiv.appendChild(divNumbers);
divNumbers.id = `numbers-container`;
// styles
divNumbers.style.display = `grid`;
divNumbers.style.gridTemplateColumns = `repeat(9, calc(16.666% - 65px))`; 
divNumbers.style.gridGap = `10px`;
divNumbers.style.gridRowGap = `2px`

generateButton.addEventListener('click',() => {

    divNumbers.innerHTML = ``

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    
    for (let i = 0; i <= inputElement.value; i++) {
        const cell = document.createElement(`div`);
        // styles
        cell.style.height = `40px`;
        cell.style.width = `80px`;
        cell.style.padding = `12px 0 0 0`
        cell.style.boxSizing = `border-box`;
        cell.style.fontSize = `1rem`
        cell.style.marginRight = `4px`
    
        if (i % 2 === 0) {
            cell.style.backgroundColor = `rgb(104,200,109)`;
        } else {
            cell.style.backgroundColor = `rgb(245, 224, 93)`;
        }
    
        if (isPrime(i)) {
            cell.style.backgroundColor = `rgb(255, 59, 59)`;
        }
        cell.classList.add(`cell`);
        // styles
        cell.textContent = i;
        cell.style.display = `flex`;
        cell.style.justifyContent = `center`
        cell.style.color = `white`;
        cell.style.fontWeight = `bold`
        
        divNumbers.appendChild(cell);
    }
})
