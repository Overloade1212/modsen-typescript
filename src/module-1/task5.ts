export function sortAscending<T>(arr: T[]): T[] {
  return [...arr].sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

export type TypeByCondition<T extends boolean> = T extends true ? string : number;

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

const numbers = [5, 2, 8, 1, 4];
const sortedNumbers = sortAscending(numbers);

const words = ['banana', 'apple', 'cherry'];
const sortedWords = sortAscending(words);

const firstVal: TypeByCondition<true> = 'text';
const secondVal: TypeByCondition<false> = 42;

const user = {
  id: 1,
  name: 'Alex',
  role: 'admin',
};

const keys = getObjectKeys(user);

console.log(sortedNumbers);
console.log(sortedWords);
console.log(keys);