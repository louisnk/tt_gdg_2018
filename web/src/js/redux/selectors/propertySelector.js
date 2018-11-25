import { createSelector } from 'reselect';

const propertyStateSelector = state => state.properties;

export const propertySelector = createSelector(
	propertyStateSelector,
	(properties) => ({
		data: properties.data,
		saving: properties.saving
	})
)
