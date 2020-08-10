import { IAsyncCall } from 'types';

export const FETCH_ALL_NOTES_REQUESTED = 'FETCH_ALL_NOTES/REQUESTED';
export const FETCH_ALL_NOTES_SUCCESS = 'FETCH_ALL_NOTES/SUCCESS';
export const FETCH_ALL_NOTES_FAILURE = 'FETCH_ALL_NOTES/FAILURE';
export const ASYNC_FETCH_ALL_NOTES: IAsyncCall = {
  REQUESTED: FETCH_ALL_NOTES_REQUESTED,
  SUCCESS: FETCH_ALL_NOTES_SUCCESS,
  FAILURE: FETCH_ALL_NOTES_FAILURE,
};
export const FETCH_NOTE_REQUESTED = 'FETCH_NOTE/REQUESTED';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE/SUCCESS';
export const FETCH_NOTE_FAILURE = 'FETCH_NOTE/FAILURE';
export const ASYNC_FETCH_NOTE: IAsyncCall = {
  REQUESTED: FETCH_NOTE_REQUESTED,
  SUCCESS: FETCH_NOTE_SUCCESS,
  FAILURE: FETCH_NOTE_FAILURE,
};
export const EDIT_NOTE_REQUESTED = 'EDIT_NOTE/REQUESTED';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE/SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE/FAILURE';
export const ASYNC_EDIT_NOTE: IAsyncCall = {
  REQUESTED: EDIT_NOTE_REQUESTED,
  SUCCESS: EDIT_NOTE_SUCCESS,
  FAILURE: EDIT_NOTE_FAILURE,
};
export const ADD_NOTE_REQUESTED = 'ADD_NOTE/REQUESTED';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE/SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE/FAILURE';
export const ASYNC_ADD_NOTE: IAsyncCall = {
  REQUESTED: ADD_NOTE_REQUESTED,
  SUCCESS: ADD_NOTE_SUCCESS,
  FAILURE: ADD_NOTE_FAILURE,
};
export const REMOVE_NOTE_REQUESTED = 'REMOVE_NOTE/REQUESTED';
export const REMOVE_NOTE_SUCCESS = 'REMOVE_NOTE/SUCCESS';
export const REMOVE_NOTE_FAILURE = 'REMOVE_NOTE/FAILURE';
export const ASYNC_REMOVE_NOTE: IAsyncCall = {
  REQUESTED: REMOVE_NOTE_REQUESTED,
  SUCCESS: REMOVE_NOTE_SUCCESS,
  FAILURE: REMOVE_NOTE_FAILURE,
};