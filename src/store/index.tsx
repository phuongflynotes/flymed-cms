import { combineReducers } from 'redux';

import homeReducer from '../components/Users/UserManagement/reducer';
import {IUserState} from '../components/Users/UserManagement/types';

export const rootReducer = combineReducers({
  dataHome: homeReducer,
});

export interface ApplicationState {
    dataHome: IUserState;
}
