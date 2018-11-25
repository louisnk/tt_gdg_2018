import {
	GET_PROPERTIES,
	GET_SEARCH_PROPERTIES,
	RECEIVED_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES,
	RECEIVED_PROPERTIES_ERROR,
	SAVE_SELECTED_PROPERTIES,
	RECEIVED_SAVE_PROPERTIES,
	RECEIVED_SAVE_PROPERTIES_ERROR,
} from '../constants';


export const INITIAL_STATE = {
	loading: false,
	saving: false,
	data: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_PROPERTIES:
		case GET_SEARCH_PROPERTIES:
			return {
				...state,
				loading: true
			};
		case RECEIVED_PROPERTIES:
			return {
				...state,
				data: [
					...state.data,
					...payload.data
				],
				loading: false
			};
		case RECEIVED_SEARCH_PROPERTIES:
			return {
				...state,
				data: payload.data,
				loading: false
			};
		case SAVE_SELECTED_PROPERTIES:
			return {
				...state,
				saving: true
			};
		case RECEIVED_SAVE_PROPERTIES:
			return {
				...state,
				saved: payload.saved,
				saving: false
			};
		case RECEIVED_PROPERTIES_ERROR:
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
