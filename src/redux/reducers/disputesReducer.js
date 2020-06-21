import DISPUTES from "../constants"

const disputesReducer = (state= {results: []}, action) => {
  if (action.type === DISPUTES.LOAD_SUCCESS) {
    return {...state, ...action.disputes}
  }
  return state;
}

export default disputesReducer