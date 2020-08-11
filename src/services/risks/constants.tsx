import { IAsyncCall } from '@Root/types';

export const FETCH_ALL_RISKS_REQUESTED = 'FETCH_ALL_RISKS/REQUESTED';
export const FETCH_ALL_RISKS_SUCCESS = 'FETCH_ALL_RISKS/SUCCESS';
export const FETCH_ALL_RISKS_FAILURE = 'FETCH_ALL_RISKS/FAILURE';

export const ASYNC_FETCH_ALL_RISKS: IAsyncCall = {
  REQUESTED: FETCH_ALL_RISKS_REQUESTED,
  SUCCESS: FETCH_ALL_RISKS_SUCCESS,
  FAILURE: FETCH_ALL_RISKS_FAILURE,
};