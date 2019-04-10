/*
Statistics.
Add a different chance to each part production function (0.2–2%)
that a defect will occur and something wrong will be built into the object.
Write a quality control function - to check the finished car for a marriage.
The object of the car should be transferred to it, and it should return true or false,
depending on whether everything is in the car in place, and whether there is anything unnecessary.
Based on the statistical analysis, calculate the total chance of rejecting the production of your cars.*/

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

function manufactureCar_chain(obj) {
  return addEngine(addBattery(addController(addCharger(addConverter(addWheels(addBody(obj)))))));
}

//Object Factory with Method manufactureCar
let Factory = {
  manufactureCar: manufactureCar_chain
};

let Car = {};
Factory.manufactureCar(Car);
console.log("\x1b[34m", Car);


