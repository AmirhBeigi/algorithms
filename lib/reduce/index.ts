export const reduce = <T, U>(
  array: T[],
  callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue: U
): U => {
  let data = initialValue;

  for (let i = 0; i < array.length; i++) {
    data = callbackfn(data, array[i], i, array);
  }

  return data;
};
