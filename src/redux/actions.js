import DISPUTES  from './constants'

const loadDisputes = (url) => ({
  type: DISPUTES.LOAD,
  url
})

const setDisputes = disputes => ({
  type: DISPUTES.LOAD_SUCCESS,
  disputes
})

const setError = error => ({
  type: DISPUTES.LOAD_FAIL,
  error
})

export {
  loadDisputes,
  setDisputes,
  setError
}