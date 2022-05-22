// const initialState = {
//   people: [],
//   planets: []
// };
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import peopleReducer from "./people";
import peopleDetailsReducer from "./pepleDetails"

export const history = createBrowserHistory();

const initialState = {

 };
  
  export function appReducer(state = initialState, action) {
    switch (action.type) { 
      default:
        return state;
    }
  }


  const rootReducer = combineReducers({
    app: appReducer,
    people: peopleReducer,
    peopleDetails: peopleDetailsReducer,
    router: connectRouter(history)
  })

  export default rootReducer;

  // export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_PEOPLE': {
//       return {
//         ...state,
//         people: [...state.people, ...action.payload],
//       }
//     };
//     case 'SET_PLANETS': {
//         return {
//           ...state,
//           planets: [...state.planets, ...action.payload],
//         }
//       }
//     default:
//       return state;
//   }
// }