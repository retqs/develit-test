//import type...

export const filterUsers = (data: any[], filters: any) => {
  const filterKeys = Object.entries(filters)
    .filter(([_, value]) => value === true)
    .map(([key]) => key);

  const filtered = data
    .map((user: any) => {
      const regex = new RegExp(`^(${filterKeys.join('|')})`, 'gm');

      if (regex.test(user.gender) || regex.test(user.eye_color)) return user;
    })
    .filter((value: any) => value !== undefined);

  return filtered;
};
