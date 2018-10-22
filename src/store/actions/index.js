import {
  LOAD_DATA,
  TOGGLE_PICKUP,
  TOGGLE_PROMO,
  DEFAULT
} from '../actionTypes';

export function loadData(data) {
  return {
    type: LOAD_DATA,
    data
  };
}

export function togglePromo(promoCode) {
  if (promoCode === 'DISCOUNT') {
    return {
      type: TOGGLE_PROMO
    };
  } else {
    return { type: DEFAULT };
  }
}

export function togglePickup(e) {
  return { type: TOGGLE_PICKUP };
}
