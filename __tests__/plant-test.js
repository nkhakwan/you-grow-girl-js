import { stateChanger } from "../src/plant.js"
import { superFood } from "../src/plant.js"
import { vitaminWater } from "../src/plant.js"

describe ("Plant", () => {

  test('feed button should increase soil value by 5', () => {
    expect(stateChanger(superFood)).toEqual({"soil": 5});
  })

  test('hydrate button should increase water value by 5', () => {
    expect(stateChanger(vitaminWater)).toEqual({"water": 5});
  })
})