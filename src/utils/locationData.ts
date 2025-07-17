import { Country, State, City } from 'country-state-city';

// Get country flag emoji from country code
const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const getCountriesList = () => {
  return Country.getAllCountries()
    .map(country => ({
      value: country.isoCode,
      label: `${getCountryFlag(country.isoCode)} ${country.name}`
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};

export const getStatesByCountry = (countryCode: string) => {
  const states = State.getStatesOfCountry(countryCode);
  return states.map(state => ({
    value: state.isoCode,
    label: state.name
  })).sort((a, b) => a.label.localeCompare(b.label));
};

export const getCitiesByState = (countryCode: string, stateCode: string) => {
  const cities = City.getCitiesOfState(countryCode, stateCode);
  return cities.map(city => ({
    value: city.name,
    label: city.name
  })).sort((a, b) => a.label.localeCompare(b.label));
};

// Fallback to cities by country if no state is selected
export const getCitiesByCountry = (countryCode: string) => {
  const cities = City.getCitiesOfCountry(countryCode);
  return cities.map(city => ({
    value: city.name,
    label: city.name
  })).sort((a, b) => a.label.localeCompare(b.label));
};