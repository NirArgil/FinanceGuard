import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { favoritesReducer } from "./reducers/favoritesReducer";
// import { cityForecastReducer } from "./reducers/cityForcastReducer";
import { themeReducer } from "./reducers/themeReducer";

const reducer = combineReducers({
  theme: themeReducer,
});

const themeFromStorage = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : [];

const initialState = {
  theme: themeFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;