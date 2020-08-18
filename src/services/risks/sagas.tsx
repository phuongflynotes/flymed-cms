import { all, call, put, takeEvery, delay } from 'redux-saga/effects';

import { IAsyncCall } from '@Root/types';
import RisksAPI from './apis';
import {
  SHOW_WAITING,
  HIDE_WAITING
} from '@Root/services/waiting/constants';
import {
  HIDE_MODAL_MAIN,
} from '@Root/services/modalMain/constants';
import { 
  ASYNC_FETCH_ALL_RISKS,
  ASYNC_ADD_RISKS,
  ASYNC_EDIT_RISKS,
  ASYNC_FILTER_RISKS,
  FETCH_ALL_RISKS_REQUESTED,
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
    yield put({ type: FETCH_ALL_RISKS_REQUESTED, payload: {}});
  } catch (err) {
    yield put({ type: HIDE_WAITING });
    yield put({ type: action.FAILURE, payload: { error: err.message } });
  }
}

function* sagaAsyncCallGenerator(action: IAsyncCall, api: (payload: any) => Promise<any>) {
  yield takeEvery(action.REQUESTED, asyncHandler, action, api);
}

export default function* riskWatchers() {
  yield all([
    sagaAsyncCallListGenerator(ASYNC_FETCH_ALL_RISKS, RisksAPI.fetchAll),
    sagaAsyncCallGenerator(ASYNC_ADD_RISKS, RisksAPI.add),
    sagaAsyncCallGenerator(ASYNC_EDIT_RISKS, RisksAPI.edit),
    sagaAsyncCallListGenerator(ASYNC_FILTER_RISKS, RisksAPI.fetchAll),
    // sagaAsyncCallGenerator(ASYNC_ADD_NOTE, NotesAPI.add),
    // sagaAsyncCallGenerator(ASYNC_EDIT_NOTE, NotesAPI.edit),
    // sagaAsyncCallGenerator(ASYNC_REMOVE_NOTE, NotesAPI.remove),
  ]);
}