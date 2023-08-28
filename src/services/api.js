import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountriesFiltered = async (name, maxPopulation) => {
    let countries = name ? await getAllCountriesByName(name) : await getAllCountries();

    if(maxPopulation) {
        countries = filterByPopulation(countries, maxPopulation);
    }
    return countries;
}

const getAllCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const filterByPopulation = (data, maxPopulation) => {
    return data.filter((country) => country.population < maxPopulation * 1000000);
};

const getAllCountriesByName = async (name) => {
    try {
        const response = await axios.get(`${BASE_URL}/name/${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {
    getAllCountries,
    getAllCountriesByName,
    getAllCountriesFiltered
};