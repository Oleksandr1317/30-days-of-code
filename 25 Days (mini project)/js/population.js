const countriesAPI = 'https://restcountries.com/v2/all';

const FetchCountryData = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();

        const worldPopulation = data.reduce((total, country) => total + country.population, 0);

        data.sort((a, b) => b.population - a.population);
        const topTenCountries = data.slice(0, 9);

        const populationArray = topTenCountries.map(country => ({
            name: country.name === 'United States of America' ? 'USA' : country.name === 'Russian Federation' ? 'Russia' : country.name,
            population: parseInt(country.population)
        }));

        populationArray.unshift({ name: 'World', population: worldPopulation });

        return populationArray;
    } catch (error) {
        console.log(`Error getting population : ` + error);
        return null;
    }
};

const createCountryElements = (data,worldPopulation) => {
    const container = document.getElementById('countries-container');
    container.style.display = `block`
    container.innerHTML = ''; 

    data.forEach(country => {
        const countryElement = document.createElement('div');
    countryElement.classList.add('country');

    const name_container = document.createElement('div');
    name_container.classList.add('name-container');
    const nameElement = document.createElement('span');
    nameElement.classList.add('name');
    nameElement.textContent = country.name;
    name_container.appendChild(nameElement);

    const stat_cont = document.createElement('div');
    stat_cont.classList.add('stat-container');
    const stat = document.createElement('div');
    stat.classList.add('stat');
    const popularityPercentage = (country.population / worldPopulation) * 100;
    stat.style.width = `${popularityPercentage}%`;
    stat_cont.appendChild(stat);

    const population_cont = document.createElement('div');
    population_cont.classList.add('population-cont');
    const populationElement = document.createElement('span');
    populationElement.classList.add('population');
    populationElement.textContent = country.population;
    population_cont.appendChild(populationElement);

    countryElement.appendChild(name_container);
    countryElement.appendChild(stat_cont);
    countryElement.appendChild(population_cont);

    container.appendChild(countryElement);
    });
};

async function click_in_population() {
    let graph_title = document.querySelector('.graph-title');
    graph_title.textContent = '10 most populated countries in the world';

    try {
        const populationData = await FetchCountryData();
        const worldPopulation = populationData.find(country => country.name === 'World').population;
        createCountryElements(populationData,worldPopulation);
    } catch (error) {
        console.error('Error:', error);
    }
}

const button = document.querySelector(`.population`)
button.addEventListener(`click`,click_in_population)