const storeState = (initialState) => {  // only to store currentState of an object.
  let currentState = initialState; // pass in initial state of object (if desired) if not you can have it be empty using {}. Mutated everytime inner function is called.
  return (stateChangeFunction) => { // takes function specifying exact change made to currentState as argument
    const newState = stateChangeFunction(currentState); // applies function to current state without mutating it by saving it in new constant
    currentState = {...newState}; // updates currentState with copy of newState
    return newState; // return snapshot (use case is when we use Firestore, a cloud database solution. With Firestore, we might think of currentState as being the state of our database. However, because it takes time to update and return currentState (an async operation), we can provide a quick snapshot of state to users by just returning the equivalent of newState)
  }
}

const stateChanger = storeState(); // creating a closure over the currentState variable in the outer function 
// stateChanger returns inner function:
// (stateChangeFunction) => {
//   const newState = stateChangeFunction(currentState);
//   currentState = {...newState};
//   return newState;
// }

const fedPlant = stateChanger(blueFood); //IMPORTANT not to pass invoked function [blueFood vs blueFood()]
// const blueFood = changeState("soil")(5);
// returns { soil: 5 }

// Now const newState = blueFood(currentState);

// blueFood(currentState) invokes the following function:
// (state) => ({
//   ...state,
//   ["soil"] : (state["soil"] || 0) + 5
// })

const plantFedAgain = stateChanger(greenFood);
// returns { soil: 15 }