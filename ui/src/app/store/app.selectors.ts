import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from ".";

const getAppFeatureState = createFeatureSelector<State>('app');

export const getRoster = createSelector(
    getAppFeatureState,
    state => state.roster
)

export const getStudent = (username) => createSelector(
    getAppFeatureState,
    state => state.roster.find(student => student.username === username)
)

export const getStudentContact = (username) => createSelector(
    getAppFeatureState,
    state => state.contact[username]
)