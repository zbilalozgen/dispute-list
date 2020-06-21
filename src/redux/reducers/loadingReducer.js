import DISPUTES from "../constants";

const loadingReducer = (state = {load: false, url: ''}, action) => {
  switch (action.type) {
    case DISPUTES.LOAD:
      return {
        load: true,
        url: action.url
      }
    case DISPUTES.LOAD_SUCCESS:
      return false
    case DISPUTES.LOAD_FAIL:
      return {load: false, url: ''}
    default:
      return state
  }
}

export default loadingReducer