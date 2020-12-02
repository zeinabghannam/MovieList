import { createStore, combineReducer, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import movieListReducer from "./reducers/movieListReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  movies: movieListReducer,
  users: userReducer,
});

const midleware = [thunk];

const initialState = {
  movies: { name: "titanic" },
  users: [],
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
