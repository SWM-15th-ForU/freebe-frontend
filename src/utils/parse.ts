export const arrayToObject = <T extends object>(
  arr: T[],
): { [key: string]: T } => {
  return arr.reduce(
    (acc, item, index) => {
      acc[index + 1] = item;
      return acc;
    },
    {} as { [key: string]: T },
  );
};

export const objectToArray = <T extends object>(
  object: T,
  callback?: (arr: [string, T][]) => any[],
): any[] => {
  const parsedArray = Object.entries(object);
  return callback ? callback(parsedArray) : parsedArray;
};
