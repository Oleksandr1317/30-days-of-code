const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const { name, languages, capital, area, population } = country;
            console.log('Name:', name);
            console.log('Languages:', languages.map(lang => lang.name).join(', '));
            console.log('Capital:', capital);
            console.log(`Area:`,area);
            console.log(`Population:`,population);
            console.warn(`Next country`)
        });
    })
    .catch(error => console.error(error));
