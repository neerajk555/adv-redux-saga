import { all, call, put } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';
import { apiCall1, apiCall2, apiCall3 } from './api';

function* fetchParallelDataSaga() {
  try {
    // Start multiple asynchronous operations concurrently
    const [result1, result2, result3] = yield all([
      call(apiCall1),
      call(apiCall2),
      call(apiCall3),
    ]);

    // Combine the results as needed
    const combinedResults = {
      result1,
      result2,
      result3,
    };

    // Dispatch a success action with the combined results
    yield put(fetchDataSuccess(combinedResults));
  } catch (error) {
    // Dispatch a failure action if any of the operations fail
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  // Watch for the action triggering the parallel saga
  yield takeLatest('FETCH_PARALLEL_DATA_REQUEST', fetchParallelDataSaga);
}

export default rootSaga;
