import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import postsReducer from './reducers';
import rootSaga from './sagas';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store; 