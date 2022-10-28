import { createAction, props } from '@ngrx/store';

export const loadUniversities = createAction(
  '[App Component] load universities',
  props<any>()
);
