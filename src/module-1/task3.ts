export interface Car {
  brand: string;
  model: string;
  year: number;
}

export interface CarBrandOnly {
  brand: string;
}

export function getCar(car: Car | CarBrandOnly): string {
  if ('model' in car && 'year' in car) {
    return `Full info: ${car.brand} ${car.model}, Year: ${car.year}`;
  }

  return `Brand only: ${car.brand}`;
}

const myCar: Car = {
  brand: 'Audi',
  model: 'RS6',
  year: 2023,
};

const unknownCar: CarBrandOnly = {
  brand: 'Tesla',
};

console.log(getCar(myCar));      
console.log(getCar(unknownCar)); 