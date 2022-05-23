import apiURL from "../config";

import { call, put, takeEvery } from "redux-saga/effects";
import { setDataFromApi } from "./mainState";

const api = apiURL.apiURL

function* mainSaga() {
  yield takeEvery("main/apiCom", workApiCom);
}

function* workApiCom() {
  const data = yield call(() => fetch(`${api}/api`));
  const dataText = yield data.text();
  yield put(setDataFromApi(dataText));
}

export default mainSaga;
