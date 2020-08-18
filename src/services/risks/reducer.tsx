import { List, Record } from 'immutable';

import { 
  FETCH_ALL_RISKS_REQUESTED, 
  FETCH_ALL_RISKS_SUCCESS, 
  FETCH_ALL_RISKS_FAILURE,
  FILTER_RISKS_REQUESTED,
  FILTER_RISKS_SUCCESS,
  FILTER_RISKS_FAILURE
} from './constants';
import { IActionsRisks, IRisk, IRisksState, IRisksStateRecord } from './types';

export const getRisksStateRecord = (state: IRisksState): IRisksStateRecord => {
  class RisksStateRecord extends Record(state) implements IRisksStateRecord {}
  return new RisksStateRecord();
};

const initialState = getRisksStateRecord({
  risks: List<IRisk>(),
  currentPage: 1,
  totalPages: 1,
  searchQuery: '',
  status: 'pending',
  loading: true,
  error: '',
});

export default (state: IRisksStateRecord = initialState, action: IActionsRisks): IRisksStateRecord => {
  switch (action.type) {
    case FILTER_RISKS_REQUESTED:
      return state.merge({'loading': true, ...action.payload});
    case FETCH_ALL_RISKS_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_RISKS_SUCCESS:
    case FILTER_RISKS_SUCCESS:
      const { data, currentPage, totalPages, searchQuery } = action.payload?.data;
      console.log('data====', action.payload)
      const riskList: IRisk[] = data;
      return state.merge({
        'loading': false,
        'currentPage': parseInt(currentPage),
        'totalPages': parseInt(totalPages),
        'searchQuery': searchQuery,
        'risks': List(riskList)
      });
    case FETCH_ALL_RISKS_FAILURE:
    case FILTER_RISKS_FAILURE:
      return state.clear().set('loading', false).set('error', action.payload.error);
    default:
      return state;
  }
};