
import { SHOW_MODAL_MAIN, HIDE_MODAL_MAIN } from './constants';
import { IModalState } from './types';

const initialState = {
  isShowModal: false
};

export default (state: IModalState = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL_MAIN:
      return { isShowModal: true };
    case HIDE_MODAL_MAIN:
      return { isShowModal: false };
    default:
      return state;
  }
};