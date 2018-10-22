import { LOAD_DATA, TOGGLE_PICKUP, TOGGLE_PROMO, DEFAULT } from '../actionTypes';

export const loadData = data => ({
  type: LOAD_DATA,
  data
});

export function togglePromo(promoCode) {
  if (promoCode === 'DISCOUNT') {
    return {
      type: TOGGLE_PROMO
    };
  } else {
    return { type: DEFAULT };
  }
}

export const togglePickup = (e) => ({
  type: TOGGLE_PICKUP
});
