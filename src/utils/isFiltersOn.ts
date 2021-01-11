export const isFiltersOn = <T>(filters: T) => Object.values(filters).some((val) => val === true);
