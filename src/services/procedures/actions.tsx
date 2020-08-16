import {
  FETCH_ALL_PROCEDURES_REQUESTED
} from './constants';
import {
  IActionFetchAllProceduresRequested,
} from './types';

export const fetchAllProcedures = (payload: IActionFetchAllProceduresRequested['payload']): IActionFetchAllProceduresRequested => ({
  type: FETCH_ALL_PROCEDURES_REQUESTED,
  payload,
});

