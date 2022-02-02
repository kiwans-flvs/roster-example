import { createAction, props } from "@ngrx/store";
import { Student, StudentContact } from "../interfaces";

export const fetchRoster = createAction(
    '[Application] Fetch Roster'
)

export const getRosterSuccess = createAction(
    '[Application] Get Roster Success',
    props<{roster: Student[]}>()
)

export const getRosterFailure = createAction(
    '[Application] Get Roster Failure',
    props<{error: any}>()
)

export const fetchStudentContact = createAction(
    '[Application] Fetch Student Contact',
    props<{username: string}>()
)

export const getStudentContactSuccess = createAction(
    '[Application] Get Student Contact Success',
    props<{contact: StudentContact, username: string}>()
)

export const getStudentContactFailure = createAction(
    '[Application] Get Student Contact Failure',
    props<{error: any}>()
)