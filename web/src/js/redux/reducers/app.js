import {
	GET_INITIAL_DATA,
	RECEIVED_INITIAL_DATA,
	RECEIVED_INITIAL_DATA_ERROR
} from '../constants';

export const INITIAL_STATE = {
	loading: true,
	hasInitialData: true,
	isLoggedIn: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_INITIAL_DATA:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}