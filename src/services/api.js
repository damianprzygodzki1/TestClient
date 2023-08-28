import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
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
    getAllCountriesByName
};