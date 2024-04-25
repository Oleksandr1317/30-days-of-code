function click_in_languages() {
    let graph_title = document.querySelector(`.graph-title`)
    graph_title.textContent = `10 most Spoken languages in the world`
    createCountryLanguageElements(top10);
}

const langCount = {};

countries_data.forEach(country => {
    country.languages.forEach(language => {
        if (langCount[language]) {
            langCount[language]++;
        } else {
            langCount[language] = 1;
        }
    })
})

const langArray = Object.entries(langCount)

langArray.sort((a,b) => b[1] - a[1])

const top10 = langArray.slice(0,10)

const createCountryLanguageElements = (top10) => {
    const container = document.getElementById('countries-container');
    container.style.display = `block`
    container.innerHTML = '';

    top10.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.classList.add('country');

        const name_container = document.createElement('div');
        name_container.classList.add('name-container');
        const nameElement = document.createElement('span');
        nameElement.classList.add('name');
        nameElement.textContent = country[0];
        name_container.appendChild(nameElement);

        const stat_cont = document.createElement('div');
        stat_cont.classList.add('stat-container');
        const stat = document.createElement('div');
        stat.classList.add('stat');
        const languagesPercentage = (country[1] / 100) * 100;
        stat.style.width = `${languagesPercentage}%`;
        stat_cont.appendChild(stat);

        const population_cont = document.createElement('div');
        population_cont.classList.add('population-cont');
        const populationElement = document.createElement('span');
        populationElement.classList.add('population');
        populationElement.textContent = country[1];
        population_cont.appendChild(populationElement);

        countryElement.appendChild(name_container);
        countryElement.appendChild(stat_cont);
        countryElement.appendChild(population_cont);

        container.appendChild(countryElement);
    });
};

const buttonLanguage = document.querySelector(`.languages`)

buttonLanguage.addEventListener(`click`,click_in_languages)
