// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateChanger = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// We create two functions using our function factory. We could easily create many more.

export const feed = changeState("soil");
export const superFood = changeState("soil")(5);

export const hydrate = changeState("water");
export const vitaminWater = changeState("water")(5);

export const giveLight = changeState("light");
export const happyLamp = changeState("light")(5);

  