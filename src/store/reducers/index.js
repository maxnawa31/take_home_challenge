import { LOAD_DATA, TOGGLE_PICKUP, TOGGLE_PROMO, DEFAULT } from '../actionTypes';

const defaultState = {
  pickup: false,
  promo: false
};
const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.data };
    case TOGGLE_PICKUP:
      return { ...state, pickup: !state.pickup };
    case TOGGLE_PROMO:
      return { ...state, promo: !state.promo };
    case DEFAULT:
      return state
  }
};

export default rootReducer;
