import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filtersReducer } from '../redux/filterSlice';
import { contactsReducer } from '../redux/contactsSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducers,
});