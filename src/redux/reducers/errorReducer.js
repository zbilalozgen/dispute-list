import DISPUTES from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case DISPUTES.LOAD_FAIL:
      return action.error.toString()
    case DISPUTES.LOAD:
    case DISPUTES.LOAD_SUCCESS:
      return null
    default:
      return state
  }
}

export default errorReducer