// all reducers get 2 arguments, the current state and the action.
// state argument is not application state, but only the state this reducer is responsible for.
// if state argument comes in and it is undefined, then set state to null
// reducer is called when ever an action is dispatched by the app.
// never mutate state - always return fresh object

export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
