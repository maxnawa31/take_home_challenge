import { LOAD_DATA, TOGGLE_PICKUP, TOGGLE_PROMO } from '../actionTypes';

export function loadData(data) {
  console.log('inside loadData');
  return {
    type: LOAD_DATA,
    data
  };
}

export const togglePromo = () => ({
  type: TOGGLE_PROMO
});

export const togglePickup = () => ({
  type: TOGGLE_PICKUP
});
