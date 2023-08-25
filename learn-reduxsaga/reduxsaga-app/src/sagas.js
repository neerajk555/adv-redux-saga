import {call, put, takeEvery} from 'redux-saga/effects';
import { fetchPostsApi } from './api';
import { fetchPostsSuccess, fetchPostsFailure } from './actions';


function* fetchPostsSaga(){

    try{
        const posts = yield call(fetchPostsApi);
        yield put(fetchPostsSuccess(posts));
    }catch (error){
        yield put(fetchPostsFailure(error));
    }
}

function* watchFetchPosts(){
    yield takeEvery('FETCH_POSTS', fetchPostsSaga)
}

export default function* rootSaga(){
    yield watchFetchPosts();
}