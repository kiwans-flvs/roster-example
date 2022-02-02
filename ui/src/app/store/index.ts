import { Student, StudentContact } from "../interfaces";
import * as AppComponentActions from "./app.actions";

export interface State {
    roster: Student[],
    contact: {[username: string]: StudentContact}
}

export { AppComponentActions };