import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  loading: true
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ON_LOGIN: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
