// ✨ OBJECT ✨

const person = {
  name: 'Dios',
  address: {
    city: 'Bien Hoa',
    country: 'Vietnam',
  },
};

// Object.assign
const updated = Object.assign({}, person, {
  name: 'Kitu',
  age: 30,
});
// Spread - Shallow copy
export const updatedObject = {
  ...person,
  name: 'Kitu',
};
updatedObject.address.city = 'HCM'; // This will mutate the original object

// ✨ ARRAY ✨
const numbers = [1, 2, 3];

// Add

// Spread
const added = [4, ...numbers];
// Slice
const index = numbers.indexOf(2);
const addedNum = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Remove
const removed = numbers.filter((n) => n !== 2);

// Update
const updatedArray = numbers.map((n) => (n === 2 ? 20 : n));
