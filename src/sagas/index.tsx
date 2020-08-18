import { all, fork } from 'redux-saga/effects';

import riskWatchers from '@Root/services/risks/sagas';
import benefitWatchers from '@Root/services/benefits/sagas';
import procedureWatchers from '@Root/services/procedures/sagas';

export default function* rootSaga() {
  yield all([
    fork(riskWatchers),
    fork(benefitWatchers),
    fork(procedureWatchers),
  ]);
}
