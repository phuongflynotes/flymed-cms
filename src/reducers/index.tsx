import { combineReducers } from 'redux';

import risksReducer from '@Root/services/risks/reducer';
import { IGlobalState } from '@Root/types';

export default () => combineReducers<IGlobalState>({
  risksState: risksReducer,
});