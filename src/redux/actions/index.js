import * as types from "./ActionTypes";
import showcase from "../../utils/showcase.json";

export function getList() {
  return { type: types.GET_LIST, list: showcase };
}

export function getFilteredList(query) {
  return {
    type: types.GET_FILTERED_LIST,
    query
  };
}

export function setQuery(query) {
  return {
    type: types.SET_QUERY,
    query
  };
}
