import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountriesFiltered = async (name, maxPopulation, dir, maxEntries) => {
    let data = name ? await getAllCountriesByName(name) : await getAllCountries();

    if(maxPopulation) {
        data = filterByPopulation(data, maxPopulation);
    }

    if(dir) {
        data = sortByName(data, dir);
    }

    if(maxEntries && !Number.isNaN(maxEntries)) {
        data = limit(data, maxEntries);
    }

    return data;
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

const sortByName = (data, dir) => {
    const desc = String(dir).toLowerCase() === 'descend';
    data.sort((a, b) => a.name.common < b.name.common ?  -1 : 1);

    return desc ? data.reverse(): data;
}

const limit = (data, maxEntries) => {
    return data.slice(0, maxEntries);
}

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