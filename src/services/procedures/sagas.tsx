import { all, call, put, takeEvery } from 'redux-saga/effects';

import { IAsyncCall } from '@Root/types';
import ProceduresAPI from './apis';
import { 
  ASYNC_FETCH_ALL_PROCEDURES
} from './constants';

function* asyncHandler(action: IAsyncCall, api: (payload: any) => Promise<any>, payload: any) {
  try {
    const resJson = yield call(api, payload);
    yield put({ type: action.SUCCESS, payload: { data: resJson.data } });
  } catch (err) {
    yield put({ type: action.FAILURE, payload: { error: err.message } });
  }
}

function* sagaAsyncCallGenerator(action: IAsyncCall, api: (payload: any) => Promise<any>) {
  yield takeEvery(action.REQUESTED, asyncHandler, action, api);
}

export default function* procedureWatchers() {
  yield all([
    sagaAsyncCallGenerator(ASYNC_FETCH_ALL_PROCEDURES, ProceduresAPI.fetchAll),
    // sagaAsyncCallGenerator(ASYNC_FETCH_NOTE, NotesAPI.fetch),
    // sagaAsyncCallGenerator(ASYNC_ADD_NOTE, NotesAPI.add),
    // sagaAsyncCallGenerator(ASYNC_EDIT_NOTE, NotesAPI.edit),
    // sagaAsyncCallGenerator(ASYNC_REMOVE_NOTE, NotesAPI.remove),
  ]);
}