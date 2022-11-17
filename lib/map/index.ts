export const map = <T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U
): U[] => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i], i, array));
  }

  return newArray;
};
