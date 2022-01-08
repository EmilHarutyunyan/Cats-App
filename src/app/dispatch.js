//Action
import { CATEGORY_CHANGE, RESET_STATE, PAGE_ADD, CATS_ADD } from "./action";

export const changeCategory = (id) => {
  return {
    type: CATEGORY_CHANGE,
    payload: { id },
  };
};

export const handleMore = () => {
  return {
    type: PAGE_ADD,
  };
};
export const handleData = (data) => {
  return {
    type: CATS_ADD,
    payload: { data },
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
