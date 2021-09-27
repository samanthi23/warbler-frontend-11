import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export const addError = error => ({ // returns an object
  type: ADD_ERROR,
  error
});

export const removeError = () => ({ // returns an object, delete error
  type: REMOVE_ERROR
});
