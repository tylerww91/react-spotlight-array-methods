// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceana
// REQS: use .filter

export const filterOceania = (countries) => {
  return countries.filter(({ continent }) => continent === 'Oceania');
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries whose name that include the letters 'au'
// REQS: use .filter

export const filterAu = (countries) => {
  return countries.filter(({ name }) => name.includes('au'));
};

// INPUT: the array of dogs from data.js
// OUTPUT: only dogs that are 2 years old or younger
// REQS: use .filter
export const filterYoungDogs = (dogs) => {
  return dogs.filter(({ age }) => age <= 2);
};

// INPUT: the array of dogs from data.js
// OUTPUT: a list of names of dogs that are 2 years old or younger
// REQS: use .filter AND .map OR use your filterYoungDogs function and a map
export const getYoungDogNames = (dogs) => {
  return filterYoungDogs(dogs).map(({ name }) => name);
};
