import {
  FETCH_ALL_BENEFITS_REQUESTED,
  ADD_BENEFITS_REQUESTED,
  EDIT_BENEFITS_REQUESTED,
  FILTER_BENEFITS_REQUESTED
} from './constants';
import {
  IActionFetchAllBenefitsRequested,
  IActionAddBenefitsRequested,
  IActionEditBenefitsRequested,
  IActionFilterBenefitsRequested
} from './types';

export const fetchAllBenefits = (payload: IActionFetchAllBenefitsRequested['payload']): IActionFetchAllBenefitsRequested => ({
  type: FETCH_ALL_BENEFITS_REQUESTED,
  payload,
});

export const handleAddBenefits = (payload: IActionAddBenefitsRequested['payload']): IActionAddBenefitsRequested => ({
  type: ADD_BENEFITS_REQUESTED,
  payload,
});

export const handleEditBenefits = (payload: IActionEditBenefitsRequested['payload']): IActionEditBenefitsRequested => ({
  type: EDIT_BENEFITS_REQUESTED,
  payload,
});

export const handleFilter = (payload: IActionFilterBenefitsRequested['payload']): IActionFilterBenefitsRequested => ({
  type: FILTER_BENEFITS_REQUESTED,
  payload,
});