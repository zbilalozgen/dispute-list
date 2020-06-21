import { put, call, takeEvery, select } from 'redux-saga/effects'

import { setDisputes, setError} from "./actions"
import DISPUTES from "./constants"
import fetchDisputes from "./api"

export const getUrl = state => state.isLoading.url

export function* handleDisputesLoad() {
  try {
    const url = yield select(getUrl)
    const disputes = yield call(fetchDisputes, url)
    yield put(setDisputes(disputes))
  } catch (e) {
    yield put(setError(e))
  }
}

export default function* watchDisputesLoad() {
  yield takeEvery(DISPUTES.LOAD, handleDisputesLoad)
}