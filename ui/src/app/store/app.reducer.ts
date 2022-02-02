import { createReducer, on } from '@ngrx/store'
import { State } from '.';
import { AppComponentActions } from '.';

const initialState: State = {
    roster: [],
    contact: {}
}

export const appReducer = createReducer<State>(
    initialState,

    on(AppComponentActions.getRosterSuccess, (state, action): State => {
        return {
            ...state,
            roster: action.roster
        }
    }),

    on(AppComponentActions.getStudentContactSuccess, (state, action): State => {
        return {
            ...state,
            contact: {
                ...state.contact,
                [action.username]: action.contact
            }
        }
    })
)