import mockCountries from '../models/MockCountries';

export const countriesMainPage = mockCountries.map((country: any) => {
  return {
    name: country.name,
    capital: country.localizations[0].capital,
    imageUrl: country.imageUrl,
  };
});
