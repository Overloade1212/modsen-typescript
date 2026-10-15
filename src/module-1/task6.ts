export class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    if (!name.trim()) {
      throw new Error('Name cannot be empty');
    }
    this.name = name;
  }
}

const person = new Person('Dmitry');
console.log(person.getName());

person.setName('Alexey');
console.log(person.getName());

