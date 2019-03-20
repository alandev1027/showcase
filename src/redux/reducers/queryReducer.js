import * as types from "../actions/ActionTypes";

const initialState = {
  query: ""
};

export default function queryReducer(state = initialState, action) {
  if (action.type === types.SET_QUERY) {
    return {
      query: action.query
    };
  } else {
    return state;
  }
}
