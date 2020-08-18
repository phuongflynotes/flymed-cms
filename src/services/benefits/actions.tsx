import {
  FETCH_ALL_BENEFITS_REQUESTED,
  ADD_BENEFITS_REQUESTED,
  EDIT_BENEFITS_REQUESTED,
  FILTER_BENEFITS_REQUESTED
} from './constants';
import {
  IActionFetchAllProceduresRequested,
  IActionAddProceduresRequested,
  IActionEditProceduresRequested,
  IActionFilterProceduresRequested
} from './types';

export const fetchAllProcedures = (payload: IActionFetchAllProceduresRequested['payload']): IActionFetchAllProceduresRequested => ({
  type: FETCH_ALL_BENEFITS_REQUESTED,
  payload,
});

export const handleAddProcedures = (payload: IActionAddProceduresRequested['payload']): IActionAddProceduresRequested => ({
  type: ADD_BENEFITS_REQUESTED,
  payload,
});

export const handleEditProcedures = (payload: IActionEditProceduresRequested['payload']): IActionEditProceduresRequested => ({
  type: EDIT_BENEFITS_REQUESTED,
  payload,
});

export const handleFilter = (payload: IActionFilterProceduresRequested['payload']): IActionFilterProceduresRequested => ({
  type: FILTER_BENEFITS_REQUESTED,
  payload,
});