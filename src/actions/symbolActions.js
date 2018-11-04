import {
  SYMBOL_LIST_REQUEST,
  SYMBOL_LIST_SUCCESS,
  SYMBOL_LIST_FAILURE
} from "../constants/actionsConstants";
import { API_URL, REF_DATA_SYMBOLS } from "../constants/apiConstants";

const sourceListRequest = () => ({ type: SYMBOL_LIST_REQUEST });

const sourcesListSuccess = symbols => ({
  type: SYMBOL_LIST_SUCCESS,
  symbols
});

const sourcesListFailure = () => ({ type: SYMBOL_LIST_FAILURE });

const getSourcesList = () => dispatch => {
  dispatch(sourceListRequest());
  const url = `${API_URL}/${REF_DATA_SYMBOLS}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        return dispatch(sourcesListSuccess(data));
      }
      return dispatch(sourcesListFailure());
    })
    .catch(err => dispatch(sourcesListFailure()));
};

export default getSourcesList;
