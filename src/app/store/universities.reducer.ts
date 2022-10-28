import { createReducer, on } from '@ngrx/store';
import { loadUniversities } from './universities.actions';

export const initialState: { universities: Array<any> } = {
  universities: [],
};

export const universitiesReducer = createReducer(
  initialState,
  on(loadUniversities, (state) => state)
);
