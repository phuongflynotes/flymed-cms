import { List, Record } from 'immutable';

import { 
  FETCH_ALL_PROCEDURES_REQUESTED,
  FETCH_ALL_PROCEDURES_SUCCESS,
  FETCH_ALL_PROCEDURES_FAILURE,
 } from './constants';

// Notes state
export interface IProceduresState {
  procedures: List<IProcedure>;
  loading: boolean;
  error: string;
}
export interface IProcedure {
  id: number;
  name: string;
  description: string;
  procedure_status: boolean;
}
export interface IProceduresStateRecord extends Record<IProceduresState>, IProceduresState {}

// Procedures actions
export interface IActionFetchAllProceduresRequested {
  type: typeof FETCH_ALL_PROCEDURES_REQUESTED;
  payload: {};
}
export interface IActionFetchAllProceduresSuccess {
  type: typeof FETCH_ALL_PROCEDURES_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFetchAllProceduresFailure {
  type: typeof FETCH_ALL_PROCEDURES_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsProcedures
  = IActionFetchAllProceduresRequested
   | IActionFetchAllProceduresSuccess 
   | IActionFetchAllProceduresFailure;