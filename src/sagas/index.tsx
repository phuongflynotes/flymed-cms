import { all, fork } from 'redux-saga/effects';

import {watchHome} from '@Root/components/Users/UserManagement/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchHome),
  ]);
}
