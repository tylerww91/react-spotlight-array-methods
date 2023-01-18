// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  //   for each country in countries, we are mapping through and returning country.name for each into a new array
  return countries.map((country) => {
    return country.name;
  });
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  return countries.map((country) => [country.name, country.iso2]);
};

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {
  return brands.map((brand) => brand.brand);
};
