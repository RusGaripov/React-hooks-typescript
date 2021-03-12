import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

const rootReducer=combineReducers({ citiesReducer})
export default rootReducer;
export type RootState=ReturnType<typeof rootReducer>;



