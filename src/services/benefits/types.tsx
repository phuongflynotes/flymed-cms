import { List, Record } from 'immutable';

import { 
  FETCH_ALL_BENEFITS_REQUESTED,
  FETCH_ALL_BENEFITS_SUCCESS,
  FETCH_ALL_BENEFITS_FAILURE,
  ADD_BENEFITS_REQUESTED,
  ADD_BENEFITS_SUCCESS,
  ADD_BENEFITS_FAILURE,
  EDIT_BENEFITS_REQUESTED,
  EDIT_BENEFITS_SUCCESS,
  EDIT_BENEFITS_FAILURE,
  FILTER_BENEFITS_REQUESTED,
  FILTER_BENEFITS_SUCCESS,
  FILTER_BENEFITS_FAILURE,
 } from './constants';

// Notes state
export interface IProceduresState {
  procedures: List<IProcedure>;
  currentPage: number,
  totalPages: number,
  searchQuery: string,
  status: string,
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
  type: typeof FETCH_ALL_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionFetchAllProceduresSuccess {
  type: typeof FETCH_ALL_BENEFITS_SUCCESS;
  payload: {
    data: any,
    currentPage: number,
    totalPages: number,
  };
}
export interface IActionFetchAllProceduresFailure {
  type: typeof FETCH_ALL_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Add
export interface IActionAddProceduresRequested {
  type: typeof ADD_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionAddProceduresSuccess {
  type: typeof ADD_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionAddProceduresFailure {
  type: typeof ADD_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}

//Handle Edit
export interface IActionEditProceduresRequested {
  type: typeof EDIT_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionEditProceduresSuccess {
  type: typeof EDIT_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionEditProceduresFailure {
  type: typeof EDIT_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Filter and Pagination
export interface IActionFilterProceduresRequested {
  type: typeof FILTER_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionFilterProceduresSuccess {
  type: typeof FILTER_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFilterProceduresFailure {
  type: typeof FILTER_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsProcedures
  = IActionFetchAllProceduresRequested
   | IActionFetchAllProceduresSuccess 
   | IActionFetchAllProceduresFailure
   | IActionAddProceduresRequested
   | IActionAddProceduresSuccess
   | IActionAddProceduresFailure
   | IActionFilterProceduresRequested
   | IActionFilterProceduresSuccess
   | IActionFilterProceduresFailure;