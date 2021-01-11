const filtersData = [
  {
    title: 'gender',
    filters: ['male', 'female'],
  },
  {
    title: 'eye color',
    filters: ['black', 'blue', 'brown', 'red', 'yellow'],
  },
];

const filters = filtersData.reduce((acc: any, prev: any) => [...acc, ...prev.filters], []);
const filtersState = filters.reduce((acc: any, prev: any) => ({...acc, [prev]: false}), {});

export {filtersData, filters, filtersState};
