import {createStore} from 'redux';
//import {configureStore} from '@reduxjs/tootkit'
import counterReducer from './reducers';


const store = createStore(counterReducer);

//const store = configureStore({reducer:counterReducer});

export default store;