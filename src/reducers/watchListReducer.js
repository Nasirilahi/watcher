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

const initialState = {
  watchSymbols: [],
  entities: [],
  isLoading: false
};
const watchSymbolsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCH_LIST_REQUEST:
      return { ...state, isLoading: true };

    case WATCH_LIST_SUCCESS: {
      const { watchSymbols, entities } = state;
      const { symbolData, symbol } = action;
      const index = entities.indexOf(symbol);
      if (index >= 0) {
        watchSymbols[index][symbol] = symbolData;
        return {
          ...state,
          watchSymbols,
          entities,
          isLoading: false
        };
      }
      return {
        ...state,
        watchSymbols: [...watchSymbols, { [symbol]: symbolData }],
        entities: [...entities, symbol],
        isLoading: false
      };
    }

    case WATCH_LIST_FAILURE:
      return { ...state, watchSymbols: [], isLoading: false };
    case REMOVE_SYMBOL: {
      let { watchSymbols, entities } = state;
      const { symbolIndexToRemove } = action;
      watchSymbols = watchSymbols.filter(
        (symbolItem, index) => index !== symbolIndexToRemove
      );
      entities = entities.filter(
        (entity, index) => index !== symbolIndexToRemove
      );
      return { ...state, watchSymbols, entities };
    }
    case SORT_BY: {
      const { watchSymbols, entities } = state;
      const { sortBy } = action;
      const customwatchSymbols = watchSymbols.sort((a, b) => {
        const firstValue = a[Object.keys(a)[0]][sortBy];
        const secondValue = b[Object.keys(b)[0]][sortBy];
        if (firstValue < secondValue) return -1;
        if (firstValue > secondValue) return 1;
        return 0;
      });
      customwatchSymbols.map((watchSymbol, index) => {
        const key = Object.keys(watchSymbol)[0];
        if (entities[index] !== key) {
          entities[index] = key;
        }
        return watchSymbol;
      });
      return { ...state, watchSymbols, entities };
    }
    case WATCH_LIST_REFRESH_REQUEST:
      return { ...state, isLoading: true };
    case WATCH_LIST_REFRESH_SUCCESS: {
      const { watchSymbols, entities } = state;
      // eslint-disable-next-line array-callback-return
      Object.keys(action.watchSymbols).map(e => {
        const index = entities.findIndex(entity => entity === e);
        if (index !== -1) {
          watchSymbols[index][e] = action.watchSymbols[e].quote;
        }
      });
      return { ...state, watchSymbols, isLoading: false };
    }
    case WATCH_LIST_REFRESH_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default watchSymbolsListReducer;
