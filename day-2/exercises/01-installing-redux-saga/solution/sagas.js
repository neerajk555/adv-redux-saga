import { call, put, takeEvery } from 'redux-saga/effects';

// Fetch data from the weather API
const fetchApi = () => {
  return fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
};

// Worker saga: fetch weather data
function* fetchWeather(action) {
  try {
    const weatherData = yield call(fetchApi);
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: weatherData });
  } catch (error) {
    yield put({ type: 'FETCH_WEATHER_FAILURE', error });
  }
}

// Watcher saga: spawn a new fetchWeather task for each FETCH_WEATHER action
function* weatherSaga() {
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}

export default weatherSaga;
