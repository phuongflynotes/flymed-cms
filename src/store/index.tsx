import { combineReducers } from 'redux';

import riskReducer from '@Root/services/risks/reducer';
import procedureReducer from '@Root/services/procedures/reducer';
import {IRisksState} from '@Root/services/risks/types';
import {IProceduresState} from '@Root/services/procedures/types';

export const rootReducer = combineReducers({
  risksState: riskReducer,
  proceduresState: procedureReducer,
});

export interface ApplicationState {
    dataRisk: IRisksState;
    dataProcedure: IProceduresState
}
