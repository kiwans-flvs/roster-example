import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store"
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { State } from "."
import { RosterService } from "../roster.service";
import { AppComponentActions } from ".";
import { StudentService } from "../student.service";
import { getRoster } from "./app.selectors";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private rosterService: RosterService,
        private studentService: StudentService
    ){}

    getRoster$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppComponentActions.fetchRoster),
            mergeMap(() => {
                return this.rosterService.getRoster().pipe(
                    map((roster) => {
                        return AppComponentActions.getRosterSuccess({ roster })
                    }),
                    catchError(error => of(AppComponentActions.getRosterFailure({ error })))
                )
            })
        )
    });

    fetchStudentContact$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppComponentActions.fetchStudentContact),
            mergeMap((action) => {
                return this.studentService.getStudentContact(action.username).pipe(
                    map((studentContact) => {
                        return AppComponentActions.getStudentContactSuccess({ contact: studentContact, username: action.username })
                    }),
                    catchError(error => of(AppComponentActions.getStudentContactFailure({ error })))
                )
            })
        )
    })
}