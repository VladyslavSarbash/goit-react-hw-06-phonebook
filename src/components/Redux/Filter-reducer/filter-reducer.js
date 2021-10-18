import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from '../action';

const filterReducer = createReducer('', {
  [filterAction]: (state, action) => action.payload,
});

export default filterReducer;
