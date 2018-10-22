import { createSelector } from 'reselect';

const priceSelector = state => state.subTotal;
const promoSelector = state => state.promo;
const pickupSelector = state => state.pickup;
const taxesAndFeesSelector = state => state.taxesAndFees;

const calculateNewSubTotal = (subTotal,pickup) => {
  let newPrice = subTotal;
  if(pickup) {
    return parseFloat((newPrice - newPrice * (3.8/100)).toFixed(2));
  }else {
    return newPrice
  }
}
const calculateNewPrice = (subTotal, promo, pickup, taxesAndFees) => {
  let newPrice = subTotal + taxesAndFees;
  if (promo && pickup) {
    return parseFloat((newPrice - newPrice * (13.8 / 100)).toFixed(2));
  } else if (!promo && pickup) {
    return parseFloat((newPrice - newPrice * (3.8 / 100)).toFixed(2));
  } else if (promo && !pickup) {
    return parseFloat((newPrice - newPrice * (10 / 100)).toFixed(2));
  } else {
    return newPrice;
  }
};

export default createSelector(
  priceSelector,
  promoSelector,
  pickupSelector,
  taxesAndFeesSelector,
  calculateNewPrice
);

export const newSubTotal = createSelector(priceSelector, pickupSelector, calculateNewSubTotal);