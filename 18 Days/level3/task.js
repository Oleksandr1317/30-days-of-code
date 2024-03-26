// t 1

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatData =  async () => {
    try {
        const response = await fetch(catsAPI);
        const data = await response.json();

        let totalWeight = 0;
        let catCount = 0;

        data.forEach(cat => {
            if(cat.weight.metric) {
                const weight = parseFloat(cat.weight.metric.split(' - ')[0]);
                totalWeight += weight;
                catCount++;
            }
        });
        const averageWeight = totalWeight / catCount;
        console.log('Average cats weight: ', averageWeight.toFixed(2), 'kg');

    } catch (error) {
        console.error('Error:', error);
    }
};

fetchCatData();

// t 2

const countriesAPI = 'https://restcountries.com/v2/all'

const FetchCountryData = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();

        data.sort((a,b) => b.area - a.area);

        const topTenCounry = data.slice(0,10);

        topTenCounry.forEach((country,index) => {
            console.log(`${index + 1}. ${country.name}: ${country.area} km2`);
        })
    } catch (error) {
        console.error(error)
    }
}

FetchCountryData();