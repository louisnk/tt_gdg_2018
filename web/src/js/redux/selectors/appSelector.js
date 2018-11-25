import { createSelector } from 'reselect';

export const initialDataSelector = state => state.app;

export const appSelector = state => initialDataSelector(state);
