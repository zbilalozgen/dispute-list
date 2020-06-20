import {
  GET_DATA,
  LOADING,
  FETCH_ERROR,
} from "./constants";

import axios from "axios";

export function loading() {
  return { type: LOADING };
}

export const getData = () => {
  return { type: GET_DATA}
};

export function fetchError(error) {
  return { type: FETCH_ERROR, error};
}


