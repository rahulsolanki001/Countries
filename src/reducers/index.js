import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
    countries:countryReducer,
    theme:themeReducer
});
