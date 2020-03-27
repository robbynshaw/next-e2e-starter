export const getBool = (val: string | string[] | undefined): boolean => {
  if (val && Array.isArray(val)) {
    const [inner] = val;
    return inner.toLowerCase() === 'true';
  }
  return val && (val as string).toLowerCase() === 'true';
};

export const getString = (val: string | string[] | undefined): string => {
  if (val && Array.isArray(val)) {
    const [inner] = val;
    return inner;
  }
  return val as string;
};
