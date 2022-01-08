import { createStore } from "redux";
// Action
import { CATEGORY_CHANGE, RESET_STATE, PAGE_ADD, CATS_ADD } from "./action";
const initialState = {
  searchCategory: {
    id: null,
    limit: 10,
    page: 1,
    cats: []
  }
};

const store = createStore(
  function (state, action) {
    if (action.type === CATEGORY_CHANGE) {
      if(action.payload.id === state.searchCategory.id) {
        return state
      }
      return {
        ...state,
          searchCategory: {
            ...state.searchCategory,
            id: parseInt(action.payload.id),
            page: 1,
            cats: []
          }
      };
    }
    else if(action.type === PAGE_ADD) {
      return {
        ...state,
        searchCategory: {
          ...state.searchCategory,
          page: state.searchCategory.page + 1,
        }
      };
    }
    else if(action.type === CATS_ADD) {
      return {
        ...state,
        searchCategory: {
          ...state.searchCategory,
          cats: [...state.searchCategory.cats,...action.payload.data]
        }
      };
    }
    else if(action.type === RESET_STATE) {
      return initialState
    }
    return state;
  },
  initialState
);
export default store;