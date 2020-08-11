import {
  FETCH_ALL_RISKS_REQUESTED
} from './constants';
import {
  IActionFetchAllRisksRequested,
} from './types';

export const fetchAllRisks = (payload: IActionFetchAllRisksRequested['payload']): IActionFetchAllRisksRequested => ({
  type: FETCH_ALL_RISKS_REQUESTED,
  payload,
});

// export const fetchNote = (payload: IActionFetchNoteRequested['payload']): IActionFetchNoteRequested => ({
//   type: FETCH_NOTE_REQUESTED,
//   payload,
// });

// export const editNote = (payload: IActionEditNoteRequested['payload']): IActionEditNoteRequested => ({
//   type: EDIT_NOTE_REQUESTED,
//   payload,
// });

// export const addNote = (payload: IActionAddNoteRequested['payload']): IActionAddNoteRequested => ({
//   type: ADD_NOTE_REQUESTED,
//   payload,
// });

// export const removeNote = (payload: IActionRemoveNoteRequested['payload']): IActionRemoveNoteRequested => ({
//   type: REMOVE_NOTE_REQUESTED,
//   payload,
// });