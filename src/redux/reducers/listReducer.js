import * as types from "../actions/ActionTypes";

const initialState = {
  list: [],
  filteredList: []
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return {
        list: action.list,
        filteredList: action.list
      };
    case types.GET_FILTERED_LIST:
      let filteredList = state.list.filter(e =>
        e.headline.toLowerCase().includes(action.query.toLowerCase())
      );

      return {
        ...state,        
        filteredList: filteredList
      };
      
    default:
      return state;
  }
}
