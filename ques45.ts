interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any additional properties
}

function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
  let car: Car = { manufacturer, model };

  args.forEach(arg => {
      Object.keys(arg).forEach(key => {
          car[key] = arg[key];
      });
  });

  return car;
}

let cars = createCar("Toyota", "Corolla", { color: "blue", year: 2022 }, { Feature: "sunroof" });

console.log(cars);
