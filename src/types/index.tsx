import { Record } from 'immutable';

import { IRisksStateRecord } from '@Root/services/risks/types';

// Global state
export interface IGlobalState {
  risksState: IRisksStateRecord;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState {}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}