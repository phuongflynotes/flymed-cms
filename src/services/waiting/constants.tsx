import { IWaitingAsyncCall } from '@Root/types';

export const SHOW_WAITING = 'SHOW_WAITING/REQUESTED';
export const HIDE_WAITING = 'HIDE_WAITING/SUCCESS';

export const ASYNC_WAITING: IWaitingAsyncCall = {
  SHOW: SHOW_WAITING,
  HIDE: HIDE_WAITING,
};