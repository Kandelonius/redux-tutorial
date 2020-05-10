a tutorial from Traversy Media on youtube. 
https://youtu.be/93p3LxR9xfM

tutorial from Dev Ed first example
https://youtu.be/CVpUuw9XSjY

//store -> globalized state

//action increment
const increment = () => {
  return {
    type: 'INCREMENT'
  };
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

//reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//display it in the console
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
