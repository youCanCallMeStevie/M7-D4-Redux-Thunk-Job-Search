import { createStore } from "redux";
import rootReducer from "../reducers";
// import userReducer from "../reducers/users";
// import favsReducer from "../reducers/favourites";


const initialState = {
  favourites: {
    jobs: [],
  },
  user: {
    username: null,
  },
  search: {
    jobs:[]
  }
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
