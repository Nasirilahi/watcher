import {
  WATCH_LIST_REQUEST,
  WATCH_LIST_SUCCESS,
  WATCH_LIST_FAILURE,
  REMOVE_SYMBOL,
  SORT_BY,
  WATCH_LIST_REFRESH_REQUEST,
  WATCH_LIST_REFRESH_SUCCESS,
  WATCH_LIST_REFRESH_FAILURE
} from "../constants/actionsConstants";
import { API_URL, BATCH_MARKET } from "../constants/apiConstants";

const symbolDataRequest = () => ({ type: WATCH_LIST_REQUEST });

const symbolDataSuccess = (symbolData, symbol) => ({
  type: WATCH_LIST_SUCCESS,
  symbolData,
  symbol
});

const symbolDataFailure = () => ({ type: WATCH_LIST_FAILURE });

const getSymbolData = symbol => dispatch => {
  dispatch(symbolDataRequest());
  const url = `${API_URL}/stock/${symbol}/batch?types=quote`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        return dispatch(symbolDataSuccess(data.quote, symbol.toUpperCase()));
      }
      return dispatch(symbolDataFailure());
    })
    .catch(err => dispatch(symbolDataFailure()));
};

const removeSymbol = symbolIndexToRemove => dispatch =>
  dispatch({ type: REMOVE_SYMBOL, symbolIndexToRemove });

const sortWatchList = sortBy => dispatch => dispatch({ type: SORT_BY, sortBy });


const symbolsListRequest = () => ({ type: WATCH_LIST_REFRESH_REQUEST });
const symbolsListSuccess = watchSymbols => ({
  type: WATCH_LIST_REFRESH_SUCCESS,
  watchSymbols
});

const symbolsListFailure = () => ({ type: WATCH_LIST_REFRESH_FAILURE });

const refreshSymbolsList = symbols => dispatch => {
  dispatch(symbolsListRequest());
  const url = `${API_URL}/${BATCH_MARKET}?symbols=${symbols}&types=quote`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        return dispatch(symbolsListSuccess(data));
      }
      return dispatch(symbolsListFailure());
    })
    .catch(err => dispatch(symbolsListFailure()));
  return null;
};

export { getSymbolData, removeSymbol, sortWatchList, refreshSymbolsList };
