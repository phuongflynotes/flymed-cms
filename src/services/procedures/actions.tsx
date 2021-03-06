import {
  FETCH_ALL_PROCEDURES_REQUESTED,
  ADD_PROCEDURES_REQUESTED,
  EDIT_PROCEDURES_REQUESTED,
  FILTER_PROCEDURES_REQUESTED
} from './constants';
import {
  IActionFetchAllProceduresRequested,
  IActionAddProceduresRequested,
  IActionEditProceduresRequested,
  IActionFilterProceduresRequested
} from './types';

export const fetchAllProcedures = (payload: IActionFetchAllProceduresRequested['payload']): IActionFetchAllProceduresRequested => ({
  type: FETCH_ALL_PROCEDURES_REQUESTED,
  payload,
});

export const handleAddProcedures = (payload: IActionAddProceduresRequested['payload']): IActionAddProceduresRequested => ({
  type: ADD_PROCEDURES_REQUESTED,
  payload,
});

export const handleEditProcedures = (payload: IActionEditProceduresRequested['payload']): IActionEditProceduresRequested => ({
  type: EDIT_PROCEDURES_REQUESTED,
  payload,
});

export const handleFilter = (payload: IActionFilterProceduresRequested['payload']): IActionFilterProceduresRequested => ({
  type: FILTER_PROCEDURES_REQUESTED,
  payload,
});