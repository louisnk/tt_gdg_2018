import {
	GET_PROPERTIES,
	RECEIVED_PROPERTIES,
	RECEIVED_PROPERTIES_ERROR,
	GET_SEARCH_PROPERTIES,
	RECEIVED_SEARCH_PROPERTIES,
	SAVE_SELECTED_PROPERTIES,
	RECEIVED_SAVE_PROPERTIES,
	RECEIVED_SAVE_PROPERTIES_ERROR,
} from '../constants';


export const getProperties = payload => ({
	type: GET_PROPERTIES,
	payload
})
export const receivedProperties = payload => ({
	type: RECEIVED_PROPERTIES,
	payload
})
export const getSearchProperties = payload => ({
	type: GET_SEARCH_PROPERTIES,
	payload
})
export const receivedSearchProperties = payload => ({
	type: RECEIVED_SEARCH_PROPERTIES,
	payload
})
export const receivedPropertiesError = payload => ({
	type: RECEIVED_PROPERTIES_ERROR,
	payload
})
export const saveSelectedProperties = payload => ({
	type: SAVE_SELECTED_PROPERTIES,
	payload
})
export const receivedSaveProperties = payload => ({
	type: RECEIVED_SAVE_PROPERTIES,
	payload
})
export const receivedSavePropertiesError = payload => ({
	type: RECEIVED_Save_PROPERTIES_ERROR,
	payload
})

export default {
	getProperties,
	receivedProperties,
	getSearchProperties,
	receivedSearchProperties,
	saveSelectedProperties,
	receivedSaveProperties,
	receivedSavePropertiesError,
	receivedPropertiesError,
};
