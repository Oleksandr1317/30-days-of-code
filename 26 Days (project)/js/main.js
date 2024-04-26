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
