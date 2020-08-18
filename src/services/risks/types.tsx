import { List, Record } from 'immutable';

import { 
  FETCH_ALL_RISKS_REQUESTED,
  FETCH_ALL_RISKS_SUCCESS,
  FETCH_ALL_RISKS_FAILURE,
  ADD_RISKS_REQUESTED,
  ADD_RISKS_SUCCESS,
  ADD_RISKS_FAILURE,
  EDIT_RISKS_REQUESTED,
  EDIT_RISKS_SUCCESS,
  EDIT_RISKS_FAILURE,
  FILTER_RISKS_REQUESTED,
  FILTER_RISKS_SUCCESS,
  FILTER_RISKS_FAILURE,
 } from './constants';

// Notes state
export interface IRisksState {
  risks: List<IRisk>;
  currentPage: number,
  totalPages: number,
  searchQuery: string,
  status: string,
  loading: boolean;
  error: string;
}
export interface IRisk {
  id: number;
  name: string;
  description: string;
  risk_status: boolean;
}
export interface IRisksStateRecord extends Record<IRisksState>, IRisksState {}

// Risks actions
export interface IActionFetchAllRisksRequested {
  type: typeof FETCH_ALL_RISKS_REQUESTED;
  payload: any;
}
export interface IActionFetchAllRisksSuccess {
  type: typeof FETCH_ALL_RISKS_SUCCESS;
  payload: {
    data: any,
    currentPage: number,
    totalPages: number,
  };
}
export interface IActionFetchAllRisksFailure {
  type: typeof FETCH_ALL_RISKS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Add
export interface IActionAddRisksRequested {
  type: typeof ADD_RISKS_REQUESTED;
  payload: any;
}
export interface IActionAddRisksSuccess {
  type: typeof ADD_RISKS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionAddRisksFailure {
  type: typeof ADD_RISKS_FAILURE;
  payload: {
    error: string,
  };
}

//Handle Edit
export interface IActionEditRisksRequested {
  type: typeof EDIT_RISKS_REQUESTED;
  payload: any;
}
export interface IActionEditRisksSuccess {
  type: typeof EDIT_RISKS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionEditRisksFailure {
  type: typeof EDIT_RISKS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Filter and Pagination
export interface IActionFilterRisksRequested {
  type: typeof FILTER_RISKS_REQUESTED;
  payload: any;
}
export interface IActionFilterRisksSuccess {
  type: typeof FILTER_RISKS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFilterRisksFailure {
  type: typeof FILTER_RISKS_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsRisks
  = IActionFetchAllRisksRequested
   | IActionFetchAllRisksSuccess 
   | IActionFetchAllRisksFailure
   | IActionAddRisksRequested
   | IActionAddRisksSuccess
   | IActionAddRisksFailure
   | IActionFilterRisksRequested
   | IActionFilterRisksSuccess
   | IActionFilterRisksFailure;