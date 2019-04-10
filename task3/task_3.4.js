/*
Cars
Now we will create a car assembly shop.
It is necessary to make a chain of functions
that will add new properties-details to the object of the future car.
Need to:
- transfer object to each of function,
- add property,
- return the original object with new property.*/

function addEngine(obj) {
  obj.engine = {
    model: "AMR-250-90  04.2019",
    type: "AC",
    weight: 150,
    power: 210
  };
  return obj;
}

function addBattery(obj) {
  obj.battery = {
    config: "40S-10P li-battery",
    cells: 400,
    energy: 24.5,
    mass: 267
  };
  return obj;
}

function addController(obj) {
  obj.controller = {
    model: "Evnetics Shiva",
    current: 3000,
    power: 1.275,
    voltage: "8-425 Volts",
    prechargeCircuit: true
  };
  return obj;
}

function addCharger(obj) {
  obj.charger = {
    model: "Elcon PFC5000 Charger",
    input: "0.2 to 30A AC",
    power: 1.275,
    voltage: "8-425 Volts"
  };
  return obj;
}

function addConverter(obj) {
  obj.converter = {
    type: "DC-DC",
    inputCurrent: "0-3 Amps / 120 volts",
    outputCurrent: "0-30 Amps / 12 volts",
    isolated: "Selectabel"
  };
  return obj;
}

function addWheels(obj) {
  obj.wheels = {
    motor: "M700",
    drumBrake: "standart",
    rim: 15,
    tire: "265/45-R20",
    size: "20/20"
  };
  return obj;
}

function addBody(obj) {
  obj.body = {
    doors: 4,
    color: "red",
    glass: "laminated",
    bumper: "S3E6-7",
    interior: "black"
  };
  return obj;
}

function manufactureCar_sep(obj) {
  addEngine(obj);
  addBattery(obj);
  addController(obj);
  addCharger(obj);
  addConverter(obj);
  addWheels(obj);
  addBody(obj);
  return obj;
}

function manufactureCar_chain(obj) {
  return addEngine(addBattery(addController(addCharger(addConverter(addWheels(addBody(obj)))))));
}

let Factory = {
  manufactureCar: manufactureCar_chain
};

let Car = {};
Factory.manufactureCar(Car);
console.log("\x1b[34m", Car);

/*let newCar = {};
Factory.manufactureCar(newCar);
newCar.engine.power = "Girls power!";
console.log("\x1b[33m", newCar);*/


