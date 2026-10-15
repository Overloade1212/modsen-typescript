export function combine(a: number, b: number): number;
export function combine(a: string, b: string): string;
export function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }

  throw new Error('Arguments must be either both numbers or both strings');
}

const sum = combine(10, 25);
const text = combine('Hello, ', 'world!');

console.log(sum);
console.log(text);