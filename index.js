
{
  type: 'REMOVE_TODO',
  id: 0
}

{
  type: 'TOGGLE_TODO',
  id: 0
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon'
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}

/*
  Characteristics of a Pure Function
  1) They always return the same result if the same arguments are passed in.
  2) They depend only on the arguments passed into them.
  3) Never produce any side effects (No interaction with the outside world - Ajax requests, DOM interaction...)
*/

// Reducer function
function todos (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}


function createStore(reducer) {
  // The store should have 4 parts
  // 1. State
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      // remove the specific listener we want to unsubscribe from from the listeners array
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
    // call todos
    state = reducer(state, action)
    // loop over listeners and invoke each listner
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore()
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
})
