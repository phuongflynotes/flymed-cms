import {
  FETCH_ALL_RISKS_REQUESTED,
  ADD_RISKS_REQUESTED,
  EDIT_RISKS_REQUESTED,
  FILTER_RISKS_REQUESTED
} from './constants';
import {
  IActionFetchAllRisksRequested,
  IActionAddRisksRequested,
  IActionEditRisksRequested,
  IActionFilterRisksRequested
} from './types';

export const fetchAllRisks = (payload: IActionFetchAllRisksRequested['payload']): IActionFetchAllRisksRequested => ({
  type: FETCH_ALL_RISKS_REQUESTED,
  payload,
});

export const handleAddRisks = (payload: IActionAddRisksRequested['payload']): IActionAddRisksRequested => ({
  type: ADD_RISKS_REQUESTED,
  payload,
});

export const handleEditRisks = (payload: IActionEditRisksRequested['payload']): IActionEditRisksRequested => ({
  type: EDIT_RISKS_REQUESTED,
  payload,
});

export const handleFilter = (payload: IActionFilterRisksRequested['payload']): IActionFilterRisksRequested => ({
  type: FILTER_RISKS_REQUESTED,
  payload,
});