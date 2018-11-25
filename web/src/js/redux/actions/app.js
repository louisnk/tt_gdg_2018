import {
	GET_INITIAL_DATA,
	RECEIVED_INITIAL_DATA,
	RECEIVED_INITIAL_DATA_ERROR
} from '../constants';

export const getInitialData = () => ({
	type: GET_INITIAL_DATA,
})
export const receivedInitialData = ({ payload }) => ({
	type: RECEIVED_INITIAL_DATA,
	payload
})
export const receivedInitialDataError = ({ payload }) => ({
	type: RECEIVED_INITIAL_DATA_ERROR,
	payload
})

export default {
	getInitialData,
	receivedInitialData,
	receivedInitialDataError
};
