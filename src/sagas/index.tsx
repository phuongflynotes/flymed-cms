import { all, fork } from 'redux-saga/effects';

import riskWatchers from '@Root/services/risks/sagas';
import procedureWatchers from '@Root/services/procedures/sagas';

export default function* rootSaga() {
  yield all([
    fork(riskWatchers),
    fork(procedureWatchers),
  ]);
}
