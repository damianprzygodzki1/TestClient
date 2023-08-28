import axios from 'axios';
import { getAllCountries, getAllCountriesByName } from './api';

jest.mock("axios");

describe('countryService', () => {
    it('getAllCountries should fetch all countries', async () => {
        const data = [{
            name: { common: "Afghanistan" }
        }];

        axios.get.mockResolvedValueOnce({data});

        const countries = await getAllCountries();

        expect(countries).toEqual(data);
    });

    it('getAllCountries should handle errors', async () => {
        axios.get.mockRejectedValueOnce(new Error());

        await expect(getAllCountries()).rejects.toThrow();
    });

    it('getAllCountriesByName should fetch all countries', async () => {
        const data = [{
            name: { common: "Afghanistan" }
        }];

        axios.get.mockResolvedValueOnce({data});

        const countries = await getAllCountriesByName("af");

        expect(countries).toEqual(data);
    });

    it('getAllCountriesByName should handle errors', async () => {
        axios.get.mockRejectedValueOnce(new Error());

        await expect(getAllCountriesByName()).rejects.toThrow();
    });
});