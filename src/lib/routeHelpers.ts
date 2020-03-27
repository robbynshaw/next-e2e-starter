export const getBool = (val: string | string[] | undefined): boolean => {
  if (val && Array.isArray(val)) {
    val = val[0];
  }
  return val && (val as string).toLowerCase() === "true";
};

export const getString = (val: string | string[] | undefined): string => {
  if (val && Array.isArray(val)) {
    return val[0];
  }
  return val as string;
};
