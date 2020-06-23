import { stateChanger, superFood, vitaminWater, happyLamp } from "../src/plant.js"

describe ("Plant", () => {

  test('feed button should increase soil value by 5', () => {
    expect(stateChanger(superFood)).toEqual({"soil": 5, "water": 0, "light": 0});
  })

  test('hydrate button should increase water value by 5', () => {
    expect(stateChanger(vitaminWater)).toEqual({"soil": 5, "water": 5, "light": 0});
  })

  test('give-ligt button should increase light value by 5', () => {
    expect(stateChanger(happyLamp)).toEqual({"soil": 5, "water": 5, "light": 5});
  })

  
  // console.log (`here are the values ${}`)


})