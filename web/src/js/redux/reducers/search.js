import {
	SEARCH_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES_ERROR
} from '../constants';

export const INITIAL_STATE = {
	loading: false,
	data: [],
	params: {
		beds: 0,
		baths: 0,
		parking: 0,
		minPrice: 0,
		maxPrice: 0,
		zone: 0,
	}
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SEARCH_PROPERTIES:
			return {
				...state,
				params: payload.params,
				loading: true
			};
		case RECEIVED_SEARCH_PROPERTIES:
			return {
				...state,
				data: payload.data,
				loading: false
			};
		case RECEIVED_SEARCH_PROPERTIES_ERROR:
			return {
				...state,
				data: [],
				loading: false,
				error: payload.error
			};
		default:
			return state;
	}
}
