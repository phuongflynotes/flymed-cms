import { List, Record } from 'immutable';

import { 
  FETCH_ALL_PROCEDURES_REQUESTED, 
  FETCH_ALL_PROCEDURES_SUCCESS, 
  FETCH_ALL_PROCEDURES_FAILURE,
  FILTER_PROCEDURES_REQUESTED,
  FILTER_PROCEDURES_SUCCESS,
  FILTER_PROCEDURES_FAILURE
} from './constants';
import { IActionsProcedures, IProcedure, IProceduresState, IProceduresStateRecord } from './types';

export const getProceduresStateRecord = (state: IProceduresState): IProceduresStateRecord => {
  class ProceduresStateRecord extends Record(state) implements IProceduresStateRecord {}
  return new ProceduresStateRecord();
};

const initialState = getProceduresStateRecord({
  procedures: List<IProcedure>(),
  currentPage: 1,
  totalPages: 1,
  searchQuery: '',
  status: 'pending',
  loading: true,
  error: '',
});

export default (state: IProceduresStateRecord = initialState, action: IActionsProcedures): IProceduresStateRecord => {
  switch (action.type) {
    case FILTER_PROCEDURES_REQUESTED:
      return state.merge({'loading': true, ...action.payload});
    case FETCH_ALL_PROCEDURES_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_PROCEDURES_SUCCESS:
    case FILTER_PROCEDURES_SUCCESS:
      const { data, currentPage, totalPages, searchQuery } = action.payload?.data;
      const procedureList: IProcedure[] = data;
      return state.merge({
        'loading': false,
        'currentPage': parseInt(currentPage),
        'totalPages': parseInt(totalPages),
        'searchQuery': searchQuery,
        'procedures': List(procedureList)
      });
    case FETCH_ALL_PROCEDURES_FAILURE:
    case FILTER_PROCEDURES_FAILURE:
      return state.clear().set('loading', false).set('error', action.payload.error);
    default:
      return state;
  }
};