import { combineReducers } from 'redux';

import riskReducer from '@Root/services/risks/reducer';
import {IRisksState} from '@Root/services/risks/types';

export const rootReducer = combineReducers({
  dataRisks: riskReducer,
});

export interface ApplicationState {
    dataHome: IRisksState;
}
