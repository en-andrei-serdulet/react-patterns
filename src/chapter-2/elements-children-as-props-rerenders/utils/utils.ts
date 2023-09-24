export const wait = (ms: number) => {
  const start = Date.now();

  let now = start;

  while (now - start < ms) now = Date.now();
};

export const getCalculated = (value: string): string => {
  const roundValue = Math.floor(+value);
  return `${roundValue}px`;
};

export const getPosition = (val:number) => 150 - val / 2;