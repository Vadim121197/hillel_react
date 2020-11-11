import {createSelector} from '@reduxjs/toolkit';

export const getFormValues = createSelector(
    (state, formName) => state.form[formName].values,
    formValues => formValues
)

export const getForms = createSelector(
    (state, formName) => state.form[formName],
    formValues => formValues
)