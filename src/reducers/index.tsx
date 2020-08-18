import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import riskReducer from '@Root/services/risks/reducer';
import procedureReducer from '@Root/services/procedures/reducer';
import modalMainReducer from '@Root/services/modalMain/reducer';
import waitingReducer from '@Root/services/waiting/reducer';
import {IRisksState} from '@Root/services/risks/types';
import {IProceduresState} from '@Root/services/procedures/types';
import {IGlobalState} from '@Root/types';

export default (history: History) => combineReducers<IGlobalState>({
  router: connectRouter(history),
  risksState: riskReducer,
  proceduresState: procedureReducer,
  modalMainState: modalMainReducer,
  waitingState: waitingReducer,
});

export interface ApplicationState {
    dataRisk: IRisksState;
    dataProcedure: IProceduresState
}
