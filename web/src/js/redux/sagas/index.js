import { all } from 'redux-saga/effects'
import { propertiesSaga } from './properties';


export default function* sagas() {
  yield all([
    ...propertiesSaga,
  ]);
}
