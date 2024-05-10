function createCard(countries) {
    var country_div = document.querySelector('.countries-card');
    country_div.innerHTML = '';
    
    countries.forEach(value => {
        var cardDiv = document.createElement('div');
        cardDiv.classList.add('country-card');
        country_div.appendChild(cardDiv);
        var flag = document.createElement('img');
        flag.src = value.flag;
        flag.id = 'country-flag';
        var name = document.createElement('h2');
        name.textContent = value.name;
        name.id = 'country-name';
        var capital = document.createElement('p');
        capital.textContent = 'Capital: ' + value.capital;
        capital.id = 'country-capital';
        var languages = document.createElement('p');
        if (value.languages.length === 1) {
            languages.textContent = 'Language: ' + value.languages;
        } else {
            languages.textContent = 'Languages: ' + value.languages.join(", ");
        }
        languages.id = 'country-languages';
        var population = document.createElement('p');
        population.textContent = 'Population: ' + value.population;
        population.id = 'country-population';

        var head = document.createElement('div');
        head.id = 'header-in-card';
    
        var main = document.createElement('div');
        main.id = 'main-in-card';
    
        cardDiv.appendChild(head);
        cardDiv.appendChild(main);
        head.appendChild(flag);
        head.appendChild(name);
        main.appendChild(capital);
        main.appendChild(languages);
        main.appendChild(population);

        if (value.population == 0) {
            cardDiv.style.display = `none`
        } 
    });
}

createCard(countries_data);

var inputElement = document.querySelector('#country-name-input');
inputElement.addEventListener('input', function() {
    const inputValue = inputElement.value.trim().toLowerCase();
    const filteredCountries = countries_data.filter(country => country.name.toLowerCase().startsWith(inputValue));
    createCard(filteredCountries);
});


function sortCountries(countries, sortBy, sortOrder) {
    switch(sortBy) {
        case 'name':
            countries.sort((a, b) => sortOrder * a.name.localeCompare(b.name));
            break;
        case 'capital':
            countries.sort((a, b) => {
                const capitalA = a.capital || '';
                const capitalB = b.capital || '';
                return sortOrder * capitalA.localeCompare(capitalB);
            });
            break;
            break;
        case 'population':
            countries.sort((a, b) => sortOrder * (a.population - b.population));
            break;
        default:
            break;
    }
}

const sortOrder = {
    name: 1, 
    capital: 1,
    population: 1
};

document.getElementById('name-button').addEventListener('click', function() {
    sortOrder.name *= -1;
    sortCountries(countries_data, 'name', sortOrder.name);
    createCard(countries_data);
    toggleButtonTextAndDirection('name-button', 'name');
});

document.getElementById('capital-button').addEventListener('click', function() {
    sortOrder.capital *= -1;
    sortCountries(countries_data, 'capital', sortOrder.capital);
    createCard(countries_data);
    toggleButtonTextAndDirection('capital-button', 'capital');
});

document.getElementById('population-button').addEventListener('click', function() {
    sortOrder.population *= -1;
    sortCountries(countries_data, 'population', sortOrder.population);
    createCard(countries_data);
    toggleButtonTextAndDirection('population-button', 'population');
});

const sortDirection = {
    name: 1, 
    capital: 1,
    population: 1
};

function toggleButtonTextAndDirection(buttonId, sortBy) {
    for (const key in sortDirection) {
        if (key !== sortBy) {
            const otherButton = document.getElementById(key + '-button');
            otherButton.textContent = key.toUpperCase();
        }
    }

    const button = document.getElementById(buttonId);
    sortDirection[sortBy] *= -1; 

    if (sortDirection[sortBy] === 1) {
        button.textContent = sortBy.toUpperCase() + ' ▼'; 
    } else {
        button.textContent = sortBy.toUpperCase() + ' ▲'; 
    }
}