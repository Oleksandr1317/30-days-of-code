const population_button = document.querySelector(`#population`)
const languages_button = document.querySelector(`#languages`)
population_button.addEventListener(`click`,create_population_stat)
languages_button.addEventListener(`click`,create_language_stat)

function create_population_stat() {
        const world_population = countries_data.reduce((acc,country) => {
            return acc + country.population
        },0);

        console.log(world_population)

        const formatted_population = world_population.toLocaleString();

        const sortedCountry = countries_data.sort((a,b) => b.population - a.population);

        const top9country = sortedCountry.slice(0,9);


        console.log(top9country)

        const worldDiv = document.createElement('div');
        const worldName = document.createElement('p');
        const worldPop = document.createElement('p');
        const worldGraph = document.createElement('div');
        const c_div = document.createElement(`div`)
        c_div.appendChild(worldGraph)
        worldName.textContent = "World";
        worldPop.textContent = formatted_population;
        worldDiv.appendChild(worldName);
        worldDiv.appendChild(c_div);
        worldDiv.appendChild(worldPop);

        c_div.style.width = `65rem`
        c_div.style.marginRight = `1rem`

        worldName.style.width = `10rem`

        worldDiv.style.display = `flex`
        worldDiv.style.alignItems = 'center';
    
        worldGraph.style.backgroundColor = 'orange';
        const worldGraphWidth = (world_population / 7758589152) * 100 + '%';
        worldGraph.style.width = worldGraphWidth;
        worldGraph.style.height = '20px';
    
        const top9Div = document.createElement('div');
        top9Div.id = `top9div`
        top9country.forEach(country => {
            const countryDiv = document.createElement('div');
            const countryName = document.createElement('p');
            const countryPop = document.createElement('p');
            const countryGraph = document.createElement('div');
            const graph_cont = document.createElement(`div`)
            graph_cont.appendChild(countryGraph)
            countryName.textContent = country.name;
            countryPop.textContent = country.population.toLocaleString();
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(graph_cont);
            countryDiv.appendChild(countryPop);
            top9Div.appendChild(countryDiv);

            countryName.style.width = `10rem`

            countryDiv.style.display = 'flex';
            countryDiv.style.alignItems = 'center';

            graph_cont.style.width = `65rem`
            graph_cont.style.marginRight = `1rem`
    
            countryGraph.style.backgroundColor = 'orange';
            const countryGraphWidth = (country.population / 7758589152) * 100 + '%';
            countryGraph.style.width = countryGraphWidth;
            countryGraph.style.height = '20px';
        });
    
        const container_div = document.createElement('div');
        container_div.appendChild(worldDiv);
        container_div.appendChild(top9Div);
        const mainDiv = document.querySelector('.statistic-main');
        mainDiv.innerHTML = ``
        mainDiv.appendChild(container_div);
        container_div.style.display = `flex`
        container_div.style.flexDirection = `column`
        container_div.style.alignItems = `center`
        container_div.style.justifyContent = `center`

        const p_el = document.querySelector(`#stat-paragraph`)
        p_el.textContent = `World Population`
}

create_population_stat()


function create_language_stat() {
    const languageCount = {};
    const totalLanguages = new Set();

    countries_data.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount[language]) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
            totalLanguages.add(language);
        });
    });

    const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);
    const totalLanguageCount = totalLanguages.size;

    console.log(totalLanguageCount)

    const topLanguages = sortedLanguages.slice(0, 9);

    const languageDiv = document.createElement('div');
    languageDiv.style.display = 'flex';
    languageDiv.style.flexDirection = 'column';
    languageDiv.style.alignItems = 'center';


    topLanguages.forEach(language => {
        const lang_div = document.createElement(`div`)
        const languageName = document.createElement('p');
        languageName.textContent = `${language[0]}`;
        lang_div.appendChild(languageName);
        languageName.style.width = `10rem`

        const languageGraphCont = document.createElement(`div`);

        const languageGraph = document.createElement('div');
        languageGraph.style.backgroundColor = 'orange';

        languageGraph.style.width = (language[1] / totalLanguageCount) * 100 + '%';
        languageGraph.style.height = '20px';
        languageGraphCont.appendChild(languageGraph);
        languageGraphCont.style.marginRight = `1rem`;

        lang_div.appendChild(languageGraphCont)
        languageGraphCont.style.width = `65rem`

        const languageCountElement = document.createElement('p');
        languageCountElement.textContent = `${language[1]}`;
        lang_div.appendChild(languageCountElement);

        languageDiv.appendChild(lang_div)
        lang_div.style.display = `flex`
        lang_div.style.alignItems = `center`
        lang_div.style.justifyContent = `center`

        lang_div.style.width = `100%`
    });

    const mainDiv = document.querySelector('.statistic-main');
    mainDiv.innerHTML = '';
    mainDiv.appendChild(languageDiv);

    const p_el = document.querySelector(`#stat-paragraph`)
        p_el.textContent = `World Languages`
}

