import { Record } from 'immutable';
import { RouterState } from 'connected-react-router';

import { IRisksStateRecord } from '@Root/services/risks/types';
import { IBenefitsStateRecord } from '@Root/services/benefits/types';
import { IProceduresStateRecord } from '@Root/services/procedures/types';
import { IModalState } from '@Root/services/modalMain/types';
import { IWaitingState } from '@Root/services/waiting/types';

// Global state
export interface IGlobalState {
  router: RouterState;
  risksState: IRisksStateRecord;
  benefitsState: IBenefitsStateRecord;
  proceduresState: IProceduresStateRecord;
  modalMainState: IModalState;
  waitingState: IWaitingState;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState {}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}

export interface IModalAsyncCall {
  SHOW: string;
  HIDE: string;
}

export interface IWaitingAsyncCall {
  SHOW: string;
  HIDE: string;
}