import { List, Record } from 'immutable';

import { FETCH_ALL_RISKS_REQUESTED, FETCH_ALL_RISKS_SUCCESS, FETCH_ALL_RISKS_FAILURE } from './constants';
import { IActionsRisks, IRisk, IRisksState, IRisksStateRecord } from './types';

export const getRisksStateRecord = (state: IRisksState): IRisksStateRecord => {
  class RisksStateRecord extends Record(state) implements IRisksStateRecord {}
  return new RisksStateRecord();
};

const initialState = getRisksStateRecord({
  risks: List<IRisk>(),
  loading: false,
  error: '',
});

export default (state: IRisksStateRecord = initialState, action: IActionsRisks): IRisksStateRecord => {
  switch (action.type) {
    case FETCH_ALL_RISKS_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_RISKS_SUCCESS:
      const riskList: IRisk[] = [];
      action.payload.data.notes.forEach((data: IRisk) => {
        riskList.push({
          id: data.id,
          name: data.name,
        });
      });
      return state.clear().set('risks', List(riskList));
    case FETCH_ALL_RISKS_FAILURE:
      return state.clear().set('error', action.payload.error);
    default:
      return state;
  }
};