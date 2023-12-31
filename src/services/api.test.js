import axios from "axios";
import {
  getAllCountries,
  getAllCountriesByName,
  getAllCountriesFiltered,
} from "./api";

jest.mock("axios");

describe("countryService", () => {
  it("getAllCountries should fetch all countries", async () => {
    const data = [
      {
        name: { common: "Afghanistan" },
      },
    ];

    axios.get.mockResolvedValueOnce({ data });

    const countries = await getAllCountries();

    expect(countries).toEqual(data);
  });

  it("getAllCountries should handle errors", async () => {
    axios.get.mockRejectedValueOnce(new Error());

    await expect(getAllCountries()).rejects.toThrow();
  });

  it("getAllCountriesByName should fetch all countries", async () => {
    const data = [
      {
        name: { common: "Afghanistan" },
      },
    ];

    axios.get.mockResolvedValueOnce({ data });

    const countries = await getAllCountriesByName("af");

    expect(countries).toEqual(data);
  });

  it("getAllCountriesByName should handle errors", async () => {
    axios.get.mockRejectedValueOnce(new Error());

    await expect(getAllCountriesByName()).rejects.toThrow();
  });

  it("getAllCountriesFiltered should filter countries by milions of populations", async () => {
    const data = Array(3)
      .fill({
        name: { common: "Afghanistan" },
        population: 0,
      })
      .map((country, index) => ({ ...country, population: index * 10000000 }));

    axios.get.mockResolvedValueOnce({ data });

    const countries = await getAllCountriesFiltered(undefined, 20);
    expect(countries.length).toEqual(2);
  });

  it("getAllCountriesFiltered should sort countries by common name", async () => {
    const data = [
      {
        name: { common: "Aa" },
      },
      {
        name: { common: "Ba" },
      },
      {
        name: { common: "Ca" },
      },
    ];

    axios.get.mockResolvedValueOnce({ data });

    const countries = await getAllCountriesFiltered("", "", "descend");
    expect(countries).toEqual([
      {
        name: { common: "Ca" },
      },
      {
        name: { common: "Ba" },
      },
      {
        name: { common: "Aa" },
      }
    ]);
  });

  it("getAllCountriesFiltered should limit countries", async () => {
    const data = Array(10).fill({});

    axios.get.mockResolvedValueOnce({ data });

    const countries = await getAllCountriesFiltered("", "", "", "1");
    expect(countries.length).toEqual(1);
  });

  it("getAllCountriesFiltered should handle errors", async () => {
    axios.get.mockRejectedValueOnce(new Error());

    await expect(getAllCountriesFiltered(30)).rejects.toThrow();
  });
});
