import { all } from 'redux-saga/effects';

import risks from '@Root/services/risks/sagas';

export default function* rootSaga() {
  yield all([
    risks(),
  ]);
}
