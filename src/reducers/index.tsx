import { combineReducers } from 'redux';

import risksReducer from '@Root/services/risks/reducer';
import procerduresReducer from '@Root/services/procedures/reducer';
import { IGlobalState } from '@Root/types';

export default () => combineReducers<IGlobalState>({
  risksState: risksReducer,
  proceduresState: procerduresReducer,
});