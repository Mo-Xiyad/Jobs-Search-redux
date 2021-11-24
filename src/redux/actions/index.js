export const ADD_TO_FAVORITES = "ADD_TO_CART";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const REMOVE_SELECTED_FROM_FAVORITES = "REMOVE_SELECTED_FROM_FAVORITES";

export const addToFavorites = (itemToAdd) => ({
  type: ADD_TO_FAVORITES,
  payload: itemToAdd, // this is going to be the book we intend to add to the cart
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});
export const removeFromFavorites = (itemToRemove) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: itemToRemove, // this is going to be the book we intend to add to the cart
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});
export const removeSelectedFavorites = (itemToRemove) => ({
  type: REMOVE_SELECTED_FROM_FAVORITES,
  payload: itemToRemove, // this is going to be the book we intend to add to the cart
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});
