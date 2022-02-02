export interface Student {
    firstName: string;
    lastName: string;
    username: string;
    school: string;
    grade: number;
    contact?: StudentContact;
}

export interface StudentContact{
    email: string;
    phoneNumber: string;
}