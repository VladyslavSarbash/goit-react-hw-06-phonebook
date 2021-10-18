import { createAction } from '@reduxjs/toolkit';

export const newContactAction = createAction('new-contacts');
export const filterAction = createAction('filter');
export const deleteAction = createAction('delete');
