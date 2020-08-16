import { List, Record } from 'immutable';

import { FETCH_ALL_PROCEDURES_REQUESTED, FETCH_ALL_PROCEDURES_SUCCESS, FETCH_ALL_PROCEDURES_FAILURE } from './constants';
import { IActionsProcedures, IProcedure, IProceduresState, IProceduresStateRecord } from './types';

export const getProceduresStateRecord = (state: IProceduresState): IProceduresStateRecord => {
  class ProceduresStateRecord extends Record(state) implements IProceduresStateRecord {}
  return new ProceduresStateRecord();
};

const initialState = getProceduresStateRecord({
  procedures: List<IProcedure>(),
  loading: false,
  error: '',
});

export default (state: IProceduresStateRecord = initialState, action: IActionsProcedures): IProceduresStateRecord => {
  switch (action.type) {
    case FETCH_ALL_PROCEDURES_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_PROCEDURES_SUCCESS:
      const procedureList: IProcedure[] = [action.payload.data];
      return state.clear().set('procedures', List(procedureList));
    case FETCH_ALL_PROCEDURES_FAILURE:
      return state.clear().set('error', action.payload.error);
    default:
      return state;
  }
};