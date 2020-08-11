import { List, Record } from 'immutable';

import { 
  FETCH_ALL_RISKS_REQUESTED,
  FETCH_ALL_RISKS_SUCCESS,
  FETCH_ALL_RISKS_FAILURE,
 } from './constants';

// Notes state
export interface IRisksState {
  risks: List<IRisk>;
  loading: boolean;
  error: string;
}
export interface IRisk {
  id: number;
  name: string;
}
export interface IRisksStateRecord extends Record<IRisksState>, IRisksState {}

// Risks actions
export interface IActionFetchAllRisksRequested {
  type: typeof FETCH_ALL_RISKS_REQUESTED;
  payload: {};
}
export interface IActionFetchAllRisksSuccess {
  type: typeof FETCH_ALL_RISKS_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFetchAllRisksFailure {
  type: typeof FETCH_ALL_RISKS_FAILURE;
  payload: {
    error: string,
  };
}

// export interface IActionFetchNoteRequested {
//   type: typeof FETCH_NOTE_REQUESTED;
//   payload: {
//     id: number,
//   };
// }
// export interface IActionFetchNoteSuccess {
//   type: typeof FETCH_NOTE_SUCCESS;
//   payload: {
//     data: any,
//   };
// }
// export interface IActionFetchNoteFailure {
//   type: typeof FETCH_NOTE_FAILURE;
//   payload: {
//     error: string,
//   };
// }

// export interface IActionAddNoteRequested {
//   type: typeof ADD_NOTE_REQUESTED;
//   payload: {
//     content: string,
//   };
// }
// export interface IActionAddNoteSuccess {
//   type: typeof ADD_NOTE_SUCCESS;
//   payload: {
//     data: any,
//   };
// }
// export interface IActionAddNoteFailure {
//   type: typeof ADD_NOTE_FAILURE;
//   payload: {
//     error: string,
//   };
// }

// export interface IActionEditNoteRequested {
//   type: typeof EDIT_NOTE_REQUESTED;
//   payload: {
//     id: number,
//     content: string,
//   };
// }
// export interface IActionEditNoteSuccess {
//   type: typeof EDIT_NOTE_SUCCESS;
//   payload: {
//     data: any,
//   };
// }
// export interface IActionEditNoteFailure {
//   type: typeof EDIT_NOTE_FAILURE;
//   payload: {
//     error: string,
//   };
// }

// export interface IActionRemoveNoteRequested {
//   type: typeof REMOVE_NOTE_REQUESTED;
//   payload: {
//     id: number,
//   };
// }
// export interface IActionRemoveNoteSuccess {
//   type: typeof REMOVE_NOTE_SUCCESS;
//   payload: {
//     data: any,
//   };
// }
// export interface IActionRemoveNoteFailure {
//   type: typeof REMOVE_NOTE_FAILURE;
//   payload: {
//     error: string,
//   };
// }

export type IActionsRisks
  = IActionFetchAllRisksRequested
   | IActionFetchAllRisksSuccess 
   | IActionFetchAllRisksFailure;