export const filter = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => unknown
): T[] => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Boolean(predicate(array[i], i, array))) newArray.push(array[i]);
  }

  return newArray;
};
