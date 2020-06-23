//  Object oriented

class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
    this.water ++
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
  }
}

//  Composition based

class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}
//  function literal - hydrate only

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

// abstract and re-usable - all fields of plant

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] | 0) + 1
  }
};

// further refactor to handle any object (not just plant)
// also increments by any number passed through

const changeState = (state, prop, value) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + value
  }
};

// curry function to create unary closures allowing function factories

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// function factories:

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

// use to increment soil by 5

feed(5)(plant)

// specific function factories:

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

// use to increment soil by 5

blueFood(plant)


