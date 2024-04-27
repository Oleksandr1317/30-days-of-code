let contry_textLength = countries.length
const total_number_country = document.querySelector(`.total-number-country`)
const textContentForH2Element = total_number_country.textContent + contry_textLength
total_number_country.textContent = textContentForH2Element

function create_country_card(countries) {
    const countries_cards = document.querySelector(`.countries-cards`)
    countries_cards.innerHTML = ''
    countries.forEach(element => {
        const card = document.createElement(`div`);
        card.classList.add(`card-country`)
        const country_name = document.createElement(`p`)
        country_name.classList.add(`country-name-card`)
        country_name.textContent = element
        card.appendChild(country_name)
        countries_cards.appendChild(card)
    });
}

create_country_card(countries)

const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const sortOrder = icon.classList.contains('fa-arrow-up-a-z') ? 'az' : 'za'; 

    if (sortOrder === 'az') {
        icon.classList.remove('fa-arrow-up-a-z');
        icon.classList.add('fa-arrow-up-z-a');
        countries.sort((a, b) => a.localeCompare(b)); 
    } else {
        icon.classList.remove('fa-arrow-up-z-a');
        icon.classList.add('fa-arrow-up-a-z');
        countries.sort((a, b) => b.localeCompare(a));
    }
    create_country_card(countries);
});

const statring_button = document.querySelector(`#statring-button`)
const anyWordButton = document.querySelector('#with-any-word-button');
const inputEl = document.querySelector(`#input-el`);
const starts_or_contain = document.querySelector(`.starts-or-contain`)

let startsWith = false;
let anyWord = false;

statring_button.addEventListener(`click`,function() {
    startsWith = true;
    anyWord = false;
    if(startsWith) {
        statring_button.style.backgroundColor = `rgb(164, 89, 255)`
        statring_button.style.padding = `0.6rem`
        statring_button.style.fontWeight = `bold`
        statring_button.style.boxShadow = `5px 2px 5px rgba(0, 0, 0, 0.5)`

        anyWordButton.style.backgroundColor = '';
        anyWordButton.style.padding = '';
        anyWordButton.style.fontWeight = '';
        anyWordButton.style.boxShadow = '';
    }
});

anyWordButton.addEventListener('click',function() {
    startsWith = false;
    anyWord = true;
    if(anyWord) {
        anyWordButton.style.backgroundColor = `rgb(164, 89, 255)`
        anyWordButton.style.padding = `0.6rem`
        anyWordButton.style.fontWeight = `bold`
        anyWordButton.style.boxShadow = `5px 2px 5px rgba(0, 0, 0, 0.5)`

        statring_button.style.backgroundColor = ''; 
        statring_button.style.padding = '';
        statring_button.style.fontWeight = '';
        statring_button.style.boxShadow = '';
    }
})

inputEl.addEventListener('input', function() {
    const inputValue = inputEl.value.trim().toLowerCase();
    
    if (startsWith) {
        const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue));
        create_country_card(filteredCountries);
        
        let filteredLen = filteredCountries.length;
        let value = inputEl.value;
        
        starts_or_contain.style.display = 'block';
        starts_or_contain.innerHTML = `Countries start with <span class="value">${value}</span> are <span class="filteredLen">${filteredLen}</span>`;
    } else if (anyWord) {
        const filteredCountries = countries.filter(country => country.toLowerCase().includes(inputValue));
        create_country_card(filteredCountries);
        
        let filteredLen = filteredCountries.length;
        let value = inputEl.value;
        
        starts_or_contain.style.display = 'block';
        starts_or_contain.innerHTML = `Countries contain <span class="value">${value}</span> are <span class="filteredLen">${filteredLen}</span>`;
    }
});