import axios from 'axios';
import { getAllCountries } from './api';

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
});