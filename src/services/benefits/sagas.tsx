import { all, call, put, takeEvery, delay } from 'redux-saga/effects';

import { IAsyncCall } from '@Root/types';
import ProceduresAPI from './apis';
import {
  SHOW_WAITING,
  HIDE_WAITING
} from '@Root/services/waiting/constants';
import {
  HIDE_MODAL_MAIN,
} from '@Root/services/modalMain/constants';
import { 
  ASYNC_FETCH_ALL_BENEFITS,
  ASYNC_ADD_BENEFITS,
  ASYNC_EDIT_BENEFITS,
  ASYNC_FILTER_BENEFITS,
  FETCH_ALL_BENEFITS_REQUESTED,
} from './constants';

function* asyncListHandler(action: IAsyncCall, api: (payload: any) => Promise<any>, payload: any) {
  try {
    const resJson = yield call(api, payload);
    yield put({ type: action.SUCCESS, payload: { data: resJson } });
  } catch (err) {
    yield put({ type: action.FAILURE, payload: { error: err.message } });
  }
}

function* sagaAsyncCallListGenerator(action: IAsyncCall, api: (payload: any) => Promise<any>) {
  yield takeEvery(action.REQUESTED, asyncListHandler, action, api);
}

function* asyncHandler(action: IAsyncCall, api: (payload: any) => Promise<any>, payload: any) {
  try {
    yield put({ type: SHOW_WAITING});
    const resJson = yield call(api, payload);
    yield put({ type: action.SUCCESS, payload: { data: resJson } });
    yield delay(500);
    yield put({ type: HIDE_WAITING });
    yield delay(500);
    yield put({ type: HIDE_MODAL_MAIN });
    yield delay(1000);
    yield put({ type: FETCH_ALL_BENEFITS_REQUESTED, payload: {}});
  } catch (err) {
    yield put({ type: HIDE_WAITING });
    yield put({ type: action.FAILURE, payload: { error: err.message } });
  }
}

function* sagaAsyncCallGenerator(action: IAsyncCall, api: (payload: any) => Promise<any>) {
  yield takeEvery(action.REQUESTED, asyncHandler, action, api);
}

export default function* procedureWatchers() {
  yield all([
    sagaAsyncCallListGenerator(ASYNC_FETCH_ALL_BENEFITS, ProceduresAPI.fetchAll),
    sagaAsyncCallGenerator(ASYNC_ADD_BENEFITS, ProceduresAPI.add),
    sagaAsyncCallGenerator(ASYNC_EDIT_BENEFITS, ProceduresAPI.edit),
    sagaAsyncCallListGenerator(ASYNC_FILTER_BENEFITS, ProceduresAPI.fetchAll),
    // sagaAsyncCallGenerator(ASYNC_ADD_NOTE, NotesAPI.add),
    // sagaAsyncCallGenerator(ASYNC_EDIT_NOTE, NotesAPI.edit),
    // sagaAsyncCallGenerator(ASYNC_REMOVE_NOTE, NotesAPI.remove),
  ]);
}