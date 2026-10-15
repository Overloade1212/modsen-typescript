export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

interface User {
  id: number;
  name: string;
  email: string;
}

const userUpdate: MyPartial<User> = {
  name: 'Ivan', 
};

export function throwError(message: string): never {
  throw new Error(message);
}

export function runForever(): never {
  while (true) {
  }
}