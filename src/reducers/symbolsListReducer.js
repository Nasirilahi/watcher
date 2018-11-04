import {
  SYMBOL_LIST_REQUEST,
  SYMBOL_LIST_SUCCESS,
  SYMBOL_LIST_FAILURE
} from "../constants/actionsConstants";

const initialState = {
  symbols: [],
  isLoading: false
};
const symbolsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYMBOL_LIST_REQUEST:
      return { ...state, isLoading: true };

    case SYMBOL_LIST_SUCCESS:
      return { ...state, symbols: action.symbols, isLoading: false };

    case SYMBOL_LIST_FAILURE:
      return { ...state, symbols: [], isLoading: false };

    default:
      return state;
  }
};

export default symbolsListReducer;
