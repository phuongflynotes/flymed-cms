import { Record } from 'immutable';

import { IRisksStateRecord } from '@Root/services/risks/types';
import { IProceduresStateRecord } from '@Root/services/procedures/types';

// Global state
export interface IGlobalState {
  risksState: IRisksStateRecord;
  proceduresState: IProceduresStateRecord;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState {}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}