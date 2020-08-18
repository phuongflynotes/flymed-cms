
import { SHOW_WAITING, HIDE_WAITING } from './constants';
import { IWaitingState } from './types';

const initialState = {
  isShowWaiting: false
};

export default (state: IWaitingState = initialState, action: any) => {
  switch (action.type) {
    case SHOW_WAITING:
      return { isShowWaiting: true };
    case HIDE_WAITING:
      return { isShowWaiting: false };
    default:
      return state;
  }
};