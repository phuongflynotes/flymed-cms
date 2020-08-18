import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import riskReducer from '@Root/services/risks/reducer';
import benefitReducer from '@Root/services/benefits/reducer';
import procedureReducer from '@Root/services/procedures/reducer';
import modalMainReducer from '@Root/services/modalMain/reducer';
import waitingReducer from '@Root/services/waiting/reducer';
import {IGlobalState} from '@Root/types';

export default (history: History) => combineReducers<IGlobalState>({
  router: connectRouter(history),
  risksState: riskReducer,
  benefitsState: benefitReducer,
  proceduresState: procedureReducer,
  modalMainState: modalMainReducer,
  waitingState: waitingReducer,
});