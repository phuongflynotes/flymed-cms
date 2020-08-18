import { IModalAsyncCall } from '@Root/types';

export const SHOW_MODAL_MAIN = 'SHOW_MODAL_MAIN/REQUESTED';
export const HIDE_MODAL_MAIN = 'HIDE_MODAL_MAIN/SUCCESS';

export const ASYNC_FETCH_ALL_MODAL_MAIN: IModalAsyncCall = {
  SHOW: SHOW_MODAL_MAIN,
  HIDE: HIDE_MODAL_MAIN,
};