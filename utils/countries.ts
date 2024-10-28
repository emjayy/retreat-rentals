import countries from "world-countries";

// helper function to format the countries data
export const formattedCountries = countries.map((country) => {
  return {
    code: country.cca2,
    name: country.name.common,
    flag: country.flag,
    location: country.latlng,
    region: country.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((country) => country.code === code);
};
