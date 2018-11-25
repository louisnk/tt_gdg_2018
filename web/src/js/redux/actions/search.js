import {
	SEARCH_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES_ERROR
} from '../constants';

export const getSearchProperties = ({ payload }) => ({
	type: SEARCH_PROPERTIES,
	payload
})
export const receivedSearchProperties = ({ payload }) => ({
	type: RECEIVED_SEARCH_PROPERTIES,
	payload
})
export const receivedSearchPropertiesError = ({ payload }) => ({
	type: RECEIVED_SEARCH_PROPERTIES_ERROR,
	payload
})

export default {
	getSearchProperties,
	receivedSearchProperties,
	receivedSearchPropertiesError
};
