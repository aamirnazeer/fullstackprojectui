import currentAPI from "../config";

import { call, put, takeEvery } from "redux-saga/effects";
import { setDataFromApi } from "./mainState";

function* mainSaga() {
  yield takeEvery("main/apiCom", workApiCom);
}

function* workApiCom() {
  const data = yield call(() => fetch(currentAPI.currentAPI));
  const dataText = yield data.text();
  yield put(setDataFromApi(dataText));
}

export default mainSaga;
