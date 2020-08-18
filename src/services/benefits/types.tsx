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
export interface IBenefitsState {
  benefits: List<IBenefit>;
  currentPage: number,
  totalPages: number,
  searchQuery: string,
  status: string,
  loading: boolean;
  error: string;
}
export interface IBenefit {
  id: number;
  name: string;
  description: string;
  benefit_status: boolean;
}
export interface IBenefitsStateRecord extends Record<IBenefitsState>, IBenefitsState {}

// Benefits actions
export interface IActionFetchAllBenefitsRequested {
  type: typeof FETCH_ALL_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionFetchAllBenefitsSuccess {
  type: typeof FETCH_ALL_BENEFITS_SUCCESS;
  payload: {
    data: any,
    currentPage: number,
    totalPages: number,
  };
}
export interface IActionFetchAllBenefitsFailure {
  type: typeof FETCH_ALL_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Add
export interface IActionAddBenefitsRequested {
  type: typeof ADD_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionAddBenefitsSuccess {
  type: typeof ADD_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionAddBenefitsFailure {
  type: typeof ADD_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}

//Handle Edit
export interface IActionEditBenefitsRequested {
  type: typeof EDIT_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionEditBenefitsSuccess {
  type: typeof EDIT_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionEditBenefitsFailure {
  type: typeof EDIT_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}
//Handle Filter and Pagination
export interface IActionFilterBenefitsRequested {
  type: typeof FILTER_BENEFITS_REQUESTED;
  payload: any;
}
export interface IActionFilterBenefitsSuccess {
  type: typeof FILTER_BENEFITS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFilterBenefitsFailure {
  type: typeof FILTER_BENEFITS_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsBenefits
  = IActionFetchAllBenefitsRequested
   | IActionFetchAllBenefitsSuccess 
   | IActionFetchAllBenefitsFailure
   | IActionAddBenefitsRequested
   | IActionAddBenefitsSuccess
   | IActionAddBenefitsFailure
   | IActionFilterBenefitsRequested
   | IActionFilterBenefitsSuccess
   | IActionFilterBenefitsFailure;