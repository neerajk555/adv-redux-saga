import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';
import { apiCall } from './api';

function* fetchSequentialDataSaga() {
  try {
    // Perform the first step
    const step1Result = yield call(apiCall1);

    // Perform the second step using the result from step 1
    const step2Result = yield call(apiCall2, step1Result);

    // Perform the third step using the result from step 2
    const step3Result = yield call(apiCall3, step2Result);

    // Dispatch a success action with the final result
    yield put(fetchDataSuccess(step3Result));
  } catch (error) {
    // Dispatch a failure action if something goes wrong at any step
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_SEQUENTIAL_DATA_REQUEST', fetchSequentialDataSaga);
}

export default rootSaga;
