import { delay } from 'redux-saga'
import { call, select, put, fork, takeLatest } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import { orderBy } from 'lodash';

import {
	GET_PROPERTIES,
	GET_SEARCH_PROPERTIES,
	SAVE_SELECTED_PROPERTIES,
	FORM_SEARCH_FILTER,
	FORM_PROPERTY_LIST,
} from '../constants';
import {
	receivedProperties,
	receivedSearchProperties,
	receivedSaveProperties,
	receivedPropertiesError,
} from '../actions/properties';

import stubData from '../../../../__mocks__/properties';

export function* getProperties({ payload }) {
	try {
		let data = stubData;

		if (payload && payload.pageSize) {
			data = data.slice(0, payload.pageSize);
		}

	  yield put(receivedProperties({ data }));
	} catch (e) {
		console.error(e);
		yield put(receivedPropertiesError(e));
	}
}

export function* searchProperties({ payload }) {
	try {
		let data = stubData;
		const filters = yield select(getFormValues(FORM_SEARCH_FILTER));

		let {
			minPrice,
			maxPrice,
			currency,
			location
		} = filters || {};

		console.log('searchig...', location)
		currency = currency || 'TTD';

		if (minPrice) {
			console.log("minPrice", minPrice)
			data = stubData.filter(({ propertyDetail: { price }}) =>
				(price.amount >= minPrice) &&
				(price.currency === currency));
		}

		if (maxPrice) {
			console.log("maxPrice", maxPrice)
			data = data.filter(({ propertyDetail: { price }}) =>
				(price.amount <= maxPrice) &&
				(price.currency === currency));
		}

		if (location) {
			console.log("location", location)
			data = data.filter(({ propertyDetail }) =>
				location === propertyDetail.location)
		}

		// if (data.length > 100) {
		// 	console.log("borked")
		// 	data = data.slice(0,100);
		// }

		data = orderBy(
			data,
			({ propertyDetail: { availability }}) => new Date(availability),
			'desc'
		);

	  yield put(receivedSearchProperties({ data }));
	} catch (e) {
		console.error(e);
		yield put(receivedPropertiesError(e));
	}
}

export function* saveSelectedProperties() {
	try {
		const toSave = yield select(getFormValues(FORM_PROPERTY_LIST));

		// console.log(localStorage, toSave)
		window.localStorage.setItem(FORM_PROPERTY_LIST, JSON.stringify(toSave));

		yield call(delay, 1000);
		yield put(receivedSaveProperties({ saved: toSave.property }))

	} catch (e) {
		console.error("Failed to save selected: ", e);
		yield put(receivedPropertiesError(e));
	}
}

function* watchProperties() {
  yield takeLatest(GET_PROPERTIES, getProperties);
  yield takeLatest(GET_SEARCH_PROPERTIES, searchProperties);
  yield takeLatest(SAVE_SELECTED_PROPERTIES, saveSelectedProperties);
}

export const propertiesSaga = [
  fork(watchProperties),
];
