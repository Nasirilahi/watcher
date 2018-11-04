import { combineReducers } from "redux";
import symbolsListReducer from "./symbolsListReducer";
import watchSymbolsListReducer from "./watchListReducer";

const rootReducer = combineReducers({
  symbolsList: symbolsListReducer,
  watchList: watchSymbolsListReducer
});

export default rootReducer;
