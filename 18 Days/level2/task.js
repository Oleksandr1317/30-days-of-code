const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
let catNames = [];

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cats => {
            const {name} = cats;
            catNames.push(name)
        });
        console.log(catNames)
    })
    .catch(error => console.error(error))

