export interface Subject {
    id: number;
    name: string;
    type: string;
    category: string;
    credits: number;
    lecturername: string;
    year: string;
}

export interface Lecturer {
    id: number;
    fname: string;
    lname: string;
    email: string;
    phonenumber: number;
    gender: string;
    subject: string;
}
